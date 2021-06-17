import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserPanel from '../views/UserPanel.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'UserPanel',
    component:UserPanel
  }
]

const router = new VueRouter({
  routes
})

export default router
