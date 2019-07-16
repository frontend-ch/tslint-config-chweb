---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-for-in-array

禁止对数组使用 `for-in` 来遍历元素。

`for-in` 通常是用来遍历一个对象，而且如果用它来遍历数组的话，拿到的`index`是 `string` 类型. 遍历一个数组正确的做法是用下面这三种方法：

- `array.forEach`
- `for-of`
- `for` 循环语句

<div class="code-style bad">

```ts
function foo(x: number[]) {
  for (const index in x) {
    console.log(typeof index); // 这里的index是string类型
  }
}
```

</div>
<div class="code-style good">

```ts
function foo(x: number[]) {
  // for-of
  for (const item of x) {
    console.log(item);
  }

  // forEach
  x.forEach(item => console.log(item));

  // for loop
  for (let i = 0; i < x.length; i++) {
    const item = x[i];
    console.log(item);
  }
}
```

</div>
