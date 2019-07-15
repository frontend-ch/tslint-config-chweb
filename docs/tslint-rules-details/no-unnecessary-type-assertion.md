---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-unnecessary-type-assertion

<Badge text="TSOnly" type="warn" vertical="middle" /> <Badge text="HasFixer" vertical="middle" /> <Badge text="Requires Type Info" vertical="middle" />

禁止无用类型断言。

<div class="code-style bad">

```ts
let a = 0;
console.log(a as number);
```

</div>
