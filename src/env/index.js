/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-23 10:53:07
 * @FilePath: /ucenter-messageflat-web-view/src/env/index.js
 */

const envOpt = import.meta.env;
const env = {
  NODE_ENV: 'production', // 默认为线上环境
  BASE_URL: '/', // 路由根地址
  VITE_APP_BASEURL:'http://dev-app.easyliao.com/',
  VITE_APP_API_Domain_base: '/wecom-business-web',
  VITE_APP_API_upLoad_action: 'http://dev-app.easyliao.com/wecom-business-web/material/uploadFile',
};
const option = {
  env: Object.assign({}, env, envOpt)
};

export default option;