<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold"> Nuxt Project</nuxt-link>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <i><nuxt-link to="products">Products</nuxt-link></i>
                </ul>
            </nav>
        </header>
        <div>
            <slot />
        </div>
        <footer>
            Footer
        </footer>
    </div>
</template>
<style scoped>

.router-link-exact-active {
    color: #12b488;
}
footer {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 95%;
    overflow: hidden;
}
</style>