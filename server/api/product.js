export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const data = await $fetch("https://fakestoreapi.com/products/" + id);
  return data;
});
