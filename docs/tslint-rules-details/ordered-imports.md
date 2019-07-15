---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# ordered-imports

`import` 语句排序与分组。

<Badge text="HasFixer" vertical="middle" />

本规范要求 import 语句需要安一定规则排序：

1.import 的模块名（`import { Foo } from 'foo';` 中的 `foo`）按首字母顺序排序（忽略大小写）。

<div class="code-style bad">

```ts
import foo from 'foo';
import bar from 'Bar';
import baz from 'baz';
```

</div>
<div class="code-style good">

```ts
import bar from 'Bar';
import baz from 'baz';
import foo from 'foo';
```

</div>

2.import 的变量名（`import { Foo } from 'foo';` 中的 `Foo`）按首字母排序（忽略大小写）。

<div class="code-style bad">

```ts
import { b, A, C } from 'foo';
```

</div>
<div class="code-style good">

```ts
import { A, b, C } from 'foo';
```

</div>

3.模块的全路径（）按首字母排序（忽略大小写）。

<div class="code-style bad">

```ts
import foo from './f/foo';
import bar from './a/Bar';
import baz from './b/baz';
```

</div>
<div class="code-style good">

```ts
import bar from './a/Bar';
import baz from './b/baz';
import foo from './f/foo';
```

</div>

> 详情参见[tslint/ordered-imports](https://palantir.github.io/tslint/rules/ordered-imports/)

<div class="code-style bad">

```ts
import tslint from 'tslint';
import * as glob from 'glob'; // 'glob' 应该在 'tslint'之前
import { parse, isAbsolute } from 'path'; // 'path' 应该在 'tslint'之前,'isAbsolute' 应该在 'parse'之前
import * as bad from '../curly/bad';
import * as good from '../array-type/good'; // '../array-type/good' 应该在 '../curly/bad'之前
import { TsConfigSourceFile } from 'typescript'; // 'typescript' 应该在 '../*'之前
```

</div>
<div class="code-style good">

```ts
import * as glob from 'glob';
import { isAbsolute, parse } from 'path';
import tslint from 'tslint';
import { TsConfigSourceFile } from 'typescript';
import * as good from '../array-type/good';
import * as bad from '../curly/bad';
```

</div>
