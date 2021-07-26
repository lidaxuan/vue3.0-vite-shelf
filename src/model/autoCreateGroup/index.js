/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-06-17 13:59:45
 * @FilePath: /my-vue-app/src/model/autoCreateGroup/index.js
 */

import { axios } from '@/dao/index';

export function getConfigInfo() {
  return axios.post('/wecom-business-web/sessionContent/listUser');
}