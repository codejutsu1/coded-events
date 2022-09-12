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
                    <input type="text" class="block mt-1 bg-white border border-grey-200 w-full py-3 outline-0 ring-0 rounded px-4" placeholder="Enter your name">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="email" class="text-base font-bold text-main-200">Email</label>
                    <input type="email" class="block mt-1 bg-white border border-grey-200 w-full py-3 outline-0 ring-0 rounded px-4" placeholder="Enter your email address">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="email" class="text-base font-bold text-main-200">Phone Number</label>
                    <div class="flex border border-grey-200 rounded px-1">
                        <div class="w-1/3 flex">    
                            <div class="flex items-center justify-center w-2/5">   
                                <img src="../assets/images/image 2.png" alt="NGA"> 
                            </div>
                            <select name="mobile-code" id="mobile-code" class="w-3/5 text-grey-300">
                                <option value="+232">+234</option>
                            </select>
                        </div>
                        <input type="email" class="block bg-white border-l border-grey-200 w-full py-3 px-4 ring-0 outline-0" placeholder="Enter your phone number">
                    </div>
                </div>
                <div class="space-y-4 mt-4">
                    <label for="password" class="text-base font-bold text-main-200">Password</label>
                    <input type="password" class="block mt-1 bg-white border border-grey-200 w-full py-3 outline-0 ring-0 rounded px-4" placeholder="Please input your password">
                </div>
                <div class="mt-4 flex gap-3 items-center">
                    <span class="text-xs font-normal text-grey-300">Password strength</span>
                    <div class="w-1/2 bg-grey-700 h-[10px] rounded-[30px]">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div class="bg-green rounded-[30px] w-[75%] z-40 h-[10px]"></div>
                    </div>
                    <p class="text-green font-bold text-xs">Strong</p>
                </div>
                <div class="space-y-4 mt-4">
                    <label for="confirm password" class="text-base font-bold text-main-200">Confirm Password</label>
                    <input type="password" class="block mt-1 bg-white border border-grey-200 w-full py-3 outline-0 ring-0 rounded px-4" placeholder="Confirm your password">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="email" class="text-base font-bold text-main-200">Country</label>
                    <select name="country" id="couuntry" class="block mt-1 bg-white border border-grey-200 w-full py-3 outline-0 ring-0 rounded px-4 text-grey-300">
                        <option value="nigeria">Nigeria</option>
                    </select>
                </div>
                <div class="space-y-4 mt-4">
                    <label for="city" class="text-base font-bold text-main-200">City</label>
                    <input type="text" class="block mt-1 bg-white border border-grey-200 w-full py-3 rounded px-4 outline-0 ring-0" placeholder="Lagos">
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