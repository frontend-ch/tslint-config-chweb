---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# comment-format

单行注释的`//`与注释内容之间必须有 1 个空格。

<Badge text="HasFixer" vertical="middle" />

- 本规范配置

`"comment-format": [true, "check-space"],`

<div class="code-style bad">

```ts
//MyClass
class MyClass {}
```

</div>
<div class="code-style good">

```ts
// MyClass
class MyClass {}
```

</div>
