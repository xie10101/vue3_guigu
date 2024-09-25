import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vitejs.dev/config/
// vite-plugin-mock插件引入模块
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // 不同的插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "iocn-[dir]-[name]",
      }),
      viteMockServe({
        //default
        mockPath: "mock",
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), //相对路径别名配置，使用@代替src
      },
    },
    // 用于设置全局变量--scss
    css: {
      preprocessorOptions: {
        scss: {
          // javascriptEnabled:true,
          additionalData: '@import "@/style/variable.scss";',
        },
      },
    },
  };
});
