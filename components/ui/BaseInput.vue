<template>
  <div>
    <div v-show="title" class="size16-weight700 mb-2">{{ title }}</div>
    <div class="input-border">
      <input
        v-model="internalValue"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :max-width="width"
        @change="$emit('change', $event)"
        @keydown.enter="$emit('enter')"
      >
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
      default: '0,0'
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
.input-border {
  $border: 1px;
  background: linear-gradient(90deg, #895EF2 7%, #19FB9B 89%);
  border-radius: 20px;
  padding: $border;

  input {
    background: #121212;
    border-radius: inherit;
    color: white;
    padding: 0 20px;
    height: 48px;
    width: 100%;
  }
}
</style>
