import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import home from '@/components/home/home.vue'
import box from '@/components/home/box.vue'
import movie from '@/components/movie/movie.vue'
import music from '@/components/music/music.vue'
import my from '@/components/my/my.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'box',
      component: box,
      children: [{
          path: 'movie',
          name: 'movie',
          component: movie
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
