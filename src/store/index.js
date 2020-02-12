import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import { localStorage as lcStg } from '@/util/storage.js'
import myserver from '@/api/myserver'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // icon统一大小
    iconSize: '0.7rem',
    // 统一金黄色
    golden: 'rgb(225,159,76)',
    // 统一蓝色
    dodgerblue: 'dodgerblue',
    // 统一绿色
    green: '#5fb878',

    // 手机号正则
    phoneReg: /^1[3|4|5|6|7|8|9][0-9]{9}$/,


    // 当前用户信息
    userInfo: null
  },
  mutations: {
    login(state, user) {
      state.userInfo = user
      lcStg.set('wsj_userInfo', user)
      console.log('当前用户:',state.userInfo)
    },
    logout(state) {
      state.userInfo = null
      lcStg.remove('wsj_userInfo')
      console.log(`登出成功`)
      router.push({ name: 'login' })
    }
  },
  actions: {
    fetchUserInfo({ commit }, userId) {
      myserver.getUserInfo(userId).then(r => {
        if (r.status == 200 && r.data.status == 'ok') {
          commit('login', r.data.data)
        }else{
          commit('logout')
        }
      }).catch(err => {
        console.error(err)
      })
    }
  },
  modules: {
  }
})
