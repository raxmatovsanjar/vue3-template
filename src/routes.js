export const routes = [
  {
    path: '/',
    meta: { title: 'Assets' },
    components: () => import('./pages/assets.vue')
  }
];
