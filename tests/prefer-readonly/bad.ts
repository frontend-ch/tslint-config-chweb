export class Foo {
  private foo = 'foo';

  get bar() {
    return this.foo + '123';
  }
}
