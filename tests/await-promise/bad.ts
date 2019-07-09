export async function foo() {
  await 'value';

  const createValue = () => 'value';
  await createValue();
}
