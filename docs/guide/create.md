# Create配置选项

## 常用选项

| 参数  |                                        说明                                        |   类型 | 默认值 |                    可选值 |
| ----- | :--------------------------------------------------------------------------------: | -----: | -----: | ------------------------: |
| value |                                   编辑器的初始值                                   | string |      - |                         - |
| theme | 编辑器的主题样式,除了提供的可选值外，也可以通过monaco.editor.defineTheme自定义主题 | string |   'vs' | 'vs','vs-dark','hc-black' |
| language | 编辑器的初始语言,例如可以设置为javascript, json等 | string | - | - | 
| model | 和编辑器关联的初始模型 | ITextModel | - | - |
| lineNumbers | 控制行数的渲染，如果是function，那么会使用return的内容作为行数展示 | string/Function |'on' | 'on','off','relative', 'interval', '(lineNumber: number) => string'
| readOnly | 控制编辑器是否只读 | boolean | false | - | 
| autoClosingBrackets | 自动闭合括号 | string | 'languageDefined' | 'always'/'languageDefined'/'beforeWhitespace'/'never'
| autoClosingOvertype | 自动闭合括号或引号 | string | - | 'always'/'auto'/'never'
| autoClosingQuotes | 自动闭合引号 | string | 'languageDefined' | 'always'/'languageDefined'/'beforeWhitespace'/'never'
| autoIndent | 自动缩进 | string | 'advanced' | 'none'/'keep'/'brackets'/'advanced'/'full'

