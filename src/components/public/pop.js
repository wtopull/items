import PopComponent from "./pop.vue";
export default {
  install: function (Vue) {
    Vue.component("popTo", PopComponent);
    Vue.prototype.$pop = {}
    Vue.prototype.$pop.show = (obj) => {
      // 如果页面有loading则不继续执行
      if (document.querySelector('.pop')) return
      // 1、创建构造器，定义loading模板
      let PopTip = Vue.extend({
        template: '<popTo error="'+obj.error+'" title="'+obj.title+'" content="'+obj.content+'" content1="'+obj.content1+'" content2="'+obj.content2+'" number="'+obj.number+'"></popTo>'
      })
      // 2、创建实例，挂载到文档以后的地方
      let tpl = new PopTip().$mount().$el
      // 3、把创建的实例添加到body中
      document.querySelector("#app").appendChild(tpl)
      // 阻止遮罩滑动
      document.querySelector('.pop').addEventListener('touchmove', function (e) {
        e.stopPropagation()
        e.preventDefault()
      })
    }
    Vue.prototype.$pop.hide = () => {
      let tpl = document.querySelector('.pop')
      if(tpl){
        document.querySelector("#app").removeChild(tpl)
      }
    }
  }
}