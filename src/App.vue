<template>
  <v-app class="body">
      <lin_header class="left"></lin_header>
      <lin_phone_header class="phone_left"></lin_phone_header>
      <div class="right">
        <div class="main">
          <router-view class="mess"/>
        </div>
        <v-btn class="mx-2 back" fab dark small color="white" v-if="isScroll" @click="up_to_top">
        <v-icon dark color="red">mdi-arrow-up-drop-circle</v-icon>
        </v-btn>
        <lin_footer class="footer"></lin_footer>
      </div>
  </v-app>
</template>
<style scoped>
.back{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999999;
}
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
  bottom: -30px;
  position:absolute;
  justify-content: center;
  padding: 0;
  /* margin-top: 5%; */
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
  bottom: -30px;
  position:absolute;
  justify-content: center;
  padding: 0;
}

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
  data:()=>({
    isScroll:false
  }),
  mounted(){
    window.addEventListener('scroll',this.getScrollPosition,false)
    window.addEventListener('hashchange',()=>{
      var currentPath = window.location.hash.slice(1); // 获取输入的路由
      if(this.$router.path !== currentPath){
        this.$router.push(currentPath); // 动态跳转
      }
    },false);
  },
  destroyed: function () {
    window.removeEventListener('scroll',this.getScrollPosition,false)
  },
  methods:{
    getScrollPosition: function () {
	// 滚动条距顶部距离
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 滚动条距左端距离
      // console.log(top)
      if(top>100){
        this.isScroll=true;
        // console.log(top)
      }
      else{
        this.isScroll=false
      }
    },
    up_to_top(){
      // var timer = setInterval(function(){
      //       let osTop = document.documentElement.scrollTop || document.body.scrollTop;
      //       let ispeed = Math.floor(-osTop / 5); 
      //       document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
      //       this.isTop = true;
      //       if(osTop === 0){
      //         clearInterval(timer);
      //       }
      //     },30)

      this.$vuetify.goTo(0);
    }
  }
}
</script>