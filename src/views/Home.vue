<script setup>
import Navbar from '../components/Navbar.vue'


</script>
<template>
    <header class="w-full h-screen bg-white">
        <Navbar/>

        <section class="relative h-4/5 flex items-center bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <div class="absolute z-30 inset-0" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 0%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: normal;opacity: 0.9;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 27.45%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: multiply;opacity: 0.7;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 39.97%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: multiply;opacity: 0.2;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 27.45%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: multiply;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30"></div>
            
            <div class="w-[70%] mx-auto text-white z-40">
                <div>
                    <h1 class="text-6xl font-medium text-center">Create Beautiful Event Programmes With Lasting Experiences</h1>
                </div>
                <p class="font-normal text-lg py-10 text-center">Coded Events helps you create beautiful event programmes with lasting experiences</p>
                <div class="flex items-center justify-center">
                    <router-link to="/about" class="bg-main-200 text-xl py-4 px-16 font-bold inline-block rounded-lg">Create an Event</router-link>
                </div>
            </div>
            
                <div class="absolute left-24 z-40">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 9L11 16L18 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle opacity="0.32" cx="16" cy="16" r="16" fill="#E0E0E0"/>
                    </svg>
                </div>

                <div class="absolute right-24 z-40">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 9L21 16L14 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle opacity="0.32" r="16" transform="matrix(-1 0 0 1 16 16)" fill="#E0E0E0"/>
                    </svg>
                </div>
        </section>
        <div class="flex justify-center items-center my-3">
            <div class="flex space-x-2 items-center py-3">
                <svg width="40" height="9" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.769501" width="40" height="8" rx="4" fill="black"/>
                </svg>
                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4.7695" r="4" fill="black" fill-opacity="0.56"/>
                </svg>
                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4.7695" r="4" fill="black" fill-opacity="0.56"/>
                </svg>
            </div>
        </div>
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
            <div class="relative w-1/2">
                <div class="relative z-30">
                    <img src="../assets/images/group-happy-africans-friends-drinking-champagne-celebrating-new-year-new-year-party-birthday-party 1.jpg" class="z-40 rounded-lg" alt="Group of friends celebratiing">
                    <div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(98, 18, 3, 0) 34.48%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: normal;" ></div>
                </div>
                <img src="../assets/images/Mask Group (2).png" class="absolute top-24 left-0 z-20" alt="Image">
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

    <section class="mt-5 max-w-full">
        <div class="relative font-semibold flex items-center justify-center pt-20 pb-10" >
            <h1 class="text-5xl text-main-500 z-30">Top Events Categories</h1>
            <h1 class="absolute left-0 text-[200px] z-20 opacity-80" style="font-feature-settings: 'pnum' on, 'lnum' on; opacity: 0.08">Categories</h1>
        </div>
        <div class="w-5/6 mx-auto py-20">
            <div class="flex justify-center gap-16 items-center">
                <div>
                    <div class="w-40 h-40 bg-main-800 flex items-center justify-center" style="border-radius: 100%; border: 1px solid rgba(204, 69, 22, 0.5);">
                        <img src="../assets/images/Frame.png" alt="Weddings">
                    </div>
                    <p class="text-center pt-4 text-xl font-bold text-main-500">
                        Weddings
                    </p>
                </div>
                <div>
                    <div class="w-40 h-40 bg-main-800 flex items-center justify-center" style="border-radius: 100%; border: 1px solid rgba(204, 69, 22, 0.5);">
                        <img src="../assets/images/Frame (1).png" alt="Weddings">
                    </div>
                    <p class="text-center pt-4 text-xl font-bold text-main-500">
                        Seminars
                    </p>
                </div>
                <div>
                    <div class="w-40 h-40 bg-main-800 flex items-center justify-center" style="border-radius: 100%; border: 1px solid rgba(204, 69, 22, 0.5);">
                        <img src="../assets/images/Frame (2).png" alt="Weddings">
                    </div>
                    <p class="text-center pt-4 text-xl font-bold text-main-500">
                        Burials
                    </p>
                </div>
                <div>
                    <div class="w-40 h-40 bg-main-800 flex items-center justify-center" style="border-radius: 100%; border: 1px solid rgba(204, 69, 22, 0.5);">
                        <img src="../assets/images/Frame (3).png" alt="Weddings">
                    </div>
                    <p class="text-center pt-4 text-xl font-bold text-main-500">
                        Parties
                    </p>
                </div>
                <div>
                    <div class="w-40 h-40 bg-main-800 flex items-center justify-center" style="border-radius: 100%; border: 1px solid rgba(204, 69, 22, 0.5);">
                        <img src="../assets/images/Frame (4).png" alt="Weddings">
                    </div>
                    <p class="text-center pt-4 text-xl font-bold text-main-500">
                        Charity Outreach
                    </p>
                </div>
            </div>
        </div>
    </section>
    <div>
        <router-link to="/">Home</router-link>
    </div>  
</template>