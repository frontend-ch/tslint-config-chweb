export function foo(x: number[]) {
  for (const index in x) {
    console.log(typeof index); // 这里的index是string类型
  }
}
