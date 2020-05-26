import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:sessionStorage.getItem('isLogin')?sessionStorage.getItem('isLogin'):false,
    id:sessionStorage.getItem('id')?sessionStorage.getItem('id'):-1,
    uname:sessionStorage.getItem('uname')?sessionStorage.getItem('uname'):''
  },
  getters:{
    
  },
  mutations: {
    logined(state,payload){
      state.id=payload.id;
      state.uname=payload.uname;
      state.isLogin=payload.isLogin;
    },
    loginout(state){
      state.id='-1';
      state.uname='';
      state.isLogin=false;
      
    }
  },
  actions: {

  },
  modules: {
    
  }
})
