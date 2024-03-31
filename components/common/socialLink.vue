<template>
    <NuxtLink :to="link" target="_blank" class="flex items-center gap px-4 lg:px-2 lg:pl-4 py-3 text-sm  text-white hover:brightness-90 duration-300 hover:transition-all" :style="{backgroundColor : bgColor}">
            <Icon class="h-size14 w-size14" :name="iconName" />
            <span>{{ content }}</span>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    iconName: String,
    link: String,
    bgColor: String,
    content: String
})
</script>
