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
                <p class="font-normal text-base text-center text-main-100">A 4-digit recovery pin will be sent to your registered email address. Input your email address below</p>
            </div>
            <form action="#" class="w-full my-10">
                <div class="space-y-4">
                    <label for="email" class="text-base font-bold text-main-200">Email</label>
                    <input type="email" class="block mt-1 bg-white border border-grey-200 w-full py-3 rounded px-4" placeholder="Enter your email address">
                </div>
            </form>
            <div class="flex justify-center py-6">
                <router-link to="/" class="bg-main-200 rounded-lg py-4 px-36 text-base font-bold text-white">Next</router-link>
            </div>
        </div>
    </section>

    <Footer />
</template>