<template>
  <v-container fluid class="header main-dark-gray">
    <v-container v-show="$breakpoints.width > 960" class="position-relative h-100 pa-0">
      <header class="d-flex justify-space-between align-center pa-2">
        <nuxt-link to="/">
          <Logo size="middle"/>
        </nuxt-link>
        <div class="flex-center">
          <NavList type="row" is-upper-case :nav-link="linkList" class="mr-12"/>
        </div>
      </header>
    </v-container>

    <v-container v-show="$breakpoints.width < 960" class="position-relative h-100 pa-0">
      <header class="d-flex justify-space-between align-center pa-2">
        <nuxt-link to="/">
          <Logo size="middle"/>
        </nuxt-link>
        <div class="d-flex">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
      </header>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      content="flex-space-between-column"
    >
      <v-list nav dense>
        <v-list-item class="mb-10">
          <nuxt-link to="/">
            <Logo size="big"/>
          </nuxt-link>
        </v-list-item>
        <v-divider class="mb-10"/>
        <v-list-item-group active-class="main-brown">
          <v-list-item v-for="link of linkList" :key="link.id">
            <nuxt-link :to="link.to">
              <v-list-item-title class="text-uppercase main-white-text">{{ link.title }}</v-list-item-title>
            </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "AppHeader",
  components: {
    Logo: () => import('./logo'),
    NavList: () => import('./nav-list'),
  },
  data() {
    return {
      drawer: false,
      linkList: [
        {
          id: 1,
          title: 'All movies',
          to: '/'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid white;
  box-shadow: inset #000000 0 0 20px 3px;
}
</style>
