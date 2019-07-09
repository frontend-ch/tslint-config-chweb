type MyFunction = (x: number, y: number) => number;

export const foo: MyFunction = x => x + 1;
const bar = (x: number) => x + 2;
const baz: MyFunction = (x, y) => x + y;
