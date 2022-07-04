import { createApp } from 'vue';
import { definePlugins } from '~/assets/helpers/helpers';
import './assets/styles/main.css';
import App from './App.vue';

const app = createApp(App);
definePlugins(app);
app.mount('#app');
