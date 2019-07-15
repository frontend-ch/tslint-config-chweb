---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# new-parens

new 一个对象时，必须使用圆括号。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
const foo = new Foo;
```

</div>
<div class="code-style good">

```ts
const foo = new Foo();
```

</div>
