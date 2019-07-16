export function foo(x: number) {
  let result = 0;
  switch (x) {
    case 1:
      result += 10;
    case 2:
      result *= 10;
      break;
    case 3:
      result -= 10;
      break;
    default:
      return 100;
  }
}
