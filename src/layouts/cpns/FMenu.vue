<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const folded = ref(false);
// 导入模拟数据
import { menusList } from "@/assets/data/menusList";
const mock_menuList = ref(menusList);

const handleSelect = (e) => {
  console.log(e);
  router.push("/home" + e);
};
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-aside class="left">
    <span class="btn_folded" @click="folded = !folded">
      <el-icon v-if="folded">
        <Expand />
      </el-icon>
      <el-icon v-if="!folded">
        <Fold />
      </el-icon>
    </span>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      default-active="2"
      :collapse="folded"
      :unique-opened="true"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- main  menu -->
      <template v-for="(item, index) in mock_menuList" :key="item.id">
        <el-sub-menu v-if="item.child && item.child.length > 0">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>

          <template v-for="(item2, index2) in item.child" :key="item2.id & index2">
            <el-menu-item-group :title="item2.name">
              <el-menu-item :index="item2.frontpath">
                <el-icon>
                  <component :is="item2.icon"></component>
                </el-icon>
                <span>{{ item2.name }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </template>
        </el-sub-menu>

        <el-menu-item v-else :index="item.frontpath">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
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
  -webkit-transition: width 0.3s;
  /* Safari */
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
  -webkit-transition: margin-left 0.3s;
  /* Safari */
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
  -webkit-transition: width 0.3s;
  /* Safari */
}

// 折叠区域 折叠后的宽度设置
.folded .btn_folded {
  width: 64px;
}

.el-icon {
  font-size: 20px;
}
</style>
