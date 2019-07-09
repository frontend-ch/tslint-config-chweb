export let foo = 1;
let bar = 2;

switch (foo) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
}

// 如果在连续的 if ... else if 中有比较其他变量，那还是应该是用 if ... else if
if (foo === 1) {
  // foo:1
} else if (foo === 2) {
  // foo:2
} else if (foo === 3) {
  // foo:3
} else if (foo === 4) {
  // foo:4
} else if (bar === 4) {
  // bar:4
}
