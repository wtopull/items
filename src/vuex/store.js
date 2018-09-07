import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  loginstaus: localStorage.getItem('loginstaus'),
  username: '',
  nickname:'',
  password: '1121',
  navNum:'首页',
  link:"Bressanone.mp3",
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
