import { App } from 'vue';
import { routes } from '~/routes';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import uz from '~/json/uz.json';
import axios from 'axios';
import VueAxios from 'vue-axios';

// paste to clipboard
export async function paste(): Promise<string> {
	return await navigator.clipboard.readText().then(text => {
		return navigator?.clipboard ? text : '';
	});
}

// copy from clipboard
export async function copy(value: string): Promise<void> {
	await navigator?.clipboard?.writeText(value);
}

// change file to base64
export function fileToLink(data: File): string {
	return URL.createObjectURL(data);
}

// Return a number with spaces
export function numberWithSpaces(number: number): string {
	return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function definePlugins(app: App): App {
	// Define your plugins here with app.use. It is required for storybook support.

	// Plugin: router
	const router = createRouter({
		history: createWebHistory(),
		routes,
	});
	app.use(router);

	// Plugin: pinia
	app.use(createPinia());

	// Plugin: i18n
	const locale = localStorage.getItem('locale') || 'uz';
	const i18n = createI18n({
		locale: locale,
		legacy: false,
		globalInjection: true,
		silentFallbackWarn: true,
		compositionOnly: false,
		messages: {
			uz,
		},
	});
	app.use(i18n);

	// Plugin: axios
	const token = localStorage.getItem('token');
	app.use(
		VueAxios,
		axios.create({
			baseURL: 'https://jsonplaceholder.typicode.com/',
			headers: {
				Authorization: token ? `Bearer ${token}` : '',
				AcceptLanguage: locale,
			},
		}),
	);
	app.provide('axios', app.config.globalProperties.axios);

	return app;
}
