<template>
    <ClientOnly>
        <div class="flex items-center bg-white px-4 lg:px-16">
            <div class="w-full lg:w-2/3">
                <div class="flex justify-start gap-md align-baseline">
                    <div class="flex-0 bg-red px py-2 text-center text-white">
                        Tranding
                    </div>
                    <div class="w-full flex items-center gap overflow-hidden">
                        <SliderControl slideId="sliderNotification"></SliderControl>
                        <Slider :type="0" slideId="sliderNotification" :data="notification"></Slider>
                    </div>
                </div>
            </div>
            <div class="hidden text-right lg:block lg:w-1/3">
                Monday, January 01, 2045
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
import Slider from '~/components/common/slider'
import SliderControl from '~/components/common/sliderControl'

let notification = []

try {
    const res = await $fetch('data_notification.json')
    notification = JSON.parse(JSON.stringify(res)).data
} catch {
    notification = []
}
</script>