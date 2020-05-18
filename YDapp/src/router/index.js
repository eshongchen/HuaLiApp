import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kind from '../views/King.vue'
import Me from '../views/Me.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/me',
    component: Me
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router