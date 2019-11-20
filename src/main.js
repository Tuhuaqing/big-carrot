import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 公用scss
import '@/assets/base.scss'

// Vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// lib-flexible
import 'lib-flexible'


// api
import api from './api'
Vue.prototype.$api = api


// jquery
import $ from 'jquery'
window.$ = $

// 简化console.log
window.l = console.log

// 封装storage
import { localStorage as lcStg, sessionStorage as ssStg } from '@/util/storage.js'
Vue.prototype.$lcStg = lcStg
Vue.prototype.$ssStg = ssStg

// 路由前拦截
const whiteList = ['login', 'home']// 免登录白名单
router.beforeEach((to, from, next) => {

  // 先检索localStorage中是否有userInfo数据
  let user = lcStg.get('wsj_userInfo')
  if (user && Object.keys(user).length) {
    store.commit('login', user)
  }

  // 没有用户信息并且不在白名单: 跳转登陆页面
  if (!store.state.userInfo && !whiteList.includes(to.name)) {
    next({ name: 'login' })
  } else {
    // 否则通过
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
