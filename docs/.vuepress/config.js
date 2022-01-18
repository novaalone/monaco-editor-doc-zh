const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "Monaco Editor 实用指南",
  description: "呕心沥血 倾情奉献",
  base: '/monaco-editor-doc-zh/',
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
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    navbar: [
      {
        text: "指南",
        link: "/guide/introduce",
      },
      {
        text: "速查手册",
        link: "/handbook/create",
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
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/introduce.md',
            '/guide/start.md',
            '/guide/config.md',
            '/guide/basic.md',
            '/guide/diff.md'
          ]
        }
      ],
      '/handbook/': [
        {
          text: '速查手册',
          children: [
            '/handbook/create.md'
          ]
        }
      ]
    }
  },
};
