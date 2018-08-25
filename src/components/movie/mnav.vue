<template>
  <div class="mnav">
    <ul>
      <li :class=" {'active': item == navNum}" v-for="(item,index) in $t('movie')" :key="index" @click="change(item)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import {moviedoc} from './movie'
export default {
  data() {
    return {
      navNum: "电影"
    };
  },
  methods: {
    change(item){
      moviedoc.map(c =>{
        c.choose = false;
      })
      if (item === "电影" || item === "Movie" || item === "映画") {
        this.navNum = item;
        this.$router.push("/listm");
      } else if (item === "电视剧" || item === "TV play" || item === "ドラマ") {
        this.navNum = item;
        this.$router.push("/listt");
      } else if (item === "动漫" || item === "Comic" || item === "アニメ") {
        this.navNum = item;
        this.$router.push("/listc");
      } else if (item === "好评" || item === "Praise" || item === "好評の") {
        this.navNum = item;
        this.$router.push("/listp");
      } else if (item === "综艺" || item === "Variety" || item === "バラエティ") {
        this.navNum = item;
        this.$router.push("/listv");
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./movie.scss";
@import "./mnav.scss";
</style>
