<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,
body,#app {
  width: 100%;
  height: 100%;
}
body {
  background: #f1f1f1;
  margin: 0;
  padding: 0;
  font-family: Source Sans Pro, Helvetica Neue, Arial, sans-serif;
  overflow-y: scroll;
}
ul,
ol,
dl {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
