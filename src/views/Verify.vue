<script setup>
import Navbar from '../components/Navbar.vue'
import Onboarding from '../components/Onboarding.vue'
import Footer from '../components/Footer.vue'
import VOtpInput from 'vue3-otp-input';
import { reactive, ref } from 'vue'

const otpInput = ref(null)

const form = reactive({
    token: ''
})

const handleOnComplete = async(value) => {
    // console.log('OTP completed: ', value);
    form.token = value;

    await fetch('https://api.codedevents.com/auth/email/verify', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(form)
    });

    await router.push('/auth');
};

const handleOnChange = (value) => {
    // console.log('OTP changed: ', value);
};

const clearInput = () => {
    otpInput.value.clearInput()
}


</script>

<template>
    <Navbar :user="true" />

    <Onboarding :heading1="'Verify Your Email Address'" :heading2="'Verify'" />

    <section class="pt-20 pb-48">
        <div class="w-1/3 mx-auto flex flex-col justify-center">
            <div>
                <p class="font-normal text-base text-center text-main-100">Input the 4-digit pin sent to your email address</p>
            </div>
            <div class="border px-10 py-20 border-grey-200 rounded my-10">
                <div class="flex justify-between">
                    <v-otp-input
                            ref="otpInput"
                            input-classes="otp-input"
                            separator=""
                            :num-inputs="4"
                            :should-auto-focus="true"
                            :is-input-num="true"
                            :conditionalClass="['one', 'two', 'three', 'four']"
                            :placeholder="['-', '-', '-', '-']"
                            @on-change="handleOnChange"
                            @on-complete="handleOnComplete"
                        />
                    <!-- <div class="border border-main-200 rounded-[10px] bg-main-900 flex items-center justify-center px-8 py-6">
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
                    </div> -->
                </div>
            </div>
            <p class="text-center pb-10 text-base text-main-100">Didn’t get any code? <span class="font-bold text-main-200"> Resend Code</span></p>
            <div class="flex justify-center py-6">
                <router-link to="/" class="bg-main-200 rounded-lg py-4 px-36 text-base font-bold text-white">Sign up</router-link>
            </div>

            <button type="button" @click="clearInput()">Clear Input</button>
        </div>
    </section>

    <Footer />
</template>

<style>
    .otp-input {
        height: 80px;
        width: 80px;
        /* margin: 0 10px; */
        --tw-space-x-reverse: 0;
        margin-right: calc(0.75rem * var(--tw-space-x-reverse));
        margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
        font-size: 20px;
        border-radius: 10px;
        border: 1px solid #CC4516;
        text-align: center;
        background-color: #FFF6EA;
    }
    /* Background colour of an input field with value */
    .otp-input::-webkit-inner-spin-button,
    .otp-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input::placeholder {
        font-size: 24px;
        font-weight: 700;
        color: #751300;
    }

    input{
        color: #751300;
        font-weight: 700;
    }

    input:focus{
        outline: 0;
    }
</style>