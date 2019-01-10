import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ShardsVue from 'shards-vue'

// Import base styles (Bootstrap and Shards)
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'

Vue.use(ShardsVue)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
