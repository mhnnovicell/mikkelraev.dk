// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

Vue.use(Vuetify, {
  theme: {
    primary: '#4a0c85',
    secondary: '#2bf4a1',
    accent: '#000000',
    error: '#b71c1c'
  },
  options: {
    customProperties: true
  }
})
