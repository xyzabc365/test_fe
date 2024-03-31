<template>
    <div class="flex flex-col gap-y-4">
        <Heading :content="categoryItem.categoryName">
            <div class="flex items-center gap">
                <ClientOnly>
                    <SliderControl :slideId="'sliderBlockCategory' + categoryItem.categoryId"></SliderControl>
                </ClientOnly>
            </div>
        </Heading>
        <div>
            <ClientOnly>
                <Slider :type="4" :slideId="'sliderBlockCategory' + categoryItem.categoryId" :catId="categoryItem.categoryId"></Slider>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>

import Heading from '~/components/common/heading'
import Slider from '~/components/common/slider'
import SliderControl from '~/components/common/sliderControl'
const props = defineProps({
    categoryItem: {}
})
</script>