<template>


    <!-- <Loading></Loading> -->

    <!-- <div v-if="!loading">


        <div
            class="absolute inset-0 bg-[radial-gradient(theme(colors.border/90%)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]">

            <div
                class="relative mx-auto flex h-full w-full max-w-[320rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
                <span style="letter-spacing: 0.5em;"
                    class="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Eval-Pro
                </span>

                <Globe></Globe>
            </div>
        </div>

        <UiContainer class="relative">
            <div
                class="absolute inset-0 bg-[radial-gradient(theme(colors.border/90%)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]" />
            <div class="relative z-10 flex flex-col items-center justify-center py-16 text-center lg:py-24">


                <slot>
                    <div class="mt-5 grid w-full grid-cols-1 justify-center gap-3 sm:flex sm:items-center">
                        <UiButton @click="goToDashboard">Go To Dashboard</UiButton>
                    </div>
                </slot>
            </div>
        </UiContainer>

    </div> -->


       <Dashboard/>

</template>

<script lang="ts" setup>
import Globe from '~/components/spark-ui/Globe.vue';
import Dashboard from './dashboard.vue';

const loading = ref(true);

setTimeout(() => {
    loading.value = false;
}, 3000); // 3 seconds


const props = withDefaults(
    defineProps<{
        title?: string;
        description?: string;
        icon?: string;
    }>(),
    {
        icon: "lucide:search",
        title: "No results found",
        description: "Try changing your search query or adding a new record.",
    }
);
const router = useRouter(); // Nuxt 3 uses vue-router internally


const goToDashboard = () => {
    router.push('/dashboard'); // Redirect to the /dashboard page
};
</script>