<template>
  <v-card>
    <v-tabs
      background-color="deep-purple accent-4"
      center-active
      dark
      
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
        { text: 'Starred', icon: 'mdi-star' ,url:'/about'},
        { text: 'Recent', icon: 'mdi-history' ,url:'/'},
        { text: 'Offline', icon: 'mdi-check-circle' ,url:'/'},
        { text: 'About Her', icon: 'mdi-upload',url:'/' },
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