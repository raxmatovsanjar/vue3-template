import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Pages from 'vite-plugin-pages';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import eslintPlugin from 'vite-plugin-eslint';
import compressPlugin from 'vite-plugin-compression';

function configCompressPlugin(compress = 'brotli', deleteOriginFile = true) {
  // 'gzip', 'brotli', 'none'
  const plugins = [];
  if (compress === 'gzip') {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        deleteOriginFile,
      }),
    );
  }
  if (compress === 'brotli') {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile,
      }),
    );
  }
  return plugins;
}

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ViteWebfontDownload(),
    Pages({
      exclude:
        process.env.NODE_ENV === 'production' ? ['**/pages/assets.vue'] : [],
      extendRoute(route) {
        if (route.path === '/error') {
          return {
            ...route,
            path: '/:pathMatch(.*)*',
          };
        }
        return {
          ...route,
        };
      },
    }),
    configCompressPlugin(),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      img: resolve(__dirname, 'src/assets/images'),
      js: resolve(__dirname, 'src/assets/helpers'),
      css: resolve(__dirname, 'src/assets/styles'),
    },
  },
  server: {
    open: true,
  },
  build: {
    reportCompressedSize: false,
    brotliSize: false,
  },
});
