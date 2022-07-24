<template>
  <v-dialog
    v-model="dialog"
    max-width="1028px"
  >
    <v-card color="#121212" class="modal-form">
      <v-img
        :src="require('../../assets/icons/cross-inline-icon.svg')"
        contain
        width="27"
        height="27"
        class="modal-form-close"
        @click="toggle"
      />
      <div class="main-white-text">
        <slot></slot>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BaseModal",
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    toggle() {
      this.dialog = !this.dialog
    }
  }
}
</script>

<style scoped lang="scss">
.modal-form {
  position: relative;
  border: 1px solid white !important;
  border-radius: 0 !important;
  background-position: bottom left;
  min-height: 500px;
  padding: 50px 20px 20px 20px;

  @media (min-width: 960px) {
    padding: 96px 144px 98px 38px;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    border: 10px solid white;
    border-left: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  &-close {
    position: absolute;
    right: 25px;
    top: 25px;
    z-index: 1;
    cursor: pointer;
  }
}
</style>
