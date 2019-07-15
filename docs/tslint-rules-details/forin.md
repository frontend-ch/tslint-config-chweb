---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# forin

`for ... in` 语句中，必须使用 `if` 语句过滤使用。

<Badge text="HasFixer" vertical="middle" />

比如你可能会遍历到从对象原型继承的属性，或者你也可能会遍历到集合类型（`Map`,`Set`）。使用`if`语句来以一定规则来遍历对象，能让你的意图更加清晰，大大提高代码可读性以及逻辑性。

<div class="code-style bad">

<!-- prettier-ignore -->
```ts
for (let key in obj) {
  console.log(`obj.${key} is ${obj[key]}`);
}
```

</div>
<div class="code-style good">

```ts
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`obj.${key} is ${obj[key]}`);
  }
}
```

</div>
