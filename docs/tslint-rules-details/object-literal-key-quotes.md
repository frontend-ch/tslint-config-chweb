---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# object-literal-key-quotes

<Badge text="HasFixer" vertical="middle" />

索引类型的对象，需要引号的`key` **必须**使用引号，不需要引号的`key` **一定不**加引号。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
let obj = { 'foo': 'foo', 'b-ar': 'bar' };
```

</div>
<div class="code-style good">

```ts
let obj = { foo: 'foo', 'b-ar': 'bar' };
```

</div>
