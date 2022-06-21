// !Main files import
import { createApp } from 'vue';
import './assets/styles/main.css';
import App from './App.vue';
export const app = createApp(App);

// !Plugins settings
// Plugin: router
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
	history: createWebHistory(),
	routes,
});
app.use(router);

// Plugin: pinia
import { createPinia } from 'pinia';
app.use(createPinia());

// Plugin: i18n
import { createI18n } from 'vue-i18n';
import uz from '~/json/uz.json';
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
import axios from 'axios';
import VueAxios from 'vue-axios';
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

// End
app.mount('#app');
