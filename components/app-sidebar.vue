<template>
  <v-navigation-drawer
    :value="isDrawer"
    absolute
    right
    temporary
    class="header-sidebar"
  >
    <div
      class="text-capitalize main-dark-gray-text pa-2"
      :class="getFontSize($breakpoints.width, 700, [32, 32, 32, 32, 32])"
    >
      {{$route.name}}
    </div>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item-group active-class="main-blue">
        <v-list-item v-for="link of linkList" :key="link.id" :to="link.to">
          <v-list-item-title class="text-uppercase main-white-text">{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template #append>
      <div class="flex-center mb-5">
        <v-btn icon color="white"><v-icon size="40">mdi-exit-to-app</v-icon></v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AppSidebar",
  data() {
    return {
      linkList: [
        { id: 1, title: 'Dashboard', to: '/dashboard' },
        { id: 2, title: 'Orders', to: '/orders' },
        { id: 3, title: 'Analytics', to: '/analytics' },
      ],
    }
  },
  computed: {
    ...mapGetters({isDrawer: 'service/isDrawer'})
  },
  methods: {
    ...mapActions({setSidebarDrawer: 'service/setSidebarDrawer'})
  }
}
</script>

<style scoped lang="scss">
.header-sidebar {
  background-image: url("https://cdn.shopify.com/s/files/1/0358/1661/products/Shop_B_Darling_Wilder_Mountain_Wallpaper_-_The_Project_Nursery_Shop_71f1c929-f1d8-472b-bdc5-812dbd91a71c_2400x.png?v=1615992550");
  background-size: cover;
}
</style>
