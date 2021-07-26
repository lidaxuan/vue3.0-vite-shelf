/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-29 20:03:33
 * @FilePath: /ucenter-messageflat-web-view/src/router/index.js
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Layout from '@/pages/layout/index.vue';
import envOption from "@/env";
import store from '../store';

const modulesFiles = import.meta.globEager('./routerConfig/*.js');
let modules = [];
for (const path in modulesFiles) {
  console.log(modulesFiles[path].default);
  modules = [].concat(modules, modulesFiles[path].default);
}

const routes = [
  {
    path: '/globalProperties',
    component: () => import('../pages/test/globalProperties.vue'),
  },
  {
    path: '/inject',
    component: () => import('../pages/test/inject.vue'),
  },
  {
    path: '/attribute',
    component: () => import('../pages/test/attributeTest'),
  },
  {
    path: '/key',
    component: () => import('../pages/test/keyTest'),
  },
  {
    path: '/temp',
    component: () => import('../pages/test/temp'),
  },
].concat(modules);

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  console.log(to.path);
  await judgeLogin();
  if (to.path == '/') {
    next({ path: "/textMessage/autograph" })
  } else {
    next();
  }
})

// 判断链接中是否有登录token
function judgeLogin() {
  // 获取登录路径中的参数
  var queryStr = window.location.search.substring(1);
  var queryArr = queryStr.split("&");
  var queryObj = {};
  for (let i = 0; i < queryArr.length; i++) {
    var pairs = queryArr[i].split("=");
    queryObj[pairs[0]] = pairs[1];
  }
  // 获取access_token
  let access_token = queryObj['access_token'];
  // 如果有access_token,直接存入本地缓存
  if (access_token) {
    store.dispatch('user/setToken', access_token);
    // window.sessionStorage.setItem("access_token", access_token);
    openRedirectUrl();
  }
}

// 判断是否需要重定向
function openRedirectUrl() {
  if (envOption.env.VITE_APP_CURRENTMODE === 'local') {
    window.location.href = window.location.origin + '/#/textMessage/autograph';
  } else {
    window.location.href = window.location.origin + window.location.pathname
  }
}

export default router