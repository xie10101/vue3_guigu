//统一管理项目用户相关的api请求函数
import request from "../../utils/request";
import type{loginForm,loginResponseData} from './type.ts'
// 统一管理接口地址--枚举接口地址:  基地址 /api不需要加
enum API{
    LOGIN_URL="/user/login",
    // USERINFO_URL="/",
}

export const login=(data:loginForm)=>
    request.post<any,loginResponseData>(API.LOGIN_URL,data)

// 特别注意：在使用箭头函数时
// 如果函数体中语句仅有一条语句（此语句如果为表达式，则箭头函数的返回值为表达式的结果）
// 如果函数体使用多条语句 需要使用{} ,返回值需要自己设置,否则为undefined