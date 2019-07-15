---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# adjacent-overload-signatures

方法重载必须放在相邻的位置。

<Badge text="TSOnly" type="warn" vertical="middle" /> <Badge text="Has Fixer" vertical="middle" />

将方法重载放在相邻位置能大大提高代码的可读性。[关于](https://palantir.github.io/tslint/rules/adjacent-overload-signatures/)

- 本规范的默认配置：

`"adjacent-overload-signatures": true`

<div class="code-style bad">

```ts
interface Foo {
  bar(a: number): string;
  tea(a: number): string;
  bar(a: string, b: number): string;
}
```

</div>
<div class="code-style good">

```ts
interface Foo {
  bar(a: number): string;
  bar(a: string, b: number): string;
  tea(a: number): string;
}
```

</div>
