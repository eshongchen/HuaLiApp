import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   //用户id
   id:sessionStorage.getItem('id') ? sessionStorage.getItem('id') : -1,
   //存储用户名
   uname: sessionStorage.getItem('uname') ? sessionStorage.getItem('uname') : '',
   //存储用户是否登录
   isLogin:sessionStorage.getItem('isLogin') ? sessionStorage.getItem('isLogin') : false
  },
  getters:{
    
  },
  mutations: {
    logined(state,payload){
      state.id=payload.id;
      state.uname=payload.uname;
      state.isLogin=true;
    },
    loginout(state){
      state.id='-1';
      state.uname='';
      state.isLogin=false;
      //清理sessionStorage中的数据
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('uname');
      sessionStorage.removeItem('isLogin');
    }
  },
  actions: {

  },
  modules: {
    
  }
})
