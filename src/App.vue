<template>
  <v-app class="body">
      <lin_header class="left"></lin_header>
      <div class="right">
        <div class="main">
          <router-view class="mess"/>
        </div>
        <lin_footer class="footer"></lin_footer>
      </div>
  </v-app>
</template>
<style scoped>


template{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
}
.right{
  width: 95%;
  height: 100%;
  margin-left: 5%;
  right: 0;
  position: relative;
}
.left{
  width: 5%;
  height: 100%;
}

.mess{
  min-height: 100%;
  width: 100%;
}
.main{
  width: 100%;
  height: 100%;
  /* background: #000; */
}
.footer{
  width: 99%;
  /* height: 5%; */
  bottom: 0;
  position:absolute;
  justify-content: center;
}

</style>

<script>
import lin_header from './components/menu/lin-header'
import lin_footer from './components/menu/lin-footer'
export default {
  components:{
    lin_header,
    lin_footer
  }
}
</script>