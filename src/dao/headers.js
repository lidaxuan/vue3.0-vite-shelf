/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-06 14:43:49
 * @FilePath: /ucenter-messageflat-web-view/src/dao/headers.js
 */

// import cookie from 'js-cookie';
import store from "../store";
export function headers() {
  // 获取当前token
  let token = store.getters['user/getUserInfo']['token'];
  const value = token || "";
  return {
    Authorization: value,
  };
}


export function getScrmUserConfig() {
  const obj = {
    companyId: 12333,
  };
  return Object.assign({}, headers(), obj);
}