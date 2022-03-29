import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import Pages from 'vite-plugin-pages';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ViteWebfontDownload(),
    viteCompression({ deleteOriginFile: false }),
    Pages({
      exclude:
        process.env.NODE_ENV === 'production' ? ['**/pages/assets.vue'] : [],
      extendRoute(route) {
        if (route.path === '/error') {
          return {
            ...route,
            path: '/:pathMatch(.*)*'
          };
        }
        return {
          ...route
        };
      }
    })
  ],
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
  build: {
    reportCompressedSize: false,
    brotliSize: false
  }
});
