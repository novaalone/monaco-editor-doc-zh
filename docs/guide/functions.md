# editor的常用方法

## create
> create(domElement: HTMLElement, options?: IStandaloneEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneCodeEditor

功能：在指定的dom节点内创建并渲染编辑器，指定的dom节点应当是一个空元素，也就是说里面不包含其他dom节点

``` js
monaco.editor.create(document.getElementById("container"), {
	value: "123"
});
```

### 参数说明
| 参数名     | 说明         | 类型                                 | 是否必须 |
| ---------- | ------------ | ------------------------------------ | -------- |
| domElement | 容器节点     | HTMLElement                          | 是       |
| options    | 可配置的选项 | IStandaloneEditorConstructionOptions | 否       |
| override   | 复写的内容   | \[index: string\]: any               | 否       |

## createDiffEditor
> createDiffEditor(domElement: HTMLElement, options?: IDiffEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneDiffEditor

功能：在指定的dom节点内创建并渲染Diff编辑器，指定的dom节点应当是一个空元素，也就是说里面不包含其他dom节点

``` js
var originalModel = monaco.editor.createModel("heLLo world!", "text/plain");
var modifiedModel = monaco.editor.createModel("hello orlando!", "text/plain");

var diffEditor = monaco.editor.createDiffEditor(document.getElementById("container"));
diffEditor.setModel({
	original: originalModel,
	modified: modifiedModel
});

```

### 参数说明
| 参数名     | 说明         | 类型                           | 是否必须 |
| ---------- | ------------ | ------------------------------ | -------- |
| domElement | 容器节点     | HTMLElement                    | 是       |
| options    | 可配置的选项 | IDiffEditorConstructionOptions | 否       |
| override   | 复写的内容   | \[index: string\]: any         | 否       |

## createDiffNavigator
> createDiffNavigator(diffEditor: IStandaloneDiffEditor, opts?: IDiffNavigatorOptions): IDiffNavigator

功能： 提供diff导航

``` js
// The diff editor offers a navigator to jump between changes. Once the diff is computed the <em>next()</em> and <em>previous()</em> method allow navigation. By default setting the selection in the editor manually resets the navigation state.
var originalModel = monaco.editor.createModel("just some text\n\nHello World\n\nSome more text", "text/plain");
var modifiedModel = monaco.editor.createModel("just some Text\n\nHello World\n\nSome more changes", "text/plain");


var diffEditor = monaco.editor.createDiffEditor(document.getElementById("container"));
diffEditor.setModel({
	original: originalModel,
	modified: modifiedModel
});

var navi = monaco.editor.createDiffNavigator(diffEditor, {
	followsCaret: true, // resets the navigator state when the user selects something in the editor
	ignoreCharChanges: true // jump from line to line
});

window.setInterval(function() {
	navi.next();
}, 2000);

```

### 参数说明
| 参数名     | 说明           | 类型                  | 是否必须 |
| ---------- | -------------- | --------------------- | -------- |
| diffEditor | diff编辑器实例 | IStandaloneDiffEditor | 是       |
| opts       | 可配置的选项   | IDiffNavigatorOptions | 否       |


## createModel
> createModel(value: string, language?: string, uri?: Uri): ITextModel

功能：为编辑器创建一个模型，可以指定适用此模型的语言，也可以通过设置uri让其自己推断

``` js
var originalModel = monaco.editor.createModel("heLLo world!", "text/plain");
var modifiedModel = monaco.editor.createModel("hello orlando!", "text/plain");

var diffEditor = monaco.editor.createDiffEditor(document.getElementById("container"));
diffEditor.setModel({
	original: originalModel,
	modified: modifiedModel
});

```

### 参数说明
| 参数名   | 说明           | 类型   | 是否必须 |
| -------- | -------------- | ------ | -------- |
| value    | 值             | string | 是       |
| language | 指定的语言     | string | 否       |
| uri      | 统一资源标识符 | URI    | 否       |


## defineTheme
> defineTheme(themeName: string, themeData: IStandaloneThemeData): void

功能：定义新的主题或者更新已有的主题

``` js
monaco.editor.defineTheme('demo-custom', {
            base: 'vs-dark',
            inherit: true,
            rules: [{ background: '#cccccc' }],
            colors: {
                'editor.background': '#cccccc',     //背景色
            }
});
```
### 参数说明
| 参数名    | 说明             | 类型                 | 是否必须 |
| --------- | ---------------- | -------------------- | -------- |
| themeName | 主题名           | string               | 是       |
| themeData | 主题具体内容配置 | IStandaloneThemeData | 是       |


## setTheme
> setTheme(themeName: string): void

功能：设置主题

``` js
monaco.editor.setTheme('demo-custom')
```
### 参数说明
| 参数名    | 说明             | 类型                 | 是否必须 |
| --------- | ---------------- | -------------------- | -------- |
| themeName | 主题名           | string               | 是       |
