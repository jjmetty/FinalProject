import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../components/HomeComponent')
  },

  {
    path: '/test',
    name: 'test',
    component: () => import ('../components/test')
  },

  {
    path: '/newCustomer',
    name: 'newCustomer',
    component: () => import ('../components/NewCustomerComponent')
  },

  {
    path: '/newEmployee',
    name: 'newEmployee',
    component: () => import ('../components/NewEmployeeComponent')
  },

  {
    path: '/newSub',
    name: 'newSub',
    component: () => import ('../components/NewSubComponent')
  },

  {
    path: '/newJob',
    name: 'newJob',
    component: () => import ('../components/NewJobComponent')
  },


  
  //{
   // path: '/about',
   // name: 'About',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
 // }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
