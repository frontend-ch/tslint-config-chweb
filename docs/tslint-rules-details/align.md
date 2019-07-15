---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# align

如果方法声明的参数，方法调用的参数，对象属性，数组以及类成员是纵向排列的话，一定要对齐。

<Badge text="HasFixer" vertical="middle" />

- 本规范中的配置：

`"align": [true, "arguments", "elements", "members", "parameters", "statements"]`

<div class="code-style bad">

```ts
// prettier-ignore
export function foo(
  arg1: number, 
  arg2: number, 
arg3: number) {}

// prettier-ignore
foo(
  1, 
2, 3);

// prettier-ignore
const obj = {
  arg1: 1,
  arg2: 2,
arg3: 3
};
// prettier-ignore
let bar = 2;
// prettier-ignore
const arr = [1, 
  2, 3, 4];
class MyClass {
  foo = 1;
  // prettier-ignore
    bar = 2;
}
```

</div>
<div class="code-style good">

```ts
// prettier-ignore
export function foo(
  arg1: number, 
  arg2: number, 
  arg3: number) {}

// prettier-ignore
foo(
  1, 
  2, 
  3);

const obj = {
  arg1: 1,
  arg2: 2,
  arg3: 3
};

let bar = 2;

const arr = [1, 2, 3, 4];
class MyClass {
  foo = 1;
  bar = 2;
}
```

</div>
