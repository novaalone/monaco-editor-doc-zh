# 快速上手

1. 安装monaco-editor

``` shell
npm install monaco-editor
```

2. 你需要一个渲染编辑器的容器节点，我们假设是一个id为container的div

``` html
 <div id="container" style="height: 100px; width: 80%;"></div>
```

3. 在js文件中引入monaco editor, 并创建编辑器

``` js
monaco.editor.create(document.getElementById("container"), {
      value: "123",
});
```

<DemoBlock>
  <BaseEditor/>
</DemoBlock>

::: details 点击查看完整代码

@[code](@components/BaseEditor.vue)

:::
