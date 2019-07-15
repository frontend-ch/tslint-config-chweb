---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-parameter-reassignment

禁止对函数的参数重新赋值。

<div class="code-style bad">

```ts
function foo(bar: number) {
  bar += 1;
  console.log(bar);
}
```

</div>
<div class="code-style good">

```ts
function foo(bar: number) {
  const anotherBar = bar + 1;
  console.log(anotherBar);
}
```

</div>
