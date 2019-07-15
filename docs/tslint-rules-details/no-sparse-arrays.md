---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-sparse-arrays

禁止在数组中出现连续的逗号。

数组中连续的逗号多是书写错误。本规范能辅助找出这种书写错误。若有必要应该显示的写入 `undefined`

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
const bar = [1, , 2];
```

</div>
<div class="code-style good">

```ts
const foo = [1, 2];
const bar = [1, undefined, 2];
```

</div>
