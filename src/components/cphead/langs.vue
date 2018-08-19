<template>
  <div class="langs">
    <button @click="showLang = !showLang">{{lang}}</button>
    <ul class="options" v-if="showLang">
      <li :class="{'active': index === langNum}" v-for="(lang,index) in langs" :key="index" @click="changeLang(index,lang)">{{lang.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLang:false,
      langNum: 0,
      lang: "CN",
      langs: [
        { title: "CN", id: "1" },
        { title: "EN", id: "2" },
        { title: "JP", id: "3" }
      ]
    };
  },
  methods: {
    changeLang(index,lang) {
      this.lang = lang.title;
      this.showLang = false;
      this.langNum = index;
      if (index === 0) {
        this.$i18n.locale = "cn";
        this.$store.state.navNum = '首页';
      } else if (index === 1) {
        this.$i18n.locale = "en";
        this.$store.state.navNum = 'Home';
      } else if (index === 2) {
        this.$i18n.locale = "jp";
        this.$store.state.navNum = 'トップページ';
      }
      // console.log(this.$i18n.locale,this.$store.state.navNum);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./langs.scss";
</style>
