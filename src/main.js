/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-29 19:30:56
 * @FilePath: /ucenter-messageflat-web-view/src/main.js
 */

const envOpt = import.meta.env;
window.process = envOpt;

import './load';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/index';

import "./assets/styles/base/index.scss";
import "./assets/styles/index.scss";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import "element-plus/packages/theme-chalk/src/base.scss";
import IconFont from './components/IconFont';

import './assets/styles/element-variables.scss';


const app = createApp(App)
app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}

// app.config.globalProperties.$http = (num) => {
//   console.log(num);
// } // 绑定方法

app.config.isCustomElement = tag => tag.startsWith('ion-')


app.config.productionTip = false;
// 此为全局指令
app.directive('focus', {
  mounted: el => el.focus()
})

app.provide('guide', 'Vue 3 Guide') // 所有组件接受
app.provide('sideBarConfig', { // 侧边栏配置
  tooltip: false,
  effect: "light" || 'dark'
}) // 所有组件接受

app.component('button-counter', {
  data: () => ({
    count: 0
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>'
})



// app.config.globalProperties.$axios = axios
//              mount 根组件实例
app.use(ElementPlus, { size: 'mini' }).use(store).use(router).use(IconFont).mount('#app')
