/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-06 14:43:49
 * @FilePath: /my-vue-app/src/dao/response.js
 */
import { ElMessage } from 'element-plus';

const Code = {
  success: 0
};

export function Success(response) {
  if (response.code == Code.success) {
    return response;
  }
  if (response.code === 9999) {
    // gologin();
    // Message.error('登录失效,请重新登录!');
  } else if (response.code && response.code !== Code.success) {
    ElMessage.error({
      message: response.msg,
      duration: 3000
    });
  }
  return response;
}

