export function foo(x: number[]) {
  // for-of
  for (const item of x) {
    console.log(item);
  }

  // forEach
  x.forEach(item => console.log(item));

  // for loop
  for (let i = 0; i < x.length; i++) {
    const item = x[i];
    console.log(item);
  }
}
