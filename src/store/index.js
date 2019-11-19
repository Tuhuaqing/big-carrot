import Vue from 'vue'
import Vuex from 'vuex'

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
    phoneReg: /^1[3|4|5|6|7|8|9][0-9]{9}$/
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
