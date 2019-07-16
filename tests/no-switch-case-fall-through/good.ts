export function foo(x: number) {
  let result = 0;
  switch (x) {
    case 1:
      result += 10;
      break;
    case 2:
      result *= 10;
      break;
    case 3:
      return 10
    default:
      return 100;
  }
}
