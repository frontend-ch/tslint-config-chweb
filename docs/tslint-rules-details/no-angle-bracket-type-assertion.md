---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-angle-bracket-type-assertion

禁止使用尖括号进行类型断言，应使用 `as` 关键字。

在 `.tsx` 文件中不能使用尖括号进行类型断言而只能使用 `as` 关键字。统一使用 `as` 关键字能统一代码风格。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
let p = <Promise<void>>foo;
```

</div>
<div class="code-style good">

```ts
let p = foo as Promise<void>;
```

</div>
