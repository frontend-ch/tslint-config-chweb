---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# arrow-parens

箭头函数参数必须用圆括号括起来，但如果只有一个参数的话则不允许使用圆括号。

<Badge text="HasFixer" vertical="middle" />

- 本规范中的配置：

`"arrow-parens": [true, "ban-single-arg-parens"]`

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
foo = (a) => a + 1;
```

</div>
<div class="code-style good">

```ts
foo = (a, b) => a + b;
foo = a => a + 1;
foo = (a: number) => a + 1;
```

</div>
