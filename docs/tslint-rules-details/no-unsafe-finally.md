---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-unsafe-finally

禁止在 finally 代码块中使用诸如 `return`, `continue`, `break` 和 `throws` 的流程控制语句。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
function foo() {
  try {
  } catch (e) {
  } finally {
    return 123;
  }
}
```

</div>
<div class="code-style good">

```ts
function foo() {
  try {
  } catch (e) {
  } finally {
  }
  return 123;
}
```

</div>
