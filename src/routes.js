export const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    components: () => import('./pages/home.vue')
  }
];
