import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'~': path.resolve(__dirname, 'src'),
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
});
