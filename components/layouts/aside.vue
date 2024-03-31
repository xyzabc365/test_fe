<template>
    <aside class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
            <Heading content="Follow Us"></Heading>
            <div class="grid grid-cols-2 gap">
                <SocialLink link="#" iconName="fa6-brands:facebook-f" bgColor="#39569e" content="12,345 Fans">
                </SocialLink>
                <SocialLink link="#" iconName="fa6-brands:twitter" bgColor="#52AAF4" content="12,345 Followers">
                </SocialLink>
                <SocialLink link="#" iconName="fa6-brands:linkedin-in" bgColor="#0285AD" content="12,345 Connect">
                </SocialLink>
                <SocialLink link="#" iconName="fa6-brands:instagram" bgColor="#C8369D" content="12,345 Followers">
                </SocialLink>
                <SocialLink link="#" iconName="fa6-brands:youtube" bgColor="#DC472E" content="12,345 Subscribes">
                </SocialLink>
                <SocialLink link="#" iconName="fa6-brands:vimeo-v" bgColor="#1BB7E9" content="12,345 Followers">
                </SocialLink>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <Heading content="Newsletter"></Heading>
            <div class="flex flex-col gap bg-white p-6">
                <p class="text-center">
                    Aliqu justo et labore at eirmod justo sea
                    erat diam dolor diam vero kasd
                </p>
                <div class="relative">
                    <input type="text"
                        class="h-size38 w-full border border-grayCustom3 pr-[50px] focus:outline-none lg:min-w-[250px]"
                        placeholder="Your Email" />
                    <button class="absolute right-0 top-0 h-full bg-red px-4 text-white">
                        Sign Up
                    </button>
                </div>
                <span class="text-center text-sm">Sit eirmod nonumy kasd eirmod</span>
            </div>
        </div>

        <NuxtLink to=""><img class="h-auto w-full max-w-full" src="/images/example-4.jpeg" alt="" /></NuxtLink>

        <div class="flex flex-col gap-4">
            <Heading content="Tranding"></Heading>
            <div class="flex flex-col gap">
                <ClientOnly>
                    <PostCard :type="2" :postImg="item.postImg" 
                                    :postTitle="item.postTitle"
                                    :postDate="item.postDate"
                                    :postCategory="item.postCategory"
                                    :postLink="item.postLink" v-for="item in dummyArticle"></PostCard>
                </ClientOnly>
            </div>
        </div>
        <!-- Popular News End -->

        <!-- Tags Start -->
        <div class="flex flex-col gap-4">
            <Heading content="Tags"></Heading>
            <ul class="flex flex-wrap gap-sm">
                <li>
                    <Tags link="#" tagName="Politics"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Business"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Coporate"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Sports"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Heath"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Education"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Science"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Technology"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Foods"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Entertainment"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Travel"></Tags>
                </li>
                <li>
                    <Tags link="#" tagName="Lifestyle"></Tags>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import Tags from '~/components/common/tags'
import SocialLink from '~/components/common/socialLink'
import Heading from '~/components/common/heading'
import PostCard from '~/components/common/postCard'

const dummyListStore = useDummyData()
let dummyArticle = dummyListStore.dummyArticle.filter((item) => {
        return item.isTranding == true
})
dummyArticle = JSON.parse(JSON.stringify(dummyArticle))
</script>