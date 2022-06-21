import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [ElementPlusResolver()],
			dts: path.resolve(path.resolve(__dirname, 'src/'), 'components.d.ts'),
		}),
		ViteWebfontDownload([
			'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
		]),
		eslintPlugin(),
	],
	resolve: {
		alias: {
			'~': resolve(__dirname, 'src'),
			components: resolve(__dirname, 'src/components'),
			js: resolve(__dirname, 'src/assets/helpers'),
			img: resolve(__dirname, 'src/assets/images'),
			css: resolve(__dirname, 'src/assets/styles'),
		},
	},
	server: {
		open: true,
		port: 4000,
	},
	build: {
		reportCompressedSize: false,
		brotliSize: false,
	},
	test: {},
});
