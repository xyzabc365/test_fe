<template>

    <div :id="slideId" class="swiper w-full" v-if="type == 0">
        <div class="swiper-wrapper">
            <div class="swiper-slide w-full overflow-hidden" v-for="item in data">
                <NuxtLink :to="item.link"
                    class="whitespace-nowrap h-full flex items-center hover:decoration-solid hover:underline w-full line-clamp-1 hover:text-red">
                    {{ item.title }}
                </NuxtLink>
            </div>
        </div>
    </div>

    <!-- Slider All post in top -->
    <div v-else-if="type == 1" :id="slideId" class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in listArticle">
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
    <!-- End Slider All post in top -->

    <!-- Slider tin chính -->
    <div v-else-if="type == 2" :id="slideId" class="swiper lg:absolute lg:top-0 lg:left-0 w-full h-full">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in listArticle">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" :src="item.postImg" />
                    <div class="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
                    <div class="flex flex-col gap-sm p-8 absolute bottom-0 left-0 z-20 w-full text-white">
                        <div class="text-sm">
                            <NuxtLink to="/category">{{ item.postCategory }}</NuxtLink>
                            <span class="px-1">/</span>
                            <span>{{ item.postDate }}</span>
                        </div>
                        <NuxtLink class="font-bold leading-6 text-xl lg:text-4xl lg:leading-10 line-clamp-2"
                            :to="$textToLink(item.postTitle)">{{ item.postTitle }}</NuxtLink>
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
    <!-- End Slider tin chính -->

    <!-- Slider feature -->
    <div v-else-if="type == 3" :id="slideId" class="swiper relative">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in listArticle">
                <div class="relative pb-[110%] group">
                    <img class="absolute top-0 left-0 w-full h-full z-0 object-cover group-hover:brightness-75 duration-500 transition-all"
                        :src="item.postImg" />
                    <div class="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
                    <div class="flex flex-col gap-sm p-4 absolute bottom-0 left-0 z-20 w-full text-white">
                        <div class="text-sm">
                            <NuxtLink to="/category">{{ item.postCategory }}</NuxtLink>
                            <span class="px-1">/</span>
                            <span>{{ item.postDate }}</span>
                        </div>
                        <NuxtLink class="font-bold leading-7 text-xl line-clamp-2" :to="$textToLink(item.postTitle)">{{
        item.postTitle }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Slider feature -->

    <!-- Slider Block Category -->
    <div v-else-if="type == 4" :id="slideId" class="swiper relative">
        <div class="swiper-wrapper">
            <div class="swiper-slide overflow-hidden" v-for="item in listArticle">
                <PostCard :type="1" :postImg="item.postImg" :postTitle="item.postTitle"
                    :postCategory="item.postCategory" :postDate="item.postDate"></PostCard>
            </div>
        </div>
    </div>
    <!-- End Slider Block Category -->
</template>

<script setup>
import PostCard from '~/components/common/postCard'
const props = defineProps({
    catId: Number,
    slideId: String,
    type: Number || 1,
    data: Object || []
})

let listArticle = []
const dummyListStore = useDummyData()
const dummyArticle = dummyListStore.dummyArticle

if (props.type == 2) { //Slider Main
    listArticle = dummyArticle.filter((item) => {
        return item.isMainPost == true
    })
    listArticle = JSON.parse(JSON.stringify(listArticle))
} else if (props.type == 3) { //Slider Feature
    listArticle = dummyArticle.filter((item) => {
        return item.isFeatured == true
    })
    listArticle = JSON.parse(JSON.stringify(listArticle))
} else if (props.type == 4) { //Slider Block Category
    listArticle = dummyArticle.filter((item) => {
        return item.categoryId == props.catId
    })
    listArticle = JSON.parse(JSON.stringify(listArticle))
} else {
    listArticle = dummyArticle
}

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