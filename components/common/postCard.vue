<template>
    <div v-if="type == 1">
        <img class="h-auto w-full max-w-full object-cover" :src="postImg" />
        <div class="flex flex-col gap bg-white p-4">
            <div class="text-sm">
                <a :href="$textToLink(postTitle)" class="text-red">{{ postCategory }}</a>
                <span class="px-1">/</span>
                <span>{{ postDate }}</span>
            </div>
            <a class="text-xxl font-bold leading-8 text-grayCustom5 line-clamp-2 hover:text-red duration-300 hover:transition-all" :href="$textToLink(postTitle)">{{ postTitle }}</a>
            <p class="line-clamp-3">{{ postDescription }}</p>
        </div>
    </div>
    <div v-else-if="type == 2">
        <div class="flex items-center gap bg-white">
            <img :src="postImg" class="h-full min-h-[100px] w-[100px] object-cover" />
            <div class="grow pb-2 pr-2 pt-2">
                <div class="mb-1 text-sm">
                    <a class="text-red" :href="$textToLink(postTitle)">{{ postCategory }}</a>
                    <span class="px-1">/</span>
                    <span>{{ postDate }}</span>
                </div>
                <a class="font-bold text-grayCustom5 hover:text-red duration-300 hover:transition-all" :href="$textToLink(postTitle)">{{ postTitle }}</a>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="flex items-center gap bg-white">
            <img :src="postImg" class="h-full min-h-[100px] w-[100px] object-cover" />
            <div class="grow pb-2 pr-2 pt-2">
                <a class="text-grayCustom5 hover:text-red duration-300 hover:transition-all" :href="$textToLink(postTitle)">{{ postTitle }}</a>
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