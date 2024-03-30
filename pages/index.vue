<template>
   <div class="grid grid-cols-1 gap-8 py-8">
      <section>
         <div class="container">
            <Slider :type="1" slideId="slider1" :data="dummyData"></Slider>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
               <!-- Block Tin Chính -->
               <div class="col-span-2 flex flex-col gap relative">
                  <Slider :type="2" slideId="slider2" :data="dummyData"></Slider>
               </div>
               <!-- End Block Tin Chính -->

               <!-- Block Categories -->
               <div class="flex flex-col gap-4">
                  <Heading content="Categories">
                     <a class="font-weight-medium text-decoration-none text-grayCustom6" href="/category">View All</a>
                  </Heading>
                  <div class="flex flex-col gap-4">
                     <div class="relative pb-[15%] lg:pb-[20%]">
                        <img src="/images/cat.jpg" class="w-full h-full object-cover absolute top-0 left-0" />
                        <a href="/category"
                           class="absolute top-0 left-0 flex w-full h-full text-white text-lg font-bold items-center justify-center bg-black/30">Business</a>
                     </div>
                     <div class="relative pb-[15%] lg:pb-[20%]">
                        <img src="/images/cat.jpg" class="w-full h-full object-cover absolute top-0 left-0" />
                        <a href="/category"
                           class="absolute top-0 left-0 flex w-full h-full text-white text-lg font-bold items-center justify-center bg-black/30">Technology</a>
                     </div>
                     <div class="relative pb-[15%] lg:pb-[20%]">
                        <img src="/images/cat.jpg" class="w-full h-full object-cover absolute top-0 left-0" />
                        <a href="/category"
                           class="absolute top-0 left-0 flex w-full h-full text-white text-lg font-bold items-center justify-center bg-black/30">Entertainment</a>
                     </div>
                     <div class="relative pb-[15%] lg:pb-[20%]">
                        <img src="/images/cat.jpg" class="w-full h-full object-cover absolute top-0 left-0" />
                        <a href="/category"
                           class="absolute top-0 left-0 flex w-full h-full text-white text-lg font-bold items-center justify-center bg-black/30">Sports</a>
                     </div>
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
                        <SliderControl slideId="slider3"></SliderControl>
                     </div>
                  </Heading>
                  <div>
                     <Slider :type="3" slideId="slider3" :data="dummyData"></Slider>
                  </div>
               </div>
               <!-- End Block Featured -->
            </div>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-8">
               <!-- Block Business -->
               <div class="flex flex-col gap-y-4">
                  <Heading content="Business">
                     <div class="flex items-center gap">
                        <SliderControl slideId="slider4"></SliderControl>
                     </div>
                  </Heading>
                  <div>
                     <Slider :type="4" slideId="slider4" :data="dummyData"></Slider>
                  </div>
               </div>
               <!-- End Block Business -->

               <!-- Block Technology -->
               <div class="flex flex-col gap-y-4">
                  <Heading content="Technology">
                     <div class="flex items-center gap">
                        <SliderControl slideId="slider5"></SliderControl>
                     </div>
                  </Heading>
                  <div>
                     <Slider :type="4" slideId="slider5" :data="dummyData"></Slider>
                  </div>
               </div>
               <!-- End Block Technology -->
            </div>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-8">
               <!-- Block Entertainment -->
               <div class="flex flex-col gap-y-4">
                  <Heading content="Entertainment">
                     <div class="flex items-center gap">
                        <SliderControl slideId="slider6"></SliderControl>
                     </div>
                  </Heading>
                  <div>
                     <Slider :type="4" slideId="slider6" :data="dummyData"></Slider>
                  </div>
               </div>
               <!-- End Block Entertainment -->

               <!-- Block Technology -->
               <div class="flex flex-col gap-y-4">
                  <Heading content="Sports">
                     <div class="flex items-center gap">
                        <SliderControl slideId="slider7"></SliderControl>
                     </div>
                  </Heading>
                  <div>
                     <Slider :type="4" slideId="slider7" :data="dummyData"></Slider>
                  </div>
               </div>
               <!-- End Block Technology -->
            </div>
         </div>
      </section>

      <section>
         <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
               <!-- Main content bên trái -->
               <div class="col-span-2 grid gap-8">
                  <!-- Block Popular -->
                  <div class="flex flex-col gap-4">
                     <Heading content="Popular">
                        <a class="font-weight-medium text-decoration-none text-grayCustom6" href="/category">View All</a>
                     </Heading>
                     <div class="grid grid-cols-1 gap-x-8 gap-y lg:grid-cols-2">
                        <!-- Cột trái -->
                        <div class="flex flex-col gap-x-4 gap-y">
                           <PostCard :type="index == 0 ? 1 : 2" :postImg="item.postImg"
                              :postTitle="item.postTitle"
                              :postDescription="item.postDescription"
                              :postDate="item.postDate" :postCategory="item.postCategory"
                              v-for="item, index in dummyData"></PostCard>
                        </div>
                        <!-- End Cột trái -->

                        <!-- Cột phải -->
                        <div class="flex flex-col gap-x-4 gap-y">
                           <PostCard :type="index == 0 ? 1 : 2" :postImg="item.postImg"
                              :postTitle="item.postTitle"
                              :postDescription="item.postDescription"
                              :postDate="item.postDate" :postCategory="item.postCategory"
                              v-for="item, index in dummyData"></PostCard>
                        </div>
                        <!-- End Cột phải -->
                     </div>
                  </div>
                  <!-- End Block Popular -->

                  <a href="#"><img class="h-auto w-full max-w-full" src="/images/ads.jpg" alt="" /></a>

                  <!-- Block Lastest -->
                  <div class="flex flex-col gap-4">
                     <Heading content="Lastest">
                        <a class="font-weight-medium text-decoration-none text-grayCustom6" href="/category">View All</a>
                     </Heading>
                     <div class="flex flex-col gap-x-8 gap-y lg:flex-row">
                        <!-- Cột trái -->
                        <div class="flex flex-col gap-x-4 gap-y">
                           <PostCard :type="index == 0 ? 1 : 2" :postImg="item.postImg"
                              :postTitle="item.postTitle"
                              :postDescription="item.postDescription"
                              :postDate="item.postDate" :postCategory="item.postCategory" 
                              v-for="item, index in dummyData"></PostCard>
                        </div>
                        <!-- End Cột trái -->

                        <!-- Cột phải -->
                        <div class="flex flex-col gap-x-4 gap-y">
                           <PostCard :type="index == 0 ? 1 : 2" :postImg="item.postImg"
                              :postTitle="item.postTitle"
                              :postDescription="item.postDescription"
                              :postDate="item.postDate" :postCategory="item.postCategory"
                              v-for="item, index in dummyData"></PostCard>
                        </div>
                        <!-- End Cột phải -->
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
      </section>
   </div>

</template>

<script setup>
import Aside from '~/components/layouts/aside'
import Heading from '~/components/common/heading'
import PostCard from '~/components/common/postCard'
import Slider from '~/components/common/slider'
import SliderControl from '~/components/common/sliderControl'

let dummyData = [
   {
      postImg: '/images/dummyimg_1.webp',
      postCategory: 'Technology',
      postDate: 'January 01, 2045',
      postTitle: 'Doanh nghiệp mất 4 tỷ USD do không tận dụng ưu đãi về thuế',
      postDescription: 'Sau khi tham gia Hiệp định CPTPP, kim ngạch thương mại Việt Nam - Canada đã đạt mốc 10 tỷ USD vào năm 2021. Song, các doanh nghiệp Việt vẫn chưa tận dụng lợi thế từ Hiệp định này.',
   },
   {
      postImg: '/images/dummyimg_2.webp',
      postCategory: 'Sports',
      postDate: 'January 01, 2045',
      postTitle: 'Quang Hải đeo đồng hồ Rolex trong ngày cưới',
      postDescription: 'Rolex Datejust là cỗ máy thời gian được cầu thủ Quang Hải chọn đeo trong lễ cưới. Phiên bản trên cổ tay anh sở hữu vòng bezel dát kín kim cương.',
   },
   {
      postImg: '/images/dummyimg_3.webp',
      postCategory: 'News',
      postDate: 'January 01, 2045',
      postTitle: 'Công an Hà Nội thông tin vụ bốc hơi gần 340 tỷ đồng ở ngân hàng MSB',
      postDescription: 'UBND TP Hà Nội tổ chức họp báo thông tin tình hình kinh tế - xã hội quý I/2024. Tại buổi họp báo, Công an Hà Nội đã có thông tin về việc khách hàng mất tiền tại ngân hàng MSB.',
   },
   {
      postImg: '/images/dummyimg_4.webp',
      postCategory: 'Travel',
      postDate: 'January 01, 2045',
      postTitle: 'Bắt 14 bị can mạo danh Huấn Hoa Hồng lừa đảo chiếm đoạt tài sản',
      postDescription: 'Phó giám đốc Công an TP Hà Nội Nguyễn Thanh Tùng cho biết cơ quan điều tra đã khởi tố, bắt giữ 14 bị can liên quan đến vụ lập các tài khoản mạng xã hội mạo danh "Huấn Hoa Hồng".',
   },
   {
      postImg: '/images/dummyimg_5.webp',
      postCategory: 'Technology',
      postDate: 'January 01, 2045',
      postTitle: 'Thế khó của tuyển Hàn Quốc',
      postDescription: 'Ông Hwang Sun-hong thôi dẫn dắt đội bóng xứ kim chi, thay vào đó tập trung hoàn toàn vào tuyển Olympic.',
   },
   {
      postImg: '/images/dummyimg_6.webp',
      postCategory: 'Technology',
      postDate: 'January 01, 2045',
      postTitle: 'Thắng (Ngọt) gặp vấn đề sức khỏe',
      postDescription: 'Trưởng nhóm Ngọt cho biết đang gặp vấn đề về sức khỏe tinh thần. Vì thế, anh không thể góp mặt trong các show đã nhận lời từ trước.',
   }
]
</script>