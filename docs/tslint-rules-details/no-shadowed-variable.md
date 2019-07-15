---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-shadowed-variable

禁止变量名与上层作用域内的定义过的变量名重复。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
function foo(item: string[]) {
  let baz = item.filter(item => item.length > 10);
}
```

</div>
<div class="code-style good">

```ts
function foo(item: string[]) {
  let baz = item.filter(subitem => subitem.length > 10);
}
```

</div>
