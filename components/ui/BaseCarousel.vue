<template>
  <VueSlickCarousel v-show="$vuetify.breakpoint.mdAndDown" v-bind="setting">
    <div v-for="item of itemList" :key="item.id">
      <v-img
        :lazy-src="$img(item.img, {
          quality: 20,
          format: 'webp'
        })"
        :src="$img(item.img, {
          quality: 100,
          format: 'webp'
        })"
        contain
        max-width="356"
        max-height="306"
        content-class="main-white-text position-relative"
      >
        <div class="team-block-item-content">
          <div class="d-flex justify-space-between mb-2">
            <div :class="getFontSize($breakpoints.width, 700, [16, 16, 16, 16, 16])">{{ item.name }}</div>
            <a :href="item.twitter">
              <v-img
                src="https://www.pngkey.com/maxpic/u2a9o0i1w7t4t4u2/"
                max-width="23"
                max-height="23"
              />
            </a>
          </div>
          <div :class="getFontSize($breakpoints.width, 400, [14, 14, 14, 14, 14])">{{ item.content }}</div>
        </div>
      </v-img>
    </div>
  </VueSlickCarousel>
</template>

<script>
export default {
  name: 'BaseCarousel',
  props: {
    itemList: {
      type: Array,
      default: () => [
        {
          id: 1,
          title: 'Item1',
          content: 'Content1',
          img: 'https://www.learningcontainer.com/sample-image-files-download-for-testing/'
        },
        {
          id: 2,
          title: 'Item2',
          content: 'Content2',
          img: 'https://www.learningcontainer.com/sample-image-files-download-for-testing/'
        },
        {
          id: 3,
          title: 'Item3',
          content: 'Content3',
          img: 'https://www.learningcontainer.com/sample-image-files-download-for-testing/'
        },
      ]
    }
  },
  data() {
    return {
      setting: {
        "centerMode": true,
        "autoplay": true,
        "centerPadding": "20px",
        "fade": true,
        "focusOnSelect": true,
        "infinite": true,
        "arrows": false,
        "slidesToShow": this.$vuetify.breakpoint.mdAndUp ? 2 : 1,
        "slidesToScroll": this.$vuetify.breakpoint.mdAndUp ? 2 : 1,
        "slidesPerRow": this.$vuetify.breakpoint.mdAndUp ? 2 : 1,
        "speed": 500
      },
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
