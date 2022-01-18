const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "Monaco Editor 实用指南",
  description: "呕心沥血 倾情奉献",
  bundlerConfig: {
    chainWebpack: (config) => {
      config.plugin("MonacoWebpackPlugin").use(MonacoWebpackPlugin);
    },
  },
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@components/, path.resolve(__dirname, "./components")),
    },
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
  themeConfig: {
    navbar: [
      {
        text: "指南",
        link: "/guide/introduce",
      },
      {
        text: "速查手册",
        link: "/handbook/editor",
      },
      {
        text: "官网地址",
        link: "https://microsoft.github.io/monaco-editor/",
      },
      {
        text: "API全览",
        link: "https://microsoft.github.io/monaco-editor/api/index.html",
      },
    ],
    sidebar: [
      {
        text: "指南",
        link: "/guide/",
        children: [
          {
            text: "介绍",
            link: "/guide/introduce.md",
          },
          {
            text: "快速上手",
            link: "/guide/start.md",
          },
          {
            text: "Webpack配置",
            link: "/guide/config.md",
          },
          {
            text: "基础用法",
            link: "/guide/basic.md",
          },
          {
            text: "Diff编辑器",
            link: "/guide/diff.md",
          },
        ],
      },
    ],
  },
};
