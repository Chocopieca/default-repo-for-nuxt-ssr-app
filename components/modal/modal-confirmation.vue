<template>
  <BaseModal>
    <div
      class="text-center mb-10"
      :class="getFontSize($breakpoints.width, 700, [32, 32, 32, 32, 32])"
    >Are you sure ?</div>
    <div class="flex-center">
      <BaseButton
        button-size="large"
        class="mr-5"
        @click="hideModal"
      >No</BaseButton>
      <BaseButton
        button-size="large"
        class="mr-5"
        @click="confirmationFunction"
      >Yes</BaseButton>
    </div>
  </BaseModal>
</template>

<script>
export default {
  name: "ThankYouModal",
  components: {
    BaseModal: () => import('./BaseModal'),
    BaseButton: () => import('~~/components/ui/BaseButton'),
  },
  methods: {
    async confirmationFunction() {
      try {
        await this.modalOptions.func(this.options.arg);
        this.hideModal();
      } catch (e) {
        console.log(e.message);
        this.showModal({
          type: 'modal-error',
          options: {
            title: 'Error',
            description: e,
          }
        })
      }
    },
  }
}
</script>

<style scoped lang="scss">
.subscribe-form {

}
</style>
