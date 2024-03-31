<template>
    <div v-if="type == 1">
        <div class="relative pb-[75%]">
            <img class="absolute top-0 left-0 h-full w-full object-cover" :src="postImg" />
        </div>
        <div class="flex flex-col gap bg-white p-4">
            <div class="text-sm">
                <NuxtLink :to="$textToLink(postTitle)" class="text-red">{{ postCategory }}</NuxtLink>
                <span class="px-1">/</span>
                <span>{{ postDate }}</span>
            </div>
            <NuxtLink class="text-xxl font-bold leading-8 text-grayCustom5 line-clamp-2 hover:text-red duration-300 hover:transition-all" :to="$textToLink(postTitle)">{{ postTitle }}</NuxtLink>
            <p class="line-clamp-3">{{ postDescription }}</p>
        </div>
    </div>
    <div v-else-if="type == 2">
        <div class="flex items-center gap bg-white">
            <img :src="postImg" class="h-full min-h-[100px] w-[100px] object-cover" />
            <div class="grow pb-2 pr-2 pt-2">
                <div class="mb-1 text-sm">
                    <NuxtLink class="text-red" :to="$textToLink(postTitle)">{{ postCategory }}</NuxtLink>
                    <span class="px-1">/</span>
                    <span>{{ postDate }}</span>
                </div>
                <NuxtLink class="font-bold text-grayCustom5 hover:text-red duration-300 hover:transition-all" :to="$textToLink(postTitle)">{{ postTitle }}</NuxtLink>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="flex items-center gap bg-white">
            <img :src="postImg" class="h-full min-h-[100px] w-[100px] object-cover" />
            <div class="grow pb-2 pr-2 pt-2">
                <NuxtLink class="text-grayCustom5 hover:text-red duration-300 hover:transition-all" :to="$textToLink(postTitle)">{{ postTitle }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    type: Number || 1,
    postImg: String,
    postCategory: String,
    postDate: String,
    postTitle: String,
    postDescription: String
})
</script>