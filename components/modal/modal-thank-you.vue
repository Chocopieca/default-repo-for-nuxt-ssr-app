<template>
  <div>
    <BaseModal bg-img="./img/modal-background-subscribe.png">
      <div
        class="main-red-text text-center mb-3"
        :class="getFontSize($breakpoints.width, 700, [32, 32, 32, 32, 32])"
      >Спасибо</div>
    </BaseModal>
  </div>
</template>

<script>
export default {
  name: "ThankYouModal",
  components: {
    BaseModal: () => import('./BaseModal'),
  },
}
</script>

<style scoped lang="scss">
.subscribe-form {

}
</style>
