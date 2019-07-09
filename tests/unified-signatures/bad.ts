export interface MyInterface {
  f(x: number): number;
  f(x: number, y: number): number;

  m(x: number): string;
  m(x: string): string;
}
