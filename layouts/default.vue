<template>
  <v-app class="wrapper">
    <div class="flex-space-between-column h-100">
      <AppHeader />
      <Nuxt />
      <AppFooter />
    </div>
    <client-only>
      <IndexModal />
    </client-only>
    <AppSidebar />
    <BaseButtonUp />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader: () => import('../components/app-header'),
    AppFooter: () => import('../components/app-footer'),
    AppSidebar: () => import('~/components/app-sidebar'),
    IndexModal: () => import('~/components/modal/index-modal'),
    BaseButtonUp: () => import('~/components/ui/BaseButtonUp'),
  },
  async loadData() {
    try {
      // some loading
    } catch (e) {
      this.showModal({
        type: 'modal-error',
        options: {
          title: 'Error',
          description: e,
        }
      })
    }
  }
}
</script>
