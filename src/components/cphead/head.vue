<template >
  <div class="head">
    <ul class="headTitle">
      <li><i class="iconfont icon-left" v-if="$route.name !== 'Home'" @click="toHome"></i></li>
      <li><span class="span">{{$t('navs.'+$route.name)}}</span></li>
      <li><langs></langs></li>
    </ul>
  </div>
</template>
<script>
import langs from "./langs.vue";
export default {
  data() {
    return {};
  },
  components: {
    langs
  },
  methods:{
    toHome(){
      this.$router.push("/Home");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./head.scss";
</style>

