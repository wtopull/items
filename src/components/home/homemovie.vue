<template lang="jade">
.homeMovie
  h3 {{$t('home.hmovie')}}
  ul
    li(v-for='(item,index) in moviedoc', :key='index')
      .homeMovieDoc
        img.show(:src="'../../../static/img/'+item.img+'.jpg'")
        p(@click='showpop(index,item)')
          span {{item.name}}
          span {{item.score}}
      .homeMoviePop(v-if='item.choose', @click='item.choose = !item.choose')
        p afdsaf
        p afdsaf
        p afdsaf
</template>
<script>
export default {
  data() {
    return {
      showMoviePop: false,
      moviedoc: [
        {
          name: "上山打虎",
          score: "9.0分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "7.0分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "6.3分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "9.9分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "9.0分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "9.0分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "9.0分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "9.0分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "9.0分",
          img: "hot_music_bg_2x",
          choose: false
        },
        {
          name: "上山打虎",
          score: "9.0分",
          img: "hot_music_bg_2x",
          choose: false
        }
      ]
    };
  },
  methods: {
    showpop(index, item) {
      item.choose = !item.choose;
      this.showMoviePop = item.choose;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./home.scss";
@import "./homemovie.scss";
</style>
