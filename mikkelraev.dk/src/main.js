// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueMouseParallax from 'vue-mouse-parallax'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueMouseParallax)

// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  distance: '20px',
  opacity: 0,
  mobile: true
})

Vue.use(Vuetify, {
  theme: {
    primary: '#1c1e45',
    secondary: '#4a0c85',
    accent: '#2bf4a1',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    dark: '#1c1e45'
  }
})

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
