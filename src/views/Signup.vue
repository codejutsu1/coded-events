<script setup>
import Navbar from '../components/Navbar.vue'
import Onboarding from '../components/Onboarding.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <Navbar :user="true" />

    <Onboarding :heading1="'Signup'" :heading2="'Signup'" />

    <section class="py-20">
        <div class="w-1/3 mx-auto flex flex-col justify-center">
            <form action="#" class="w-full">
                <div class="space-y-4">
                    <label for="name" class="text-base font-bold text-main-200">Name</label>
                    <input type="text" class="block mt-1 bg-white border border-grey-200 w-full py-2 rounded px-4" placeholder="Enter your name">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="email" class="text-base font-bold text-main-200">Email</label>
                    <input type="email" class="block mt-1 bg-white border border-grey-200 w-full py-2 rounded px-4" placeholder="Enter your email address">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="email" class="text-base font-bold text-main-200">Phone Number</label>
                    <input type="email" class="block mt-1 bg-white border border-grey-200 w-full py-2 rounded px-4" placeholder="Enter your phone number">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="password" class="text-base font-bold text-main-200">Password</label>
                    <input type="password" class="block mt-1 bg-white border border-grey-200 w-full py-2 rounded px-4" placeholder="Please input your password">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="confirm password" class="text-base font-bold text-main-200">Confirm Password</label>
                    <input type="confirmation_password" class="block mt-1 bg-white border border-grey-200 w-full py-2 rounded px-4" placeholder="Confirm your password">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="email" class="text-base font-bold text-main-200">Country</label>
                    <input type="email" class="block mt-1 bg-white border border-grey-200 w-full py-2 rounded px-4" placeholder="Nigeria">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="city" class="text-base font-bold text-main-200">City</label>
                    <input type="text" class="block mt-1 bg-white border border-grey-200 w-full py-2 rounded px-4" placeholder="Lagos">
                </div>
            </form>
            
            <div class="flex justify-center pt-10 pb-6">
                <router-link to="/" class="bg-main-200 rounded-lg py-4 px-36 text-base font-bold text-white">Signup</router-link>
            </div>
            <div>
                <p class="text-grey-300 font-normal text-base text-center">Have an account already? <router-link to="login" class="text-main-200">Login</router-link></p>
            </div>
        </div>
    </section>

    <Footer />
</template>