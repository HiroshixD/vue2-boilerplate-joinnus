import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home/views/Home'
import Payment from '@/modules/payments/views/Payment'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Payment',
      component: Payment
    }
  ]
})
