<template>
    <NuxtLink :to="link" class="group flex items-center gap-sm">
        <Icon
            class="h-size12 w-size12 text-black"
            name="fa6-solid:chevron-right"
        />
        <span class="group-hover:underline">{{ title }}</span>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    title: String,
    link: String,
})
</script>
