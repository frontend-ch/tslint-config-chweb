---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-inferrable-types

禁止给已初始化为 `number`, `string`, 或 `boolean` 类型的变量显示声明类型。

<Badge text="TSOnly" type="warn" vertical="middle" /> <Badge text="HasFixer" vertical="middle" />

被`number`, `string`, 或 `boolean`类型的值初始化的变量，是能推断出该变量的类型。为这些变量再声明类型就显得多余了。

<div class="code-style bad">

```ts
const foo: number = 0;
const bar: string = 'bar';
const flag: boolean = false;
```

</div>
<div class="code-style good">

```ts
const foo = 0;
const bar = 'bar';
const flag = false;
```

</div>
