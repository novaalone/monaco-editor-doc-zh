# 基础用法

## 创建编辑器

使用 monaco.editor.create 方法来创建一个编辑器，create 方法接受 3 个参数

- 第一个参数必填，传入一个承载编辑器的 dom 节点，这个节点需要是一个空节点（不要包含其他子节点）
- 第二个参数选填，传入配置项，例如编辑器的主题、语言、是否只读、是否要展示行号等等
- 第三个参数选填，传入覆写的内容，这个很少用到，在基础用法里可以忽略

```js
monaco.editor.create(document.getElementById("container"), {
      value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
      theme: 'vs-dark',
      language: 'javascript',
      readOnly: true,
      lineNumbers: 'off',
      roundedSelection: false,
      scrollBeyondLastLine: false
    });
});
```

<DemoBlock>
    <ThemeEditor/>
</DemoBlock>

## 获取编辑器的值

我们已经有 create 方法创建了一个编辑器实例，想要获取编辑器里的内容，通过实例的 getValue 方法即可。 如果想给编辑器赋值，则通过 setValue 方法即可。

```js
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "123",
});
// 获取值
const editorValue = editor.getValue();
// 赋值
editor.setValue("456");
```

<DemoBlock>
    <GetSetValue/>
</DemoBlock>


## 销毁编辑器
使用完毕，我们用editor.dispose方法销毁编辑器实例

``` js
const editor = monaco.editor.create(document.getElementById("container"), {
  value: "123",
});

// 销毁
editor.dispose();
```