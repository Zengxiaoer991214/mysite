import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'highlight.js/styles/googlecode.css' //样式文件
import hljs from 'highlight.js'

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})


Vue.component("mavon-editor", mavonEditor);
Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://api.lin2mei.cn';
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



router.afterEach(route => {
  window.scroll(0, 0);
});
