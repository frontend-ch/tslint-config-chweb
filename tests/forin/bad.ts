export let obj: { [key: string]: any } = {};
for (let key in obj) {
  console.log(`obj.${key} is ${obj[key]}`);
}
