// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Emitter from './Emitter'

Vue.config.productionTip = false

window.events = {}
window.events1 = {}
Emitter(events)
Emitter(events1)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
