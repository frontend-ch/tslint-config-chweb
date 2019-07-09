export const arr: any[] = [];

for (const x of arr) {
  console.log(x);
}

for (let i = 0; i < arr.length; i++) {
  // i 用于修改数组成员，所以这个时候不能用 for-of 。
  arr[i] = 0;
}

for (let i = 0; i < arr.length; i++) {
  // i 有其他的单独用途（不只是用来获取数组成员），所以这个时候也不能用 for-of 。
  console.log(i, arr[i]);
}
