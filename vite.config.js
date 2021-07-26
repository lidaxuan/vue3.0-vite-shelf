/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-29 19:30:56
 * @FilePath: /ucenter-messageflat-web-view/vite.config.js
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

import path from 'path';

const target = {
  target: "http://dev-app.easyliao.com",
  changeOrigin: true,
  loglevel: "debug",
  pathRewrite: {
    "^/apis": "",
  },
  ws: true
};
let proxy = target;

const resolve = (dir) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({

  // 引入第三方的配置
  resolve: {
    extensions: ['.js', '.vue', '.json', ".scss", ".*"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  publicDir: 'public',
  hmr: { overlay: true },
  css: {
    preprocessorOptions: {
      scss: {
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
        additionalData: `@import '@/assets/styles/common.scss';`,
      }
    },
  },
  build: {
    manifest: false,
    // rollupOptions: {
    //   output: {
    //     entryFileNames: `assets/[name].${timestamp}.js`,
    //     chunkFileNames: `assets/[name].${timestamp}.js`,
    //     assetFileNames: `assets/[name].${timestamp}.[ext]`
    //   }
    // }
  },
  server: {
    open: true,// 是否自动在浏览器打开
    https: false,// 是否开启 https
    ssr: false,// 服务端渲染
    hot: true,
    base: '/',
    outDir: 'target',
    host: "0.0.0.0",
    port: 1011,
    proxy: {
      // '/wecom-business-web': {
      //   // target: 'http://dev-app.easyliao.com/', // @163.com
      //   target: 'http://192.168.165.137/', // @163.com
      //   // changeOrigin: true,
      //   // loglevel: "debug",
      //   // rewrite: path => path.replace(/^\/wecom-business-web/, '')
      // },
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],

})
