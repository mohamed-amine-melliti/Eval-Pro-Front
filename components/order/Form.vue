<script setup lang="ts">
import Card from '~/components/Ui/Card/Card.vue'
import CardContent from '~/components/Ui/Card/Content.vue'
import CardDescription from '~/components/Ui/Card/Description.vue'
import CardHeader from '~/components/Ui/Card/Header.vue'
import CardTitle from '~/components/Ui/Card/Title.vue'
import Tabs from '~/components/Ui/Tabs/Tabs.vue'
import TabsContent from '~/components/Ui/Tabs/Content.vue'
import TabsList from '~/components/Ui/Tabs/List.vue'
import TabsTrigger from '~/components/Ui/Tabs/Trigger.vue'
import MapLibreLocation from './MapLibreLocation.vue'
import StepperOrder from "./Stepper.vue"
</script>

<template>
    <Tabs default-value="pickup" class=" max-w-7xl mx-auto">

  <!-- <Tabs default-value="pickup" class="w-full max-w-7xl mx-auto"> -->
    <!-- Centered Tabs List -->
    <TabsList class="grid w-full grid-cols-2 gap-2">
      <TabsTrigger value="pickup" class="text-center">
        Pick-up
      </TabsTrigger>
      <TabsTrigger value="delivery" class="text-center">
        Delivery
      </TabsTrigger>
    </TabsList>

    <!-- Pick-up Tab with Full Map -->
    <TabsContent value="pickup" class="mt-6">
      <Card class="w-full h-[600px]">
        <CardHeader>
          <CardTitle class="text-xl">Pick-up</CardTitle>
          <CardDescription class="text">
            Choisissez un lieu pour récupérer votre pizza.
          </CardDescription>
        </CardHeader>
        <CardContent class="p-6 h-full">
          <StepperOrder></StepperOrder>

          <div class="w-full h-full rounded-lg overflow-hidden">
            <MapLibreLocation class="w-full h-full" />
          </div>
        </CardContent>
      </Card>
    </TabsContent>

    <!-- Delivery Tab with Full Map -->
    <TabsContent value="delivery" class="mt-6">
      <Card class="w-full h-[600px]">
        <CardHeader>
          <CardTitle class="text-2xl">Delivery</CardTitle>
          <CardDescription class="text-lg">
            Choisissez un lieu pour vous faire livrer votre pizza.
          </CardDescription>
        </CardHeader>
        <StepperOrder></StepperOrder>
        <CardContent class="p-6 h-full">
          <div class="w-full h-full rounded-lg overflow-hidden">
            <MapLibreLocation class="w-full h-full" />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>

</template>
