# 快速上手

1. 安装monaco-editor

```
npm install monaco-editor
```

2. 你需要一个渲染编辑器的容器节点，我们假设是一个id为container的div

``` html
<div id="container" style="height:100%;"></div>
```

3. 在js文件中引入monaco editor, 并创建编辑器

``` js
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

monaco.editor.create(document.getElementById("container"), {
	value: "123"
});
```

打开浏览器，我们可以看到编辑器已经成功展示出来

::: warning

create方法接收3个参数

第一个参数是editor所处的容器，是必选参数，这个容器应当是一个空的节点，也就是说我们上面id为container的节点内部不要有其他dom节点，editor会撑满container容器

第二个参数是可配置的字段，可选

第三个参数是复写的方法，可选


