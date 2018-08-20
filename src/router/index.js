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
      component: box,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'movie',
          name: 'movie',
          redirect:'/listm',
          component: movie,
          children:[
            {
              path:'/listm',
              name:'listm',
              component:listm
            },
            {
              path:'/listt',
              name:'listt',
              component:listt
            },
            {
              path:'/listc',
              name:'listc',
              component:listc
            },
            {
              path:'/listp',
              name:'listp',
              component:listp
            },
            {
              path:'/listv',
              name:'listv',
              component:listv
            },
          ]
        },
        {
          path: 'music',
          name: 'music',
          component: music
        },
        {
          path: 'my',
          name: 'my',
          component: my
        },
      ]
    },

  ]
})
