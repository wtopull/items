<template>
<div class="homeDoc">
  <h3>{{$t('home.hdoc')}}</h3>
  <ul>
    <li v-for="item in 6" :key="item.id">haa</li>
  </ul>
  <p @click="haa">haaaaaa......</p>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    haa(){
      this.$axios.get("/users").then(res => {
        console.log(res.data.data.data[0].username)
      })
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./home.scss";
@import "./homedoc.scss";
</style>