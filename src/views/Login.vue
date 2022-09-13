<script setup>
import Navbar from '../components/Navbar.vue'
import Onboarding from '../components/Onboarding.vue'
import Footer from '../components/Footer.vue'
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const form = reactive({
    email: '',
    password: ''
})

const router = useRouter()

const onSubmit = async () => {
    await fetch('https://api.codedevents.com/auth/login', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(form)
    })

    await router.push('/auth')
}

</script>

<template>
    <Navbar :user="true" />

    <Onboarding :heading1="'Login'" :heading2="'Login'" />

    <section class="py-20">
        <div class="w-1/3 mx-auto flex flex-col justify-center">
            <form @submit.prevent='onSubmit' class="w-full">
                <div class="space-y-4">
                    <label for="email" class="text-base font-bold text-main-200">Email</label>
                    <input type="email" v-model="form.email" class="block mt-1 bg-white border border-grey-200 w-full py-3 rounded px-4" placeholder="Enter your email address">
                </div>
                <div class="space-y-4 mt-4">
                    <label for="password" class="text-base font-bold text-main-200">Password</label>
                    <input type="password" v-model="form.password" class="block mt-1 bg-white border border-grey-200 w-full py-3 rounded px-4" placeholder="Enter your password">
                </div>
                <div class="flex justify-end my-10">
                    <p class="underline text-base font-normal text-grey-300">Forgot Your Password</p>
                </div>
                <div class="flex justify-center py-6">
                    <input type="submit" value="Login" class="bg-main-200 rounded-lg py-4 px-36 text-base font-bold text-white">
                </div>
                <div>
                    <p class="text-grey-300 font-normal text-base text-center">Don't have an account? <router-link to="register" class="text-main-200">Sign up</router-link></p>
                </div>
            </form>
        </div>
    </section>

    <Footer />
</template>
