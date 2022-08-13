<template>
  <span>
    <label class="d-flex justify-start align-center">
      <span class="mr-1">
        <input v-model="isChecked" type="checkbox" :name="name" :value="value">
        <v-icon v-show="!isChecked" class="grey">mdi-circle</v-icon>
        <v-icon v-show="isChecked" class="green">mdi-circle</v-icon>
      </span>
      {{ title }}
    </label>
  </span>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isChecked: this.checked,
    }
  },
}
</script>

<style scoped>
input[type=checkbox] {
 display: none;
}
</style>
