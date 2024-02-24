import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import MagazineView from '@/views/MagazineView.vue'
import WorkView from '@/views/WorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      meta: {
        layout: 'landing'
      }
    },
    {
      path: '/work',
      name: 'work',
      component: MagazineView,
      meta: {
        layout: 'work'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: WorkView,
      meta: {
        layout: 'magazine'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.getElementById(to.hash.slice(1))
      if (element) return { el: element, behavior: 'smooth' }
    } else
      return {
        top: 0,
        behavior: 'smooth'
      }
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
