const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // 配置参考：https://cli.vuejs.org/zh/config/#pages
  pages: {
    index: {
      // 入口
      entry: "examples/main.js",
      // 模板
      template: "public/index.html",
      // 打包输出的html
      filename: "index.html",
    },
  },
  configureWebpack: {
    output: {
      // webpack配置：https://webpack.docschina.org/guides/author-libraries/#expose-the-library
      library: "vue3ScaleBox",
    },
  },
  // 配置参考：https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/lib")
      .end()
      .use("babel")
      .loader("babel-loader");
  },
});
