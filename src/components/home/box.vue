<template lang='jade'>
.box
  heads
  contnets
  foots
</template>
<script>
import heads from "@/components/cphead/head.vue";
import contnets from "@/components/cpcontent/content.vue";
import foots from "@/components/cpfoot/footer.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    heads,
    contnets,
    foots
  }
};
</script>
<style lang='scss' scoped>
@import "./box.scss";
</style>
