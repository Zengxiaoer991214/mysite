<template>
    <div>
        
        <v-flex>
            <v-row justify="center">
                <v-col cols="12" sm="10">
                    <v-text-field class="pb-2" label="文章标题" hide-details="auto" v-model="title"></v-text-field>
                    <!-- <markdwon v-if="mark"></markdwon> -->
                    <mavon-editor
                        v-if="mark"
                        v-model="content"
                        ref="md"
                        @imgAdd="imgAdd"
                        @change="change"
                        style="min-height: 600px"
                    />
                </v-col>
                
            </v-row>
            <v-row justify="end">
                <v-col cols="2">
                    <v-btn color="error"  class="ml-2 mr-2 justify-end">保存草稿</v-btn>
                    <v-btn color="primary" class="justify-end" @click="sheet = !sheet"  >发送</v-btn>
                </v-col>
            </v-row>
        </v-flex>
 
     <div class="text-center">
    <v-bottom-sheet v-model="sheet" persistent >
      
      <v-sheet class="text-center" height="auto">
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="submit"
        >发送！</v-btn>
        <div class="py-3">
         <v-row>
           <v-col
            cols="12"
            sm="3"
           >
           <h3>选择日期</h3>
            <template>
              <v-row justify="center">
                <v-date-picker v-model="time_picker"></v-date-picker>
              </v-row>
            </template>
           </v-col>
          <v-col
            cols="12"
            sm="9"
            >
            <h3>选择封面图片</h3>
            <template>
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </template>


          </v-col>


         </v-row>

        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
    </div>
</template>
<style scoped>
markdown{
    width:100%;
}


</style>
<script>
import markdwon from '../../components/markdown'
export default {
    data: () => ({
        time_picker:'',
        sheet: false,
        title:'',
        content: "",
        html: "",
        configs: {},
        fileList:[],
        imageUrl: '',
        token: {},
        domain: 'https://up-z2.qiniup.com',
        qiniuaddr: 'pic.zengxiaoer.net',
        picker: new Date().toISOString().substr(0, 10),
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),
    components:{
        markdwon
    },
    computed:{
        mark(){
            return !this.sheet;
        }
    },
    methods:{
        imgAdd(pos, $file) {
      const config = {
        headers: {'Content-Type': 'multipart/form-data'
        },
      };
      var formdata = new FormData();
      formdata.append("file", $file);
      console.log($file)
      console.log(pos)

      let filetype = ''
      if ($file.type === 'image/png') {
        filetype = 'png'
      } else {
        filetype = 'jpg'
      }
      // 重命名要上传的文件
      const that = this;
      const keyname = (new Date()).getTime() + Math.floor(Math.random() * 100) + '.' + filetype;
      this.$axios.get('/img.php').then(res => {
        //console.log(res)
        const formdata = new FormData()
        formdata.append('file', $file)
        formdata.append('token', res.data)
        formdata.append('key', keyname)
        console.log(formdata);
        // 获取到凭证之后再将文件上传到七牛云空间
        this.$axios.post(this.domain, formdata, config).then(res => {
          this.imageUrl = 'https://' + this.qiniuaddr + '/' + res.data.key
          console.log(this.imageUrl)
          that.$refs.md.$img2Url(pos, this.imageUrl);
        })
      })
    },
    upqiniu (req) {
      const that  = this
      console.log(req)
      const config = {
        headers: {'Content-Type': 'multipart/form-data'
        },
      }
      let filetype = ''
      if (req.file.type === 'image/png') {
        filetype = 'png'
      } else {
        filetype = 'jpg'
      }
      // 重命名要上传的文件
      const keyname = (new Date()).getTime() + Math.floor(Math.random() * 100) + '.' + filetype
      // 从后端获取上传凭证token
      this.$axios.get('/img.php').then(res => {
        //console.log(res)
        const formdata = new FormData()
        formdata.append('file', req.file)
        formdata.append('token', res.data)
        formdata.append('key', keyname)
        // 获取到凭证之后再将文件上传到七牛云空间
        this.$axios.post(this.domain, formdata, config).then(res => {
          this.imageUrl = 'https://' + this.qiniuaddr + '/' + res.data.key
          //that.imageUrl =this.imageUrl
          that.sendMess(this.imageUrl)
          console.log(this.imageUrl)
        })
      })
    },
    
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit() {
        this.sheet = !this.sheet
        // console.log(this.content);
        // console.log(this.html);
        // this.$message.success("提交成功！");
        this.post_to();
    },
    post_to(){
      let that = this;
      // let head_mean = this.html.replace(".*?<body.*?>(.*?)<\\/body>",'').replace("</?[a-zA-Z]+[^><]*>",'')
      // console.log(head_mean)
      // console.log(this.title)
      // console.log(this.time)
      // console.log(this.head_img)
      // console.log(this.time_picker)
      this.$axios.post('/blog/blog.php',{
        context:that.html,
        title:that.title,
        time:that.time_picker,
        head_img:'',
      }).then((res)=>{
        console.log(res.data)
      })
      this.html='';
      this.content='';
      this.title='';
    }
    
    }
}
</script>