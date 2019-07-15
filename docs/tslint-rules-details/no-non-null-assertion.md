---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# no-non-null-assertion

禁止使用 `non-null` 断言操作符 `!`。

<Badge text="TSOnly" type="warn" vertical="middle" />

`!`会导致你失去 `null` 静态检查的好处。

比如下面这个例子：

<div class="code-style bad">

```ts
function foo(instance: MyClass | undefined) {
  instance!.doWork();
}
```

</div>

在这个例子中，实际上在方法实现内你已经认为 `instance` 一定不为 `null` 或 `undefined`，这种情况好的做法应该是在参数类型上去限制，如：

<div class="code-style good">

```ts
function foo(instance: MyClass) {
  instance.doWork();
}
```

</div>

或者说，`instance` 确实可能为 undefined，那么在方法实现内应当加上条件判断：

<div class="code-style good">

```ts
function foo(instance: MyClass | undefined) {
  if (instance !== undefined) {
    instance.doWork(); // 这里并不需要使用 ! 断言，因为TypeScript能推断出这里面的instance一定不为undefined
  }
}
```

</div>
