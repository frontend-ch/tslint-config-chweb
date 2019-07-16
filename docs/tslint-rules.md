# TypeScript 代码风格指南

`tslint-config-chweb`

## 1. 这些规则能避免 TypeScript 编译错误

- **adjacent-overload-signatures** - 方法重载必须放在相邻的位置。[详情](./tslint-rules-details/adjacent-overload-signatures.md)

- **ban-ts-ignore** - 禁止使用 `// @ts-ignore`。[详情](./tslint-rules-details/ban-ts-ignore.md)

- **ban-types** - 禁止使用特定的类型作为类型声明，如 `Function`, `Object`, `String`, `Number` 等 JavaScript 构造函数，而应该使用 `() => void`, `object`, `string`, `number` 等 TypeScript 类型声明关键字。[详情](./tslint-rules-details/ban-types.md)

- **member-access** - 本规范关闭此规则。

  > 本规范不强制在公共成员前面声明 `public` 关键字，但需注意，在 `TypeScript` 中，默认是 `public`

- **member-ordering** - 本规范规定类成员属性的顺序：**静态成员** 应该在 **实例成员** 的前面。[详情](./tslint-rules-details/member-ordering.md)

- **no-any** - 本规范关闭此规则。

  > 在本规范中，在任何时候你都可以使用`any`声明类型，但是在大多数你明确知道类型结构的情况下应避免使用`any`。

- **no-empty-interface** - 禁止空的接口声明。
  > 空的接口声明没有任何意义，应尽量避免。

<!-- - **no-import-side-effect** - 本规范关闭此规则 -->

- **no-inferrable-types** - 禁止给已初始化为 `number`, `string`, 或 `boolean` 类型的变量显示声明类型。[详情](./tslint-rules-details/no-inferrable-types.md)

- **no-internal-module** - 禁止声明内部的 module

- **no-magic-numbers** - 本规范关闭此规则。

  > 虽然本规范中并不强制要求必须规避“魔法数字”，但是使用`枚举类型`代替“魔法数字”能大大提高代码的可读性。
  >
  > 了解什么是[魔法数字](https://baike.baidu.com/item/%E9%AD%94%E6%B3%95%E6%95%B0%E5%AD%97/17778464)？

- **no-namespace** - 禁止声明内部的 `module`s 和 `namespace`s，但可以使用 `declare` 关键字将其申明为对外模块或命名空间。[详情](./tslint-rules-details/no-namespace.md)

- **no-non-null-assertion** - 禁止使用 `non-null` 断言操作符 `!`。[详情](./tslint-rules-details/no-non-null-assertion.md)

- **no-parameter-reassignment** - 禁止对函数的参数重新赋值。[详情](./tslint-rules-details/no-parameter-reassignment.md)

- **no-reference** - 本规范关闭此规则。

- **no-unnecessary-type-assertion** - 禁止无用类型断言。[详情](./tslint-rules-details/no-unnecessary-type-assertion.md)

- **no-var-requires** - 禁止使用`var module = require("module")`这种格式引入模块，应该使用 ES2015 的模块引入，或者 `import foo = require('foo')`。[详情](./tslint-rules-details/no-var-requires.md)

- **only-arrow-functions** - 必须使用箭头函数，除非函数声明或是命名函数。[详情](./tslint-rules-details/only-arrow-functions.md)

- **prefer-for-of** - 使用 `for` 循环遍历数组时，如果 `index` 仅用于获取成员，则必须使用 `for of` 循环替代 `for` 循环。[详情](./tslint-rules-details/prefer-for-of.md)

<!-- - **typedef** - 本规范关闭此规则 -->

- **unified-signatures** - 若两个重载函数能通过联合类型或可选参数或 rest 参数合并，则尽可能的合并。[详情](./tslint-rules-details/unified-signatures.md)

## 2. 这些规则能检查出 JS 编程中的常见错误，或者一些容易产生错误的混淆构造：

- **await-promise** - `await` 后面的值必须是 `Promise` 对象。[详情](./tslint-rules-details/await-promise.md)

- **ban-comma-operator** - 禁止使用逗号操作符。[详情](./tslint-rules-details/ban-comma-operator.md)

- **ban** - 指定应该禁止的方法或全局函数。

  > 本规范无特殊配置，可根据需要指定应该禁止的特定方法或全局函数。[详见](https://palantir.github.io/tslint/rules/ban/)

- **curly** - `if` / `for` / `do` / `while` 语句必须使用大括号括起来，但允许在同一行的情况下省略花括号。[详情](./tslint-rules-details/curly.md)

- **forin** - `for ... in` 语句中，必须使用 `if` 语句过滤使用。[详情](./tslint-rules-details/forin.md)

- **function-constructor** - 禁止使用原生函数构造器(`Function`)创建函数。[详情](./tslint-rules-details/function-constructor.md)

<!-- - **import-blacklist** - 指定一系列禁止使用 `import` 或 `require` 导入的模块。 -->

- **label-position** - 只能在 `do/for/while/switch` 语句中使用 `label` 。

  > `JavaScript` 中的标签只能与 `break` 或 `continue` 结合使用，这些结构用于循环流控制。 虽然理论上你可以在 JS 中的任何块语句中使用标签，但这样做被认为是糟糕的代码结构。

- **no-arg** - 禁止使用 `arguments.callee`。
  > 参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee) 了解为什么应避免使用 `arguments.callee` 。

<!-- - **no-async-without-await** - 标记为 `async` 的函数，必须包含 `await` 语句或 `retrun` 语句。 -->

<!-- - **no-bitwise** - 关闭此规则。 -->

- **no-conditional-assignment** - 禁止在条件判断语句中赋值。

  > 禁止在`do-while`, `for`, `if`, `while` 以及 三元表达式中的条件判断语句中进行赋值。实际上在条件判断语句中赋值大多是书写错误（如 `if (var1 = var2)`， 实际上你应该是想要 `if (var1 == var2)`），本规范能帮你找出这些书写错误。

- **no-console** - 禁止使用的 `console` 方法。[详情](./tslint-rules-details/no-console.md)

- **no-construct** - 禁止访问 `String`, `Number`, 和 `Boolean` 构造器。[详情](./tslint-rules-details/no-construct.md)

- **no-debugger** - 禁止使用 `debugger` 语句。`debugger`方法应避免出现在生产代码中。

  > 你可以在 `tslint.json` 中动态配置此规则：`"no-debugger": process.env.NODE_ENV === 'production'`，并配合 webpack 的 `UglifyJsPlugin` 插件来保证生产环境中没有`debugger`相关的方法调用。

- **no-duplicate-super** - 禁止在构造函数中重复调用 `super()`。

- **no-duplicate-switch-case** - 禁止在 `switch` 语句中出现重复的 `case` 。

- **no-duplicate-variable** - 禁止在同一块级作用域中出现相同的变量声明。

- **no-dynamic-delete** - 禁止将 `delete` 操作符用于动态计算的 `key`。

- **no-empty** - 禁止空的代码块。

- **no-eval** - 禁止使用 `eval` 方法。

<!-- - **no-floating-promises** - 本规范关闭此规则。 -->

- **no-for-in-array** - 禁止对数组使用 `for-in` 来遍历元素。[详情](./tslint-rules-details/no-for-in-array.md)

<!-- - **no-implicit-dependencies** - 本规范关闭此规则。 -->

<!-- - **no-inferred-empty-object-type** - 本规范关闭此规则。 -->

<!-- - **no-invalid-template-strings** - 本规范关闭此规则。 -->

<!-- - **no-invalid-this** - 本规范关闭此规则。 -->

- **no-misused-new** - 禁止在接口中定义 `constructor`，或在类中定义 `new` 。[详情](./tslint-rules-details/no-misused-new.md)

<!-- - **no-null-keyword** - 本规范关闭此规则。 -->

<!-- - **no-null-undefined-union** - 禁止显式地或隐式地声明 `null | undefined` 联合类型。 -->

- **no-object-literal-type-assertion** - 禁止对对象字面量进行类型断言（断言为 `any` 是允许的）。[详情](./tslint-rules-details/no-object-literal-type-assertion.md)

<!-- - **no-restricted-globals** - 指定不可访问的全局变量。 -->

<!-- - **no-return-await** - 禁止没必要的 `return await`。 -->

- **no-shadowed-variable** - 禁止变量名与上层作用域内的定义过的变量名重复。[详情](./tslint-rules-details/no-shadowed-variable.md)

- **no-sparse-arrays** - 禁止在数组中出现连续的逗号。[详情](./tslint-rules-details/no-sparse-arrays.md)

- **no-string-literal** - 若在没必要使用字符串字面量访问对象属性时，禁止使用字符串字面量访问属性。如允许`obj["prop-erty"]` ，禁止`obj["property"]`（ 应该写为 `obj.property`）。

- **no-string-throw** - 抛出异常时禁止直接抛出字符串，而应当抛出 `Error` 对象。[详情](./tslint-rules-details/no-string-throw.md)

<!-- - **no-submodule-imports** - 禁止导入子模块。 -->

- **no-switch-case-fall-through** - `switch` 的 `case` 必须 `return` 或 `break`

- **no-tautology-expression** - 禁止将两个完全一样的变量或字面量做比较，如 `'1' === '1'`, `foo === foo`, `1 > 1`。

- **no-this-assignment** - 禁止将 `this` 赋值给其他变量，但允许对 `this` 进行解构赋值。

<!-- - **no-unbound-method** - 调用实例方法时，禁止在实例作用域外调用方法，否则应当显示 `bind` 方法的实例以保证 `this` 指向正确。 -->

<!-- - **no-unnecessary-class** - 禁止声明没必要的类，如空的类，没有任何实例属性及实例方法的类。 -->

<!-- - **no-unsafe-any** - 不允许访问 `any` 类型的对象属性。 -->

- **no-unsafe-finally** - 禁止在 finally 代码块中使用诸如 `return`, `continue`, `break` 和 `throws` 的流程控制语句。[详情](./tslint-rules-details/no-unsafe-finally.md)

- **no-unused-expression** - 禁止没使用的表达式。

<!-- - **no-unused-variable** - 禁止没使用的变量，方法，以及类的私有属性。 -->

<!-- - **no-use-before-declare** - 变量必须先声明再使用。 -->

- **no-var-keyword** - 禁止使用 `var` 指令，应该使用 `let` 和 `const`。

- **no-void-expression** - 关闭此规则

<!-- - **prefer-conditional-expression** - 能使用条件表达式(三元运算符)的时候，尽量不使用 `if ... else` 。 -->

<!-- - **prefer-object-spread** - 尽可能使用对象扩展运算符代替 `Object.assign` 。 -->

<!-- - **radix** - 调用 `parseInt` 方法时，必须传入 `radix` 参数。 -->

- **restrict-plus-operands** - 使用 `+` 运算符的时候，前后变量的类型必须一样。[详情](./tslint-rules-details/restrict-plus-operands.md)

<!-- - **static-this** - 禁止在类方法中使用 `this` 。 -->

<!-- - **strict-boolean-expressions** - 限制 boolean 表达式中的参数类型。 -->

<!-- - **strict-comparisons** - 比较运算符严格模式。 -->

<!-- - **strict-type-predicates** - 禁止出现永远为 `true` 或永远为 `false` 的条件判断以及通过类型预测出一个表达式恒为 `true` 或恒为 `false` 的条件判断。 -->

<!-- - **switch-default** - `switch` 语句必须有 `default`。 -->

- **triple-equals** - 除了与 `null` 比较外，必须使用 `===` 或 `!==` ，禁止使用 `==` 或 `!=`，。

- **typeof-compare** - 关闭此规则，`tsc` 自带了此功能。

<!-- - **unnecessary-constructor** - 禁止空的构造函数。 -->

<!-- - **use-default-type-parameter** - 传入的类型与默认类型一致时，必须省略传入的类型。 -->

- **use-isnan** - 必须使用 `isNaN(foo)` 而不是 `foo === NaN`。

## 3. 这些规则可以使代码更容易维护。

<!-- - **cyclomatic-complexity** - 本规范关闭此规则。 -->

- **max-classes-per-file** - 单个文件中只能定义 1 个类。

- **max-file-line-count** - 单个文件代码不超过 1000 行。

<!-- - **no-default-export** - 禁止默认导出。 -->

<!-- - **no-default-import** - 禁止导入其他默认导出的模块。 -->

- **no-duplicate-imports** - 禁止出现多条从同一个模块导入的语句，应该将其合并为一条语句。[详情](./tslint-rules-details/no-duplicate-imports.md)

<!-- - **no-mergeable-namespace** - 禁止在同一个文件中出现可合并的命名空间。 -->

<!-- - **no-require-imports** - 禁止使用 `require()`，应使用 `ES6` 的 `import` 代替。 -->

<!-- - **object-literal-sort-keys** - 对象字面量必须按 `key` 排序。 -->

- **prefer-const** - 不再修改的变量必须使用 `const` 声明。

- **prefer-readonly** - 如果私有成员变量在构造函数之外不会被修改，则必须使用 `readonly` 修饰符。

## 4. 这些规则将使你的代码风格保持一致。

- **array-type** - 统一数组类型声明方式：简单类型的数组必须使用 `T[]`, 复杂类型的数组必须使用 `Array<T | S>`。[详情](./tslint-rules-details/array-type.md)

* **arrow-return-shorthand** - 建议将 `() => { return x; }` 简写为 `() => x` 。

<!-- - **binary-expression-operand-order** - 在二元表达式中，字面量类型应尽可能在操作符右边，如 `1 + x` 应写为 `x + 1`。 -->

<!-- - **callable-types** -  -->

- **class-name** - 必须使用`帕斯卡命名法`（即`大驼峰命名法`）来命名类或接口。[详情](./tslint-rules-details/class-name.md)

<!-- - **comment-type** - 允许的注释类型。 -->

<!-- - **completed-docs** - 定义哪些地方必须使用文档注释。 -->

<!-- - **encoding** - UTF-8 文档编码。 -->

<!-- - **file-header** - 规范文件头注释。 -->

<!-- - **file-name-casing** - 文件名命名规范。 -->

<!-- - **increment-decrement** - 禁止使用 `++i` 或 `--i`，而应使用 `i += 1`，或`i -= 1`代替。 -->

<!-- - **interface-name** - 本规范关闭此规则，但推荐接口名尽量以`I`开头。 -->

- **interface-over-type-literal** - 避免使用 `type` 声明接口类型。[详情](./tslint-rules-details/interface-over-type-literal.md)

<!-- - **match-default-export-name** - Requires that a default import have the same name as the declaration it imports. Does nothing for anonymous default exports. -->

- **newline-per-chained-call** - 链式调用的方法应另起一行。[详情](./tslint-rules-details/newline-per-chained-call.md)

- **no-angle-bracket-type-assertion** - 禁止使用尖括号进行类型断言，应使用 `as` 关键字。

<!-- - **no-boolean-literal-compare** - 禁止使用 `boolean` 字面量进行比较运算。 -->

<!-- - **no-parameter-properties** - Disallows parameter properties in class constructors. -->

<!-- - **no-redundant-jsdoc** - 禁止冗余的文档注释。 -->

- **no-reference-import** - 如果导入过某个类型，禁止再使用 `reference` (`<reference types="foo" />`) 引用该类型。

<!-- - **no-unnecessary-callback-wrapper** - 禁止没必要的函数封装。如 `x => f(x)` 应该直接是 `f`. -->

- **no-unnecessary-initializer** - 禁止没必要的初始化。如 `let` 声明的变量不应该将其初始化为 `undefined` ，因为他默认就是 `undefined` 。[详情](./tslint-rules-details/no-unnecessary-initializer.md)

<!-- - **no-unnecessary-qualifier** - 禁止没必要的修饰符。如 命名空间 `A.x` 就是冗余的。 -->

- **object-literal-key-quotes** - 索引类型的对象，需要引号的`key` **必须**使用引号，不需要引号的`key` **一定不**加引号。[详情](./tslint-rules-details/object-literal-key-quotes.md)

- **object-literal-shorthand** - 强制使用对象的简写方式。如 `{ foo: foo }` 应写为 `{ foo }`。

- **one-line** - `else`,`catch`,`finally`,`{` 应该与上一个结束的花括号在同一行。

- **one-variable-per-declaration** - 每个变量应单独声明，`let a,b,c;` 这种是不允许的。[详情](./tslint-rules-details/one-variable-per-declaration.md)

- **ordered-imports** - `import` 语句排序与分组。[详情](./tslint-rules-details/ordered-imports.md)

<!-- - **prefer-function-over-method** - 没有使用 this 的实例方法，应该声明为静态方法或外部方法。 -->

- **prefer-method-signature** - 方法声明应该这样声明：`foo(): void`，而不是 `foo: () => void`

- **prefer-switch** - 如果 `if ... else if` 语句中，对同一变量只使用了 `===` 进行条件判断超过 `4` 个，则应该使用 `switch` 语句。

<!-- - **prefer-template** - 如果字符串拼接较复杂，应该使用模版字符串。 -->

<!-- - **prefer-while** - 如果 `for` 循环中，没有初始化及自增表达式，则应该使用 `while` 循环。 -->

<!-- - **return-undefined** - 在返回值为 `void` 的方法中，应当 `return;` 而不是 `return undefined;` 。在有返回值的方法中，应当 `return undefined;` 而不是 `return;` 。 -->

- **space-before-function-paren** - 函数左圆括号前的空格规则。

<!-- - **space-within-parens** - 圆括号内的空格规则。 -->

<!-- - **switch-final-break** - `switch` 语句的最后一个 `case` 是否必须使用 `breack；`。 -->

<!-- - **type-literal-delimiter** - 字面量类型的成员必须以分号结尾。 -->

<!-- - **unnecessary-bind** - 禁止没必要的函数绑定。 -->

<!-- - **unnecessary-else** - 禁止没必要的 `else`，如在 `if` 代码块中必然会返回，那么这个 `else` 就是没必要的。 -->

- **variable-name** - 变量名规范：禁止使用关键字作为变量名；驼峰命名法（lowerCamelCase）；帕斯卡命名法（PascalCase）；下划线开头的变量名（\_leadingUnderscore）；蛇形命名法（snake_case）。[详情](./tslint-rules-details/variable-name.md)

## 5. 这些规则强制以相同的行为使用空白符和标点符号。

- **align** - 如果方法声明的参数，方法调用的参数，对象属性，数组以及类成员是纵向排列的话，一定要对齐。[详情](./tslint-rules-details/align.md)

  > 本规范中的配置： `"align": [true, "parameters", "statements"]`

- **arrow-parens** - 箭头函数参数必须用圆括号括起来，但如果只有一个参数的话则不允许使用圆括号。[详情](./tslint-rules-details/arrow-parens.md)

- **eofline** - 每个文件必须以空行结尾。

- **import-spacing** - `import` 语句中的关键字(如 `import`, `as`, `*`, `from`)之间应该有一个空格。[详情](./tslint-rules-details/import-spacing.md)

- **indent** - 使用 2 **空格** 缩进。

- **jsdoc-format** - JS 文档注释格式（以`/**`开头的注释）。[详情](./tslint-rules-details/jsdoc-format.md)

<!-- - **linebreak-style** - 换行符类型。CRLF -->

- **max-line-length** - 一行不能超过 120 个字的长度。

<!-- - **newline-before-return** - return 语句前是否需要新的空行。 -->

- **new-parens** - new 一个对象时，必须使用圆括号。[详情](./tslint-rules-details/new-parens.md)

- **no-consecutive-blank-lines** - 禁止连续的空行

- **no-irregular-whitespace** - 禁止特殊空白符（如全角空格）。

- **no-trailing-whitespace** - 禁止结尾的空白符。

<!-- - **number-literal-format** - 数字字面量格式：`0.x` 的小数前面的 0 不能省略，小数点后面也不能出现多余的 0 -->

- **quotemark** - 必须使用单引号，JSX 属性必须用双引号。[详情](./tslint-rules-details/quotemark.md)

- **semicolon** - 语句必须以分号结束。

- **trailing-comma** - 对象和数组的最后一个元素的逗号：多行时必须有最后一个逗号，单行时不能有最后一个逗号。

- **typedef-whitespace** - 类型标注的冒号左侧 **_一定没有_** 空格，右侧 **_一定有_** 空格。[详情](./tslint-rules-details/typedef-whitespace.md)

- **whitespace** - 其他的一些空白符规则。[详情](./tslint-rules-details/whitespace.md)

## TSLint 中不包含的规则（新增）

- **no-constant-condition** - 禁止在条件判断语句中使用常量表达式。[详情](./tslint-rules-details/no-constant-condition.md)

- **no-label** - 禁止使用 label。
