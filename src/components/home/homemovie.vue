<template>
  <div class="homeMovie">
    <h3>{{$t('home.hmovie')}}</h3>
    <ul>
      <li v-for="(item,index) in moviedoc" :key="index">
        <div class="homeMovieDoc"><img class="show" :src="'../../../static/img/'+item.img+'.jpg'" @click="toVideo"/>
          <p @click="showpop(index,item)">
            <span>{{item.name}}</span>
            <span>{{item.score}}</span>
          </p>
        </div>
        <div class="homeMoviePop" v-if="item.choose" @click="item.choose = !item.choose">
          <p>afdsaf</p>
          <p>afdsaf</p>
          <p>afdsaf</p>
        </div>
      </li>
    </ul>
  </div>
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
    toVideo(){
      this.$router.push("/video");
    },
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
