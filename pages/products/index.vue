<template>
    <div>
        <!-- <Header/> -->
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id">

                <nuxt-link :to="`/products/${product.id}`">{{ product.title }}</nuxt-link>
            </div>
        </div>
    </div>
</template>
  
<script setup>

definePageMeta({
    layout: 'products'
})

//fetch the data

const { data: products } = await useFetch('https://fakestoreapi.com/products');

</script>
  
<style scoped></style>