<template>
  <div>
    <div v-show="title" class="size18-weight700 mb-2">{{ title.toUpperCase() }}</div>
    <div class="textarea-border">
      <textarea
        v-model="internalValue"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        @change="$emit('change', $event)"
        @keydown.enter="$emit('enter')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTextarea",
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
.textarea-border {
  $height: 100px;
  $border: 1px;
  background: linear-gradient(90deg, #895EF2 7%, #19FB9B 89%);
  border-radius: 20px;
  padding: $border;
  height: $height;
  box-sizing: border-box;

  textarea {
    background: #121212;
    border-radius: inherit;
    color: white;
    padding: 20px 20px;
    width: 100%;
    height: $height - $border - 1;
    resize: none;
  }
}
</style>
