---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-var-requires

必须使用箭头函数，除非函数声明或是命名函数。

<Badge text="TSOnly" type="warn" vertical="middle" />

箭头函数不仅能使代码结构更加简洁，还能在一定程度上避免 `this` 指向导致的一些无法预料的错误。

- 本规范默认配置

`"only-arrow-functions": [true, "allow-declarations", "allow-named-functions"]`

<div class="code-style bad">

```ts
const foo = function() {
  return 1;
};
window.addEventListener('scroll', function(event) {
  // do somethings
});
myPromise.then(function() {
  // do somethings
});
```

</div>
<div class="code-style good">

```ts
const foo = () => 1;
window.addEventListener('scroll', event => {
  // do somethings
});
myPromise.then(() => {
  // do somethings
});
function add(a: number, b: number) {
  return a + b;
}
interface MyInterface {
  add(a: number, b: number): number;
}
```

</div>
