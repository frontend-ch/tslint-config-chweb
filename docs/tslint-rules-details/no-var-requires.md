---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-var-requires

<Badge text="TSOnly" type="warn" vertical="middle" />

禁止使用`var module = require("module")`这种格式引入模块，应该使用 ES2015 的模块引入，或者 `import foo = require('foo')`。

<div class="code-style bad">

```ts
var foo = require('foo');
const foo = require('foo');
let foo = require('foo');
```

</div>
<div class="code-style good">

```ts
import { foo } from 'foo';
// or
import foo = require('foo');
```

</div>
