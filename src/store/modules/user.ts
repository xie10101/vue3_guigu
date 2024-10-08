//创建用户相关的小仓库]
//导入创建小仓库的方法
//使用组合式api仓库
import { defineStore } from "pinia";
import { ref } from "vue";
import { login } from "../../api/user";
import { ElMessage } from "element-plus";
import { loginResponseData } from "../../api/user/type";
import router from "../../router";
import type { RouteRecordRaw } from "vue-router";
import { baseroutes } from "../../router/routes";
//创建用户小仓库
const useloginStore = defineStore(
  "User",
  () => {
    const token = ref<string | null>(localStorage.getItem("TOKEN"));
    // token的持久化设置
    interface logindatas {
      username: string;
      password: string;
    }

    async function loginpost(logindatas: logindatas) {
      try {
        // 设置返回数据的类型验证：
        const result: loginResponseData = await login(logindatas);
        const Message = ref();
        const type = ref("");
        if (result.code == 200) {
          Message.value = "登录成功";
          type.value = "success";
          // if(result.data.token!=undefined)
          token.value = result.data.token as string;
          localStorage.setItem("TOKEN", result.data.token as string);
          // (result.data as any)?.token
          router.push("/home");
        } else {
          Message.value = "账号或密码有错误";
          type.value = "error";
        }
        ElMessage({
          message: Message.value,
          type: type.value,
        });
        // 进行跳转
      } catch (error) {
        // 抛出错误的方法：
        // throw new Error('Failed to fetch user data');
        console.log(error);
        //
      }
    }
    //暂时不是响应式--一律设置为响应式
    // const menuRoutes:RouteRecordRaw[] = baseroutes
    const menuRoutes = ref<RouteRecordRaw[]>(baseroutes);
    const num = 123;
    return {
      loginpost,
      token,
      menuRoutes,
      num,
    };
  },
  //小仓库存储数据的地方
);
export default useloginStore;
