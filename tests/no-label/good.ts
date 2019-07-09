export function foo(x: number) {
  for (let i = 0; i < x; i++) {
    if (i === 1) {
      break;
    }
  }
}
