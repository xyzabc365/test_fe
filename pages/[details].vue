<template>
    <div class="grid grid-cols-1 gap-8 py-8">
        <div class="container">
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8 items-start">
                <div class="col-span-2 grid gap-4">
                    <Breadcrumbs></Breadcrumbs>
                    <div id="main-content" class="bg-white">
                        <img src="/images/news-big.jpeg" class="w-full" />
                        <article class="p-4 lg:p-8">
                            <div class="mb-2 lg:mb-4">
                                <a class="text-red" href="/category">Technology</a>
                                <span class="px-1">/</span>
                                <span>January 28, 2025</span>
                            </div>
                            <article class="prose lg:prose-xl">
                                <h1>Garlic bread with cheese: What the science tells us</h1>
                                <p>
                                    For years parents have espoused the health benefits of eating garlic bread with
                                    cheese to their
                                    children, with the food earning such an iconic status in our culture that kids
                                    will often dress
                                    up as warm, cheesy loaf for Halloween.
                                </p>
                                <p>
                                    But a recent study shows that the celebrated appetizer may be linked to a series
                                    of rabies cases
                                    springing up around the country.
                                </p>
                                <h2>Est dolor lorem et ea</h2>
                                <img class="float-left mb-2 mr-4 w-[250px]" src="/images/news-big.jpeg">
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et.</p>

                                <h2>Est dolor lorem et ea</h2>
                                <img class="float-right mb-2 mr-4 w-[250px]" src="/images/news-big.jpeg">
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et.</p>
                                <!-- ... -->
                            </article>
                        </article>
                    </div>

                    <!-- Danh sách comment -->
                    <div class="bg-white p-4 lg:p-8 flex flex-col gap-4">
                        <p class="text-xxl font-bold text-grayCustom5">3 comments</p>
                        <ul>
                            <li>
                                <div class="flex items-start gap-4">
                                    <img class="max-w-[45px]" src="/images/user.jpg" />
                                    <div class="flex flex-col gap-4">
                                        <div class="flex flex-col gap">
                                            <p class="flex items-center justify-start gap-2">
                                                <span class="text-red">John Doe</span>
                                                <span class="text-sm italic">01 Jan 2045</span>
                                            </p>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua,
                                                tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
                                                dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur
                                                sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                            <div>
                                                <button
                                                    class="text-sm group flex items-center py-sm p justify-center border border-gray-600 hover:border-red hover:text-red duration-100 hover:transition-all">Reply</button>
                                            </div>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <div class="flex items-start gap-4">
                                                        <img class="max-w-[45px]" src="/images/user.jpg" />
                                                        <div class="flex flex-col gap-4">
                                                            <div class="flex flex-col gap">
                                                                <p class="flex items-center justify-start gap-2">
                                                                    <span class="text-red">John Doe</span>
                                                                    <span class="text-sm italic">01 Jan 2045</span>
                                                                </p>
                                                                <p>Diam amet duo labore stet elitr invidunt ea clita
                                                                    ipsum voluptua,
                                                                    tempor labore accusam ipsum et no at. Kasd diam
                                                                    tempor rebum magna
                                                                    dolores sed sed eirmod ipsum. Gubergren clita
                                                                    aliquyam consetetur
                                                                    sadipscing, at tempor amet ipsum diam tempor
                                                                    consetetur at sit.</p>
                                                                <div>
                                                                    <button
                                                                        class="text-sm group flex items-center py-sm p justify-center border border-gray-600 hover:border-red hover:text-red duration-100 hover:transition-all">Reply</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- End Danh sách comment -->

                    <!-- Form comment -->
                    <div class="bg-white p-4 lg:p-8 flex flex-col gap-4">
                        <p class="text-xxl font-bold text-grayCustom5">3 comments</p>
                        <form class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <p>Name *</p>
                                <input type="text" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <p>Email *</p>
                                <input type="text" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <p>Website</p>
                                <input type="text" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <p>Message *</p>
                                <textarea rows="5" />
                            </div>
                            <div>
                                <button type="submit"
                                    class="group flex items-center py px-md justify-center border bg-red border-red text-white">Leave
                                    a comment</button>
                            </div>
                        </form>
                    </div>
                    <!-- End Form Comment -->
                </div>
                <!-- Main content bên phải -->
                <Aside></Aside>
                <!-- End Main content bên phải -->
            </div>
        </div>
    </div>

</template>

<script setup>
import Aside from '~/components/layouts/aside'
import Breadcrumbs from '~/components/common/breadcrumbs'
</script>

<style scoped>
article h1 {
    font-size: 1.75rem;
    font-weight: bold;
    color: #343a40;
    margin-bottom: .5rem;
}

article h2 {
    font-size: 1.5rem;
    color: #343a40;
    margin-bottom: .5rem;
}

article p {
    margin-bottom: 1rem;
}
</style>