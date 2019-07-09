let a = 1;
let obj: { [key: string]: any } = {};
let { foo } = obj;
console.log(a, foo);

export { obj };
