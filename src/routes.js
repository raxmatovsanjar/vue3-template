export const routes = [
	{
		path: '/assets',
		meta: { title: 'Assets' },
		component: () =>
			import(
				process.env.NODE_ENV === 'production'
					? '@/pages/error.vue'
					: '@/pages/assets.vue'
			),
	},
	{
		path: '/:pathMatch(.*)*',
		meta: { title: 'Error' },
		component: () => import('@/pages/error.vue'),
	},
	{
		path: '/',
		meta: { title: 'Home' },
		component: () => import('@/pages/index.vue'),
	},
];
