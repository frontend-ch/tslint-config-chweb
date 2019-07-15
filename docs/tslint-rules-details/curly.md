---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# curly

<Badge text="HasFixer" vertical="middle" />

`if` / `for` / `do` / `while` 语句必须使用大括号括起来，但允许在同一行的情况下省略花括号。

- 本规范的配置

`"curly": [true, "ignore-same-line"]`

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
// 多行情况下必须用花括号括起来，下面写法不合规范
if (foo === bar) 
  foo += bar;
```

</div>

<div class="code-style good">

```ts
// 即使只有一条语句，多行情况下也必须用花括号括起来
if (foo === bar) {
  foo += bar;
}
// 一行的情况下，花括号允许省略
if (foo > bar) {
  foo -= 1;
}
if (foo > bar) foo -= 1;
```

</div>
