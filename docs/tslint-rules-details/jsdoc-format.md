---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# jsdoc-format

JS 文档注释格式（以`/**`开头的注释）

<Badge text="HasFixer" vertical="middle" />

- 本规范默认配置

`"jsdoc-format": [true, "check-multiline-start"]`

此配置定义如下规则：

- 每一行要有星号，并且星号要对齐
- 中间行的每个星号前后应该有一个空格
- 单行的注释必须是`/**`开始，`*/`结束
- 多行的注释中，`/**`后面不应该有任何的文字描述

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
/** 
*my class */
class MyClass {}

/** another class
 */
class AnotherClass {}
```

</div>
<div class="code-style good">

```ts
/** my class */
class MyClass {}

/**
 * another class
 */
class AnotherClass {}
```

</div>
