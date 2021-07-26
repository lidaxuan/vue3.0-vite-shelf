/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-23 09:17:45
 * @FilePath: /ucenter-messageflat-web-view/src/store/modules/menu/home.js
 */
export const home = [
  {
    id: '1',
    name: "文本短信",
    icon: "iconyijidaohang-shouye",
    path: '/home/index',
    children: [
      {
        id: '1-1',
        name: "签名管理",
        path: '/home/index',
      },
      {
        id: '1-2',
        name: "模板管理",
        path: '/home/mixins',
      },
      {
        id: '1-3',
        name: "发送量统计",
        path: '/home/mixins',
      },
      {
        id: '1-4',
        name: "发送记录查询",
        path: '/home/mixins',
      },
      {
        id: '1-5',
        name: "费用统计",
        path: '/home/mixins',
      },
      {
        id: '1-6',
        name: "业务系统模板添加示例",
        path: '/home/mixins',
      },
    ]
  },
];