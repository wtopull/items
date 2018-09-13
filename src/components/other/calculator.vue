<template>
  <div class="calculator">
    <h3>相关设置：</h3>
    <ul class="set">
      <li>
        <span>期数：</span><input type="number" v-model="userQ"></li>
      <li>
        <span>赔率：</span><input type="number" v-model="userPrice"></li>
      <li>
        <span>倍率：</span><input type="number" v-model="userProfitBonus"></li>
    </ul>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>期数</th>
        <th>本金</th>
        <th>赔率</th>
        <th>当期奖金</th>
        <th>当期累计本金</th>
        <th>当前利润</th>
      </tr>
      <tr v-for="(item,index) in alls">
        <td>{{index+1}}期</td>
        <td>{{item.money}}</td>
        <td>{{item.price}}</td>
        <td>{{item.bonus | keepTwoNum}}</td>
        <td>{{item.principal}}</td>
        <td>{{item.profit | keepTwoNum}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    //profitBonus:1,//倍数
    // money: 1, //下注金额
    // price: 1.98, //赔率
    // bonus:0,//当前奖金
    // principal: 1, //累计本金
    // profit: 0//当前利润
    return {
      userQ: 5,
      userPrice: 1.98,
      userProfitBonus: 1,
      q: 5,
      alls: [],
      money: 1,
      price: 1.98,
      bonus: 0,
      principal: 1,
      profitBonus: 1,
      profit: 0
    };
  },
  watch: {
    userQ() {
      this.q = Number(this.userQ);
      this.count();
    },
    userPrice() {
      this.price = this.userPrice;
      this.count();
    },
    userProfitBonus() {
      this.profitBonus = this.userProfitBonus;
      this.count();
    }
  },
  mounted() {
    this.count();
  },
  methods: {
    count() {
      this.alls = [];
      this.money = 1;
      this.bonus = 0;
      this.principal = 1;
      this.profit = 0;
      for (let i = 0; i < this.q; i++) {
        //profitBonus:1,//倍数
        // money: 1, //下注金额
        // price: 1.98, //赔率
        // bonus:0,//当前奖金
        // principal: 1, //累计本金
        // profit: 0//当前利润
        this.alls.push({money: this.money,price: this.price,bonus: this.bonus,principal: this.principal,profit: this.profit});
        for (let k = i; k < this.alls.length; k++) {
          if (k < 1) {
            this.alls[0].bonus = this.alls[0].money * this.alls[0].price;
            this.alls[0].profit = (this.alls[0].bonus - this.alls[0].principal) * this.profitBonus;
            this.alls[0].principal = 1;
          } else {
            this.alls[k].bonus = this.alls[k].money * this.alls[k].price;
            this.alls[k].principal = this.alls[k].money + this.alls[k - 1].principal;
            this.alls[k].profit = (this.alls[k].bonus - this.alls[k].principal) * this.profitBonus;
            if (this.alls[k].profit < this.alls[k - 1].profit) {
              this.alls[k].money ++;
              this.alls[k].bonus = this.alls[k].money * this.alls[k].price;
              this.alls[k].principal = this.alls[k].money + this.alls[k - 1].principal;
              this.alls[k].profit = (this.alls[k].bonus - this.alls[k].principal) * this.profitBonus;
              this.money ++;
            }
            console.log(k);
            
          }
        }
        this.money++;
      }
    }
  },
  filters: {
    keepTwoNum(value) {
      value = Number(value);
      return value.toFixed(3);
    }
  }
};
</script>
<style scoped lang="scss">
@import "./calculator.scss";
</style>
