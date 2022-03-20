// !Main files import
import { createApp } from 'vue';
import App from '@/App.vue';
const app = createApp(App);

// !Plugins settings
// Plugin: router
import { routes } from '@/routes.js';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Plugin: vuex
import store from '@/store';

// Plugin: i18n
import { createI18n } from 'vue-i18n';
import uz from '@/json/uz.json';
import ru from '@/json/ru.json';
const locale = localStorage.getItem('locale') || 'uz';
const i18n = createI18n({
  locale: locale,
  legacy: false,
  globalInjection: true,
  silentFallbackWarn: true,
  messages: {
    uz,
    ru
  }
});

// Plugin: Maska
import Maska from 'maska';
app.use(Maska);

// !Plugins register
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
