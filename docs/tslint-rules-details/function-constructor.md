---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# function-constructor

<Badge text="HasFixer" vertical="middle" />

禁止使用原生函数构造器(`Function`)创建函数。

直接使用 Function 构造函数相当于在使用 eval 函数，无法定义参数及返回值的类型，另外在动态创建函数的时候还会有性能问题。

