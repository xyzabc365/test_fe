<template>
    <div class="flex items-center justify-between bg-white px-4 py-2">
        <h3 class="m-0 text-xl font-bold text-grayCustom5">
            {{ content }}
        </h3>
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    content: String,
})
</script>
