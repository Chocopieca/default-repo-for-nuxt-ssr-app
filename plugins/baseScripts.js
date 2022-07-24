import Vue from 'vue';

Vue.mixin({
  methods: {
    getFontSize(displayWidth, weight, sizes) {
      if(sizes.length === 5) {
        if(displayWidth >= 1904) {
          return `size${sizes[0]}-weight${weight}`;
        } else if(displayWidth < 1904 && displayWidth >= 1264) {
          return `size${sizes[1]}-weight${weight}`;
        } else if(displayWidth < 1264 && displayWidth >= 960) {
          return `size${sizes[2]}-weight${weight}`;
        } else if(displayWidth < 960 && displayWidth >= 600) {
          return `size${sizes[3]}-weight${weight}`;
        } else if(displayWidth < 600) {
          return `size${sizes[4]}-weight${weight}`;
        }
      }
    },
    _srcset(src, height = '100%') {
      return this.$img.getSizes(src, {
        sizes: 'xs:400px sm:400px md:400px lg:400px xl:400px',
        modifiers: {
          format: 'webp',
          quality: 100,
          height
        },
      });
    },
  },
});
