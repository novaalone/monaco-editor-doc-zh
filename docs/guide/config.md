# Webpack 配置

1. 安装monaco-editor-webpack-plugin

``` shell
npm install monaco-editor-webpack-plugin
```

2、配置webpack
``` js
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    ...
    plugins: [
        new MonacoWebpackPlugin()
    ]
    ...
}
```