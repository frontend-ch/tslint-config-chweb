// 多行情况下必须用花括号括起来，下面写法不合规范

export let foo = 1;
let bar = 2;
// prettier-ignore
if (foo === bar) 
  foo += bar;
