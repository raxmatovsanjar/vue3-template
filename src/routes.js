export const routes = [
  {
    path: '/:pathMatch(.*)*',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/pages/error.vue')
  },
  {
    path: '/assets',
    component: () => import('@/pages/assets.vue')
  },
  {
    path: '/',
    component: () => import('@/pages/index.vue')
  }
];
