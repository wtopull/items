<template>
  <div class="homeMusic">
    <h3>{{$t('home.hmusic')}}</h3>
    <ul>
      <li v-for="item in 6" :key="item.id">haa</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
@import "./home.scss";
@import "./homemusic.scss";
</style>
