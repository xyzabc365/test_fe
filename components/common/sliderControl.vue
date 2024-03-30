<template>
    <div class="flex items-center gap">
        <button type="button" :class="'swiper-prev-' + slideId"
            class="group flex items-center justify-center w-size32 h-size32 border border-grayCustom1 hover:border-red hover:bg-red duration-100 hover:transition-all">
            <Icon class="w-1/2 h-1/2 text-grayCustom1 group-hover:text-white duration-100 hover:transition-all"
                name="fa6-solid:chevron-left" />
        </button>
        <button type="button" :class="'swiper-next-' + slideId"
            class="group flex items-center justify-center w-size32 h-size32 border border-grayCustom1 hover:border-red  hover:bg-red duration-100 hover:transition-all">
            <Icon class="w-1/2 h-1/2 text-grayCustom2 group-hover:text-white duration-100 hover:transition-all"
                name="fa6-solid:chevron-right" />
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    slideId: String
})

onMounted(() => {

})
</script>
