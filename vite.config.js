import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import eslintPlugin from "vite-plugin-eslint";
import compressPlugin from "vite-plugin-compression";
import postcss from "./configs/postcss.config.js";

function configCompressPlugin(compress = "brotli", deleteOriginFile = true) {
  // 'gzip', 'brotli', 'none'
  const plugins = [];
  if (compress === "gzip") {
    plugins.push(
      compressPlugin({
        ext: ".gz",
        deleteOriginFile,
      })
    );
  }
  if (compress === "brotli") {
    plugins.push(
      compressPlugin({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile,
      })
    );
  }
  return plugins;
}

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
    configCompressPlugin(),
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
