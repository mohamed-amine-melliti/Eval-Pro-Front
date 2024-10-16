<script setup lang="ts">
import Avatar from '~/components/Ui/Avatar/Avatar.vue'
import AvatarFallback from '~/components/Ui/Avatar/Fallback.vue'
import AvatarImage from '~/components/Ui/Avatar/Image.vue'


import Button from '~/components/Ui/Button.vue'
import DropdownMenu from '~/components/Ui/DropdownMenu/DropdownMenu.vue'
import DropdownMenuContent from '~/components/Ui/DropdownMenu/Content.vue'
import DropdownMenuItem from '~/components/Ui/DropdownMenu/Item.vue'
import DropdownMenuLabel from '~/components/Ui/DropdownMenu/Label.vue'
import DropdownMenuSeparator from '~/components/Ui/DropdownMenu/Separator.vue'
import DropdownMenuTrigger from '~/components/Ui/DropdownMenu/Trigger.vue'
import DropdownMenuGroup from '~/components/Ui/DropdownMenu/Group.vue'

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar class="h-8 w-8">
          <AvatarImage src="/avatars/01.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="font-normal flex">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            Feryel Ben Hassen
          </p>
          <p class="text-xs leading-none text-muted-foreground">
            feryel.benhassen@esprit.tn
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>New Team</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Log out
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
