import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'home',
    title: '主页',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    title: '动态',
    component: () => import('../views/dynamic.vue')
  },
  {
    path: '/me',
    name: 'me',
    title: '我的',
    component: () => import('../views/me.vue')
  },
  {
    path: '*',
    component: () =>import('../views/404.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
