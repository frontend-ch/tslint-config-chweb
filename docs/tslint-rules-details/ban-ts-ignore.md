---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# ban-ts-ignore

<Badge text="TSOnly" type="warn" vertical="middle" />

禁止在代码中使用 `// @ts-ignore` 关闭代码检查，应在任何时候都遵循此规范定义的规则。

<div class="code-style bad">

```tsx
if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
```

</div>
<div class="code-style good">

```tsx
if (false) {
  // Compiler warns about unreachable code error
  console.log('hello');
}
```

</div>
