<template>
    <NuxtLink :to="link" target="_blank" class="group flex items-center justify-center border border-gray-600 hover:border-red duration-100 hover:transition-all" >
        <Icon class="w-1/2 h-1/2 text-gray-600 group-hover:text-red duration-100 hover:transition-all" :name="iconName" />
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    iconName: String,
    link: String
})
</script>
