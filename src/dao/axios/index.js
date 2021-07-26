/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-06 14:43:49
 * @FilePath: /my-vue-app/src/dao/axios/index.js
 */

import _ from 'lodash';
import server from './server';
import { headers } from '../headers';
import { Success } from '../response';
import sefaSet from '@lijixuan/safe-set';
import Qs from 'qs';
import { ElMessage } from 'element-plus';
import envOption from '@/env';

// 发送前触发
server.interceptors.request.use(function (config) {
  const method = _.toLower(config.method);
  if (_.includes(method, "post")) {
    if (config.paramsType === 'form-data') {
      sefaSet(config, 'headers.Content-Type', 'multipart/form-data;charset=utf-8');
    } else {
      sefaSet(config, 'headers.Content-Type', 'application/json; charset=UTF-8');
    }
  } else {
    config.data = Qs.stringify(config.params);
    sefaSet(config, 'headers.Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }
  
  if (config.url == '/wecom-business-web/friendsCircle/exportExcel') {
    sefaSet(config, 'headers.Content-Type', 'application/octet-stream');
  }
  _.each(headers(), (value, key) => {
    sefaSet(config, `headers.${key}`, value);
  });
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应前触发
server.interceptors.response.use(response => {
  checkAuthorization(response.data.code);
  if (response.status === 200 || response.statusText === 'OK') {
    return Success(response.data ? response.data : response);
  }
  return response;
}, error => {
  try {
    const status = error.response.status;
    const path = error.response.config.url;
    ElMessage.error({
      message: `接口发生了 ${status} 错误, 错误路径是 ${path} , 请去查证!`,
      duration: 3000
    });
    // 如果无权限的401，直接跳转到登录页面
    checkAuthorization(status);
    return Promise.reject(error);
  } catch (err) {
    // todo
  }
});

// 401退出并清空本地缓存
function checkAuthorization(status) {
  if (status == 401 && envOption.env.VUE_APP_CURRENTMODE == "local") {
    localStorage.clear();
    let redirectUrl = window.location.origin + window.location.pathname
    let url = `http://dev-app.easyliao.com/auth-sso/oauth/web/login/view?redirectUri=${redirectUrl}&welcomeMessage=欢迎来到易聊CRM&pageTitle=SCRM-登录&appId=40000`;
    window.location.href = url
    return
  }
  if (status == 401) {
    localStorage.clear();
    window.location.href = envOption.env.VUE_APP_LOGIN_URL;
  }
}

export default server;