---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-void-expression

禁止在表达式中使用 `void` 类型的值。

值为 void 的变量或函数返回值在表达式中会让人误以为它是有值的。比如下面的例子，它将会打印出 undefined，但看起来好像会打印出某个什么值一样。

```ts
const performWork = (): void => {
  doSomeWork();
};

console.log(performWork());
```
