import { createRouter, createWebHistory } from 'vue-router'

// route level code-splitting when we import the component on the router
// vs.  at the top of the file. This way, when the route is visited, the component is lazy-loaded.
// It generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentsView.vue')
    },
    {
      path: '/components/forms',
      name: 'forms',
      component: () => import('../views/FormsView.vue')
    },
    {
      path: '/components/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    },
    // catchall 404
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
