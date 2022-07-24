import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Vue from 'vue';

Vue.mixin({
    mounted() {
        AOS.init({ })
    }
});
