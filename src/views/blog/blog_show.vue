<template>
    <div>
        <div v-html="article[1]" v-highlight>
    </div>
    </div>
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
                      console.log(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
            },
}
</script>