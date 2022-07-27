<template>
  <v-img
    :src="$img(src, {
      height: getSize.height,
      width: getSize.width,
      quality: 100,
      format: 'webp'
    })"
    :lazy-src="$img(src, {
      height: getSize.height,
      width: getSize.width,
      quality: 20,
      format: 'webp'
    })"
    contain
    :max-width="getSize.width"
    :max-height="getSize.height"
  />
</template>

<script>
export default {
  name: "AppLogo",
  props: {
    size: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: '~~/assets/logo.png'
    }
  },
  computed: {
    getSize() {
      switch (this.size) {
        case 'small':
          return {
            width: '70',
            height: '50',
          }
        case 'middle':
          return {
            width: '127',
            height: '48',
          }
        case 'big':
          return {
            width: '213',
            height: '200',
          }
        default:
          return {
            width: '100%',
            height: '100%'
          }
      }
    },
  }
}
</script>
