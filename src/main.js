// !Main files import
import { createApp } from 'vue';
import App from '@/App.vue';
const app = createApp(App);
import '@/assets/styles/main.scss';

// !Plugins settings
// Plugin: router
import { routes } from '@/routes.js';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Plugin: i18n
import { createI18n } from 'vue-i18n';
import uz from '@/json/uz.json';
const locale = localStorage.getItem('locale') || 'uz';
const i18n = createI18n({
  locale: locale,
  messages: {
    uz
  }
});

// Plugin: v-mask
import { VueMaskDirective } from 'v-mask';
app.directive('mask', VueMaskDirective);

// !Plugins register
app.use(router);
app.use(i18n);
app.mount('#app');
