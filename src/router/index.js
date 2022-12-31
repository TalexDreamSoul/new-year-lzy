import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import FireWorks from '@/views/FireWorks.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/fireworks',
    name: 'fireworks',
    component: FireWorks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
