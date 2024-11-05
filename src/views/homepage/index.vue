<template>
  <div class="body">
    <div>{{ loginStore.userinfos.username }}</div>
    <el-avatar shape="square" :size="30" :src="loginStore.userinfos.avatar" />
  </div>
</template>

<script setup lang="ts">
import useloginStore from '../../store/modules/user';
const loginStore=useloginStore()

</script>

<style scoped lang="scss">
</style>
