<template>
  <div v-show="isShow && modalType">
    <ModalThankYou v-show="modalType === 'modal-thank-you'"/>
    <ModalConfirmation v-show="modalType === 'modal-confirmation'"/>
    <ModalError v-show="modalType === 'modal-error'"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "IndexModal",
  components: {
    ModalThankYou: () => import('./modal-thank-you'),
    ModalConfirmation: () => import('./modal-confirmation'),
    ModalError: () => import('./modal-error'),
  },
  computed: {
    ...mapGetters({
      isShow: 'modal/checkModal',
      modalType: 'modal/getModalType',
    })
  },
}
</script>
