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
    token: ''
  },
})

const getters = {
  getUserInfo: (state, getters, rootState) => {
    return state.userInfo || {}
  },
}

const mutations = {
  SEX(state, status) {
    state.userInfo.sex = status;
  },
  TOKEN(state, status) {
    state.userInfo.token = status;
  }
}

const actions = {
  setSex({ state, commit }, product) {
    commit('SEX', product)
  },
  setToken({ state, commit }, product) {
    commit('TOKEN', product)
  },
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