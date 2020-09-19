<template>
    <v-flex>
        <v-row>
        <v-col>
            <v-img src="../../static/返回.svg" height="30px" width="30px" @click="back_"></v-img>        
        </v-col>
        <v-col cols="12">
            <h2>{{article['title']}}</h2>        
        </v-col> 
        
        </v-row>
        <v-row>    
        <v-col cols="12">
            <div v-html="article[1]" v-highlight>
            </div>
        </v-col>
        </v-row>
    </v-flex>
</template>

<style scoped>

</style>

<script>

export default {

    
    data:()=>({
        article:''
    }),
    mounted(){
        let id = this.$route.query.id
        let that = this;
        this.$axios.post('/blog/blog.php', {
                    'id':id
                })
                    .then(function (response) {
                      that.article=response.data
                    //   console.log(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
            },
    methods:{
        back_(){
            this.$router.go(-1).catch(err=>{
          })
        }
    }
}
</script>