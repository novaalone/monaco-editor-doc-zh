# Diff 编辑器

使用 monaco.editor.createDiffEditor 方法可以创建 Diff 编辑器，createDiffEditor 方法接受 3 个参数

- 第一个参数必填，传入一个承载编辑器的 dom 节点，这个节点需要是一个空节点（不要包含其他子节点）
- 第二个参数选填，传入配置项，例如编辑器的主题、是否只读、是否要展示行号等等
- 第三个参数选填，传入覆写的内容，这个很少用到，在基础用法里可以忽略

## 创建 Diff 编辑器

创建 Diff 编辑器与创建普通编辑器的区别在于，普通编辑器可以直接在 create 方法中传入编辑器的 value，而 diff 编辑器需要先创建两个 model，在两个 model 中分别设置原始值和对比值，再将这个两个 model 设置到创建的 diff 编辑器实例中

1. 创建 model

```js
const originalModel = monaco.editor.createModel("hello world", "text/plain");
const modifiedModel = monaco.editor.createModel("Hello World", "text/plain");
```

2. 创建 diff 编辑器

```js
const diffEditor = monaco.editor.createDiffEditor(
  document.getElementById("container-diff")
);
```

3. 设置 model

```js
diffEditor.setModel({
  original: originalModel,
  modified: modifiedModel,
});
```

   <DemoBlock>
   <DiffEditor/>
   </DemoBlock>

::: details 点击查看完整代码

@[code](@components/DiffEditor.vue)

:::
