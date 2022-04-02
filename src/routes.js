// process.env.NODE_ENV === 'production'
export const routes = [
	{
		path: '/assets',
		meta: { title: 'Assets' },
		component: () => import('@/pages/assets.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		meta: { title: 'Error', layout: 'empty' },
		component: () => import('@/pages/error.vue'),
	},
	{
		path: '/',
		meta: { title: 'Home' },
		component: () => import('@/pages/index.vue'),
	},
];
