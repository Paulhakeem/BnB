import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotoTour from '../views/PhotoTour.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/photo-tour',
      name: 'photos',
      component: PhotoTour
    }
  ]
})

export default router
