<template>
    <div class="mx-auto max-w-full">
        <Notification></Notification>
        <div class="flex items-center py-2 px-4 lg:px-16">
            <div class="grow hidden lg:w-1/3 lg:block">
                <NuxtLink to="/" class="whitespace-no-wrap mr-4 hidden pb-1 pt-1 text-lg lg:block">
                    <h1 class="display-5 m-0">
                        <img class="w-full max-w-[225px]" src="/images/logo.png" />
                    </h1>
                </NuxtLink>
            </div>
            <div class="flex grow justify-center lg:w-2/3 lg:justify-end">
                <img class="h-auto max-w-full" src="/images/ads.jpg" alt="" />
            </div>
        </div>
    </div>
    <div class="mx-auto max-w-full bg-white">
        <Menu></Menu>
    </div>

</template>

<script setup>
import Menu from '~/components/common/menu'
import Notification from '~/components/common/notification'
</script>