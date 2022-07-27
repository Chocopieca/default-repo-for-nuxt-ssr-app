<template>
  <span>
    <label class="d-flex justify-start align-center">
      <span class="mr-1">
        <input v-model="isChecked" type="checkbox" :name="name" :value="value">
        <v-img v-show="!isChecked" :src="require('@/assets/icons/checkbox.png')" contain width="50" height="50"/>
        <v-img v-show="isChecked" :src="require('@/assets/icons/active-checkbox.png')" contain width="50" height="50"/>
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
