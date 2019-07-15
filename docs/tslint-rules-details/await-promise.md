---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# await-promise

`await` 后面的值必须是 `Promise` 对象。

<Badge text="TSOnly" type="warn" vertical="middle" /> <Badge text="Requires Type Info" vertical="middle" />

此规范的目的主要有以下两点：

1. `await` 一个非 `Promise` 对象的时候，他会立即 `resolve`。这样的代码其实会让人产生误解。
2. `await` 一个 `Promise` 对象是常规做法，此规范能帮你找出编码错误，比如忘了在函数实现里返回 `Promise` 对象。

<div class="code-style bad">

```ts
await 'value';

const createValue = () => 'value';
await createValue();
```

</div>
<div class="code-style good">

```ts
await Promise.resolve('value');

const createValue = async () => 'value'; // 或者 () => Promise.resolve('value')
await createValue();
```

</div>
