export let obj: { [key: string]: any } = {};

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`obj.${key} is ${obj[key]}`);
  }
}