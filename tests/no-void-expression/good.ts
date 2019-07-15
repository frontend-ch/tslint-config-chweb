export function foo() {}

foo();

const a = () => foo(); // ignore-arrow-function-shorthand
a();
