<script setup>
import Navbar from '../components/Navbar.vue'
import Onboarding from '../components/Onboarding.vue'
import Footer from '../components/Footer.vue'
import Alert from '../components/PasswordAlert.vue'

</script>

<template>
    <Navbar :user="true" />

    <Onboarding :heading1="'Forgot Password'" :heading2="'Password'" />

    <section class="pt-20 pb-48">
        <div class="w-1/3 mx-auto flex flex-col justify-center">
            <form action="#">
                <div class="space-y-4">
                    <label for="password" class="text-base font-bold text-main-200">New Password</label>
                    <input type="password" class="block mt-1 bg-white border border-grey-200 w-full py-3 outline-0 ring-0 rounded px-4" placeholder="Please input your password">
                </div>
                <div class="flex gap-3 items-center mt-6">
                    <span class="text-xs font-normal text-grey-300">Password strength</span>
                    <div class="w-1/2 bg-grey-700 h-[10px] rounded-[30px]">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div class="bg-green rounded-[30px] w-[75%] z-40 h-[10px]"></div>
                    </div>
                    <p class="text-green font-bold text-xs">Strong</p>
                </div>
                <div class="space-y-4 mt-6">
                    <label for="confirm password" class="text-base font-bold text-main-200">Confirm New Password</label>
                    <input type="password" class="block mt-1 bg-white border border-grey-200 w-full py-3 outline-0 ring-0 rounded px-4" placeholder="Confirm your password">
                </div>
            </form>
            <div class="flex justify-center py-6 mt-10">
                <router-link to="/" class="bg-main-200 rounded-lg py-4 px-36 text-base font-bold text-white">Save Changes</router-link>
            </div>
        </div>

               <Alert />
    </section>

    <Footer />
</template>