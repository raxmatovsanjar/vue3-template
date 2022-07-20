export const routes = [
	{
		path: '/:pathMatch(.*)*',
		meta: { title: 'Error', layout: 'empty' },
		component: () => import('/src/pages/error.vue'),
	},
	{
		path: '/',
		meta: { title: 'Home' },
		component: () => import('/src/pages/index.vue'),
	},
];
