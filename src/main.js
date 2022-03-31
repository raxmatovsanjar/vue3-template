// !Main files import
import { createApp } from 'vue';
import './assets/styles/main.css';
import App from './App.vue';
const app = createApp(App);

// !Plugins settings
// Plugin: router
import routes from 'pages-generated';
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
import uz from './json/uz.json';
import ru from './json/ru.json';
const locale = localStorage.getItem('locale') || 'uz';
const i18n = createI18n({
  locale: locale,
  legacy: false,
  globalInjection: true,
  silentFallbackWarn: true,
  compositionOnly: false,
  messages: {
    uz,
    ru,
  },
});
app.use(i18n);

// Plugin: maska
import Maska from 'maska';
app.use(Maska);

// End
app.mount('#app');
