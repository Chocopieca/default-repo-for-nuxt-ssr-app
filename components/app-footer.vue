<template>
  <footer class="main-dark-gray">
    <v-container>
      <v-row no-gutters justify="space-between">
        <v-col lg="auto" class="pa-0 mb-5 mb-lg-0 flex-center">
          <nuxt-link to="/">
            <Logo size="middle"/>
          </nuxt-link>
        </v-col>
        <v-col class="">
          <NavList class="justify-space-around my-5 my-lg-10" type="none" is-upper-case/>
        </v-col>
        <v-col cols="12" lg="auto" class="flex-center size14-weight400">
          © 2022, All Rights Reserved by Kopyl Maksym
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  components: {
    Logo: () => import('./logo'),
    NavList: () => import('./nav-list'),
  },
}
</script>

<style scoped lang="scss">
footer {
  border-top: 1px solid white;
  box-shadow: inset #000000 0 0 20px 3px;
}
</style>
