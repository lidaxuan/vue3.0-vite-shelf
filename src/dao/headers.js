/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-06 14:43:49
 * @FilePath: /my-vue-app/src/dao/headers.js
 */

// import cookie from 'js-cookie';

export function headers() {
  // 获取当前token
  let token = window.sessionStorage.getItem('access_token');
  const value = token || "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiLmmJPogYrnp5HmioAiLCJpc3MiOiLmmJPogYrnp5HmioAiLCJpYXQiOjE2MjcwMjE3NDYsImV4cCI6MTYyNzEwODE0NiwiY29tcGFueUlkIjoxMDc5MywidXNlcklkIjoicHJkMTkiLCJkZXBhcnRtZW50SWQiOjE5MzQ1LCJnZW5lcmF0ZVRpbWUiOiIyMDIxLTA3LTIzIDE0OjI5OjA2IiwianRpIjoiZjgwOGMzMzEtNmNiNi00MzEzLWFlNDQtOWU5ZDE2ZGUzZTQ1In0.HQdqOacoa27snJ9M4YW2SrLqRWek_8_0s57w1kOudqE4z95HBG6IaEdYP_RbhAVHtioGRtJuuyXXj3uWj-dy5GcIm9jGzD196Y0yuRdHiV3yW2tZ4Clro6_RfYMpgLe8k7ED9GblKQHSehuyfaM0R1ebPvkQ453XdJI9rkUYwyI";
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