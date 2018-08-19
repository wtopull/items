<template>
  <div class="footer">
    <ul class="footerNav">
      <!-- <li :class=" {'active': item == navNum}" v-for="(item,index) in $t('navs')" :key="index" @click="change(index,item)">{{item}}</li> -->
      <router-link :class="{'active': item == navNum}" v-for="(item,index) in $t('navs')" :key="index" to='/' tag='li' @click="change(index,item)">{{item}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navNum: '首页'
    };
  },
  updated(){
    this.navNum = this.$store.state.navNum;
    // console.log("navNum",this.navNum)
    // console.log("store",this.$store.state.navNum);
  },
  methods:{
    change(index,item){
      this.navNum = item;
      console.log(this.navNum,item)
    }
  }
};
</script>
<style lang='scss' scoped>
@import './footer.scss'
</style>