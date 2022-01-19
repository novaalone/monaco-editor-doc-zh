# monaco.editor.create

## 方法参数
> create(domElement: HTMLElement, options?: IStandaloneEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneCodeEditor

参数名 | 参数说明 | 是否必填 | 参数类型
---|---|---|---
domElement | 承载editor的容器节点 |是|HTMLElement
options | 编辑器的配置项 | 否 | IStandaloneEditorConstructionOptions
override | 覆写项 | 否 | IEditorOverrideServices

## Options支持的配置项

### 智能提示相关

参数名 | 参数说明 | 是否必填 | 参数类型
---|---|---|---
acceptSuggestionOnCommitCharacter | - | 否 | boolean
acceptSuggestionOnEnter | 点击Enter是否键入提示的内容 | 否 | 'on'（默认），'off'，'smart'

### 无障碍阅读相关

参数名 | 参数说明 | 是否必填 | 参数类型
---|---|---|---
accessibilityHelpUrl | 在无障碍帮助窗口点击Ctrl+H(Windows 和 Linux) 或者 Cmd+H(OSX)的时候打开的链接 | 否 | string
accessibilityPageSize | 控制屏幕阅读器能够读出的行数 | 否 | number
accessibilitySupport | 是否支持无障碍阅读 | 否 | 'on','off','auto'(默认)
ariaContainerElement | 使用无障碍信息的容器元素 | 否 | HTMLElement (默认为document.body)
ariaLabel | 编辑器内容区域的aria标签（当获取焦点的时候） | 否 | string

### 自动操作相关
参数名 | 参数说明 | 是否必填 | 参数类型
---|---|---|---
autoClosingBrackets | 自动闭合括号 | 否 | 'always','languageDefined'（默认）,'beforeWhitespace', 'never'
autoClosingDelete | - | 否 | 'always','auto','never'
autoClosingOvertype | - | 否 | 'always','auto','never'
autoClosingQuotes | 自动闭合引号 | 否 | 'always','languageDefined'（默认）,'beforeWhitespace', 'never'
autoDetectHighContrast | 自动检测高对比度，如果系统用的是高对比度的主题，编辑器也会自动切换成高对比度的主题 | 否 | boolean
autoIndent | 键入、粘贴、移动或者缩进的时候，编辑器是否需要自动调整缩进 | 否 | 'none'
,'advanced'(默认), 'full','brackets','keep'