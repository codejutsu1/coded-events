<script setup>

const props = defineProps({
    heading1: String,
    heading2: String
})

</script>

<template>
    <section class="bg-main-400">
        <div class="relative font-semibold flex items-center justify-center pt-20 pb-32" >
            <h1 class="text-5xl text-main-500 z-30">{{ props.heading1 }}</h1>
            <h1 class="absolute right-52 text-[250px] z-20 opacity-80" style="font-feature-settings: 'pnum' on, 'lnum' on; opacity: 0.08">{{ props.heading2 }}</h1>
        </div>
    </section>
</template>
