<template>
  <Html>

  <Body class="antialiased text-grayCustom bg-grayCustom2">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})

useHead({
  htmlAttrs: {
    lang: 'vi',
  },
})


const dummyDataStore = useDummyData()
try {
  const res = await $fetch('data_article.json')
  const resCategory = await $fetch('data_category.json')
  dummyDataStore.setDummyArticle(JSON.parse(JSON.stringify(res)).data)
  dummyDataStore.setDummyCategory(JSON.parse(JSON.stringify(resCategory)).data)
} catch {
  dummyDataStore.setDummyArticle([])
  dummyDataStore.setDummyCategory([])
}

</script>