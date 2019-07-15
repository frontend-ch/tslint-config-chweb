---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# typedef-whitespace

<Badge text="HasFixer" vertical="middle" />

- 定义如下空白符规则
  - 控制流语句（`if`/`else`/`for`/`while`）后面应该有一个空格
  - 变量声明语句中的`=`前后应该各有一个空格
  - 运算符前后应该各有一个空格
  - 模块导入导出语句的关键字之间应该有一个空格
  - 分隔符（`,`, `;`）后面应该有一个空格
  - 扩展运算符(`...`)前后应该各有一个空格
  - 变量类型定义前应该有个空格
  - 类型转换语句中与目标类型之间应该有一个空格
  - 类型定义中的操作符`&` 和 `|` 前后应该各有一个空格
  - 代码快的起始花括号`{`前应该有一个空格

```json
{
  "whitespace": [
    true,
    "check-branch",
    "check-decl",
    "check-operator",
    "check-module",
    "check-separator",
    "check-rest-spread",
    "check-type",
    "check-typecast",
    "check-type-operator",
    "check-preblock"
  ]
}
```

> 参见[配置详情](https://palantir.github.io/tslint/rules/whitespace/)
