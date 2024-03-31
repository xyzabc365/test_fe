<template>
    <NuxtLink :to="link" class="text-sm group flex items-center py-sm p justify-center border border-gray-600 hover:border-red hover:text-red duration-100 hover:transition-all">
        {{tagName}}
    </NuxtLink>
</template>

<script setup>
const props = defineProps({ 
    tagName: String,
    link: String
})
</script>
