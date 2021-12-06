import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/let_play',
    name: 'pageOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/pageOne.vue'),
    props: true
  },
  {
    path: '/result',
    name: 'pageTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/pageTwo.vue'),
    props: true
  }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
   scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
})

export default router
