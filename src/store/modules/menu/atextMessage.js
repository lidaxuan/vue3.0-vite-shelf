/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-23 09:17:45
 * @FilePath: /ucenter-messageflat-web-view/src/store/modules/menu/atextMessage.js
 */
export const home = [
  {
    id: '1',
    name: "文本短信",
    icon: "iconyijidaohang-shouye",
    path: '/textMessage/autograph',
    disabled: false, // 是否禁用
    visible: false, // true 不展示 false 展示 默认false
    children: [
      {
        id: '1-1',
        name: "签名管理",
        path: '/textMessage/autograph',
      },
      {
        id: '1-2',
        name: "模板管理",
        path: '/textMessage/template',
      },
      {
        id: '1-3',
        name: "发送量统计",
        path: '/textMessage/sendVolume',
      },
      {
        id: '1-4',
        name: "发送记录查询",
        path: '/textMessage/sendRecord',
      },
      {
        id: '1-5',
        name: "费用统计",
        path: '/textMessage/cost',
      },
      {
        id: '1-6',
        name: "业务系统模板添加示例",
        path: '/textMessage/example',
      },
    ]
  },
];