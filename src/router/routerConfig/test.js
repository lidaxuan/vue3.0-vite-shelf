/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-26 16:12:39
 * @FilePath: /ucenter-messageflat-web-view/src/router/routerConfig/test.js
 */
import Layout from '@/pages/layout/index.vue';
export default [
  {
    path: '/twotwotwotwo',
    component: Layout,
    children: [
      {
        path: 'sendMsg',
        component: () => import('../../pages/test/sendMsg.vue'),
      },
      {
        path: 'filters',
        component: () => import('../../pages/test/filters.vue'),
      },
    ]
  },
]