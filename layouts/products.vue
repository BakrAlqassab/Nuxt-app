<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <nuxt-link to="/products" class="font-bold"> Nuxt Project</nuxt-link>
            </nav>

        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <i><nuxt-link to="products">Products</nuxt-link></i>
            </ul>
        </footer>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: #12b488;
}

footer {
    /* position: absolute;
    bottom: 0;
    text-align: center;
    width: 95%; */
    overflow: hidden;
}
</style>