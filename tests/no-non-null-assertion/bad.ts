export function foo(instance: MyClass | undefined) {
  instance!.doWork();
}

class MyClass {
  foo!: number;

  doWork() {
    return;
  }
}
