---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# interface-over-type-literal

避免使用 `type` 声明接口类型。

<Badge text="TSOnly" type="warn" vertical="middle" /> <Badge text="HasFixer" vertical="middle" />

能使用`interface`的时候，尽量使用`interface`，因为`interface`能被实现，扩展，继承。

<div class="code-style good">

```ts
interface T = {
  foo: string;
};
```

</div>
<div class="code-style bad">

```ts
type T = {
  foo: string;
};
```

</div>
