<template>
  <div class="listc">
    <ul>
      <li v-for="(item,index) in moviedocs" :key="index">
        <div class="homeMovieDoc">
          <img class="show" :src="'../../../static/img/'+item.img+'.jpg'">
          <p @click="showpop(index,item)">
            <span>{{item.name}}</span>
            <span>{{item.score}}</span>
          </p>
        </div>
        <div class="homeMoviePop" v-if="item.choose" @click="item.choose = !item.choose">
          <p>动漫</p>
          <p>动漫</p>
          <p>动漫</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {moviedoc} from './movie'
export default {
  data() {
    return {
      showMoviePop: false,
      moviedocs:moviedoc
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
@import "../home/homemovie.scss";
@import "./listm.scss";
</style>
