<script setup>
import Navbar from '../components/Navbar.vue'


</script>
<template>
    <header class="w-full h-screen bg-white">
        <Navbar/>

        <section class="relative h-[500px] flex items-center bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <div class="absolute z-30 inset-0" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 0%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: normal;opacity: 0.9;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 27.45%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: multiply;opacity: 0.7;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 39.97%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: multiply;opacity: 0.2;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30" style="background: linear-gradient(180deg, rgba(117, 19, 0, 0) 27.45%, rgba(117, 19, 0, 0.6) 100%);mix-blend-mode: multiply;"></div>
            <div class="absolute z-30 inset-0 bg-main-600/30"></div>
            
            <div class="w-4/5 mx-auto text-white z-40">
                <div>
                    <h1 class="text-6xl font-medium text-center">Create Beautiful Event Programmes With Lasting Experiences</h1>
                </div>
                <p class="font-normal text-lg py-10 text-center">Coded Events helps you create beautiful event programmes with lasting experiences</p>
                <div class="flex items-center justify-center">
                    <router-link to="/about" class="bg-main-200 text-xl py-4 px-16 font-bold inline-block rounded-lg">Create an Event</router-link>
                </div>
            </div>
        </section>
    </header>
    <div>
        <router-link to="/">Home</router-link>
    </div>  
</template>