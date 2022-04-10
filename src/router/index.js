
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView';
import UserView from '@/views/UserView';
import BakerView from '@/views/BakerView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    component: UserView,
    children: [
      {
        path: '',
        name: 'user',
        component: () => import('@/components/user/User.vue')
      },
      {
        path: '/cakes',
        name: 'cakes',
        component: () => import('@/components/user/Cakes.vue')
      },
      {
        path: '/decorations',
        name: 'decorations',
        component: () => import('@/components/user/Decorations.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/components/user/Orders.vue')
      }
    ]
  },
  {
    path: '/baker',
    component: BakerView,
    children: [
      {
        path: '',
        name: 'baker',
        component: () => import('@/components/baker/Baker.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('@/components/baker/Orders.vue')
      },
      {
        path: '/stock',
        name: 'stock',
        component: () => import('@/components/baker/Stock.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
