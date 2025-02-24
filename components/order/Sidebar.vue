<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  isOpen: boolean;
  selectedItem: any | null;
}>();

const emit = defineEmits(["close"]);
</script>

<template>
  <transition name="overlay-fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-start backdrop-blur-sm">
      <transition name="sidebar-slide">
        <div
          v-if="isOpen"
          class="w-full sm:w-1/3 md:w-1/4 h-full bg-white p-6 shadow-2xl rounded-r-2xl relative transform flex flex-col overflow-y-auto"
        >
          <!-- Close Button -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-gray-500 focus:outline-none transition-colors duration-300"
          >
            &times;
          </button>

          <!-- Content Section -->
          <div class="flex flex-col items-center space-y-4">
            <h2 class="text-lg font-semibold text-center">{{ selectedItem?.title }}</h2>
            <img
              :src="selectedItem?.image"
              class="w-full max-w-xs h-40 object-cover rounded-lg shadow-md"
            />
            <p class="text-sm text-gray-600 text-center">{{ selectedItem?.description }}</p>
          </div>

          <!-- Inner Card (Ensured it fits well) -->
          <div class="w-full max-w-full mt-6">
            <ExamplesCardsComponentsShareDocument />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
/* Background fade effect (smooth) */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.6s ease-in-out, backdrop-filter 0.6s ease-in-out;
}

.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

/* Sidebar slide animation */
.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-in-out;
}

.sidebar-slide-enter {
  transform: translateX(-100%) scale(0.95);
  opacity: 0;
}

.sidebar-slide-leave-to {
  transform: translateX(-100%) scale(0.95);
  opacity: 0;
}
</style>
