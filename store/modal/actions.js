export default {
  showModal({ commit }, data) {
    commit('setModalType', data.type)
    commit('setOptions', data.options)
    commit('showModal')
  },
  hideModal({ commit }) {
    commit('hideModal')
  }
};
