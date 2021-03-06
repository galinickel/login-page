import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'
import {Options} from 'vue-toasted';

import { store } from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Toasted, 
  Options,
  render: h => h(App)
}).$mount('#app')
