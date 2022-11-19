import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './form'
import './axios' 
 import {router} from './router'
import './axios'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')