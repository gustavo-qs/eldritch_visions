import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Plinia01 from '../views/Plinia01.vue'
import Plinia02 from '../views/Plinia02.vue'
import Owlin01 from '../views/Owlin01.vue'
import Owlin02 from '../views/Owlin02.vue'
import Owlin03 from '../views/Owlin03.vue'
import Yansen01 from '../views/Yansen01.vue'
import Monster01 from '../views/Monster01.vue'
import Rurik01 from '../views/Rurik01.vue'
import Z01 from '../views/Z01.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/plinia01',
      name: 'plinia01',
      component: () => import('../views/Plinia01.vue')
    },
    {
      path: '/plinia02',
      name: 'plinia02',
      component: () => import('../views/Plinia02.vue')
    },
    {
      path: '/owlin01',
      name: 'owlin01',
      component: () => import('../views/Owlin01.vue')
    },
    {
      path: '/owlin02',
      name: 'owlin02',
      component: () => import('../views/Owlin02.vue')
    },
    {
      path: '/owlin03',
      name: 'owlin03',
      component: () => import('../views/Owlin03.vue')
    },
    {
      path: '/yansen01',
      name: 'yansen01',
      component: () => import('../views/Yansen01.vue')
    },
    {
      path: '/Monster01',
      name: 'Monster01',
      component: () => import('../views/Monster01.vue')
    },
    {
      path: '/rurik01',
      name: 'rurik01',
      component: () => import('../views/Rurik01.vue')
    },
    {
      path: '/z01',
      name: 'z01',
      component: () => import('../views/Z01.vue')
    }
  ]
});

export default router