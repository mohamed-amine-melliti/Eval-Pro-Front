<script setup lang="ts">
import Button from '~/components/Ui/Button.vue'
import AlertDialog from "~/components/Ui/AlertDialog/AlertDialog.vue"
import AlertDialogContent from "~/components/Ui/AlertDialog/Content.vue"
import AlertDialogTrigger from "~/components/Ui/AlertDialog/Trigger.vue"
import Form from "~/components/order/Form.vue"
import HeaderOfOrderPage from '~/components/order/HeaderOfOrderPage.vue'
import BrowserByCategories from '~/components/order/BrowserByCategories.vue'
import { Separator } from '@/lib/registry/default/ui/separator'
import BrowseCategoriesAndMakeOrders from '~/components/special-order/BrowseCategoriesAndMakeOrders.vue'
</script>



<template>
  <HeaderOfOrderPage />

  <div class="w-full flex flex-col lg:grid lg:min-h-screen lg:grid-cols-2">
    <!-- Left Section: Content -->
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[90%] max-w-[400px] gap-6 text-center">
        <h1 class="text-3xl font-bold">Le goût vite fait !</h1>
        <div>
          <AlertDialog>
            <AlertDialogTrigger as-child>
              <div class="flex flex-col gap-2 w-full">
                <Button variant="outline">Commandez Maintenant</Button>

              </div>
            </AlertDialogTrigger>
            <AlertDialogContent class="max-w-screen">
              <Form></Form>
            </AlertDialogContent>
          </AlertDialog>

          <div class="flex flex-col gap-2 w-full">
            <Separator class="mt-4 px-4" />
            <Button>Connecter </Button>
            <Button>S'inscrire</Button>
          </div>

        </div>
      </div>
    </div>


    <!-- Right Section: Image (Better Desktop & Mobile Fit) -->
    <div class="relative w-full h-[300px] sm:h-[400px] lg:h-auto lg:min-h-screen">
      <img
        src="https://res.cloudinary.com/justsalad/image/upload/g_auto/f_auto/q_auto/g_auto/v1734616146/seasonalmenus/APP_Winter_Sweet-Chicken_h5nugw?_a=BAVAZGDW0"
        alt="Image"
        class="absolute inset-0 w-full h-full object-cover object-center dark:brightness-[0.3] dark:grayscale" />
    </div>
  </div>


  <BrowserByCategories />

</template>