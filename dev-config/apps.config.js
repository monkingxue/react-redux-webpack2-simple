const defaultIndexPage = "./dev-config/server/template.html";

module.exports = {

  //基本的应用配置信息
  apps: [
    //HelloWorld
    {
      id: "helloworld",
      src: "./src/simple/helloworld/helloworld.js",
      indexPage: defaultIndexPage,
      compiled: true
    }
  ],

  //开发服务器配置
  devServer: {
    appEntrySrc: "./src/simple/helloworld/helloworld.js", //当前待调试的APP的入口文件
    port: 3000 //监听的Server端口
  }
};