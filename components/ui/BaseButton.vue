<template>
  <button
    :class="getClasses"
    class="button main-white-text flex-center text-uppercase"
    :type="type"
    @click="buttonClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonColor: {
      type: String,
      default: 'default',
    },
    buttonSize: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    buttonClick() {
      if(!this.disabled) {
        this.$emit('click')
      }
    }
  },
  computed: {
    getButtonColor() {
      switch (this.buttonColor) {
        case 'transparent':
          return 'button-transparent';
        case 'border':
          return 'button-border';
        default:
          return 'button-default';
      }
    },
    getButtonSize() {
      switch (this.buttonSize) {
        case 'small':
          return 'button-small size14-weight700';
        default:
          return 'button-big size16-weight700';
      }
    },
    getClasses() {
      let classString = '';
      classString += !this.disabled ? this.getButtonColor : 'button-disabled';
      classString += ' ' + this.getButtonSize;
      return classString;
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  border-radius: 20px;
  white-space: nowrap;
  width: 100%;

  &-big {
    width: 436px;
    height: 50px;
  }

  &-small {
    width: 172px;
    height: 40px;
  }

  &-default {
    background: linear-gradient(90deg, #895EF2 7%, #19FB9B 89%);
    box-shadow: 0px 7px 20px rgba(129, 100, 234, 0.3), 0px 6px 20px rgba(117, 247, 164, 0.3), inset 0px -3px 0px #74F6A3;

    &:hover {
      box-shadow: 0px 7px 30px rgba(129, 100, 234, 0.5), 0px 6px 30px rgba(117, 247, 164, 0.5), inset 0px -3px 0px #74F6A3;
    }
  }

  &-transparent {
    background: transparent;

    div {
      color: #FFFFFF;
    }
  }

  &-border {
    background: linear-gradient(90deg, rgba(137, 94, 242, 0.05) 7%, rgba(25, 251, 155, 0.05) 89%);
    border: 1px solid #19FB9B;
  }

  &-disabled {
    background: #373737;
    color: #9B9B9B;
    cursor: default;
  }
}
</style>
