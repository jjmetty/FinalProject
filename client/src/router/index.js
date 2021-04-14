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
    path: '/newJob/:id',
    name: 'newJob',
    component: () => import ('../components/NewJobComponent')
  },

  {
    path: '/crewRecord',
    name: 'crewRecord',
    component: () => import ('../components/CrewComponent')
  },

  {
    path: '/treeLocation/:id',
    name: 'treeLocation',
    component: () => import ('../components/NewLocationComponent')
  },

  {
    path: '/viewCustomers',
    name: 'viewCustomers',
    component: () => import ('../components/ViewCustomersComponent')
  },

  {
    path: '/editCustomer/:id',
    name: 'editCustomer',
    component: () => import ('../components/EditCustomerComponent')
  },

  {
    path: '/viewEmployees',
    name: 'viewEmployees',
    component: () => import ('../components/ViewEmployeesComponent')
  },
  
  
  {
    path: '/editEmployee/:id',
    name: 'editEmployee',
    component: () => import ('../components/EditEmployeeComponent')
  },

  {
    path: '/viewLocation',
    name: 'viewLocation',
    component: () => import ('../components/ViewLocationComponent')
  },

  {
    path: '/viewCrews',
    name: 'viewCrews',
    component: () => import ('../components/ViewCrewsComponent')
  },

  {
    path: '/newCrew',
    name: 'newCrew',
    component: () => import ('../components/NewCrewComponent')
  },

  {
    path: '/editCrew/:id',
    name: 'editCrew',
    component: () => import ('../components/EditCrewComponent')
  },

  {
    path: '/viewJobs',
    name: 'viewJobs',
    component: () => import ('../components/ViewJobsComponent')
  },

  {
    path: '/viewSubcontractors',
    name: 'viewSubcontractors',
    component: () => import ('../components/ViewSubcontractorComponent')
  },

  {
    path: '/editSub/:id',
    name: 'editSub',
    component: () => import ('../components/EditSubComponent')
  },

  {
    path: '/editLocation/:id',
    name: 'editLocation',
    component: () => import ('../components/EditLocationComponent')
  },

  {
    path: '/viewCust/:id',
    name: 'viewCust',
    component: () => import ('../components/viewCust')
  },

  {
    path: '/viewTree/:id',
    name: 'viewTree',
    component: () => import ('../components/viewLocation')
  },

  {
    path: '/viewEmp/:id',
    name: 'viewEmp',
    component: () => import ('../components/viewEmployees')
  },

  {
    path: '/viewSub/:id',
    name: 'viewSub',
    component: () => import ('../components/viewSub')
  },

  {
    path: '/highJobs',
    name: 'highJobs',
    component: () => import ('../components/highJobs')
  },

  {
    path: '/antDate',
    name: 'antDate',
    component: () => import ('../components/antDate')
  },

  {
    path: '/trimNums',
    name: 'trimNums',
    component: () => import ('../components/trimNums')
  },

  {
    path: '/removalNums',
    name: 'removalNums',
    component: () => import ('../components/removalNums')
  },

  {
    path: '/fertNums',
    name: 'fertNums',
    component: () => import ('../components/fertNums')
  },

  {
    path: '/editJob/:id',
    name: 'editJob',
    component: () => import ('../components/EditJobComponent')
  },

  {
    path: '/stumpNums',
    name: 'stumpNums',
    component: () => import ('../components/stumpNums')
  },

  {
    path: '/viewJob/:id',
    name: 'viewJob',
    component: () => import ('../components/viewJob')
  },

  {
    path: '/crewSchedules',
    name: 'crewSchedules',
    component: () => import ('../components/crewSchedules')
  },

  {
    path: '/SASchedules',
    name: 'SASchedules',
    component: () => import ('../components/SASchedules')
  },

  {
    path: '/outsourcedJobs',
    name: 'outsourcedJobs',
    component: () => import ('../components/outsourcedJobs')
  },

  {
    path: '/crewJobs',
    name: 'crewJobs',
    component: () => import ('../components/crewJobs')
  },

  {
    path: '/highLot',
    name: 'highLot',
    component: () => import ('../components/highLot')
  }











  
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
