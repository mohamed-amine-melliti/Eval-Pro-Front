<script setup lang="ts">
import Button from '~/components/Ui/Button.vue'
import DropdownMenu from '~/components/Ui/DropdownMenu/DropdownMenu.vue'
import DropdownMenuContent from '~/components/Ui/DropdownMenu/Content.vue'
import DropdownMenuItem from '~/components/Ui/DropdownMenu/Item.vue'
import DropdownMenuTrigger from '~/components/Ui/DropdownMenu/Trigger.vue'
const colorMode = useColorMode()

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">

        ☀️
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>