import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import eslintPlugin from "vite-plugin-eslint";
import postcss from "./configs/postcss.config.js";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(
        path.resolve(__dirname, "src/json/"),
        "components.d.ts"
      ),
    }),
    ViteWebfontDownload(),
    eslintPlugin(
      { include: "./configs/eslintrc.js" },
      { include: "./configs/prettierrc.js" }
    ),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      img: resolve(__dirname, "src/assets/images"),
      js: resolve(__dirname, "src/assets/helpers"),
      css: resolve(__dirname, "src/assets/styles"),
    },
  },
  css: {
    postcss,
  },
  server: {
    open: true,
  },
  build: {
    reportCompressedSize: false,
    brotliSize: false,
  },
  test: {},
});
