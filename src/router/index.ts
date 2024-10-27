import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => { resolve({ top: 0 }) }, 300);
    });
  }
})

export default router
