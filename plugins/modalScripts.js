import Vue from 'vue';
import {mapActions, mapGetters} from "vuex";

Vue.mixin({
  computed: {
    ...mapGetters({
      modalOptions: 'modal/getModalOption'
    })
  },
  methods: {
    ...mapActions({
      hideModal: 'modal/hideModal',
      showModal: 'modal/showModal',
    }),
  },
});
