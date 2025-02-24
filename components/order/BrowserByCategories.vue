<script setup lang="ts">
import { ref } from "vue";
import Card from '~/components/Ui/Card/Card.vue'
import CardContent from '~/components/Ui/Card/Content.vue'
import CardTitle from '~/components/Ui/Card/Title.vue'
import Sidebar from "./Sidebar.vue";
import { categories } from '~/composables/CategoriesFood';

const isSidebarOpen = ref(false);
const selectedCategory = ref<any>(null);

// Open sidebar with selected category
const openSidebar = (category: any) => {
  selectedCategory.value = category;
  isSidebarOpen.value = true;
};

// Close sidebar
const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<template>
  <UiSeparator class="mt-4 px-4" />

  <div class="flex min-h-screen w-full flex-col">
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <!-- Header for "Browser by Categories" -->
      <div class="text-lg font-semibold text-center md:text-left">
        Naviguer par catégories
      </div>

      <div class="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <!-- Dynamically Render Categories -->
        <Card
          v-for="(category, index) in categories"
          :key="index"
          class="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          @click="openSidebar(category)"
        >
          <img
            :src="category.image"
            :alt="category.title"
            class="w-full h-40 object-contain max-w-[90%] mx-auto p-2"
          />
          <CardContent class="text-center p-4">
            <CardTitle class="text-lg font-semibold">{{ category.title }}</CardTitle>
            <p class="text-sm text-muted-foreground">{{ category.description }}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>

  <!-- Reusable Sidebar Component -->
  <Sidebar :isOpen="isSidebarOpen" :selectedItem="selectedCategory" @close="closeSidebar" />
</template>
