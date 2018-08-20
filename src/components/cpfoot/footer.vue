<template>
  <div class="footer">
    <ul class="footerNav">
      <li :class=" {'active': item == navNum}" v-for="(item,index) in $t('navs')" :key="index" @click="change(item)">{{item}}</li>
      <!-- <router-link :class="{'active': item == navNum}" v-for="(item,index) in $t('navs')" :key="index" :to="routerTo" tag='li' @click="change(index,item)">{{item}}</router-link> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerTo: "home",
      navNum: "首页"
    };
  },
  updated() {
    // this.navNum = this.$store.state.navNum;
  },
  methods: {
    change(item) {
      if (item === "首页" || item === "Home" || item === "トップページ") {
        this.routerTo = "home";
        this.navNum = item;
        this.$router.push("/home");
      } else if (item === "电影" || item === "Movie" || item === "映画") {
        this.routerTo = "movie";
        this.navNum = item;
        this.$router.push("/movie");
      } else if (item === "音乐" || item === "Music" || item === "音楽") {
        this.routerTo = "music";
        this.navNum = item;
        this.$router.push("/music");
      } else if (item === "我的" || item === "My" || item === "私の") {
        this.routerTo = "my";
        this.navNum = item;
        this.$router.push("/my");
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./footer.scss";
</style>