/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-23 14:56:57
 * @FilePath: /ucenter-messageflat-web-view/src/store/modules/menu/test.js
 */

export const replyArchive = [
  {
    id: '4',
    name: "测试数据",
    icon: "iconyijidaohang-huihuacundang",
    path: '/twotwotwotwo/sendMsg',
    visible: false, // true 不展示 false 展示 默认false
    children: [
      {
        id: '4-1-1',
        name: "李大玄1",
        path: '/twotwotwotwo/sendMsg',
        disabled: false
      },
      {
        id: '4-1-2',
        name: "李大玄2",
        path: '/twotwotwotwo/filters',
        disabled: false
      },
      {
        id: '4-1-3',
        name: "李大玄3",
        path: '/replyArchive/group',
        disabled: true
      },
      {
        id: '4-1-4',
        name: "李大玄4李大玄1李大玄1李大玄1",
        path: '/replyArchive/globalSearch',
        disabled: true
      },
    ]
  },
];