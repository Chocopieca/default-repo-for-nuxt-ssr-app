<template>
  <div>
    <div v-show="title" class="size16-weight700 mb-1 main-red-text">{{ title }}</div>
    <div class="input-border">
      <v-text-field
        v-model="internalValue"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :max-width="width"
        :rules="rules"
        @change="$emit('change', $event)"
        @keydown.enter="$emit('enter')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    title: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    internalValue: {
      get() {return this.value},
      set(v){ this.$emit("input", v)}
    },
  }
}
</script>

<style scoped lang="scss">
::v-deep.input-border {
  width: 100%;

  input {
    width: 100%;
    height: 48px;
    border-radius: 10px;
    color: white;
  }
}
</style>
