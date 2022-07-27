<template>
  <div v-show="isShow && modalType">
    <ThankYouModal v-show="modalType === 'ThankYouModal'"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "IndexModal",
  components: {
    ThankYouModal: () => import('./thank-you-modal'),
  },
  computed: {
    ...mapGetters({
      isShow: 'modal/checkModal',
      modalType: 'modal/getModalType',
    })
  },
}
</script>
