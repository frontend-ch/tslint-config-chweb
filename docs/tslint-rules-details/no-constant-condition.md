---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-constant-condition

禁止在条件判断语句中使用常量表达式

大多数情况下，条件判断语句中的常量表达式（如字面量`true`, `false`）多为开发过程的测试代码。如下面的代码:

```ts
if (false) {
  doSomethingUnfinished();
}
```

### 规则详情

本规范禁止在`if`语句和三元表达式（`?:`）中使用常量表达式作为条件判断，但允许在循环中（`for`,`while`,`do...while`）使用。

<div class="code-style bad">

```tsx
if (false) {
  doSomethingUnfinished();
}

if (void x) {
  doSomethingUnfinished();
}

var result = 0 ? a : b;
```

</div>
<div class="code-style good">

```tsx
if (x === 0) {
  doSomething();
}

var result = x !== 0 ? a : b;

while (true) {
  doSomething();
  if (condition()) {
    break;
  }
}

for (; true; ) {
  doSomething();
  if (condition()) {
    break;
  }
}

do {
  doSomething();
  if (condition()) {
    break;
  }
} while (true);
```

</div>
