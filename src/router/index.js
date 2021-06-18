import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {store} from '../store/index.js'
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
router.beforeEach((to, from, next) => {
  if (to.name === 'UserPanel' && !Object.keys(store.state.loggedInUser).length  ) next({ name: 'Home' })
  else next()
})
export default router
