/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-25 17:23:59
 * @FilePath: /ucenter-messageflat-web-view/src/router/breadConfig.js
 */

const modulesFiles = import.meta.globEager('./bread/*.js');
let modules = {};
for (const path in modulesFiles) {
  // const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules = { ...modules, ...modulesFiles[path] };
}
export default modules.default;