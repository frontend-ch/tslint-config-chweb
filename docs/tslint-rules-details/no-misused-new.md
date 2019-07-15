---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-misused-new

<Badge text="TSOnly" type="warn" vertical="middle" />

禁止在接口中定义 `constructor`，或在类中定义 `new` 。

事实上，在类中定义`new():C`，实际上是为类定义了一个名称为 new 的实例方法，并不是构造函数。本规则能尽量避免这样的错误。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
declare class C {
  new(): C;
}

interface I {
  new (): I;
  constructor(): void;
}
```

</div>
<div class="code-style good">

```ts
class C {
  constructor() {}
}
interface I {
  new (): C;
}
```

</div>
