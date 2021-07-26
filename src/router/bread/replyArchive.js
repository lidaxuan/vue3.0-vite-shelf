/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-25 18:21:48
 * @FilePath: /scrm-web-view/src/router/bread/replyArchive.js
 */

// 会话存档
export default  {
  replyArchive: {
    name: '会话存档',
    path: '/replyArchive/staff'
  },
  staff: {
    name: '员工会话',
    path: '/replyArchive/staff'
  },
  customer: {
    name: '客户会话',
    path: '/replyArchive/customer'
  },
  group: {
    name: '群聊会话',
    path: '/replyArchive/group'
  },
  globalSearch: {
    name: '全局检索',
    path: '/replyArchive/globalSearch'
  },
  sensitiveWordMonitoring: {
    name: '敏感词监控',
    path: '/replyArchive/sensitiveWordMonitoring'
  },
  sensitiveBehaviorMonitoring: {
    name: '敏感行为监控',
    path: '/replyArchive/sensitiveBehaviorMonitoring'
  },
  timeoutReplySettings: {
    name: '超时回复设置',
    path: '/replyArchive/timeoutReplySettings'
  },
  customerSessionStatistics: {
    name: '客户会话统计',
    path: '/replyArchive/customerSessionStatistics'
  },
  groupSessionStatistics: {
    name: '群聊会话统计',
    path: '/replyArchive/groupSessionStatistics'
  },
};
