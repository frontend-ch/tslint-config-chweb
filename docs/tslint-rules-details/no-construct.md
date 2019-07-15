---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-construct

禁止访问 `String`, `Number`, 和 `Boolean` 构造器。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
const a = new Boolean('true');
const b = new String(123);
const c = new Number('123');
```

</div>
<div class="code-style good">

```ts
const a = Boolean('true');
const b = String(123);
const c = Number('123');
```

</div>

> 参考：[`new Number()` vs `Number()`](https://stackoverflow.com/questions/4719320/new-number-vs-number)
