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


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
