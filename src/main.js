// !Main files import
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
import '~/assets/styles/main.scss';

// !Plugins settings
// Plugin: dayjs
import dayjs from 'dayjs';
// Plugin: router
import { routes } from './routes.js';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes
});
// Plugin: vuex
import store from './store';
// Plugin: i18n
import { createI18n } from 'vue-i18n';
import uz from '~/json/uz.json';
const locale = localStorage.getItem('locale') || 'uz';
const i18n = createI18n({
  locale: locale,
  fallbackLocale: 'ru',
  silentFallbackWarn: true,
  messages: {
    uz
  }
});

// !Plugins register
app.use(dayjs);
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
