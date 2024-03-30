<template>

    <div :id="slideId" class="swiper w-full" v-if="type == 0">
        <div class="swiper-wrapper">
            <div class="swiper-slide w-full overflow-hidden" v-for="item in data">
                <a :href="item.link" class="whitespace-nowrap h-full flex items-center hover:decoration-solid hover:underline w-full line-clamp-1 hover:text-red">
                    {{item.title}}
                </a>
            </div>
        </div>
    </div>

    <div v-else-if="type == 1" :id="slideId" class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in data">
                <PostCard :postImg="item.postImg" :postTitle="item.postTitle"></PostCard>
            </div>
        </div>
        <button type="button" :class="'swiper-prev-' + slideId"
            class="swiper-prev group flex items-center justify-center w-size32 h-size32 border border-grayCustom1 hover:border-red hover:bg-red duration-100 hover:transition-all absolute left-0 top-1/2 z-10 -translate-y-1/2 translate-x-8">
            <Icon class="w-1/2 h-1/2 text-grayCustom1 group-hover:text-white duration-100 hover:transition-all"
                name="fa6-solid:chevron-left" />
        </button>
        <button type="button" :class="'swiper-next-' + slideId"
            class="swiper-next group flex items-center justify-center w-size32 h-size32 border border-grayCustom1 hover:border-red  hover:bg-red duration-100 hover:transition-all absolute right-0 top-1/2 z-10 -translate-y-1/2 -translate-x-8">
            <Icon class="w-1/2 h-1/2 text-grayCustom2 group-hover:text-white duration-100 hover:transition-all"
                name="fa6-solid:chevron-right" />
        </button>
    </div>


    <div v-else-if="type == 2" :id="slideId" class="swiper lg:absolute lg:top-0 lg:left-0 w-full h-full">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in data">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" :src="item.postImg" />
                    <div class="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
                    <div class="flex flex-col gap-sm p-8 absolute bottom-0 left-0 z-20 w-full text-white">
                        <div class="text-sm">
                            <a :href="$textToLink(item.postTitle)">{{item.postCategory}}</a>
                            <span class="px-1">/</span>
                            <span>{{item.postDate}}</span>
                        </div>
                        <a class="font-bold leading-6 text-xl lg:text-4xl lg:leading-10 line-clamp-2" :href="$textToLink(item.postTitle)">{{item.postTitle}}</a>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" :class="'swiper-prev-' + slideId"
            class="group flex items-center justify-center w-size32 h-size32 border border-grayCustom1 hover:border-red hover:bg-red duration-100 hover:transition-all absolute left-0 top-1/2 z-10 -translate-y-1/2 translate-x-8">
            <Icon class="w-1/2 h-1/2 text-grayCustom1 group-hover:text-white duration-100 hover:transition-all"
                name="fa6-solid:chevron-left" />
        </button>
        <button type="button" :class="'swiper-next-' + slideId"
            class="group flex items-center justify-center w-size32 h-size32 border border-grayCustom1 hover:border-red  hover:bg-red duration-100 hover:transition-all absolute right-0 top-1/2 z-10 -translate-y-1/2 -translate-x-8">
            <Icon class="w-1/2 h-1/2 text-grayCustom2 group-hover:text-white duration-100 hover:transition-all"
                name="fa6-solid:chevron-right" />
        </button>
    </div>

    <div v-else-if="type == 3" :id="slideId" class="swiper relative">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in data">
                <div class="relative pb-[110%] group">
                    <img class="absolute top-0 left-0 w-full h-full z-0 object-cover group-hover:brightness-75 duration-500 transition-all" :src="item.postImg" />
                    <div class="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
                    <div class="flex flex-col gap-sm p-4 absolute bottom-0 left-0 z-20 w-full text-white">
                        <div class="text-sm">
                            <a :href="$textToLink(item.postTitle)">{{item.postCategory}}</a>
                            <span class="px-1">/</span>
                            <span>{{item.postDate}}</span>
                        </div>
                        <a class="font-bold leading-7 text-xl line-clamp-2" :href="$textToLink(item.postTitle)">{{item.postTitle}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="type == 4" :id="slideId" class="swiper relative">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in data">
                <PostCard :type="1" :postImg="item.postImg" :postTitle="item.postTitle" :postCategory="item.postCategory" :postDate="item.postDate"></PostCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import PostCard from '~/components/common/postCard'
const props = defineProps({
    slideId: String,
    type: Number || 1,
    data: Object
})

onMounted(() => {
    if (props.type === 0) {
        new Swiper("#" + props.slideId, {
            navigation: {
                nextEl: ".swiper-next-" + props.slideId,
                prevEl: ".swiper-prev-" + props.slideId,
            },
            loop: true,
            autoplay: {
                delay: 3000
            },
        });
    }
    else if (props.type === 1) {
        let a = new Swiper("#" + props.slideId, {
            navigation: {
                nextEl: ".swiper-next-" + props.slideId,
                prevEl: ".swiper-prev-" + props.slideId,
            },
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            }
        })
    } else if (props.type === 2) {
        new Swiper("#" + props.slideId, {
            navigation: {
                nextEl: ".swiper-next-" + props.slideId,
                prevEl: ".swiper-prev-" + props.slideId,
            },
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000
            },
        });
    } else if (props.type === 3) {
        new Swiper("#" + props.slideId, {
            navigation: {
                nextEl: ".swiper-next-" + props.slideId,
                prevEl: ".swiper-prev-" + props.slideId,
            },
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
            }
        });
    } else if (props.type === 4) {
        new Swiper("#" + props.slideId, {
            navigation: {
                nextEl: ".swiper-next-" + props.slideId,
                prevEl: ".swiper-prev-" + props.slideId,
            },
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
            }
        });
    }
})
</script>