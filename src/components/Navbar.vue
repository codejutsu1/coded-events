<template>
    <div class="w-[93%] flex justify-between mx-auto py-8">
        <div class="p-5">
            <img src="../assets/images/Group 6631.png" alt="Coded Events Logo">
        </div>

        <nav class="flex space-x-10 items-center text-base font-normal text-main-500">
            <router-link to="/about" class="font-bold text-main-200">Create Events</router-link>
            <router-link to="/about">My Events</router-link>
            <router-link to="/about">Wallet</router-link>
            <router-link to="/about">Pricing</router-link>
            <router-link to="/about">Contact</router-link>
            <router-link to="/about">Blog</router-link>
        </nav>

        <div class="flex items-center space-x-6 text-base">
            <router-link to="/about" class="px-14 py-4 bg-main-200 font-bold text-white rounded-lg">Sign up</router-link>
            <router-link to="/about" class="flex items-center px-14 py-4 rounded-lg border border-main-500 text-main-500 relative">
                Login
                <svg class="absolute right-3 top-4"  width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10C2.08 10 0 13 0 15V18H16V15C16 13 13.92 10 8 10Z" fill="#BDBDBD"/>
                    <path d="M8 9C10.4853 9 12.5 6.98528 12.5 4.5C12.5 2.01472 10.4853 0 8 0C5.51472 0 3.5 2.01472 3.5 4.5C3.5 6.98528 5.51472 9 8 9Z" fill="#BDBDBD"/>
                </svg>
            </router-link>
        </div>
    </div>
</template>