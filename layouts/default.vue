<template>
  <v-app class="wrapper">
    <AppHeader />
    <Nuxt />
    <AppFooter />
    <client-only>
      <IndexModal />
    </client-only>
    <BaseButtonUp />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader: () => import('~/components/app-header'),
    AppFooter: () => import('~/components/app-footer'),
    IndexModal: () => import('~/components/modal/index-modal'),
    BaseButtonUp: () => import('~/components/ui/BaseButtonUp'),
  },
}
</script>
