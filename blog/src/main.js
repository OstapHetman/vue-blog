import jQuery from 'jquery'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

global.jQuery = jQuery
global.$ = jQuery
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
