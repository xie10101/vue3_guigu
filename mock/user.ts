// 创建函数-执行后返回数组，数组中包含用户信息；
function createUserList() {
  return [
    {
      userId: 1,
      avatar: "",
      username: "admin",
      token: "Admin Token",
      password: "1111",
      desc: "学生管理员",
      roles: ["平台管理员"],
    },
    {
      userId: 2,
      username: "admin2",
      token: "Admin Token",
      password: "2222",
    },
  ];
}
//向外暴露一个 数组：数组中包含两个接口：

export default [
  {
    // 登录接口
    url: "/api/user/login",
    method: "post",
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body;
      //调用获取用户信息函数，用于判断是否存在此用户
      const checkUser = createUserList().find(
        // 这里是映射吗？
        (item) => item.username === username && item.password === password,
        // find函数中的回调函数--作用？
      );
      //没有用户返回失败信息
      if (!checkUser) {
        // 需要对数据进行类型检查
        return { code: 201, data: { message: "账号或者密码不正确" } };
      }
      //如果正确 返回成功信息
      const { token } = checkUser;
        // 需要对数据进行类型检查
      return { code: 200, data: { token } };
    },
  },
  //获取用户信息
  {
    url: "/api/user/info",
  },
];
