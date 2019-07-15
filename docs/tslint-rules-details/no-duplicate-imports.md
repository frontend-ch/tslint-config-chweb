---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-duplicate-imports

禁止出现多条从同一个模块导入的语句，应该将其合并为一条语句。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
import foo from 'foo';
import { bar } from 'foo';
```

</div>
<div class="code-style good">

```ts
import foo, { bar } from 'foo';
```

</div>
