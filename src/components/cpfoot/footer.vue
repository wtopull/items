<template lang='jade'>
.footer
  ul.footerNav
    li(:class=" {'active': $route.name == index}", v-for="(item,index) in $t('navs')", @click='change(item)') {{item}}
</template>
<script>
export default {
  data() {
    return {
      navNum: "首页"
    };
  },
  methods: {
    change(item) {
      if (item === "首页" || item === "Home" || item === "トップページ" && this.$route.name === 'home') {
        this.navNum = item;
        this.$router.push("/home");
      } else if (item === "电影" || item === "Movie" || item === "映画" && this.$route.name === 'listm') {
        this.navNum = item;
        this.$router.push("/movie");
      } else if (item === "音乐" || item === "Music" || item === "音楽" && this.$route.name === 'music') {
        this.navNum = item;
        this.$router.push("/music");
      }else if (item === "其它" || item === "Other" || item === "その他" && this.$route.name === 'Other') {
        this.navNum = item;
        this.$router.push("/other");
      } else if (item === "我的" || item === "My" || item === "私の" && this.$route.name === 'my') {
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