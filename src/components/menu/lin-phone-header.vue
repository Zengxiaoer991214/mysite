<template>
  <v-card class="ma-0 pa-0">
    <v-tabs
      background-color="purple lighten-3"
      center-active
      dark
      class="ma-0 pa-0"
    >
      <v-tab
        v-for="(item, i) in items"
            :key="i"
            :data-url="item.url"
            @click="switch_to(item.url)"
      >{{item.text}}</v-tab>
     
    </v-tabs>
  </v-card>
</template>



<script>
export default {
    data:()=>({
     items: [
        { text: 'My Site', icon: 'mdi-folder',url:'/' },
        { text: 'Small Tallk', icon: 'mdi-account-multiple',url:'/talk' },
        { text: 'color\'s site', icon: 'mdi-star' ,url:'/color'},
        { text: 'blog', icon: 'mdi-history' ,url:'/blog'},
        { text: 'Offline', icon: 'mdi-check-circle' ,url:'/'},
        { text: 'About Her', icon: 'mdi-upload',url:'/about' },
        { text: 'About Me', icon: 'mdi-cloud-upload' ,url:'/'},
      ],
    }),
    methods:{
      switch_to(e){
        this.$router.push(e).catch(err=>{
          })
      }
    }
}
</script>