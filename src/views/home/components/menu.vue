<template>
  <!-- 此组件为根据路由动态生成的菜单 -->
  <el-menu class="menu">
    <div v-for="(item, index) in props.menulist" :key="index">
      <template v-if="!item.children">
        <el-menu-item
          :index="item.path"
          v-if="!item.meta.hidden"
          @click="goToRoute"
        >
          <!-- 存在children 则将菜单隐藏 -->
          <template #title>
            <!-- <Edit style="width: 1em; height: 1em; margin-right: 8px" /> -->
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            {{ item.meta.title }}
          </template>
        </el-menu-item>
      </template>

      <template v-if="item.children && item.children.length == 1">
        <el-menu-item
          v-if="!item.children[0].meta.hidden"
          :index="item.children[0].path"
          @click="goToRoute"
        >
          <template #title>
            <el-icon>
              <component :is="item.children[0].meta.icon"></component>
            </el-icon>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>

      <!-- 两个及以上子路由-->
      <!-- 能不能使用嵌套v-for -->
      <el-sub-menu
        v-if="item.children && item.children.length >= 2"
        :index="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          {{ item.meta.title }}
        </template>
        <!-- 组件的递归   递归组件-->
        <Menus :menulist="item.children"></Menus>
      </el-sub-menu>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
//递归组件的组件名需要与文件名相同？
defineOptions({
  name: "Menus",
});
const props = defineProps(["menulist"]);
import { useRouter } from "vue-router";
const route = useRouter();
const goToRoute = (e: any) => {
  // e.index----每个菜单绑定index为path
  console.log(e.index);
  route.push(e.index);
};
</script>

<style lang="scss">
.menu {
  --el-menu-bg-color: #13204f;
  --el-menu-text-color: #878ce2;
  --el-menu-active-color: rgb(149, 91, 240);
  //活动菜单页的样式
}
.menu {
  border-right: 0;
}
//
.scroll {
  height: 100vh-$bar_aside_logo_height;
}
// .el-menu-item:hover{
//   background-color: pink;
// }
</style>
