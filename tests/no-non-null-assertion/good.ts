export function foo(instance: MyClass) {
  instance.doWork();
}

export function bar(instance: MyClass | undefined) {
  if (instance !== undefined) {
    instance.doWork(); // 这里并不需要使用 ! 断言，因为TypeScript能推断出这里面的instance一定不为undefined
  }
}
class MyClass {
  foo!: number;

  doWork() {
    return;
  }
}
