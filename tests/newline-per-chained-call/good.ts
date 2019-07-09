Promise.resolve()
  .then(() => Promise.resolve(1))
  .then(res => console.log(res))
  .finally(() => console.log('end'));
