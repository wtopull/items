import LoadingComponent from "./loading.vue";
export default {
  install: function (Vue) {
    Vue.component("Loading", LoadingComponent);
    Vue.prototype.$loading = {}
    Vue.prototype.$loading.show = (obj) => {
      // 如果页面有loading则不继续执行
      if (document.querySelector('.loader')) return
      // 1、创建构造器，定义loading模板
      let LoadTip = Vue.extend({
        template: '<Loading number="'+obj.number+'"></Loading>'
      })
      // 2、创建实例，挂载到文档以后的地方
      let tpl = new LoadTip().$mount().$el
      // 3、把创建的实例添加到body中
      document.querySelector("#app").appendChild(tpl)
      // 阻止遮罩滑动
      document.querySelector('.loader').addEventListener('touchmove', function (e) {
        e.stopPropagation()
        e.preventDefault()
      })
    }
    Vue.prototype.$loading.hide = () => {
      let tpl = document.querySelector('.loader')
      if(tpl){
        document.querySelector("#app").removeChild(tpl)
      }
    }
  }
}