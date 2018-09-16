<template>
  <div class="other overflow">
    <ul class="list">
      <li :class="index == k ? 'active' : ''" v-for="(item,index) in list" @click="listBall(index)">{{item}}</li>
    </ul>
    <calculator v-if="k == 0"></calculator>
    <editor v-if="k == 1">editor</editor>
    <markdown v-if="k == 2" src='./static/i18n.md'></markdown>
  </div>
</template>
<script>
import calculator from "./calculator.vue";
import editor from "./editor.vue";
import markdown from "./markdown.vue";
export default {
  data() {
    return {
      k: 0,
      list: ["综合计算器", "富文本","markdown"]
    };
  },
  methods: {
    listBall(index) {
      this.k = index;
    }
  },
  components: {
    editor,
    calculator,
    markdown
  },
  filters: {}
};
</script>
<style scoped lang="scss">
@import "./other.scss";
</style>
