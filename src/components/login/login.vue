<template>
  <div class="login">
    <div class="loginBox">
      <div class="loginBg"> </div>
      <div class="loginBtn">
        <p><input type="text" v-model="username" placeholder="请输入您的用户名"></p>
        <p><input type="password" v-model="password" placeholder="请输入您的密码"></p>
        <p>
          <button @click="login">Login</button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "huiyuan101",
      password: "11211121"
    };
  },
  methods:{
    login(){
      let config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      };
      let requestParam = JSON.stringify({
        username: this.username,
        password: this.password,
      });
      this.$axios.post("/users/login",requestParam,config).then(res => {
        console.log(121324654654564654)
      });

      // if(this.username === this.$store.state.username && this.password === this.$store.state.password){
      //   this.$loading.show({number:"a"});
      //   setTimeout(() => {
      //     this.$router.push("/home");
      //     localStorage.setItem("loginstaus",true);
      //     this.$loading.hide();
      //   },1000)
      // }else if(this.username !== this.$store.state.username){
      //   this.$pop.show({ error: "", title: "温馨提示", content: "您输入的账号不存在", content1: '', content2: '', number: 1 });
      // }else if(this.password !== this.$store.state.password){
      //   this.$pop.show({ error: "", title: "温馨提示", content: "您输入的密码不正确", content1: '', content2: '', number: 1 });
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.loginBox {
  position: fixed;
  overflow: hidden;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  margin-top: -350px;
  width: 500px;
  min-height: 555px;
  z-index: 10;
  right: 140px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 16px -5px #070707;
  @at-root .loginBg {
    background: url(../../../static/img/loginBg.jpg);
    width: 100%;
    height: 312px;
    overflow: hidden;
  }
  @at-root .loginBtn {
    width: 100%;

    text-align: center;
    & input,
    button {
      width: 370px;
      height: 48px;
      line-height: 48px;
      overflow: hidden;
      padding: 0 15px;
      border-radius: 5px;
      margin: 0 auto 15px;
      font-size: 16px;
    }
    & input {
      border: 1px solid #f37474 !important;
    }
    & button {
      width: 402px;
      background-color: #50e3ce;
      text-align: center;
      color: #fff;
      border: none;
      outline: none;
    }
  }
}
</style>
