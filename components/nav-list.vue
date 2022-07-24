<template>
  <nav :class="getClasses" class="links">
    <nuxt-link v-for="(link, index) of navLink" :key="index" :to="link.to">
      {{ link.title }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "NavList",
  props: {
    type: {
      type: String,
      default: "row",
    },
    isUpperCase: {
      type: Boolean,
      default: false,
    },
    navLink: {
      type: Array,
      default: () => [
        {
          title: 'Home page',
          to: '#',
        },
        {
          title: 'About',
          to: '#',
        },
        {
          title: 'Contact',
          to: '#',
        },
      ]
      ,
    },
  },
  computed: {
    getListClasses() {
      switch (this.type) {
        case 'row':
          return `${this.getFontSize(this.$breakpoints.width, 400, [14, 12, 12, 12, 12])} links-row`;
        case 'column':
          return `${this.getFontSize(this.$breakpoints.width, 400, [14, 12, 12, 12, 12])} links-column`;
        case 'wrap':
          return `${this.getFontSize(this.$breakpoints.width, 400, [14, 12, 12, 12, 12])} links-wrap`;
        default:
          return 'links-default';
      }
    },
    getClasses() {
      let classString = 'd-flex';
      classString += this.isUpperCase ? ' text-uppercase' : '';
      classString += ' ' + this.getListClasses;
      return classString;
    },
  }
}
</script>

<style scoped lang="scss">
.links {
  display: flex;
  white-space: nowrap;

  a {
    color: white;
    text-align: center;

    &:hover {
      color: #FFFFFF80;
    }

    &:nth-last-child(1) {
      margin-right: 0;
    }
  }

  &-row {
    justify-content: space-between;
    align-items: center;

    a {
      margin-right: 40px;
    }
  }

  &-column {
    flex-direction: column;

    a {
      padding: 8px 16px;
      border-radius: 8px;
      margin-bottom: 8px;

      &.nuxt-link-active {
        background: linear-gradient(131.06deg, rgba(48, 46, 46, 0.23) 2.97%, rgba(255, 255, 255, 0) 101.17%);
      }
    }
  }

  &-wrap {
    height: 110px;
    align-items: start;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    a {
      margin-bottom: 5px;
      margin-right: 40px;
    }
  }

  &-default {
    justify-content: center;
    align-items: center;

    a {
      text-align: center;
    }
  }
}
</style>
