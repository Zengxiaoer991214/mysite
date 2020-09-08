<template>
    <div>
        <v-row class="ma-0 pa-0">
        <v-col 
        cols="12"
        sm="3"
        class=""
       
        v-for=" item in mess"
        :key="item[0]"
        
        >
        <v-card
    class="mx-auto"
    max-width="400"
    color=""
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="h2">{{item[0]}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0 red-text" text-color="light-blue lighten-3">2020-8-19</v-card-subtitle>

    <v-card-text class="text--primary">
      

      <div>Whitsunday Island, Whitsunday Islandshashsahdlasdasdkasdhasdaskjdcgkasckascoadasdadasdasdasdasdasdasdasdolausgfougaou</div>
    </v-card-text>

    <v-card-actions>
      

      <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-eye</v-icon>
            <span class="subheading">45</span>

            <v-btn
        color="orange"
        text
        :idd ="item.id"
        @click="explore(item[0])"
      >
        Explore
      </v-btn>
    </v-card-actions>
    <v-row
          align="center"
          justify="end"
        >
          
        </v-row>
  </v-card>
        </v-col>
    </v-row>
  </div>
</template>
<style scoped>

</style>
<script>
  export default {
    data: () => ({
      //
      mess:[]
    }),
    mounted(){
      this.loadData();
    },
    methods:{
      loadData(){
                let that = this;
                this.$axios.post('/blog/blog.php', {
                    
                })
                    .then(function (response) {
                      that.mess=response.data;
                      console.log(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
            },
      explore(e){
        console.log(e)
        this.$router.push({path:'/blogs',query:{id:e}
        }).catch(err=>{
          })
      }
    }
  }
</script>