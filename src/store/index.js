/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-23 09:40:21
 * @FilePath: /ucenter-messageflat-web-view/src/store/index.js
 */
import _ from 'lodash';
import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';


const debug = process.env.NODE_ENV !== 'production';
const modulesFiles = import.meta.globEager('./modules/*.js');
let modules = {};
for (const path in modulesFiles) {
  const value = modulesFiles[path].default;
  const name = _.first(_.last(path.split('/')).split('.'))
  modules = { ...modules, [name]: value , };
}

export default createStore({
  modules: {
    ...modules,
  },
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState({
    key: 'mobileUserInfo',
    storage: window.localStorage,   //选择sessionStorage 进行存储
  })] : []
})