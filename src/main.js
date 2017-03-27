// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import materialize from 'materialize'

require('./app.css')
require('./assets/materialize/css/materialize.min.css')
require('./assets/css/animate.css')
require('./assets/css/nomaterialize-input.css')
require('./assets/css/style.css')
require('./assets/css/font-awesome/css/font-awesome.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

var $ = jquery
console.log(materialize)
$('#hola').click(function () {
  alert('hola')
})
