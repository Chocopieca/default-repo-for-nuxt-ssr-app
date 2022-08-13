<template>
  <v-sheet color="cyan" elevation="12">
    <v-sparkline
      :labels="labels"
      :value="value"
      color="white"
      line-width="2"
      padding="16"
    />
  </v-sheet>
</template>

<script>
export default {
  name: "BaseSparkline",
  props: {
    labels: {
      type: Array,
      default: () => [ '12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm' ],
    },
    value: {
      type: Array,
      default: () => [ 200, 375, 410, 390, 310, 460, 250, 240 ],
    },
  }
}
</script>

<style scoped>

</style>
