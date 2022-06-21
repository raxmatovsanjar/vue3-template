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
if (import.meta.env.DEV) {
	routes.push({
		path: '/assets',
		meta: { title: 'Assets', layout: 'empty' },
		component: () => import('/src/pages/assets.vue'),
	});
}
