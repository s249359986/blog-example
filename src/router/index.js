import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bottom from '../views/Bottom.vue'
import Bottom2 from '../views/Bottom2.vue'
import factory from '../views/factory.vue'
import cssGrid from '../views/css-grid.vue'
import qcode from '../views/qcode.vue'
import type from '../views/type.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/type',
    name: 'type',
    component: type
  },
  {
    path: '/qcode',
    name: 'qcode',
    component: qcode
  },
  {
    path: '/cssGrid',
    name: 'cssGrid',
    component: cssGrid
  },
  {
    path: '/factory',
    name: 'factory',
    component: factory
  },
  {
    path: '/bottom2',
    name: 'Bottom2',
    component: Bottom2
  },
  {
    path: '/bottom',
    name: 'Bottom',
    component: Bottom
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
