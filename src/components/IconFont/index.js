/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-26 09:23:16
 * @FilePath: /ucenter-messageflat-web-view/src/components/IconFont/index.js
 */

import Load from './load';
import IconFont from './icon';

Load("//at.alicdn.com/t/font_2457021_l6klomuozt.js");
Load("//at.alicdn.com/t/font_2699857_m3n9vymdsbg.js");

function install(Vue) {
  Vue.component('IconFont', IconFont);
}

export default {
  install
};

