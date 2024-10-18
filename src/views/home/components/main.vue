<template>
  <div>
    <!-- 插槽对应占位的组件时route-view 获取到的组件 -->
    <router-view v-slot="{ Component }">
      <!-- 过渡动画设置-->
      <transition name="fade">
        <component :is="Component"> </component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MAIN",
});
</script>

<style scoped lang="scss">
.fade-enter-from,
.fade-leave-to {
  //组件挂载时的根标签组件的css样式设置
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active,
.fade-leave-active {
  //样式执行时间---逐渐显现效果
  transition: all 1s;
}
.fade-enter-to,
.fade-leave-from {
  //组件销毁时的根标签组件的css样式设置
  opacity: 1;
  transform: scale(1);
}
</style>
