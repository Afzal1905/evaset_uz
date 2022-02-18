import Vue from 'vue'
import VueRouter from 'vue-router'

import HeaderRu  from '../RU/Header.vue';
import HeaderUz  from '../components/Header.vue';
// import NotFound  from '../components/NotFound.vue';

Vue.use(VueRouter)
const routes = [
  {
    path: '/ru',
    name: 'Header',
    component: HeaderRu
  },
  
  {
    path: '/',
    name: 'Header',
    component: HeaderUz
  },
]
  const router = new VueRouter({
    mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
