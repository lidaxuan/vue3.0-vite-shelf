/*
 * @Author: web.王佳豪
 * @Date: 2020-12-01 18:51:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-22 18:26:27
 * @Description: file content
 */
var fileName = [
  // "vue/vue/2.6.11/vue.min.js",
  "vue/vue-router/3.1.5/vue-router.min.js",
  "vue/axios/0.21/axios.min.js",
  "vue/vuex/3.1.2/vuex.min.js",
  // "vue/vuedraggable/v2.24.3/vuedraggable.common.js",
  // "vue/quill/v1.3.7/quill.min.js",
  "vue/element-ui/2.13.1/index.js",
  // "vue/vue-quill-editor/v3.0.6/vue-quill-editor.js",
  "plugin/moment/v2.29.1/moment.js",
  // "plugin/echarts2.0/echarts.min.js",
  // "plugin/babel-polyfill/news/polyfill.min.js",
  // "plugin/core-js/v3.8.0/index.js",
  // "plugin/sortablejs/v1.12.0/sortable.umd.js",
  // "vue/element-ui/2.13.1/theme-chalk/index.css",
  // "vue/quill/v1.3.7/quill.core.css",
  // "vue/quill/v1.3.7/quill.bubble.css",
  // "vue/quill/v1.3.7/quill.snow.css",
  // "vue/vuedraggable/v2.24.3/vuedraggable.common.js",
  // "vue/vuedraggable/v2.24.3/vuedraggable.umd.min.js",
  // "public/js/go.js",
  // "plugin/driver/v.1.0.0/index.js",
  // "plugin/driver/v.1.0.0/driver.min.css",
].reverse();

for (var i = 0; i < fileName.length; i++) {
  var extension = fileName[i].substring(fileName[i].lastIndexOf('.') + 1);
  createLink(fileName[i],extension);
}

function createLink(arg,type) {
  var href = "http://statics.easyliao.com/web/" + arg;
  var link_dom = document.createElement('link');
  link_dom.href = href;
  link_dom.rel = 'preload';
  if(type == 'css'){
    link_dom.as = 'style';
    link_dom.rel = 'stylesheet';
  }else{
    link_dom.as = 'script';
  }
  var head = document.getElementsByTagName('head').item(0);
  // head.appendChild(link_dom);
  head.prepend(link_dom);
}

