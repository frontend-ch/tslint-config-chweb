---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# restrict-plus-operands

使用 `+` 运算符的时候，前后变量的类型必须一样。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
const foo = '5.5' + 10;
const foo = 1n + 1;
```

</div>
<div class="code-style good">

```ts
const foo = '5.5' + String(10);
const foo = 1n + 1n;
```

</div>
