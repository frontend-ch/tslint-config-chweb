---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-this-assignment

禁止将 `this` 赋值给其他变量，但允许对 `this` 进行解构赋值。

应尽量使用箭头函数来避免将`this`赋值给其他变量

<div class="code-style bad">

```ts
function demo() {
  let self = this;
  function add() {
    console.log(self);
  }
}
```

</div>
<div class="code-style good">

```ts
function demo() {
  const add = () => {
    console.log(this);
  };
  // allow destructuring
  const { foo } = this;
}
```

</div>
