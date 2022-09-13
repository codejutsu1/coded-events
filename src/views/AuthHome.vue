<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Categories from '../components/Categories.vue'
import Events from '../components/Events.vue'
import Footer from '../components/Footer.vue'
import { onMounted } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {ref} from 'vue'

const store = useStore();

const message = ref('');

const router = useRouter();

onMounted(async () => {
    try {
        const reponse = await fetch('https://api.codedevents.com/auth/user', {
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        });

        const content = await response.json();

        message.value = `Hi ${content.name}`;

        await store.dispatch('setAuth', true)
    }catch(err){
        await store.dispatch('setAuth', false)
        await router.push('/login');
    }
})

</script>

<template>
    <header class="w-full h-screen bg-white">
        <Navbar :auth="true" />

        <Hero />
    </header>


    <Categories />

    <section class="pb-20">
        <div class="relative font-semibold flex items-center justify-center pt-20 pb-32" >
            <h1 class="text-5xl text-main-500 z-30">My Events</h1>
            <h1 class="absolute right-0 text-[200px] z-20 opacity-80" style="font-feature-settings: 'pnum' on, 'lnum' on; opacity: 0.08">My Events</h1>
        </div>
        <div class="grid grid-cols-3 w-5/6 gap-10 mx-auto h-[700px]">
            <div>
                <div class="relative bg-center bg-cover h-3/5" style="background-image: url('../src/assets/images/happy-newly-wed-african-american-couple-bench 1.jpg')">
                    <div class="absolute inset-0 bg-main-100/20"></div>
                </div>
                <div class="text-white bg-main-100 px-6 py-8">
                    <p class="text-xl font-bold">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                    <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                    <p class="text-base font-normal">Sheba Centre • Ikeja, Lagos</p>
                </div>
            </div>

            <div>
                <div class="relative bg-center bg-cover h-3/5" style="background-image: url('../src/assets/images/BLOG-NIGERIAN-MAIN-IMAGE-HeirlumeNigerian160 1.jpg')">
                    <div class="absolute inset-0 bg-main-100/20"></div>
                </div>
                <div class="text-white bg-main-100 px-6 py-8 ">
                    <p class="text-xl font-bold">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                    <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                    <p class="text-base font-normal">Sheba Centre • Ikeja, Lagos</p>
                </div>
            </div>

            <div>
                <div class="relative bg-center bg-cover h-3/5" style="background-image: url('../src/assets/images/group-happy-africans-friends-drinking-champagne-celebrating-new-year-new-year-party-birthday-party 1.jpg')">
                    <div class="absolute inset-0 bg-main-100/20"></div>
                </div>
                <div class="text-white bg-main-100 px-6 py-8 ">
                    <p class="text-xl font-bold">Funmilayo & Bayo Wedding and Traditional Marriage</p>
                    <span class="py-6 block text-base text-main-200 font-bold">Sat, Jul 23, 2:00 PM</span>
                    <p class="text-base font-normal">Sheba Centre • Ikeja, Lagos</p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center">
            <router-link to="/" class="py-4 px-20 bg-white text-main-100 rounded-lg text-xl font-bold border border-main-100 mt-5 mb-20">View All My Events</router-link>
        </div>
    </section>

    <Events />
    
    <Footer />
</template>