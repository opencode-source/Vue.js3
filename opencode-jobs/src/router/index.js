import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
// import Jobs from '../views/Jobs/Jobs.vue'
// import JobsDetails from '../views/Jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import (/*webpackChunkName: "home"*/ "../views/Home.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import (/*webpackChunkName: "about"*/ "../views/About.vue")
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () =>
      import (/*webpackChunkName: "jobs"*/ "../views/Jobs/Jobs.vue")
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: () =>
      import (/*webpackChunkName: "jobs-details"*/ "../views/Jobs/JobsDetails.vue"),
    props: true
  },
  //Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //NotFound
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
