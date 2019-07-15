---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# variable-name

变量名规范：

- 禁止使用关键字作为变量名；
- 允许驼峰命名法（lowerCamelCase）；
- 允许帕斯卡命名法（PascalCase）；
- 允许下划线开头的变量名（\_leadingUnderscore）；
- 允许蛇形命名法（snake_case）。
- 禁止下划线结尾的变量名

- 本规范默认配置

```json
{
  "variable-name": [
    true,
    "ban-keywords",
    "check-format",
    "allow-pascal-case",
    "allow-leading-underscore",
    "allow-snake-case"
  ]
}
```

<div class="code-style bad">

```ts
let number = 1; // 关键字
let age_ = 1; // 下划线结尾
```

</div>
