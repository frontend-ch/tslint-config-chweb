---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# quotemark

必须使用单引号，JSX 属性必须用双引号。

- 本规范的默认配置

`"quotemark": [true, "single", "jsx-double"]`

<div class="code-style bad">

<!-- prettier-ignore -->
```tsx
const foo = "foo";
const jsx = <foo id='foo' />
```

</div>
<div class="code-style good">

```tsx
const foo = 'foo';
const jsx = <foo id="foo" />;
```

</div>
