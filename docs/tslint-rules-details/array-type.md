---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# array-type

统一数组类型声明方式：简单类型的数组必须使用 `T[]`, 复杂类型的数组必须使用 `Array<T | S>`

<Badge text="TSOnly" type="warn" vertical="middle" /> <Badge text="HasFixer" vertical="middle" />

- 本规范中的配置：

`"array-type": [true, "array-simple"]`

<div class="code-style bad">

```ts
const foo: Array<T>;
const bar: (T & S)[];
```

</div>
<div class="code-style good">

```ts
const foo: T[];
const bar: Array<T & S>;
```

</div>
