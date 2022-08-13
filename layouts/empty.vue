<template>
  <div class="wrapper">
    <v-fade-transition mode="out-in">
      <nuxt />
    </v-fade-transition>
    <client-only>
      <IndexModal />
    </client-only>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
  components: {
    IndexModal: () => import('~/components/modal/index-modal'),
  },
}
</script>

<style scoped>
.wrapper {
  background: url("https://techbeasts.com/wp-content/uploads/2016/05/465337.jpg");
  background-size: cover;
}
</style>
