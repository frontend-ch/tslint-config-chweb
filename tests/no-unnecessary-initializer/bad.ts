let a = undefined;
console.log(a);
let obj: { [key: string]: any } = {};
let { foo = undefined } = obj;

export { obj };
