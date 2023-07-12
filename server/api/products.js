import { log } from "console";

export default defineEventHandler(async (event) => {
  //handle query params
  //   const { name } = getQuery(event);

  //handle post params

  //   const {age} = await readBody(event);
  //   return {
  //     message: `Hello, ${name}, which age is ${age}`,
  //     // message: `Hello, ${name}`,

  //   };

  const data = await $fetch("https://fakestoreapi.com/products");
  return data;
});
