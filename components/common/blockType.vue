<template>
    <div class="grid gap-4">
        <Heading :content="title">
            <NuxtLink class="font-weight-medium text-decoration-none text-grayCustom6" to="/">View
                All</NuxtLink>
        </Heading>
        <div class="grid grid-cols-1 gap-x-4 gap-y lg:grid-cols-2">
            <PostCard :type="(index == 0 || index == 1) ? 1 : 2" :postImg="item.postImg" :postTitle="item.postTitle"
                        :postDescription="item.postDescription" :postDate="item.postDate"
                        :postCategory="item.postCategory" v-for="item, index in listArticle"></PostCard>
        </div>
    </div>
</template>

<script setup>

import Heading from '~/components/common/heading'
import PostCard from '~/components/common/postCard'
const props = defineProps({
    type: Number || 1,
    title: String
})

let listArticle = []
const dummyListStore = useDummyData()
const dummyArticle = dummyListStore.dummyArticle

if (props.type == 1) { //Block Type Popular
    listArticle = dummyArticle.filter((item) => {
        return item.isPopular == true
    })
    listArticle = JSON.parse(JSON.stringify(listArticle))
} else if (props.type == 2) { //Lastest
    listArticle = dummyArticle.sort(function(a, b){return b.postId - a.postId})
    listArticle = JSON.parse(JSON.stringify(listArticle))
} else {
    listArticle = dummyArticle
    listArticle = JSON.parse(JSON.stringify(listArticle))
}

</script>