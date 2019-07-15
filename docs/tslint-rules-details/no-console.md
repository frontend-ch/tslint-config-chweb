---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-console

禁止使用的 `console` 方法。

`console`方法应避免出现在生产代码中，因为那可能会将一些敏感信息暴露出来。

> 你可以在 `tslint.json` 中动态配置此规则：`"no-console": process.env.NODE_ENV === 'production'`，并配合 webpack 的 `UglifyJsPlugin` 插件来保证生产环境中没有`console`相关的方法调用。
