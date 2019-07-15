---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-unnecessary-initializer

<Badge text="HasFixer" vertical="middle" /> 

禁止没必要的初始化。如 `let` 声明的变量不应该将其初始化为 `undefined` ，因为他默认就是 `undefined` 。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
let p = undefined;
```

</div>
<div class="code-style good">

```ts
let p;
```

</div>
