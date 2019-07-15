---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-object-literal-type-assertion

<Badge text="TSOnly" type="warn" vertical="middle" />

禁止对对象字面量进行类型断言（断言为 `any` 是允许的）

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
const x = { a: 1, b: 2 } as T;
```

</div>
<div class="code-style good">

```ts
const x: T = { a: 1, b: 2 };
const y = { a: 1, b: 2 } as any;
```

</div>
