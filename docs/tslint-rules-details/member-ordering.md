---
sidebarDepth: 0
categories:
  - TypeScript
  - TSLint
tags:
  - TypeScript
---

# member-ordering

<Badge text="HasFixer" vertical="middle" />

本规范规定类成员属性的顺序：**静态成员** 应该在 **实例成员** 的前面。

### 规则详情

- 本规范默认配置 [关于](https://palantir.github.io/tslint/rules/member-ordering/)

`"member-ordering": [true, {"order": "statics-first"}]`

- 表现行为
  - 静态成员 > 实例成员
    - public > protected > private
    - 静态成员变量 > 静态成员方法
  - 实例变量 > 构造函数 > 实例方法
    - 变量 > 构造函数 > 方法
    - public > protected > private

<div class="code-style good">

```ts
class MyClass {
  // public 静态成员变量
  static foo: string;
  // public 静态方法
  static aar() {}
  // protected 静态成员变量
  protected static bar: string;
  // protected 静态方法
  protected static dar() {}
  // private 静态成员变量
  private static car: string;
  // private 静态方法
  private static ear() {}
  // public 实例变量
  far = '';
  // protected 实例变量
  protected gar = '';
  // private 实例变量
  private har = '';
  // 构造函数
  constructor() {}
  // public 实例方法
  iar() {}
  // protected 实例方法
  protected jar() {}
  // private 实例方法
  private kar() {}
}
```

</div>
