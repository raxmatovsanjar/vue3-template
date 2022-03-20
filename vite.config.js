import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/assets/styles/main.scss";` }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      img: resolve(__dirname, 'src/assets/images'),
      js: resolve(__dirname, 'src/assets/scripts'),
      css: resolve(__dirname, 'src/assets/styles')
    }
  },
  server: {
    open: true
  },
  build: {}
});
