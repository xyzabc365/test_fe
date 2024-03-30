<template>
    <div id="page" class="page hide">
        <Header />
        <slot />
        <Footer />
        
    </div>
</template>

<script setup>
import Header from '~/components/layouts/header'
import Footer from '~/components/layouts/footer'
</script>