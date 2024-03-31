<template>
   <div class="grid grid-cols-1 gap-8 py-8 items-start">
      <section>
         <div class="container">
            <ClientOnly>
               <Slider :type="1" slideId="sliderAllPost"></Slider>
            </ClientOnly>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
               <!-- Block Tin Chính -->
               <div class="col-span-2 flex flex-col gap relative">
                  <ClientOnly>
                     <Slider :type="2" slideId="sliderMain"></Slider>
                  </ClientOnly>
               </div>
               <!-- End Block Tin Chính -->

               <!-- Block Categories -->
               <div class="flex flex-col gap-4">
                  <Heading content="Categories">
                     <NuxtLink class="font-weight-medium text-decoration-none text-grayCustom6" to="/category">View All</NuxtLink>
                  </Heading>
                  <div class="flex flex-col gap-4">
                     <ClientOnly>
                        <div class="relative pb-[15%] lg:pb-[20%]" v-for="item in dummyCategory">
                        <img src="/images/cat.jpg" class="w-full h-full object-cover absolute top-0 left-0" />
                        <NuxtLink to="/category" class="absolute top-0 left-0 flex w-full h-full text-white text-lg font-bold items-center justify-center bg-black/30">{{ item.categoryName }}</NuxtLink>
                     </div>
                     </ClientOnly>
                     
                  </div>
               </div>
               <!-- End Block Categories -->
            </div>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:gap-8">
               <!-- Block Featured -->
               <div class="flex flex-col gap-y-4">
                  <Heading content="Featured">
                     <div class="flex items-center gap">
                        <ClientOnly>
                           <SliderControl slideId="sliderFeature"></SliderControl>
                        </ClientOnly>
                     </div>
                  </Heading>
                  <div>
                     <ClientOnly>
                        <Slider :type="3" slideId="sliderFeature"></Slider>
                     </ClientOnly>
                  </div>
               </div>
               <!-- End Block Featured -->
            </div>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-8">
               <ClientOnly>
                  <BlockCategory :type="2" v-for="item in dummyCategory" :categoryItem="item"></BlockCategory>
               </ClientOnly>
              
            </div>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8 items-start">
               <!-- Main content bên trái -->
               <div class="col-span-2 grid gap-8">
                  <!-- Block Popular -->
                  <ClientOnly>
                     <BlockType :type="1" title="Popular"></BlockType>
                  </ClientOnly>
                  <!-- End Block Popular -->

                  <NuxtLink to="#"><img class="h-auto w-full max-w-full" src="/images/ads.jpg" alt="" /></NuxtLink>

                  <!-- Block Lastest -->
                  <ClientOnly>
                     <BlockType :type="2" title="Lastest"></BlockType>
                  </ClientOnly>
                  <!-- End Block Lastest -->
               </div>
               <!-- End Main content bên trái -->

               <!-- Main content bên phải -->
               <Aside></Aside>
               <!-- End Main content bên phải -->
            </div>
         </div>
      </section>
   </div>
</template>



<script setup>
import Aside from '~/components/layouts/aside'
import Heading from '~/components/common/heading'
import PostCard from '~/components/common/postCard'
import BlockCategory from '~/components/common/blockCategory'
import BlockType from '~/components/common/blockType'
import Slider from '~/components/common/slider'
import SliderControl from '~/components/common/sliderControl'

const dummyListStore = useDummyData()
const dummyCategory = dummyListStore.dummyCategory

</script>