<template>
  <div class="homeDoc">
    <h3>{{$t('home.hdoc')}}</h3>
    <ul>
      <li v-for="item in 6" :key="item.id">haa</li>
    </ul>
  </div>
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