<template>
  <div class="my overflow">
    <div class="myTop">
      <div class="img">
        <img src="/static/img/6.jpg" alt="">
      </div>
      <div class="details">
        <p><span>账号：</span>{{$store.state.username}}</p>
        <p><span>昵称：</span>{{$store.state.nickname}}</p>
      </div>
    </div>
    <div class="myList">
      <ul>
        <li v-for="item in lists">
          <span><i class="iconfont" :class="item.icon"></i>{{item.name}}</span>
          <i class="you iconfont icon-you"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:"huiyuan101",
      password:"11211121",
      lists:[
        {"name":"会员中心","icon":"icon-cash"},
        {"name":"安全设置","icon":"icon-creditcard"},
        {"name":"消息管理","icon":"icon-laba"},
        {"name":"设置","icon":"icon-lock"},
      ]
    }
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      this.$axios.get("/users").then(res => {
        
        this.$store.state.username = res.data.data.data[0].username;
        this.$store.state.nickname = res.data.data.data[0].nicknume;
      })
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./my.scss";
</style>
