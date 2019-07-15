---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-dynamic-delete

禁止将 `delete` 操作符用于动态计算的 `key`。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
delete obj[key];
delete obj['k'+'ey'];
delete obj[`${key}`];
```

</div>
<div class="code-style good">

```ts
delete obj.key;
delete obj['key'];
```

</div>
