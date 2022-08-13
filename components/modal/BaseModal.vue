<template>
  <div class="overlay" @click="close">
    <div
      class="modal-form"
      :style="bgStyle"
      @click.stop=""
    >
      <v-img
        :src="require('~~/assets/icons/cross-inline-icon.svg')"
        contain
        width="27"
        height="27"
        class="modal-form-close"
        @click="close"
      />
      <div class="main-white-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    bgImg: {
      type: String,
      default: './img/modal-background.png'
    }
  },
  data() {
    return {
      dialog: false,
      bgStyle: {
        'background-image': `url(${this.bgImg})`,
        'background-size': 'cover'
      }
    }
  },
  methods: {
    close() {
      this.$store.dispatch('modal/hideModal');
    }
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 0;
  z-index: 5;
  background: #00000040;
}

.modal-form {
  position: relative;
  border: 1px solid white !important;
  border-radius: 0 !important;
  background-position: bottom left;
  min-height: 500px;
  max-width: 1028px;
  padding: 50px 20px 20px 20px;
  margin: 0 auto;

  @media (min-width: 960px) {
    padding: 96px 38px 38px 38px;
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
