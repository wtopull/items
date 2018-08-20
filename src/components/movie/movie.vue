<template>
  <div class="movie overflow">
    <mnav></mnav>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import mnav from './mnav.vue'
export default {
  data() {
    return {};
  },
  methods: {},
  components:{
    mnav
  }
};
</script>
<style lang='scss' scoped>
@import "./movie.scss";
</style>
