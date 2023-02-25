const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //当前项目在开发调试阶段
    //会将任何未知请求代理到该接口
    //仅在开发阶段生效
    proxy:'https://www.escook.cn',
  }
})
