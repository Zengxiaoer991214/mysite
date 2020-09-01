<template>
  <v-app class="body">
      <lin_header class="left"></lin_header>
      <lin_phone_header class="phone_left"></lin_phone_header>
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
  width: 100%;
  /* height: 5%; */
  bottom: 0;
  position:absolute;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.phone_left{
  display: none;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .left{
    width: 0%;
    height: 100%;
  }
  .phone_left{
    display: block;
    top: 0;
  }
  .mess{
    min-height: 100%;
    width: 100%;
  }
  .right{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;

}
.main{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  /* background: #000; */
}

.body{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
}
.footer{
  width: 100%;
  /* height: 5%; */
  bottom: 0;
  position:absolute;
  justify-content: center;
  padding: 0;
  margin: 0;
}

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .example {background: green;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .example {background: blue;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .example {background: orange;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .example {background: pink;}
}
</style>

<script>
import lin_header from './components/menu/lin-header'
import lin_footer from './components/menu/lin-footer'
import lin_phone_header from './components/menu/lin-phone-header'
export default {
  components:{
    lin_header,
    lin_footer,
    lin_phone_header
  },
  mounted(){
	window.addEventListener('hashchange',()=>{
		var currentPath = window.location.hash.slice(1); // 获取输入的路由
		if(this.$router.path !== currentPath){
			this.$router.push(currentPath); // 动态跳转
		}
	},false);
}
}
</script>