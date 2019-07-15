---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# ban-types

<Badge text="TSOnly" type="warn" vertical="middle" />

禁止使用特定的类型作为类型声明，如 `Function`, `Object`, `String`, `Number` 等 JavaScript 构造函数，而应该使用 `() => void`, `object`, `string`, `number` 等 TypeScript 类型声明关键字。

### 规则详情

- 本规范中的配置

```json
{
  "ban-types": [
    true,
    ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
    ["Function", "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."],
    ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
    ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
    ["String", "Avoid using the `String` type. Did you mean `string`?"],
    ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
  ]
}
```

<div class="code-style bad">

```ts
interface Foo {
  a: Object;
  b: Function;
  c: Boolean;
  d: Number;
  e: String;
  f: Symbol;
}
```

</div>
<div class="code-style good">

```ts
interface Foo {
  a: object;
  b: () => void;
  c: boolean;
  d: number;
  e: string;
  f: symbol;
}
```

</div>
