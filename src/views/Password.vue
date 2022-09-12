<script setup>
import Navbar from '../components/Navbar.vue'
import Onboarding from '../components/Onboarding.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <Navbar :user="true" />

    <Onboarding :heading1="'Forgot Password'" :heading2="'Password'" />

    <section class="pt-20 pb-48">
        <div class="w-1/3 mx-auto flex flex-col justify-center">
            <div>
                <p class="font-normal text-base text-center text-main-100">Input the 4-digit pin sent to your email address</p>
            </div>
            <div class="border px-10 py-20 border-grey-200 rounded my-10">
                <div class="flex justify-between">
                    <div class="border border-main-200 rounded-[10px] bg-main-900 flex items-center justify-center px-8 py-6">
                        <span class="text-2xl font-bold text-main-500">5</span>
                    </div>
                    <div class="border border-main-200 rounded-[10px] bg-main-900 flex items-center justify-center px-8 py-6">
                        <span class="text-2xl font-bold text-main-500">2</span>
                    </div>
                    <div class="border border-main-200 rounded-[10px] bg-main-900 flex items-center justify-center px-8 py-6">
                        <span class="text-2xl font-bold text-main-500">7</span>
                    </div>
                    <div class="border border-main-200 rounded-[10px] bg-main-900 flex items-center justify-center px-8 py-6">
                        <span class="text-2xl font-bold text-main-500">3</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center py-6">
                <router-link to="/" class="bg-main-200 rounded-lg py-4 px-36 text-base font-bold text-white">Next</router-link>
            </div>
        </div>
    </section>

    <Footer />
</template>