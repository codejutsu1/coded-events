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

    <section class="bg-main-400">
        <div class="w-3/5 mx-auto py-24">
            <h1 class="text-5xl font-semibold text-main-500 text-center">
                Popular Events in 
                    <span class="inline-flex rounded-lg items-center px-4 py-3 gap-8" style="background: rgba(248, 156, 29, 0.2);">
                        <span>Lagos</span> 
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9L12 16L5 9" stroke="#761300" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
            </h1>
            <p class="text-center px-10 pt-5 text-base font-normal text-main-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <ul class="flex mt-16 gap-10 justify-center">
                <li class="text-base pb-6 px-4 font-bold text-main-100 border-b-4 border-main-100">All</li>
                <li class="text-base pb-6 px-4 font-bold text-main-200">Today</li>
                <li class="text-base pb-6 px-4 font-bold text-main-200">This weekend</li>
                <li class="text-base pb-6 px-4 font-bold text-main-200">This month</li>
                <li class="text-base pb-6 px-4 font-bold text-main-200">Virtual</li>
            </ul>
        </div>

        <div class="pb-10 overflow-x-hidden relative">
            <div class="flex justify-center gap-1 mx-auto px-12 h-[550px] w-[2000px]">
                <div class="px-2 w-[25%]">
                    <div>
                        <img src="../assets/images/newlywed-african-descent-couple-wedding-celebration 1.jpg" class="rounded-t-lg w-full" alt="A wedded Couple">
                    </div>
                    <div class="bg-white px-6 py-8 shadow-lg rounded-b-lg">
                        <p class="text-xl font-bold text-main-500">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                        <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                        <p class="text-base font-normal text-main-500">Sheba Centre • Ikeja, Lagos</p>
                    </div>
                </div>

                <div class="px-2 w-[25%]">
                    <div>
                        <img src="../assets/images/newlywed-african-descent-couple-wedding-celebration 1.jpg" class="rounded-t-lg w-full" alt="A wedded Couple">
                    </div>
                    <div class="bg-white px-6 py-8 shadow-lg rounded-b-lg">
                        <p class="text-xl font-bold text-main-500">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                        <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                        <p class="text-base font-normal text-main-500">Sheba Centre • Ikeja, Lagos</p>
                    </div>
                </div>

                <div class="px-2 w-[25%]">
                    <div>
                        <img src="../assets/images/newlywed-african-descent-couple-wedding-celebration 1.jpg" class="rounded-t-lg w-full" alt="A wedded Couple">
                    </div>
                    <div class="bg-white px-6 py-8 shadow-lg rounded-b-lg">
                        <p class="text-xl font-bold text-main-500">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                        <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                        <p class="text-base font-normal text-main-500">Sheba Centre • Ikeja, Lagos</p>
                    </div>
                </div>

                <div class="px-2 w-[25%]">
                    <div>
                        <img src="../assets/images/newlywed-african-descent-couple-wedding-celebration 1.jpg" class="rounded-t-lg w-full" alt="A wedded Couple">
                    </div>
                    <div class="bg-white px-6 py-8 shadow-lg rounded-b-lg">
                        <p class="text-xl font-bold text-main-500">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                        <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                        <p class="text-base font-normal text-main-500">Sheba Centre • Ikeja, Lagos</p>
                    </div>
                </div>

                <div class="px-2 w-[25%]">
                    <div>
                        <img src="../assets/images/newlywed-african-descent-couple-wedding-celebration 1.jpg" class="rounded-t-lg w-full" alt="A wedded Couple">
                    </div>
                    <div class="bg-white px-6 py-8 shadow-lg rounded-b-lg">
                        <p class="text-xl font-bold text-main-500">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                        <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                        <p class="text-base font-normal text-main-500">Sheba Centre • Ikeja, Lagos</p>
                    </div>
                </div>

                <div class="px-2 w-[25%]">
                    <div>
                        <img src="../assets/images/newlywed-african-descent-couple-wedding-celebration 1.jpg" class="rounded-t-lg w-full" alt="A wedded Couple">
                    </div>
                    <div class="bg-white px-6 py-8 shadow-lg rounded-b-lg">
                        <p class="text-xl font-bold text-main-500">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                        <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                        <p class="text-base font-normal text-main-500">Sheba Centre • Ikeja, Lagos</p>
                    </div>
                </div>
            </div>
            <svg class="absolute top-44 left-7" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="28" cy="28" r="28" fill="#CC4516"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.7374 14.5126C32.054 13.8291 30.946 13.8291 30.2626 14.5126L18.0126 26.7626C17.3291 27.446 17.3291 28.554 18.0126 29.2374L30.2626 41.4874C30.946 42.1709 32.054 42.1709 32.7374 41.4874C33.4209 40.804 33.4209 39.696 32.7374 39.0126L21.7249 28L32.7374 16.9874C33.4209 16.304 33.4209 15.196 32.7374 14.5126Z" fill="white"/>
            </svg>
            <svg class="absolute top-44 right-7" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="28" cy="28" r="28" transform="rotate(-180 28 28)" fill="#CC4516"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2626 41.4874C23.946 42.1709 25.054 42.1709 25.7374 41.4874L37.9874 29.2374C38.6709 28.554 38.6709 27.446 37.9874 26.7626L25.7374 14.5126C25.054 13.8291 23.946 13.8291 23.2626 14.5126C22.5791 15.196 22.5791 16.304 23.2626 16.9874L34.2751 28L23.2626 39.0126C22.5791 39.696 22.5791 40.804 23.2626 41.4874Z" fill="white"/>
            </svg>
            <div class="flex items-center justify-center">
                <router-link to="/" class="py-4 px-20 bg-main-200 text-white rounded-lg text-xl font-bold">Browse Events</router-link>
            </div>
        </div>
    </section>
    <footer class="bg-footer bg-cover bg-center">
        <div class="w-5/6 mx-auto">
            <div>
                <img src="../assets/images/Group 6631.png" alt="Logo">

                <div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="#CC4516"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>