/*
 * @Author: web.王佳豪
 * @Date: 2020-11-12 15:39:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-26 16:18:03
 * @LastEditTime: 2021-04-11 16:11:36
 * @Description: file content
 */

const modulesFiles = import.meta.globEager('./menu/*.js');
let modules = [];
for (const path in modulesFiles) {
  modules = [].concat(modules, ...Object.values({ ...modulesFiles[path] }));
}

console.log(modules);
const app = {
  namespaced: true,
  state: () => ({
    // 当前子菜单
    menuChildren: [],
    // 设置当前顶部菜单
    activeIndex: "",
    // 所有菜单
    menuList: [
      ...modules,
    ],
  }),
  mutations: {
    // 所有菜单
    menuList: (state, menuList) => {
      state.menuList = menuList;
    },
    // 点父节点获取当前子菜单
    menuchildren: (state, obj) => {
      let list = state.menuList;
      list.forEach(item => {
        if (obj.disabled == true || obj.disabled == false) {
          item.children.forEach(ele => {
            ele.disabled = obj.disabled;
          });
        }
        if (obj.key == item.path) {
          state.menuChildren = item.children;
        }
      });
      state.menuList = [].concat(list);
    },
    // 设置当前顶部菜单
    active: (state, activeIndex) => {
      state.activeIndex = activeIndex;
    },
  },
  actions: {
    // 点父节点获取当前子菜单
    setMenu({ commit }, obj) {
      commit("menuchildren", obj);
    },
    // 设置当前顶部菜单
    setActiveIndex({ commit }, activeIndex = null) {
      commit("active", activeIndex);
    },
  }
};

export default app;