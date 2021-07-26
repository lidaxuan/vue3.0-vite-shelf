/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-26 09:23:16
 * @FilePath: /ucenter-messageflat-web-view/src/components/IconFont/load.js
 */

function append(src) {
  const script = document.createElement('script');
  script.src = src;
  script.setAttribute('data-namespace', src);
  const body = document.querySelector('body');
  body.appendChild(script);
}

export default append;
