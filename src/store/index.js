import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isLogin:false
  },
  getters:{

  },
  mutations: {
    Login(state){
      state.isLogin = true;
    },
    Login_out(state){
      state.isLogin = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
