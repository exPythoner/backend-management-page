<script setup>
import { ref } from "vue";

import FMenu from "@/layouts/cpns/FMenu.vue";

const folded = ref(false);
</script>

<template>
  <div class="home">
    <!-- 最外层容器 -->
    <el-container class="ctner :" :class="{ folded: folded }">
      <!-- header -->
      <el-header class="header">
        <a href="http://shopadmin.dishawang.com" target="_blank">Header</a>
      </el-header>

      <el-container>
        <!-- left -->
        <!-- <FMenu /> -->
        <el-aside class="left">
          <span class="btn_folded" @click="folded = !folded">
            <el-icon v-if="folded"><Expand /></el-icon>
            <el-icon v-if="!folded"><Fold /></el-icon>
          </span>
          <FMenu />
          <!-- <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            default-active="2"
            :collapse="folded"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="goods/list">item one</el-menu-item>
                <el-menu-item index="fmenu/items">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>

            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
           -->
        </el-aside>

        <el-main class="main">
          <h2>main</h2>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
// less 变量声明和赋值
@h_height: 60px;
.header {
  background-color: #fff;
  position: fixed;
  line-height: @h_height;
  height: @h_height;
  width: 100%;
  box-shadow: 0 10px 7px #cecece;
}

.left {
  position: fixed;
  top: @h_height;
  left: 0;
  height: calc(100vh - 60px);
  background-color: #545c64;

  // 折叠过度动画
  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */
}

// 取消el-menu右侧的边线
.el-menu {
  border-right: 0;
}

.folded .el-menu span {
  display: none;
}

.main {
  margin: @h_height 0 0 300px;

  // 折叠过度动画
  transition: margin-left 0.3s;
  -webkit-transition: margin-left 0.3s; /* Safari */
}

// 折叠后的 left nav bar 的宽度
.folded .left {
  width: 64px;
}

// 折叠后的 main区域 margin-left 的宽度
.folded .main {
  margin-left: 64px;
}

.btn_folded {
  position: fixed;
  display: block;
  width: 300px;
  height: 40px;
  bottom: 0px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 9;
  background-color: #3c4752;
  color: #fff;

  // 折叠过度动画
  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */
}

// 折叠区域 折叠后的宽度设置
.folded .btn_folded {
  width: 64px;
}
</style>
