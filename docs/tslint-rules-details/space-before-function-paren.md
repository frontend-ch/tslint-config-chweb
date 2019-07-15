---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# space-before-function-paren

函数左圆括号前的空格规则。

<Badge text="HasFixer" vertical="middle" />

- 本规范默认配置

```json
{
  "space-before-function-paren": [
    true,
    {
      "asyncArrow": "always", // async 标记的箭头函数括号前必须有空格
      "constructor": "never", // 构造函数括号前禁止有空格
      "method": "never", // 实例方法括号前禁止有空格
      "named": "never" // 命名函数括号前禁止有空格
    }
  ]
}
```

<div class="code-style bad">

```ts
// prettier-ignore
function foo () { // 命名函数括号前禁止有空格
  // foo
}

// prettier-ignore
const baz = async() => Promise.resolve(); // async 标记的箭头函数括号前必须有空格

class MyClass {
  // prettier-ignore
  constructor () { // 构造函数括号前禁止有空格
    // constructor
  }
  // prettier-ignore
  foo () { // 实例方法括号前禁止有空格
    // foo
  }
}
```

</div>
<div class="code-style good">

```ts
function foo() {
  // foo
}

const bar = function() { // 匿名函数不做要求，括号前可以有空格，也可以没有。
  // bar
};
// prettier-ignore
const zar = function () {
  // bar
};

const baz = async () => Promise.resolve();

class MyClass {
  constructor() {
    // constructor
  }

  foo() {
    // foo
  }
}
```

</div>
