<template>
  <!-- 首页菜单+上下边框的设置 -->
  <div class="common-layout">
    <el-container>
      <el-aside class="menu_aside">
        <LOGO></LOGO>
        <!-- 使用 -->
        <el-scrollbar class="scroll">
          <Menus :menulist="menulist"></Menus>
        </el-scrollbar>
      </el-aside>
      <el-container class="menu_contain">
        <el-header class="menu_head">Header</el-header>
        <el-main class="menu_main">
          <!-- 此布局设置组件--默认存在滚动轴- -->
          <div
            class="main_layout"
            style="height: 1000px; background-color: red"
          >
            <MAIN></MAIN>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup >
import { ElNotification } from "element-plus";
import { getTime } from "../../utils/getTime";
import LOGO from "./components/logo.vue";
import MAIN from "./components/main.vue";
import Menus from "./components/menu.vue"
import useloginStore from "../../store/modules/user";
//如何设置消息提示框打开位置

defineOptions(
  {
    name:"home"
  }
)
ElNotification({
  title: getTime(),
  message: "欢迎来到硅谷甄选",
  type: "success",
});
console.log(getTime());

//获取路由数组;
const loginStore = useloginStore();
const menulist = loginStore.menuRoutes;
</script>

<style lang="scss" scoped>
.menu_aside {
  /* 宽度设置为全局变量 */
  width: $bar_aside_width;
  height: 100vh;
  background-color: $bar_aside_color;
  scrollbar-width: none;
}
.menu_contain {
  width: 100vw-$bar_aside_width;
  background-color: pink;
  height: 100vh;
}
.menu_head {
  width: 100vw-$bar_aside_width;
  height: $bar_head_height;
  background-color: skyblue;
}
.menu_main {
  width: 100vw-$bar_aside_width;
  height: 100vh-$bar_head_height;
  background-color: rgb(227, 172, 70);
  padding: 20px;
}
// .menu
// {
//   --el-menu-bg-color:#13204f;
//   --el-menu-text-color:#878ce2;
//   --el-menu-active-color:rgb(149, 91, 240);
//   //活动菜单页的样式
// }
// .menu :hover
// {
//   background-color: pink;
// }
// .scroll
// {
//     height: 100vh-$bar_aside_logo_height;
// }
// .el-menu-item:hover{
//   background-color: pink;
// }
</style>
