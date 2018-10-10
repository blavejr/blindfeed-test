import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Full from './components/fullComic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fullComic/:id',
      name: 'fullComic',
      component: Full
    }
  ]
})
