---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# import-spacing

`import` 语句中的关键字(如 `import`, `as`, `*`, `from`)之间应该有一个空格。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
import{LintResult}from"tslint";
import*as lint from'tslint';
import  {Linter}  from  'tslint';
```

</div>
<div class="code-style good">

```ts
import { LintResult } from 'tslint';
import * as lint from 'tslint';
import { Linter } from 'tslint';
```

</div>
