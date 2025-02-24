<script setup lang="ts">
import Button from '~/components/Ui/Button.vue'
import Stepper from '../Ui/Stepper/Stepper.vue';
import StepperItem from '../Ui/Stepper/Item.vue';
import StepperSeparator from '../Ui/Stepper/Separator.vue';
import StepperTrigger from '../Ui/Stepper/Trigger.vue';
import StepperTitle from '../Ui/Stepper/Title.vue';
import Separator from '../Ui/Separator.vue';
import { Check, Circle, Dot } from 'lucide-vue-next'
import { steps } from '~/composables/StepperInformations'
import { toTypedSchema } from '@vee-validate/zod'

const stepIndex = ref(1)
</script>

<template>
  <div class="w-full">
    <Form v-slot="{ meta, values, validate }" as="" keep-values>
      <Stepper v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep }" v-model="stepIndex"
        class="flex w-full items-start gap-1 md:gap-2">
        <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
          class="relative flex w-full flex-col items-center justify-center" :step="step.step">
          <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
            class="absolute left-[calc(50%+15px)] right-[calc(-50%+5px)] top-3 h-0.5 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

          <StepperTrigger as-child>
            <Button :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'" size="icon"
              class="z-10 rounded-full shrink-0 w-7 h-7 md:w-8 md:h-8"
              :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']">
              <Check v-if="state === 'completed'" class="size-4" />
              <Circle v-if="state === 'active'" class="size-4" />
              <Dot v-if="state === 'inactive'" class="size-3" />
            </Button>
          </StepperTrigger>

          <div class="mt-3 flex flex-col items-center text-center">
            <StepperTitle :class="[state === 'active' && 'text-primary']"
              class="text-xs md:text-sm font-medium transition">
              {{ step.title }}
            </StepperTitle>
          </div>
        </StepperItem>

        <!-- Action buttons (Prev & Next) -->
        <div class="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Previous Button -->
          <Button :disabled="isPrevDisabled" variant="outline" size="sm" @click="prevStep()"
            class="w-full md:w-auto">
            Back
          </Button>
          
          <!-- Next or Submit Button -->
          <div class="flex items-center gap-3 w-full md:w-auto justify-center">
            <Button v-if="stepIndex !== 3" :type="meta.valid ? 'button' : 'submit'" :disabled="isNextDisabled"
              size="sm" @click="meta.valid && nextStep()" class="w-full md:w-auto">
              Next
            </Button>
            <Button v-if="stepIndex === 3" size="sm" type="submit" class="w-full md:w-auto">
              Submit
            </Button>
          </div>
        </div>
      </Stepper>
    </Form>

    <!-- Smaller Separator Below the Stepper -->
    <Separator class="my-4 md:my-6 h-[1px]" />
  </div>
</template>
