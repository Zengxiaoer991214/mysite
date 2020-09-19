<template>
  <div>
    <v-parallax class="div_" src="https://pic.zengxiaoer.net/mmexport1598715131365.jpg">
    
    <div class="up_" @click="file_up">
      <!-- <b-card title="上传图片" sub-title="切勿上传色情、涉政图片"> -->
        <Rui_upload @func='getimgUrl' ></Rui_upload>
        
        <el-input v-model="keys" placeholder="请输入密码" show-password></el-input>
        <el-button type="primary" plain>取消</el-button>
        <el-button type="success"  @click="upload" plain>上传</el-button>
    <!-- </b-card> -->
      
      <!-- <v-img src="../../static/上传.svg" class="up_2"></v-img> -->
    </div>
    
    </v-parallax>
   <v-row>
      <v-col cols="12">
         <v-card>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(img,i) in imgs"
                :key="i"
                class="d-flex child-flex"
                cols="12"
                sm="3"
              >
                  <v-card flat tile class="d-flex mt-2 ">
                    <v-img
                      :id="i"  
                      :src="img.url"
                      :elevation="hover ? 16 : 2"
                      aspect-ratio="1"
                      
                      class="grey lighten-2 mx-auto img-card rounded-lg"
                    >
                    </v-img>
                  </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>


.img-card:hover {
  box-shadow:  0px 0px 13px #12aad2;
 }
.div_{
  background-position: bottom ;
}
.up_{
  /* width: 160px;
  height: 70px; */
  background-color: rgba(189, 195, 199, 0.5);
  margin: auto;
  border-radius: 30px;
  opacity:0.5;
}
.up_2{
  margin: auto;
  width:70px;
  height: 70px;
}
</style>


<script>
import Rui_upload from '../../components/upload'
    export default {
        name:'talks',
        components:{
          Rui_upload
            
        },
        data(){
            return{
                img: [],
                imgUrl:[],
                keys:'',
                index:6,
                imgs:[],
                hover:''
            }
        },
        mounted() {
            this.loadData()
            
        },
        methods:{
            load(){
                
            },
            file_up(){

            },
            simple_s(str1){
                if(str1==''){
                    return false
                }
                const str0 = '25940594'
                // let str1 = '1214'
                let str2 = ''
                for(let i=0;i<4;i++){
                str2 += str1[i].charCodeAt()
                }
                if (str2.split('').reverse().join("")===str0){
                return true
                }
                else{
                return false
                }
            },
            getimgUrl(data){
                this.imgUrl.push(data)
            },
            upload(){

                let that = this
                if(this.simple_s(this.keys) && this.imgUrl.length>0){
                    this.$axios.post('/zeng.php', {
                    'imgUrl':this.imgUrl
                    })
                    .then(function (response) {
                            that.img=response.data
                            that.imgUrl=[]
                            that.$notify({
                                title: '成功',
                                message:  '上传成功！',
                                duration: 2000,
                                type:'success',
                            })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                }
                else{
                    that.$notify.error({
                                title: '错误',
                                message:  '密码错误或者未选择图片',
                                duration: 2000,
                            })
                            console.log("?????")
                            console.log(that.$children[0])
                            console.log(that.$children[0].imageUrl)
                }
            },
            loadData(){
                let that = this;
                this.$axios.post('/zeng.php', {
                    
                })
                    .then(function (response) {
                        //console.log(response.data);

                            that.imgs=response.data
                            that.imgs.forEach((item)=>{
                              item = item['url'].substring(0,4)+"s"+item['url'].substring(5)
                            })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            }
        }
    };
</script>