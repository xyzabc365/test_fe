<template>
    <div class="grid grid-cols-1 gap-8 py-8">
        <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
                <!-- Main content bên trái -->
                <div class="col-span-2 grid gap-8">
                    <Breadcrumbs></Breadcrumbs>
                    <!-- Block Technology -->
                    <div class="flex flex-col gap-4">
                        <Heading content="Technology"> </Heading>
                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y">
                            <ClientOnly>
                                <PostCard :type="1" :postImg="item.postImg" :postTitle="item.postTitle"
                                    :postDescription="item.postDescription" :postDate="item.postDate"
                                    :postCategory="item.postCategory" v-for="item, index in dummyData"></PostCard>
                            </ClientOnly>
                        </div>
                    </div>
                    <!-- End Block Technology -->

                    <NuxtLink to="#"><img class="h-auto w-full max-w-full" src="/images/ads.jpg" alt="" /></NuxtLink>

                    <!-- Block Lastest -->
                    <div class="flex flex-col gap-4">
                        <Heading content="Lastest">
                            <NuxtLink class="font-weight-medium text-decoration-none text-grayCustom6" to="">View All</NuxtLink>
                        </Heading>
                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y">
                            <ClientOnly>
                                <PostCard :type="2" :postImg="item.postImg" :postTitle="item.postTitle"
                                    :postDescription="item.postDescription" :postDate="item.postDate"
                                    :postCategory="item.postCategory" v-for="item, index in dummyData"></PostCard>
                            </ClientOnly>
                        </div>
                        <div class="flex items-center justify-center">
                            <Pagination></Pagination>
                        </div>
                    </div>
                    <!-- End Block Lastest -->
                </div>
                <!-- End Main content bên trái -->

                <!-- Main content bên phải -->
                <Aside></Aside>
                <!-- End Main content bên phải -->
            </div>
        </div>
    </div>
</template>

<script setup>
import Aside from '~/components/layouts/aside'
import Heading from '~/components/common/heading'
import PostCard from '~/components/common/postCard'
import Pagination from '~/components/common/pagination'
import Breadcrumbs from '~/components/common/breadcrumbs'

const dummyListStore = useDummyData()
let dummyData = dummyListStore.dummyArticle
</script>