<template>
  <div class="editor">
    <ul>
      <li v-for="item in $store.state.conArr">
        <h3>{{item.title}}</h3>
        <div v-html="item.content"></div>
      </li>
    </ul>
    <div>
      <p>
        <span>标题</span>
        <input type="text" v-model="title">
      </p>
      <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
    </div>
    <div class="submit">
      <button @click="submit">提交</button>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  data() {
    return {
      title: "",
      content: "",
      customToolbar: [
        ["bold", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "video", "code-block"],
        [{color:[]},{background:[]}],
      ]
    };
  },
  methods: {
    submit() {
      this.$store.state.conArr.push({
        title: this.title,
        content: this.content
      });
      this.title = "";
      this.content = "";
    }
  },
  components: {
    VueEditor
  }
};
</script>
<style scoped lang="scss">
@import "./editor.scss";
</style>
