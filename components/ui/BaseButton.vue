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
        case 'chips':
          return 'button-chips';
        default:
          return 'button-default';
      }
    },
    getButtonSize() {
      switch (this.buttonSize) {
        case 'small':
          return 'button-small size14-weight700';
        case 'large':
          return 'button-large size14-weight700';
        case 'chip':
          return 'button-chip size14-weight700';
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
  border-radius: 10px;
  white-space: nowrap;
  color: #D8514B;
  width: 100%;

  &-large {
    width: 100%;
    height: 50px;
  }

  &-big {
    width: 436px;
    height: 50px;
  }

  &-small {
    width: 172px;
    height: 40px;
  }

  &-chip {
    height: 40px;
  }

  &-default {
    background: #373737;
    border: 1px solid white;

    &:hover {
      box-shadow: #37373720;
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

  &-chips {
    display: inline-block;
    border: 1px solid #c18a2c;
    border-radius: 20px;
    padding: 5px 10px;
    background: black;
    cursor: pointer;
    margin-bottom: 20px;
  }

  &-disabled {
    background: #373737;
    color: #9B9B9B;
    cursor: default;
  }
}
</style>
