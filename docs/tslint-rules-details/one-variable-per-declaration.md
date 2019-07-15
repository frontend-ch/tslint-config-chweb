---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# one-variable-per-declaration

每个变量应单独声明，`let a,b,c;` 这种是不允许的。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
let a, b = 0, c = 's';
```

</div>
<div class="code-style good">

```ts
let a;
let b = 0;
let c = 's';
```

</div>
