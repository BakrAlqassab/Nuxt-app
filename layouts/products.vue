<template>
    <div>
        <header>
                  Header
        </header>
        <div>
            <slot />
        </div>
        <footer>
            Footer

            <nav>
                <nuxt-link to="/"> Nuxt Project</nuxt-link>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <i><nuxt-link to="products">Products</nuxt-link></i>
                </ul>
            </nav>
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