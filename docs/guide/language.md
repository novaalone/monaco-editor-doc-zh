# language的常用方法

## register
> register(language: ILanguageExtensionPoint): void

功能：注册一门新的语言

```js
monaco.languages.register({ id: 'mySpecialLanguage' });
```
### 参数说明
| 参数名     | 说明         | 类型                                 | 是否必须 |
| ---------- | ------------ | ------------------------------------ | -------- |
| language | 语言配置内容     | ILanguageExtensionPoint        | 是       |



## 未完待续