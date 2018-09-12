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

.quillWrapper.ql-snow.ql-toolbar{
    padding: 4px !important;
}
.ql-toolbar.ql-snow{
    padding: 4px !important;
}
.quillWrapper .ql-toolbar.ql-snow .ql-formats{
  margin: 0 !important;
}
.ql-editor{
  min-height: 100px !important;
  padding: 10px !important;
}
</style>
