import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home/components/Home'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
