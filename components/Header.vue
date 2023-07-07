<template lang="">
    <div>
        <header>
      <nav>
        <nuxt-link to="/"> Nuxt Project</nuxt-link>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <i><nuxt-link to="products">Products</nuxt-link></i>
        </ul>
      </nav>
    </header>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
ul {
  display: flex;
  place-content: space-evenly;
}
</style>