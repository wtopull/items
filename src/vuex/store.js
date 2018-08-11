import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  loginstaus: false,
  username: 'nathantest',
  password: '11211121'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
