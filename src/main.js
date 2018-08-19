// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@/assets/iconfont/iconfont.css'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import popTo from "./components/public/pop"
import Loading from "./components/public/loading"
import i18n from './i18n/i18n'

Vue.use(popTo);
Vue.use(Loading);
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
window.axios = axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
