import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  /////////////////////////////////////////////////////////////////////////////////////
  {
    path: '/Home',
    name: 'home',
    title: '主页',
    component: () => import('../views/Home.vue'),
    meta: {
      showTabBars: true
    }
  },
  /////////////////////////////////////////////////////////////////////////////////////
  {
    path: '/treasure',
    name: 'treasure',
    title: '财富',
    component: () => import('../views/treasure.vue'),
    meta: {
      showTabBars: true
    }
  },
  /////////////////////////////////////////////////////////////////////////////////////
  {
    path: '/dynamic',
    name: 'dynamic',
    title: '动态',
    component: () => import('../views/dynamic.vue'),
    meta: {
      showTabBars: true
    }
  },
  /////////////////////////////////////////////////////////////////////////////////////
  {
    path: '/friends',
    name: 'friends',
    title: '朋友',
    component: () => import('../views/friends.vue'),
    meta: {
      showTabBars: true
    }
  },
  /////////////////////////////////////////////////////////////////////////////////////
  {
    path: '/me',
    name: 'me',
    title: '我的',
    component: () => import('../views/me.vue'),
    meta: {
      showTabBars: true
    }
  },
  {
    path: '/me/balance',
    name: 'meBalance',
    title: '余额',
    component: () => import('../views/me.balance.vue'),
    meta: {
      showTabBars: false
    }
  },
  {
    path: '/me/setting',
    name: 'meSetting',
    title: '设置',
    component: () => import('../views/me.setting.vue'),
    meta: {
      showTabBars: false
    }
  },
  {
    path: '/me/detail',
    name: 'meDetail',
    title: '个人详情',
    component: () => import('../views/me.detail.vue'),
    meta: {
      showTabBars: false
    }
  },
  /////////////////////////////////////////////////////////////////////////////////////
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('../views/login.vue'),
    meta: {
      showTabBars: false
    }
  },
  {
    path: '/register',
    name: 'register',
    title: '注册',
    component: () => import('../views/register.vue'),
    meta: {
      showTabBars: false
    }
  },
  /////////////////////////////////////////////////////////////////////////////////////
  {
    path: '*',
    component: () => import('../views/404.vue'),
    meta: {
      showTabBars: true
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
