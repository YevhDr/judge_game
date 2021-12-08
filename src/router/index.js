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
    component: () => import('../views/pageOne.vue'),
    props: true   
  },
  {
    path: '/result',
    name: 'pageTwo',    
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
