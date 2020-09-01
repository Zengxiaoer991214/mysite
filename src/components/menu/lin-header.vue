<template>
  <v-card
    class="mx-auto"
    tile
    height="100%"
  >
    <v-navigation-drawer permanent>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://s1.ax1x.com/2020/05/18/YhI03t.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Li Lin</v-list-item-title>
            <v-list-item-subtitle>linlinermei@foxmail.com</v-list-item-subtitle>
          </v-list-item-content>

          <!-- <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action> -->
        </v-list-item>
      </v-list>
      <!-- <v-divider></v-divider> -->
      <v-list
        nav
        dense
      >
        <v-list-item-group v-model="item" color="primary">

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :data-url="item.url"
            @click="switch_to(item.url)"
          >
             
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
             
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<style scoped>
.mx-auto{
    max-width:256px;
    opacity: 0.9;
    position: fixed;
    left:0;
}
.mx-auto:hover{
  min-width: 64px;
  width: 200px;
  z-index: 999;
  float: right;
 
}

</style>
<script>
  export default {
    data: () => ({
      item: 0,
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