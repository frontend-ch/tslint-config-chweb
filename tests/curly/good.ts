let foo = 1;
let bar = 2;
// 即使只有一条语句，多行情况下也必须用花括号括起来
if (foo === bar) {
  foo += bar;
}
// 一行的情况下，花括号允许省略
if (foo > bar) {
  foo -= 1;
}
if (foo > bar) foo -= 1;