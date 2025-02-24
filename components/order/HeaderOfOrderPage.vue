<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/Ui/Button.vue'
import DropdownMenu from '~/components/Ui/DropdownMenu/DropdownMenu.vue' 
import DropdownMenuContent from '~/components/Ui/DropdownMenu/Content.vue'
import DropdownMenuItem from '~/components/Ui/DropdownMenu/Item.vue' 
import DropdownMenuLabel from '~/components/Ui/DropdownMenu/Label.vue' 
import DropdownMenuSeparator from '~/components/Ui/DropdownMenu/Separator.vue'
import DropdownMenuTrigger from '~/components/Ui/DropdownMenu/Trigger.vue'
import { CircleUser, ShoppingCart } from 'lucide-vue-next'
import ToggleDarkMode from '~/components/toggleColors/ToggleDarkMode.vue'

// Example cart items (Replace with actual state management)
const cartItems = ref([
  { name: 'Pizza Margherita' },
  { name: 'Coca-Cola' }
])

const checkout = () => {
  console.log('Redirecting to checkout...')
}
</script>

<template>
  <div class="flex w-full flex-col">
    <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <img src="https://illico-pizza.fr/static/assets/logo.png" style="max-width: 90px;" alt="Logo" />

      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <!-- <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            /> -->
          </div>
        </form>
        <!-- Toggle Dark Mode -->
        <ToggleDarkMode />

        <!-- Shopping Cart Dropdown (only if cart has items) -->
        <DropdownMenu v-if="cartItems.length > 0">
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <ShoppingCart class="h-5 w-5" />
              <span class="sr-only">View Cart</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <template v-for="(item, index) in cartItems" :key="index">
              <DropdownMenuItem>{{ item.name }}</DropdownMenuItem>
            </template>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="checkout">Proceed to Checkout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <!-- User Dropdown -->
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  </div>
</template>
