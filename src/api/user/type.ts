//登录接口需要携带参数的ts类型
export interface loginForm {
  username: string;
  password: string;
}
// 会返会的数据可以使用接口设置类型（使用any也可以）
interface dataType {
  token: string;
}

//登录接口-如果成功返回数据类型：
export interface loginResponseData {
  code: number;
  data: dataType;
}
