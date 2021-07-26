/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-23 10:28:47
 * @FilePath: /ucenter-messageflat-web-view/src/store/modules/user.js
 */

const state = () => ({
  userInfo: {
    name: "李大玄",
    token: '1234567890'
  },
})

const getters = {
  getUserInfo: (state, getters, rootState) => {
    return state.userInfo || {}
  },
}

const actions = {
  addSex({ state, commit }, product) {
    commit('setSex', product)
  }
}

const mutations = {
  setSex(state, status) {
    state.userInfo.sex = status;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
  }
}