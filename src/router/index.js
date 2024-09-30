import { createRouter, createWebHistory } from 'vue-router'

// route level code-splitting when we import the component on the router
// vs.  at the top of the file. This way, when the route is visited, the component is lazy-loaded.
// It generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.

import ROUTES_CONFIG from '@/data/routesConfig.json'
const routes = ROUTES_CONFIG.routes.map(route => {
  return {
    path: route.path,
    name: route.name,
    component: () => import(`@/views/${route.component_name}.vue`)
  }
});

routes.push({
  path: '/components/:id/:slug',
  name: 'component.show',
  component: () => import('@/views/ComponentShow.vue'),
  props: route=> ({...route.params, id: route.params.id})
});

routes.push({
  path: '/:catchAll(.*)',
  name: '404',
  component: () => import('@/views/404View.vue')
});

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
