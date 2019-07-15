---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-namespace

禁止声明内部的 `module`s 和 `namespace`s，但可以使用 `declare` 关键字将其申明为对外模块或命名空间。

<Badge text="TSOnly" type="warn" vertical="middle" />

- 本规范默认配置

`"no-namespace": [true, "allow-declarations"]`

<div class="code-style bad">

```ts
namespace MyNamespace {
  interface MyInterface {
    // some definition
  }
}
```

</div>
<div class="code-style good">

```ts
declare namespace MyNamespace {
  interface MyInterface {
    // some definition
  }
}
```

</div>
