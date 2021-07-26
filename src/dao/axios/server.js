/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-06 14:43:49
 * @FilePath: /my-vue-app/src/dao/axios/server.js
 */

import axios from 'axios';
import envOption from '@/env';
// VUE_APP_CURRENTMODE
const timeout = 5000 * 100;
const server = axios.create({
  timeout,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  withCredentials: false, // 不发送 cookie
  baseURL: "", // 默认域名 process.env.VUE_APP_API_Domain /wecom-business-web
});

export default server;