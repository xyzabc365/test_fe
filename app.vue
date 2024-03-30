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
</script>