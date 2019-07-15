# tslint-config-chweb

Disciple 团队 TSLint 规范

## 使用

### 安装

```sh
npm i tslint-config-chweb -D
```

### 配置 tslint.json

```json
{
  "defaultSeverity": "warning",
  "extends": ["tslint-config-chweb"],
  "linterOptions": {
    "exclude": ["node_modules/**"]
  },
  "rules": {
    "no-console": false
  }
}
```

## 规则详情

[规则详情](./docs/tslint-rules.md)

## 格式化配置

### prettier

1、安装 [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件。

2、配置 prettier

```json
{
  "prettier.printWidth": 120,
  "prettier.singleQuote": true,
  "prettier.tslintIntegration": true, // 支持使用 prettier-tslint 工具使用 tslint 规范来格式化代码
  "prettier.trailingComma": "all"
}
```

> 目前 `prettier-tslint` 还不支持格式化需要‘Type Info’的规则（如 `prefer-readonly`, `no-unnecessary-type-assertion`等）。在这个[PR](https://github.com/azz/prettier-tslint/pull/34)被处理后，将会支持。

#### 在 .vue 中使用 prettier-tslint

> 目前官方的 [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 插件暂不支持 `prettier-tslint`。在此[PR](https://github.com/vuejs/vetur/pull/1354) 被合并之前，可以先使用 Vetur 的 fork 版本 [Veturing](https://marketplace.visualstudio.com/items?itemName=nickeylean.veturing)

- 插件配置

```json
{
  "vetur.format.defaultFormatter.ts": "prettier-tslint",
  "vetur.format.defaultFormatterOptions": {
    // ... other options
    "prettier": {
      "singleQuote": true,
      "printWidth": 120,
      "trailingComma": "all"
    }
  }
}
```
