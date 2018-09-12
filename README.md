# weexui
>  npm
 
    npm install
	npm run dev
	npm run build
	npm run build --report

## css命名介绍
1、安装依赖

> 全局使用scss

	npm install sass-loader node-sass vue-style-loader --save-dev
    npm install -g node-sass

> 全局使用jade

    npm install pug pug-loader pug-filters --save-dev
    npm install jade jade-loader --save-dev


2、在webpack.base.config.js中
	
	{  
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
    },
	{
      test: /\.jade$/,
      loader: "jade"
    },
    {
      test: /\.pug$/,
      loader: 'pug'
    },

3、.vue中 

	<template lang="jade"></template>
	<style lang="scss"></style>

----------

	@include Bg();
	
	@for $i from 1 through 6 {
      > li:nth-child(#{$i}){
        @include Bg("sc_" + $i + ".png", rem2px(160), rem2px(35));
        background-size: 100%;
      }
    }

	单个：
		@extend %flex;
	多个：
		@extend %flex，%aitems;
1. @extend %flex   		===> display:flex
2. @extend %aitems 		===> align-items: center;
3. @extend %jcontent 	===> justify-content: center;
4. @extend %fdr 		===> flex-direction: row;
5. @extend %fdc			===> flex-direction: column;
6. @extend %fr			===> flex-wrap:wrap;
7. @extend %faj			===> display:flex; align-items:center; justify-content:center;

## vscode 
# 用户设置 #
    {
	  //表示打开新的无标题文档(仅打开一个空工作区)。
	  "workbench.startupEditor": "newUntitledFile",
	  // 以像素为单位控制字号。
	  "editor.fontSize": 16,
	  // 通过使用鼠标滚轮同时按住 Ctrl 可缩放编辑器的字体
	  "editor.mouseWheelZoom": true,
	  // 控制工作台中的树控件是否支持水平滚动。
	  "workbench.tree.horizontalScrolling": true,
	  // 指定工作台中使用的颜色主题。
	  "workbench.colorTheme": "Default Dark+",
	  "prettier.tabWidth": 2,
	  "vetur.format.defaultFormatter.html": "js-beautify-html",
	  "vsicons.presets.hideFolders": true,
	  "workbench.iconTheme": "vscode-icons",
	}

# 插件 #
1. Auto Close Tag
2. Auto Rename Tag
3. Beautify
4. Color Highlight
5. Document This
6. IntelliSense for CSS class name
7. Vetur
8. vscode-icons

# res的值是JSON时需要转换 #
1. JSON.parse(res.data);
2. JSON.stringify(res.data);

# localStorage使用 #

1. 获取键值对数量
	localStorage.length
2. 读取
	localStorage.getItem('name'), localStorage.key(i)
3. 添加/修改
	localStorage.setItem('name','xuanyuan')
4. 删除对应键值
	localStorage.removeItem('name')
5. 删除所有数据
	localStorage.clear()

# cookie封装 #

	@/assets/js/utils.js
	import {setCookie,getCookie,clearCookie} from '../../assets/js/utils';
	setCookie("key","val",time)
	getCookie("key")
	clearCookie("key")

	.list {margin-top: calc(60px / 3 - 5px);}
	li:nth-child(3n+2){
      margin: 0px 10px;
    }
	
# 验证码 #
	npm install qrcodejs2 --save 
	import QRCode from "qrcodejs2";

	<div id="ios"></div>

	qrcode() {
      let qrcode2 = new QRCode("ios", {
        width: 106,
        height: 106, // 高度
        text: "https://www.pgyer.com/mjn2" // 二维码内容
      });
	}

# 全局滚动条 #

	npm i vue-gemini-scrollbar --save

	import Vue from 'vue'
	import GeminiScrollbar from 'vue-gemini-scrollbar'
 
	Vue.use(GeminiScrollbar)

	<GeminiScrollbar class="my-scroll-bar" style="height:100px;width:100px;">
		content...
	</GeminiScrollbar>
# 全局Loading #
	请求拦截器自动加入loading，同时加入config配置项，接口调用不用调取config配置头信息
	手动调用
		this.$loader.show();
	手动关闭
		this.$loader.hide();

# 弹窗 #

	this.$pop.show({title:'温馨提示',content:'已经到底啦',content1:String(this.seasonId),content2:String(Number(this.seasonId)+1),number:3});

# 国际化 #

	npm install vue-i18n --save
	
	{{$t('navs.Home')}}
	{{$t('navbar[1].children[0].component')}}
	
# 富文本 #	

https://github.com/davidroyer/vue2-editor

	npm install --save vue2-editor
	import { VueEditor, Quill } from "vue2-editor";
