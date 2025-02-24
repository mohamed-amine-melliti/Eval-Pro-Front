<script lang="ts" setup>
import type { Mail } from '../data/mails'
import { Separator } from '@/lib/registry/new-york/ui/separator'
import { computed } from 'vue'

interface MailDisplayProps {
  mail: Mail | undefined
}

const props = defineProps<MailDisplayProps>()

const mailFallbackName = computed(() => {
  return props.mail?.name
    .split(' ')
    .map(chunk => chunk[0])
    .join('')
})
</script>

<template>
  <div class="flex h-full flex-col bg-white">
    <!-- Top Separator -->
    <Separator />

    <!-- Mail Content -->
    <div v-if="mail" class="flex flex-1 flex-col p-3 sm:p-4">
      <Separator />

      <!-- Mail Body -->
      <div class="flex-1 whitespace-pre-wrap text-xs md:text-sm leading-relaxed overflow-y-auto max-h-[50vh]">
        {{ mail.text }}
      </div>

      <Separator class="mt-auto" />
    </div>

    <!-- No Mail Selected Message -->
    <div class="p-6 text-center text-muted-foreground text-xs sm:text-sm">
      No message selected
    </div>
  </div>
</template>
