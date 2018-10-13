<template>
  <div class="page" id="api1">
    <vue-markdown :source="mdText"></vue-markdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mdText: "",
    };
  },
  props: ["src"],
  mounted() {
    axios.get(this.src).then(response => {
      this.mdText = response.data;
    });
  }
};
</script>
<style lang='scss' scoped>
@import './md.scss'
</style>
