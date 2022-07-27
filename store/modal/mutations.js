export default {
  showModal(state) {
    state.isShow = true;
  },
  hideModal(state) {
    state.isShow = false;
    state.modalType = '';
    state.options = null;
  },
  setModalType(state, type) {
    state.modalType = type;
  },
  setOptions(state, options) {
    state.options = options;
  }
};
