<template>
  <div class="home">
    <div>
      <button @click="changeLang(1)">中文</button>
      <button @click="changeLang(2)">英文</button>
      <button @click="changeLang(3)">日文</button>
    </div>
    <ul>
      <li>{{$t('navs.Home')}}</li>
      <li>{{$t('navs.Lottery')}}</li>
      <li>{{$t('navs.Activity')}}</li>
      <li>{{$t('navs.Discover')}}</li>
      <li>{{$t('navs.My')}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    changeLang(lang) {
      if (lang === 1) {
        this.$i18n.locale = "cn";
      } else if (lang === 2) {
        this.$i18n.locale = "en";
      } else if (lang === 3) {
        this.$i18n.locale = "jp";
      }
    }
  },
};
</script>

