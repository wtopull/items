<template>
  <div class="pop" v-show="openSimple" @click="closeSimple">
    <ul class="error" v-if="number === '10'">
      <li>
        <i class="iconfont icon-gantanhao"></i>{{error}}</li>
    </ul>
    <ul class="loginSuccess num1" v-if="number =='1'">
      <li class="title">
        <span></span>
        <p>{{title}}</p>
        <span>
          <i class="iconfont icon-cuo transition"></i>
        </span>
      </li>
      <li class="content">
        <p>
          <i class="iconfont icon-gantanhao"></i>{{content}}</p>
      </li>
      <li class="button">
        <button class="logoAffirm" @click="openSimple = false">确认</button>
      </li>
    </ul>
    <!-- 3秒后自动关闭 -->
    <ul class="loginSuccess num2" v-if="number =='2'">
      <li class="content">{{content}}</li>
    </ul>
    <!-- 时间到弹窗 -->
    <ul class="loginSuccess num3" v-if="number =='3'">
      <li class="title">
        <span></span>
        <p>{{title}}</p>
        <span>
          <i class="iconfont icon-cuo transition"></i>
        </span>
      </li>
      <li class="content">
        <p>{{content1}}期已截止</p>
        <p>当前期号
          <b>{{content2}}</b>
        </p>
        <p>投注时请注意期号!</p>
      </li>
      <li class="button">
        <button class="logoAffirm" @click="openSimple = false">确认</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openSimple: true,
      setInter: null
    };
  },
  props: {
    error: String,
    title: String,
    content: String,
    content1: String,
    content2: String,
    number: String,
  },
  mounted() {
    this.three();
  },
  methods: {
    closeSimple() {
      this.$pop.hide();
    },
    //1.5秒后自动关闭
    three() {
      if (this.number === "2") {
        clearInterval(this.setInter);
        this.setInter = setInterval(() => {
          this.closeSimple();
          clearInterval(this.setInter);
        }, 1500);
      }
      if (this.number === "3" || this.number === "10") {
        clearInterval(this.setInter);
        this.setInter = setInterval(() => {
          this.closeSimple();
          clearInterval(this.setInter);
        }, 3000);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
.pop {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20180608;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  & ul {
    min-width: 300px;
    max-width: 500px;
    background: #fff;
    border-radius: 4px;
    @extend %flex;
    @extend %fdc;
    @extend %sbetween;
    & .title {
      @extend %flex, %aitems, %sbetween;
      background: #50e3ce;
      color: #fff;
      font-size: 16px;
      height: 40px;
      border: 1px solid #50e3ce;
      border-radius: 4px 4px 0px 0px;
      border-bottom: 0px solid #ddd;
      & span {
        @extend %faj;
        width: 10%;
        height: 40px;
      }
      & p {
        width: 80%;
        height: 40px;
      }
      & i {
        width: 26px;
        height: 26px;
        font-size: 26px;
      }
      & i.transition:hover {
        transition: All 4s ease-in-out;
        transform: rotate(3600deg);
      }
    }
    & .content {
      @extend %faj;
      font-size: 14px;
      min-height: 118px;
      & i {
        color: rgb(175, 58, 49);
        font-size: 32px;
        margin-right: 18px;
      }
    }
    & .button {
      @extend %flex;
      @extend %sbetween;
      border-top: 1px solid #ddd;
      & button {
        width: 100%;
        border: none;
        background: none;
        outline: none;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
      }
      & .logoAffirm {
        width: 100%;
        color: #50e3ce;
        text-align: center;
      }
    }
  }
  & .loginSuccess {
    & h4 {
      height: 28px;
      line-height: 28px;
      color: #fa7e00;
    }
    & p {
      height: 70px;
      @extend %faj;
    }
  }
}
.pop ul.error {
  position: absolute;
  top: 50px;
  left: 50%;
  width: 100%;
  height: 40px;
  margin-left: -50%;
  border-radius: 4px;
  & li {
    @extend %flex, %aitems;
    width: calc(100%-16px);
    height: 40px;
    line-height: 40px;
    background: #fde2e2;
    border-radius: 4px;
    padding-left: 16px;
    color: #f56c6c;
    & i {
      margin-right: 6px;
    }
  }
}
.num2 {
  & li {
    @extend %faj;
  }
}
.num3 {
  & li.content {
    @extend %flex, %fdc, %aitems;
    & p {
      height: 30px;
      & b {
        color: red;
        margin-left: 4px;
      }
    }
  }
}
</style>

