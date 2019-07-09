export class Foo {
  private readonly foo = 'foo';

  get bar() {
    return this.foo + '123';
  }
}
