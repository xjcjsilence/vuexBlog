<template>
<div class="index-right">
    <!--右侧选项栏-->
    <div class="index-right-nav">
      <ul>
          <li v-for="(tab, index) in availableTabs" :class="{ 'tab-list': true, active: isTabActived(tab) }">
              <router-link :to="'/' + tab.name">
                  <span :class="'right-icon-' + (tab.name)"></span>
                  <em>{{ tab.text }}</em>
              </router-link>
          </li>
      </ul>
      <em class="index-right-btn-prev">后 撤</em>
      <em class="index-right-btn-next">前 进</em>
      <div class="index-right-btn-bottom">
        <a href="#">项目后台</a>
        <a href="#">保 存</a>
        <a href="#">预 览</a>
      </div>
    </div>
    <!--右边内容区-->
    <div class="rightMain-content">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {
        tabs: [
            { name: "project", text: "项目管理" },
            { name: "project-info", text: "基本信息" },
            { name: "start-page", text: "启 动 页"},
            { name: "flower" ,text: "花盆设置" },
            { name: "menu", text: "菜单设置"},
            { name: "module", text: "模块仓库"},
            { name: "page", text: "页面管理"},
            { name: "build", text: "生成APP"}
        ]
    }
  },
  methods: {
    isTabActived(tab) {
        return this.$router.currentRoute.path == '/' + tab.name
    }
  },

  computed: {
      ...mapGetters([
        'currentProject'
      ]),

      availableTabs () {
          if (!this.currentProject) {
              return [this.tabs[0]]
          } else {
              return this.tabs
          }
      }
  }
}
</script>

<style>
.index-left {
  width: 255px;
  float: left;
  background: #535353;
}
.index-show {
  width: 540px;
  float: left;
  background: #f00;
}
.index-show .show-form {
  background: url("../assets/img/index/show-bg.png");
  background-size: cover;
}
.index-right {
  float: right;
}
.index-right .index-right-nav {
  width: 100px;
  float: right;
  color: white;
  background: #282828;
}
.index-right .index-right-nav .active {
  background-color: #535353;
}
.index-right .index-right-nav .right-icon-project {
  background: url("../assets/img/index/right-icon1.png") no-repeat;
  width: 26px;
  height: 20px;
}
.index-right .index-right-nav .right-icon-project-info {
  background: url("../assets/img/index/right-icon2.png") no-repeat;
  width: 26px;
  height: 27px;
}
.index-right .index-right-nav .right-icon-start-page {
  background: url("../assets/img/index/right-icon3.png") no-repeat;
  width: 30px;
  height: 24px;
}
.index-right .index-right-nav .right-icon-flower {
  background: url("../assets/img/index/right-icon4.png") no-repeat;
  width: 26px;
  height: 25px;
}
.index-right .index-right-nav .right-icon-module {
  background: url("../assets/img/index/right-icon5.png") no-repeat;
  width: 27px;
  height: 28px;
}
.index-right .index-right-nav .right-icon-menu {
  background: url("../assets/img/index/right-icon6.png") no-repeat;
  width: 26px;
  height: 31px;
}
.index-right .index-right-nav .right-icon-page {
  background: url("../assets/img/index/right-icon8.png") no-repeat;
  width: 26px;
  height: 27px;
}
.index-right .index-right-nav .right-icon-build {
  background: url("../assets/img/index/right-icon9.png") no-repeat;
  width: 26px;
  height: 30px;
}
.index-right .index-right-nav span {
  background-size: 50%;
}
.index-right-content {
  background-color: #535353;
}
.index-right-content .tab-con-tilte {
  background-color: #282828;
}
.index-right-content .tab-con-tilte .tab-con-title-right {
  background: url("../assets/img/index/right-icon-del.png") no-repeat;
}
.index-right .index-right-nav ul {
  margin-bottom: 30px;
}
.index-right .index-right-nav .index-right-btn-prev {
  font-size: 12px;
  display: block;
  line-height: 30px;
  height: 30px;
  padding-left: 40px;
  margin-bottom: 10px;
  background: url("../assets/img/index/right-icon-right.png") 10px 6px no-repeat;
}
.index-right .index-right-nav .index-right-btn-next {
  font-size: 12px;
  display: block;
  line-height: 30px;
  height: 30px;
  padding-left: 40px;
  margin-bottom: 10px;
  background: url("../assets/img/index/right-icon-left.png") 10px 6px no-repeat;
}
.index-right-btn-bottom{
  width: 100px;
  position: fixed;
  bottom: 0;
  line-height: 30px;
  text-align: center;
}
.index-right-btn-bottom a {
  font-size: 12px;
  display: block;
  background: #6d6d6d;
  width: 80px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #898989;
  border-left: 1px solid #898989;
  border-right: 1px solid #323232;
  border-bottom: 1px solid #323232;
  box-shadow: 1px 1px 0px #404040;
}
.project {
  border-bottom: 1px solid #6d6d6d;
}
.project .creat-bt div {
  background: #6d6d6d;
  border: 1px solid #2f2f2f;
}
.project .serch .serch-input {
  background-color: #363634;
}
.project .serch .serch-input input {
  background-color: #363634;
}
.project .serch .serch-icon {
  background: url("../assets/img/index/right-icon-serch.png") no-repeat;
}
.project .tab-con-info-list .info-list-left .info-list-left-img {
  background: url("../assets/img/index/right-icon-projectList.png") no-repeat;
}
.baseInfo input,
.baseInfo textarea {
  border: none;
  background: #363634;
}
.baseInfo .baseInfo-img-url {
  background: url("../assets/img/index/img-url.png");
  background-size: 100% 100%;
}
.template-wrap .tab-con-tilte .title-active,
.startGuide-wrap .tab-con-tilte .title-active {
  background: #454545;
}
.template-wrap .tab-con-tilte .tab-con-tilte-left,
.startGuide-wrap .tab-con-tilte .tab-con-tilte-left {
  border-right: 1px solid #464646;
}
.template .new-template .screen {
  background: #454545;
  border-top: 1px solid #535353;
  border-bottom: 1px solid #7d7d7d;
}
.template .new-template .screen .screen-tltle {
  color: #1abc9c;
}
.template .new-template .screen .screen-list .screen-list-icon {
  background: url("../assets/img/template/check.png");
  background-size: 100% 100%;
}
.template .new-template .screen .screen-list .checked {
  background: url("../assets/img/template/checked.png");
  background-size: 100% 100%;
}
.template .new-template .template-list-text {
  border: 1px solid #1abc9c;
}
.template .new-template .template-list-text span {
  border-right: 1px solid #1abc9c;
}
.startGuide .startPage .start-list .start-list-select select {
  background: url("../assets/img/index/input.png");
  background-size: 100% 100%;
  color: white;
}

.index-content {
  height: 100%;
}
.index-show .show-form {
  width: 247px;
  height: 519px;
  margin-top: 50px;
  margin-left: 80px;
  position:relative;
}
.index-right {
  height: 100%;
}
.index-right .index-right-nav {
  height: 100%;
  color: white;
  padding-top: 38px;
  box-sizing: border-box;
  position:fixed;
  right:0;
}
.index-right .index-right-nav a {
    color: white;
    text-decoration: none;
    display: block;
}
.index-right .index-right-nav li {
  height: 50px;
  line-height: 50px;
  padding-left: 5px;
  font-size: 12px;
  cursor:pointer;
}
.index-right .index-right-nav span {
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
}

.all-wrap {
  height: 100%;
  float: right;
}
.all-wrap .index-right-content {
  height: 100%;
  overflow-y: auto;
}
.all-wrap .tab-con-tilte {
  height: 40px;
  line-height: 40px;
}
.all-wrap .tab-con-tilte .tab-con-tilte-left {
  float: left;
  padding-left: 10px;
}
.all-wrap .tab-con-tilte .tab-con-title-right {
  float: right;
  width: 16px;
  height: 15px;
  margin-top: 13px;
  margin-right: 10px;
}

.rightMain-content {
  position: absolute;
  top: 0;
  right: 100px;
  height: 100%;
  overflow: hidden;
  background: #535353;
}
.rightMain-content .main-title {
  width: 100%;
  height: 38px;
  background: #282828;
}
.rightMain-content .main-title h3 {
  display: inline-block;
  float: left;
  width: 80px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  font-family: "宋体";
  font-size: 14px;
  margin: 0;
}
.rightMain-content .closed {
  width: 15px;
  height: 15px;
  background: url("../assets/img/list/closed.png") no-repeat;
  background-size: 15px 15px;
  float: right;
  margin-top: 12px;
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
}
.rightMain-content .row-div {
  height: 30px;
  margin-top: 5px;
}
.rightMain-content .row-p {
  width: 100px;
  height: 30px;
  text-align: right;
  line-height: 30px;
  float: left;
}
.rightMain-content .row-right {
  float: left;
  margin-left: 10px;
}
.rightMain-content .row-selectDiv {
  width: 118px;
  height: 28px;
  background: #363634;
  color: #d0d0d0;
  float: left;
  margin-left: 10px;
}
.rightMain-content .row-select {
  width: 118px;
  height: 28px;
  border: 1px solid #282828;
  -webkit-appearance: none;
  background: url("../assets/img/list/list1/title-fontBox.png") no-repeat scroll right center;
  padding: 4px 4px 5px 5px;
  color: #d0d0d0;
}
.rightMain-content .marginTop20 {
  margin-top: 20px;
}
.rightMain-content .row-option {
  float: left;
  margin-left: 10px;
}
.rightMain-content .option-div {
  float: left;
}
.rightMain-content .option-div span {
  float: left;
  display: inline-block;
  width: 17px;
  height: 17px;
  margin-left: 6px;
  margin-top: 7px;
}
.rightMain-content .option-div p {
  float: left;
  height: 30px;
  line-height: 30px;
  margin-left: 5px;
}
.rightMain-content .circle {
  background: url("../assets/img/list/list1/circle1.png") no-repeat;
  background-size: 17px 17px;
}
.rightMain-content .circled {
  background: url("../assets/img/list/list1/circle.png") no-repeat;
  background-size: 17px 17px;
}
.rightMain-content .clickNo {
  background: #363634;
}
.rightMain-content .clicked {
  background: #1abc9c;
}
.rightMain-content .row-color {
  width: 118px;
  height: 30px;
  float: left;
  margin-left: 10px;
  background: #363634;
}
.rightMain-content .color-label {
  float: left;
  width: 30px;
  height: 30px;
  background: #1abc9c;
}
.rightMain-content .color-inp {
  width: 0;
  height: 0;
  opacity: 0;
}
.rightMain-content .color-value {
  display: inline-block;
  width: 80px;
  height: 30px;
  float: left;
}
.rightMain-content .showPic-div {
  height: 40px;
}
.rightMain-content .showPic-rightDiv {
  width: 35px;
  height: 35px;
  float: left;
}
.rightMain-content .showPic-label {
  display: inline-block;
  width: 35px;
  height: 35px;
  float: left;
  background: url("../assets/img/list/guidePage-icon3.png") no-repeat;
}
.rightMain-content .showPic-input {
  width: 0;
  height: 0;
  opacity: 0;
}
.rightMain-content .showPic-amend {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  float: left;
  cursor: pointer;
}
.rightMain-content .main-appendPic {
  height: 110px;
  margin-top: 5px;
}
.rightMain-content .row-pic {
  width: 100px;
  float: left;
  margin-left: 10px;
}
.rightMain-content .pic-label {
  display: inline-block;
  width: 80px;
  height: 28px;
  border: 1px solid #393937;
  background: #1abc9c;
  color: #ffffff;
  text-align: center;
  line-height: 28px;
}
.rightMain-content .pic-inp {
  width: 0;
  height: 0;
  opacity: 0;
}
.rightMain-content .pic-value {
  width: 95px;
  height: 65px;
  border: 1px solid #7d7d7d;
  margin-top: 10px;
}
.rightMain-content .box {
  width: 320px;
  border: 1px solid #7d7d7d;
  position: relative;
  margin-top: 20px;
  margin-left: 5px;
}
.rightMain-content .set-p {
  width: 70px;
  height: 15px;
  background: #535353;
  text-align: center;
  line-height: 15px;
  color: #1abc9c;
  position: absolute;
  top: -7px;
  left: 5px;
}
.rightMain-content .direct-inp {
  float: left;
  margin-left: 10px;
}
.rightMain-content .direct-inp input {
  width: 54px;
  height: 28px;
  border: none;
  outline: none;
  background: #363634;
  color: #d0d0d0;
  padding-left: 10px;
}
.rightMain-content .check {
  background: url("../assets/img/list/check1.png");
  background-size: 100% 100%;
}
.rightMain-content .checked {
  background: url("../assets/img/list/checked.png") no-repeat;
  background-size: 100% 100%;
}
.rightMain-content .marginLeft40 {
  margin-left: 40px;
}
.rightMain-content .marginLeft60 {
  margin-left: 60px;
}
.rightMain-content .marginLeft100 {
  margin-left: 100px;
}

.rightMain-content .row-p {
  width: 100px;
  height: 30px;
  text-align: right;
  line-height: 30px;
  float: left;
}

.rightMain-content .row-selectDiv {
  width: 118px;
  height: 28px;
  background: #363634;
  color: #d0d0d0;
  float: left;
  margin-left: 10px;
}

.rightMain-content .tab {
  background: #454545;
}
</style>
