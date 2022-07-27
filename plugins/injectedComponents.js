import Vue from "vue";

import LazyHydrate from 'vue-lazy-hydration';

import VueSlickCarousel from "./vue-slick-carousel";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.mixin({
    components: {
        LazyHydrate,
        VueSlickCarousel
    },
    mounted() {
        AOS.init({ })
    }
})
