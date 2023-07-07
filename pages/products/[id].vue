<template lang="">
    <div>
        {{id}}
        
    </div>
</template>
<script setup >
const {id} = useRoute().params;
definePageMeta({
    layout:'products'
})
</script>
<style lang="">
    
</style>