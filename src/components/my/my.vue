<template>
  <div class="my overflow">
    <div class="myTop">
      <div class="img">
        <img src="/static/img/6.jpg" alt="">
      </div>
      <div>
        <p><span>账号：</span>{{$store.state.username}}</p>
        <p><span>昵称：</span>{{$store.state.nickname}}</p>
      </div>
    </div>
    <div class="myList">
      <ul>
        <li v-for="item in 6">ii</li>
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
        {}
      ]
    }
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      this.$axios.get("/users").then(res => {
        res.data.data.data.forEach(item => {
          if(item.username != this.username){
            console.log("账号不存在！");
          }else if(item.password != this.password){
            console.log("密码错误！");
          }
        });
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
