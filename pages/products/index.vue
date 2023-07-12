<template>
    <div>
        <!-- <Header/> -->
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id">

                <product-card :product="product" />
            </div>
        </div>
    </div>
</template>
  
<script setup>

definePageMeta({
    layout: 'products'
});


//fetch the data

const { data: products } = await useFetch('/api/products', { headers: { 'Accept': 'application/json' }, server: false });

if (!products.value) {
    throw createError({ statusCode: 404, statusMessage: "Products not found!.", fatal: true })
}

useHead({
    title: "Products page || Merch"
})

</script>
  
<style scoped></style>