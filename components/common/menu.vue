<template>
    <nav class="mx-auto px-4 py-2 lg:py-0 lg:px-16">
        <div class="flex flex-wrap items-center justify-between">
            <a href="/" class="flex items-center space-x-3 lg:hidden">
                <img src="/images/logo.png" class="h-8" />
            </a>
            <div class="flex items-center lg:order-2 space-x-1 lg:space-x-2">
                <button data-collapse-toggle="mega-menu" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center lg:hidden bg-gray-100 focus:outline-none"
                    aria-controls="mega-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div id="mega-menu" class="items-center justify-between hidden w-full lg:flex lg:w-full lg:order-1">
                <!-- Xử lý menu ở đây -->
                <ul class="flex flex-col mt-4 lg:flex-row lg:mt-0">
                    <li v-for="item, index in menu" class="group">
                        <NuxtLink :to="item.to" class="block font-bold lg:p-md p text-grayCustom hover:text-white hover:bg-red cursor-pointer"
                            active-class="text-white bg-red">
                            {{ item.text }}
                            <Icon v-if="item.submenu" class="w-2.5 h-2.5 ml-sm" name="fa6-solid:chevron-down" />
                        </NuxtLink>
                        <div v-if="item.submenu" class="lg-max:!relative lg-max:!transform-none lg-max:w-full lg:absolute lg:w-[150px] z-10 hidden group-hover:block lg:pt-1">
                            <ul class="bg-white">
                                <li v-for="itemSub, index in item.submenu">
                                    <NuxtLink :to="itemSub.to" class="block font-bold px-4 py-3 hover:bg-red hover:text-white">{{ itemSub.text }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <!-- End Xử lý menu ở đây -->
                <div class="mt-md lg:mt-0">
                    <div class="relative">
                        <input type="text"
                            class="border border-grayCustom3 h-size38 lg:min-w-[300px] pr-[50px] focus:outline-none w-full"
                            placeholder="Keyword" />
                        <button class="absolute right-0 top-0 h-full w-size48 bg-grayCustom4">
                            <Icon class="w-size16 h-size16 duration-100 hover:transition-all"
                                name="fa6-solid:magnifying-glass" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
let menu = [
    {
        id: 'menu-home',
        to: '/',
        text: 'Home'
    },
    {
        id: 'menu-category',
        to: '/category',
        text: 'Categories'
    },
    {
        id: 'menu-details',
        to: '/details',
        text: 'Single News'
    },
    {
        id: 'menu-dropdown',
        to: '',
        text: 'Dropdown',
        submenu: [
            {
                id: 'menu-technology',
                to: '/',
                text: 'Technology'
            },
            {
                id: 'menu-sports',
                to: '/',
                text: 'Sports'
            },
            {
                id: 'menu-entertainment',
                to: '/',
                text: 'Entertainment'
            }
        ]
    },
    {
        id: 'menu-contact',
        to: '/contact',
        text: 'Contact'
    },
]
</script>
