import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import home from '@/components/home/home.vue'
import box from '@/components/home/box.vue'
import movie from '@/components/movie/movie.vue'
import listm from '@/components/movie/listm.vue'
import listt from '@/components/movie/listt.vue'
import listc from '@/components/movie/listc.vue'
import listp from '@/components/movie/listp.vue'
import listv from '@/components/movie/listv.vue'
import music from '@/components/music/music.vue'
import my from '@/components/my/my.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'box',
      redirect:"/home",
      component: box,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: home
        },
        {
          path: 'movie',
          redirect:'/listm',
          component: movie,
          children:[
            {
              path:'/listm',
              name:'Movie',
              component:listm
            },
            {
              path:'/listt',
              name:'Movie',
              component:listt
            },
            {
              path:'/listc',
              name:'Movie',
              component:listc
            },
            {
              path:'/listp',
              name:'Movie',
              component:listp
            },
            {
              path:'/listv',
              name:'Movie',
              component:listv
            },
          ]
        },
        {
          path: 'music',
          name: 'Music',
          component: music
        },
        {
          path: 'my',
          name: 'My',
          component: my
        },
      ]
    },

  ]
})
