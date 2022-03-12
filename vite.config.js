import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { resolve } from 'path';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      images: resolve(__dirname, 'src/assets/images')
    }
  },
  server: {
    open: true
  }
});
