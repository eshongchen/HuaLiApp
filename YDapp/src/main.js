import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
// lib-flexible移动端设配
import 'lib-flexible'
// import 'amfe-flexible'
// 引入mintUI组件
//导入Mint UI
import MintUI from 'mint-ui';
//导入样式表文件
import "mint-ui/lib/style.min.css";

//通过Vue.ues()方法使用插件 
Vue.use(MintUI);

//引入子组件Tabernacle
// import tabbar from './components/Tabber';
// 注册全局组件tabbar
// Vue.component(tabbar, './components/Tabber.vue');

axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
