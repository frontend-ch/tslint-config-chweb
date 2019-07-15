---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# prefer-switch

如果 `if ... else if` 语句中，对同一变量只使用了 `===` 进行条件判断超过 `4` 个，则应该使用 `switch` 语句。

<div class="code-style bad">

```ts
if (foo === 1) {
  // foo:1
} else if (foo === 2) {
  // foo:2
} else if (foo === 3) {
  // foo:3
} else if (foo === 4) {
  // foo:4
}
```

</div>
<div class="code-style good">

```ts
switch (foo) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
}
// 如果在连续的 if ... else if 中有比较其他变量，那还是应该是用 if ... else if
if (foo === 1) {
  // foo:1
} else if (foo === 2) {
  // foo:2
} else if (foo === 3) {
  // foo:3
} else if (foo === 4) {
  // foo:4
} else if (bar === 4) {
  // bar:4
}
```

</div>
