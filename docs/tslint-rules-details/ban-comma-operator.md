---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# ban-comma-operator

禁止使用逗号操作符

逗号操作符会让代码变得难以理解。

<div class="code-style bad">

```ts
foo((bar, baz)); // 实际上它等价于 foo(baz) 。但由于逗号操作符会让你的真实意图不明确。

switch (foo) {
  case (1, 2): // 实际上只有 foo == 2 才会进入此分支，foo == 1 会进入default分支，但这会让人误以为，foo 为 1 或 2 都会进入此分支。
    return 'a';
  case 3:
    return 'c';
  default:
    return 'b';
}
```

</div>
