---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# unified-signatures

若两个重载函数能通过联合类型或可选参数或 rest 参数合并，则尽可能的合并

<Badge text="TSOnly" type="warn" vertical="middle" />

此规则在保证代码可维护性的同时，尽可能的减少冗余的重载声明。

<div class="code-style bad">

```ts
interface MyInterface {
  f(x: number): number;
  f(x: number, y: number): number;

  m(x: number): string;
  m(x: string): string;
}
```

</div>
<div class="code-style good">

```ts
interface MyInterface {
  f(x: number, y?: number): number;

  m(x: number | string): string;
}
```

</div>
