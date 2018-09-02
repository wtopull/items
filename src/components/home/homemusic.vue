<template>
  <div class="homeMusic">
    <h3>{{$t('home.hmusic')}}</h3>
    <ul>
      <li v-for="item in musicLists" :key="item.id" @click="toMusic(item)">
        <div class="musicListBox">
          <p><img :src='"http://qt.dd0519.cn/"+item.img' alt=""></p>
          <div class="musicListAuth">
            <span>{{item.name}}</span>
            <span>作者：{{item.auth}}</span>
          </div>
        </div>
        <i class="iconfont icon-sanjiaoright"></i>
      </li>
    </ul>
  </div>
</template>
<script>

import {musicList} from '../music/musicList.js';
export default {
  data() {
    return {
      musicLists: musicList
    };
  },
  methods: {
    toMusic(item) {
      this.$store.state.link = item.link;
      this.$router.push({path:"/audio",query:{auth:item.name}});
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./home.scss";
@import "./homemusic.scss";
</style>
