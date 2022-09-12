<template>
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
</template>