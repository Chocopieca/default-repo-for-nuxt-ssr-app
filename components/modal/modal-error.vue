<template>
  <BaseModal>
    <div
      class="text-center mb-5"
      :class="getFontSize($breakpoints.width, 700, [32, 32, 32, 32, 32])"
    >{{ modalOptions?.title }}</div>
    <div class="text-center mb-10">
      {{ modalOptions?.description}}
    </div>
    <div class="flex-center">
      <BaseButton button-size="big" @click="hideModal">Ok</BaseButton>
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
}
</script>

<style scoped lang="scss">

</style>
