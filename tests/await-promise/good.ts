export async function foo() {
  await Promise.resolve('value');

  const createValue = async () => 'value'; // 或者 () => Promise.resolve('value')
  await createValue();
}
