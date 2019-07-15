---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# prefer-for-of

使用 `for` 循环遍历数组时，如果 `index` 仅用于获取成员，则必须使用 `for of` 循环替代 `for` 循环。

<div class="code-style bad">

```ts
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

</div>
<div class="code-style good">

```ts
for (const x of arr) {
  console.log(x);
}

for (let i = 0; i < arr.length; i++) {
  // i 用于修改数组成员，所以这个时候不能用 for-of 。
  arr[i] = 0;
}

for (let i = 0; i < arr.length; i++) {
  // i 有其他的单独用途（不只是用来获取数组成员），所以这个时候也不能用 for-of 。
  console.log(i, arr[i]);
}
```

</div>
