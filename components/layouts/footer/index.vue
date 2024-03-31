<template>
    <footer class="mx-auto max-w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 bg-white px-4 lg:px-16 py-8">
            <div class="flex-1 flex flex-col gap-4">
                <NuxtLink to="/">
                    <img class="w-full max-w-[225px]" src="/images/logo.png" />
                </NuxtLink>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <ul class="flex gap-sm">
                    <li>
                        <SocialIcon link="/" iconName="fa6-brands:twitter" class="w-[40px] h-[40px]"></SocialIcon>
                    </li>
                    <li>
                        <SocialIcon link="/" iconName="fa6-brands:facebook-f" class="w-[40px] h-[40px]"></SocialIcon>
                    </li>
                    <li>
                        <SocialIcon link="/" iconName="fa6-brands:instagram" class="w-[40px] h-[40px]"></SocialIcon>
                    </li>
                    <li>
                        <SocialIcon link="/" iconName="fa6-brands:linkedin-in" class="w-[40px] h-[40px]"></SocialIcon>
                    </li>
                    <li>
                        <SocialIcon link="/" iconName="fa6-brands:youtube" class="w-[40px] h-[40px]"></SocialIcon>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-4">
                <h3 class="font-bold text-xl text-grayCustom5">Categories</h3>
                <ul class="flex flex-wrap gap-sm">
                    <ClientOnly>
                        <li v-for="item in dummyDataCategory">
                        <Tags link="/" :tagName="item.categoryName"></Tags>
                    </li>
                    </ClientOnly>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-4">
                <h3 class="font-bold text-xl text-grayCustom5">Tags</h3>
                <ul class="flex flex-wrap gap-sm">
                    <li><Tags link="/" tagName="Politics"></Tags></li>
                    <li><Tags link="/" tagName="Business"></Tags></li>
                    <li><Tags link="/" tagName="Coporate"></Tags></li>
                    <li><Tags link="/" tagName="Sports"></Tags></li>
                    <li><Tags link="/" tagName="Heath"></Tags></li>
                    <li><Tags link="/" tagName="Education"></Tags></li>
                    <li><Tags link="/" tagName="Science"></Tags></li>
                    <li><Tags link="/" tagName="Technology"></Tags></li>
                    <li><Tags link="/" tagName="Foods"></Tags></li>
                    <li><Tags link="/" tagName="Entertainment"></Tags></li>
                    <li><Tags link="/" tagName="Travel"></Tags></li>
                    <li><Tags link="/" tagName="Lifestyle"></Tags></li> 
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-4">
                <h3 class="font-bold text-xl text-grayCustom5">Quick Links</h3>
                <ul class="flex flex-col gap-sm">
                    <li><LinkWithIcon link="/" title="About"></LinkWithIcon></li>
                    <li><LinkWithIcon link="/" title="Advertise"></LinkWithIcon></li>
                    <li><LinkWithIcon link="/" title="Privacy Policy"></LinkWithIcon></li>
                    <li><LinkWithIcon link="/" title="Terms & Conditions"></LinkWithIcon></li>
                    <li><LinkWithIcon link="/" title="Contact"></LinkWithIcon></li>
                </ul>
            </div>
        </div>
        <div class="p-3 lg:p-5">
            <p class="text-center">
                @ <span class="font-bold text-red">Your Site Name</span>. All Right Reserved. Designd by <span class="font-bold text-red">HTML Codex</span>
            </p>
        </div>
    </footer>
</template>

<script setup>
import SocialIcon from '~/components/common/socialIcon'
import Tags from '~/components/common/tags'
import LinkWithIcon from '~/components/common/linkWithIcon'

const dummyListStore = useDummyData()
const dummyDataCategory = dummyListStore.dummyCategory
</script>
