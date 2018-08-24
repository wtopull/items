<template lang='jade'>
.home.overflow
  ul
    li
      img(src='../../../static/img/hot_music_bg_2x.jpg')
  homedoc
  homemusic
  homemovie
</template>
<script>
import homedoc from "./homedoc.vue";
import homemovie from "./homemovie.vue";
import homemusic from "./homemusic.vue";
export default {
  data() {
    return {
      a: 1
    };
  },
  methods: {},
  components: {
    homedoc,
    homemovie,
    homemusic
  }
};
</script>
<style lang='scss' scoped>
@import "./home.scss";
</style>
