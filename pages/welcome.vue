<script setup lang="ts">
import RetroGrid from '~/components/RetroGrid.vue';
const router = useRouter(); // Nuxt 3 uses vue-router internally
const goToDashboard = () => {
    router.push('/dashboard'); // Redirect to the /dashboard page
};
const goToSignIn = () => {
  router.push('/login'); // Redirect to /signin page
};
</script>

<template>


    <UiContainer class="flex flex-col gap-y-5 py-10 md:flex-row md:gap-10 md:py-0 lg:h-[720px]">

        <div class="flex items-center justify-center min-h-screen">
            <div
                class="relative mx-auto flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
                <span
                    class="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Eval-Pro
                </span>
                <RetroGrid />
            </div>
        </div>

        <div class="flex h-full items-center justify-center md:w-2/3 xl:w-1/2">
            <div class="text-center md:text-left">

                <div class="mt-8 grid grid-cols-1 gap-3 md:flex lg:mt-12">

                    <UiButton size="lg" @click="goToSignIn">Sign In</UiButton>
                    <UiButton size="lg" @click="goToDashboard">Go To Dashboard</UiButton>
                </div>

            </div>
        </div>

    </UiContainer>




</template>