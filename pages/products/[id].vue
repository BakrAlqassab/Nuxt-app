<template lang="">
    <div>
        <Head>
            <Title> Nuxt Product Page || {{product.title}}</Title>
            <Meta name="Description" :content="product.description" />

        </Head>
       <ProductDetails :product="product" />
       <!-- <p> {{product.title}}</p>
       <p> {{product.price}}</p>
       <p> {{product.id}}</p> -->

    </div>
</template>
<script setup >
const { id } = useRoute().params;
const uri = '/api/product/';



// fetch the product

const { data: product } = await useFetch(uri, { key: id ,
 method :'post',
 body: {id: id}
 })
if (!product.value) {

    throw createError({ statusCode: 404, statusMessage: "Product not found!.", fatal: true })
}
definePageMeta({
    layout: 'products'
})
</script>
<style lang="">

</style>