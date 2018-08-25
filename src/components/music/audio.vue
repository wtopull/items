<template>
  <div class="audio">
    <audio controls="controls" >
      <source :src='"http://qt.dd0519.cn/"+$store.state.link' type="audio/ogg">
    </audio>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
@import './audio.scss'
</style>
