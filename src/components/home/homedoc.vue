<template lang='jade'>
.homeDoc
  h3 {{$t('home.hdoc')}}
  ul
    li(v-for='item in 6', :key='item.id') haa
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
@import "./home.scss";
@import "./homedoc.scss";
</style>