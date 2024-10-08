<script setup lang="ts">
// import request  from './utils/request';
// import axios from 'axios'
import { login } from "./api/user";
// import HelloWorld from './components/HelloWorld.vue';
// console.log(import.meta.env)
async function handle(username: string, password: string) {
  try {
    const result = login({ username, password });
    console.log(result);
    console.log("111");
  } catch (error) {
    console.log(error);
  }
}
handle("admin", "1111");

// request({
//   url:'/user/login',
//   method:'post',
//   data:{
//     username:'admin',
//     password:'1111'
//   }
// }).then(res=>{
//   console.log(res)
// })
</script>

<template>
  <!-- <div>
    <svg style="width: 40px; height: 30px; background-color: pink">
      <use xlink:href="#icon-phone"></use>
    </svg>
    <el-button type="primary" icon="search">查询</el-button>
    <el-button type="success" icon="check">检查</el-button>

    <div class=".test">
      <h1>huhu</h1>
    </div>
    <div>
      <p>默认样式</p>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div> -->
<div>
  <router-view></router-view>

</div>
</template>

<style scoped lang="scss">

</style>
