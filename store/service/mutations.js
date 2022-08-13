export default {
  setSidebarDrawer(state) {
    state.sidebarDrawer = !state.sidebarDrawer;
  },
  setToken(state, payload = '') {
    state.userToken = payload;
  },
};
