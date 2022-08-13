export default {
  setSidebarDrawer({ commit }) {
    commit('setSidebarDrawer');
  },
  setTokenFromLocalStore({ commit }) {
    const token = localStorage.getItem('token');
    if(token) commit('setToken', token);
  },
  async login({ commit }, payload) {
    try {
      const { user, saveUser } = payload
      const res = await this.$services.global.login(user);
      if (saveUser && res) {
        localStorage.setItem('token', res);
      }
      commit('setToken', res);
    } catch (e) {
      throw new Error(`login: ${e}`);
    }
  },
  async logout({ commit }) {
    try {
      await this.$services.global.logout()
      localStorage.removeItem('token');
      commit('setToken', '');
    } catch (e) {
      throw new Error(`logout: ${e}`);
    }
  },
};
