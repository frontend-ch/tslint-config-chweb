---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# typedef-whitespace

<Badge text="TSOnly" type="warn" vertical="middle" />
<Badge text="HasFixer" vertical="middle" />

- 本规范默认配置

```json
{
  "typedef-whitespace": [
    true,
    {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    },
    {
      "call-signature": "onespace",
      "index-signature": "onespace",
      "parameter": "onespace",
      "property-declaration": "onespace",
      "variable-declaration": "onespace"
    }
  ]
}
```

> 参见[配置详情](https://palantir.github.io/tslint/rules/typedef-whitespace/)

<div class="code-style bad">

```ts
// prettier-ignore
let foo:number[] = [];
// prettier-ignore
let bar : string[] = [];
// prettier-ignore
let baz :string[] = [];
```

</div>
<div class="code-style good">

```ts
let foo: number[] = [];

let bar: string[] = [];

let baz: string[] = [];
```

</div>
