---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# newline-per-chained-call

链式调用的方法应另起一行。

本规范能尽量是你的代码“纵向”发展，使代码更容易阅读。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
myPromise.then(() => Promise.resolve(1)).then(res => console.log(res)).finally(() => console.log('end'));
```

</div>
<div class="code-style good">

```ts
myPromise
  .then(() => Promise.resolve(1))
  .then(res => console.log(res))
  .finally(() => console.log('end'));
```

</div>
