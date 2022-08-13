<template>
  <div>
    <v-range-slider
      :value="value"
      :max="max"
      :min="min"
      hide-details
      class="align-center"
      @change="rebalanceRange = $event"
    >
      <template #prepend>
        <v-text-field
          :value="rebalanceRange[0]"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(rebalanceRange, 0, $event)"
        />
      </template>
      <template #append>
        <v-text-field
          :value="rebalanceRange[1]"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(rebalanceRange, 1, $event)"
        />
      </template>
    </v-range-slider>
  </div>
</template>

<script>
export default {
  name: "BaseRangeSlider",
  props: {
    value: {
      type: Array,
      default: () => [-20, 70],
      required: true,
      validator: (value) => {
        return value.length === 2;
      }
    },
    min: {
      type: Number,
      default: -500
    },
    max: {
      type: Number,
      default: 500
    },
  },
  computed: {
    rebalanceRange: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style scoped>

</style>
