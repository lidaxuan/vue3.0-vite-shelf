/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-26 16:07:09
 * @FilePath: /ucenter-messageflat-web-view/src/router/routerConfig/textMessage.js
 */
import Layout from '@/pages/layout/index.vue';
export default [
  {
    path: '/textMessage',
    component: Layout,
    children: [
      {
        path: 'autograph',
        component: () => import('../..//pages/textMessage/autograph'),
      },
      {
        path: 'template',
        component: () => import('../../pages/textMessage/template'),
      },
    ]
  },
  
]