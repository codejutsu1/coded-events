<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Categories from '../components/Categories.vue'
import Events from '../components/Events.vue'
import Footer from '../components/Footer.vue'


</script>
<template>
    <header class="w-full h-screen bg-white">
        <Navbar />

        <Hero />
    </header>

    <section class="block my-20">
        <div class="relative font-semibold flex items-center justify-center pt-20 pb-10">
            <h1 class="text-5xl text-main-500 z-30">Benefits of Using Coded Events</h1>
            <h1 class="absolute right-0 text-[200px] z-20" style="font-feature-settings: 'pnum' on, 'lnum' on; opacity: 0.08;">Benefits</h1>
        </div>
        <div class="relative">
            <div class="flex justify-between pt-48 w-5/6 mx-auto">
                <div class="w-1/2">
                    <div class="relative z-30">
                        <img src="../assets/images/happy-newly-wed-african-american-couple-bench 1.jpg" class="z-40 rounded-lg" alt="Happy newly wed couple">
                        <div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(98, 18, 3, 0) 34.48%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: normal;" ></div>
                    </div>
                    <img src="../assets/images/Mask Group.png" class="absolute top-24 left-0 z-20" alt="Image">
                </div>
                <div class="w-1/2 pl-20">
                    <h1 class="font-['Raleway'] font-bold text-7xl text-main-700/40">01</h1>
                    <div class="pr-12">
                        <h2 class="text-main-500 py-5 font-semibold text-5xl" style="font-feature-settings: 'pnum' on, 'lnum' on;">Your Event Details In a Single Barcode</h2>
                    </div>
                    <p class="text-main-200 text-base">CodedEvents helps you create beautiful event programmes with lasting experiences</p>
                </div>
            </div>

            <div class="flex justify-between pt-20 w-5/6 mx-auto">
                <div class="w-1/2">
                    <h1 class="font-['Raleway'] font-bold text-7xl text-main-700/40">02</h1>
                    <div>
                        <h2 class="text-main-500 py-5 font-semibold text-5xl" style="font-feature-settings: 'pnum' on, 'lnum' on;">Share Invitation With Friends & Family</h2>
                    </div>
                    <p class="text-main-200 text-base">CodedEvents helps you create beautiful event programmes with lasting experiences</p>
                </div>
                <div class="w-1/2">
                    <div class="relative z-30 mr-7">
                        <img src="../assets/images/BLOG-NIGERIAN-MAIN-IMAGE-HeirlumeNigerian160 1.jpg" class="rounded-lg" alt="Happy newly wed couple">
                        <div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(98, 18, 3, 0) 34.48%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: normal;" ></div>
                    </div>
                    <img src="../assets/images/Mask Group (1).png" class="absolute bottom-72 right-0 z-20" alt="Image">
                </div>
            </div>
        </div>

        <div class="flex justify-between pt-20 w-5/6 mx-auto">
            <div class="w-1/2">
                <div class="z-30 relative">
                    <img src="../assets/images/group-happy-africans-friends-drinking-champagne-celebrating-new-year-new-year-party-birthday-party 1.jpg" class="z-40 rounded-lg" alt="Group of friends celebratiing">
                    <div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(98, 18, 3, 0) 34.48%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: normal;" ></div>
                </div>
                <img src="../assets/images/Mask Group (2).png" class="absolute top-[2130px] left-0 z-20" alt="Image">
            </div>
            <div class="w-1/2 pl-20">
                <h1 class="font-['Raleway'] font-bold text-7xl text-main-700/40">03</h1>
                <div class="pr-12">
                    <h2 class="text-main-500 py-5 font-semibold text-5xl" style="font-feature-settings: 'pnum' on, 'lnum' on;">Receive Event Donations Into Your Digital Wallet</h2>
                </div>
                <p class="text-main-200 text-base">CodedEvents helps you create beautiful event programmes with lasting experiences</p>
            </div>
        </div>
    </section>

    <Categories />

    <Events />
    
    <Footer />
</template>