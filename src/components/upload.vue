<template>
  <!-- upload -->
  <div class="upload">
    <el-upload
      class="avatar-uploader"
      :action= domain
      multiple
      :http-request = upqiniu
      
      :before-upload="beforeUpload"
       :file-list="fileList"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      
    </el-upload>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fileList:[],
      imageUrl: '',
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: 'https://up-z2.qiniup.com',
      // 这是七牛云空间的外链默认域名
      qiniuaddr: 'pic.zengxiaoer.net'
    }
  },
  methods: {
    // 上传文件到七牛云
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
          this.imageUrl = 'http://' + this.qiniuaddr + '/' + res.data.key
          //that.imageUrl =this.imageUrl
          that.sendMess(this.imageUrl)
          //console.log(this.imageUrl)
        })
      })
    },
    // 验证文件合法性
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      // const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!')
      }
      return isJPG 
    },
    sendMess(imgUrl){
      this.$emit('func',imgUrl)
    }
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

