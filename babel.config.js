/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-23 11:23:09
 * @FilePath: /my-vue-app/babel.config.js
 */
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
      },
    ],
  ],
};