<template>
  <div class="markdown-container">
    <div class="container">
      <div class="title">编辑器</div>
      <mavon-editor
        v-model="content"
        ref="md"
        @imgAdd="imgAdd"
        @change="change"
        style="min-height: 600px"
      />
      <v-btn class="editor-btn" type="primary" @click="submit"
        >提交</v-btn>
    </div>
  </div>
</template>
<script>
//该组件中注释掉的代码为局部注册的方式。
// import { mavonEditor } from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
// import axios from "axios";
export default {
  data: function() {
    return {
      content: "",
      html: "",
      configs: {},
      fileList:[],
      imageUrl: '',
      token: {},
      domain: 'https://up-z2.qiniup.com',
      qiniuaddr: 'pic.zengxiaoer.net'
    };
  },
  // components: {
  //   mavonEditor
  // },
  methods: {
    
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
          //that.imageUrl =this.imageUrl
          // that.sendMess(this.imageUrl)
          console.log(this.imageUrl)
          // that.$vm.md.$img2Url(pos, this.imageUrl);
          that.$refs.md.$img2Url(pos, this.imageUrl);
        })
      })
      // axios({
      //   url: "/common/upload",
      //   method: "post",
      //   data: formdata,
      //   headers: { "Content-Type": "multipart/form-data" }
      // }).then(url => {
      //   this.$refs.md.$img2Url(pos, url);
      // });
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
    // 验证文件合法性
    // beforeUpload (file) {
    //   const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
    //   // const isLt2M = file.size / 1024 / 1024 < 2
    //   if (!isJPG) {
    //     this.$message.error('上传图片只能是 JPG 格式!')
    //   }
    //   return isJPG 
    // },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit() {
      console.log(this.content);
      console.log(this.html);
      // this.$message.success("提交成功！");
    }
  }
}
</script>
<style lang="scss">
.markdown-container {
  .editor-btn {
    margin-top: 20px;
  }
  .title {
    padding-bottom: 30px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 1px;
    color: #333;
    font-weight: 600;
  }
}
</style>

