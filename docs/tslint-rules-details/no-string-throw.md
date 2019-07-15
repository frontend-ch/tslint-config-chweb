---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-string-throw

抛出异常时禁止直接抛出字符串，而应当抛出 `Error` 对象。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
throw 'not found';
```

</div>
<div class="code-style good">

```ts
throw new Error('not found');
```

</div>
