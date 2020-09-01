<template>
  <div>
    <v-parallax class="div" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
   <v-row>
      <v-col cols="12">
         <v-card>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(img,i) in imgs"
                :key="i"
                class="d-flex child-flex"
                cols="4 "
                xl="12"
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="img.url"
                    
                    aspect-ratio="1"
                    class="grey lighten-2"
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
.div{

}
</style>


<script>

    export default {
        name:'talks',
        components:{

            
        },
        data(){
            return{
                img: [],
                imgUrl:[],
                keys:'',
                index:6,
                imgs:[],
            }
        },
        mounted() {
            this.loadData()
            
        },
        methods:{
            load(){
                
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
                            // console.log(that.img)
                            // console.log(that.img)
                            // that.imgs.push(that.img[0])
                            // that.imgs.push(that.img[1])
                            // that.imgs.push(that.img[2])
                            // that.imgs.push(that.img[3])
                            // that.imgs.push(that.img[4])
                            // that.imgs.push(that.img[5])
                            // console.log(that.imgs)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            }
        }
    };
</script>