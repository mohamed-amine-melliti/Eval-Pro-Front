<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/lib/registry/new-york/ui/avatar'
</script>

<template>
  <div class="space-y-8">
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Amine Melliti
        </p>
        <p class="text-sm text-muted-foreground">
          amine.melliti@email.com
        </p>
      </div>
      <div class="ml-auto font-medium">
        Full Stack Dev
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="flex h-9 w-9 items-center justify-center space-y-0 border">
        <AvatarImage src="/avatars/02.png" alt="Avatar" />
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Salem 
        </p>
        <p class="text-sm text-muted-foreground">
          salem.esprit@email.com
        </p>
      </div>
      <div class="ml-auto font-medium">
       Ingénieur Embarqué
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="/avatars/03.png" alt="Avatar" />
        <AvatarFallback>IN</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Test Employée
        </p>
        <p class="text-sm text-muted-foreground">
          test.employee@email.com
        </p>
      </div>
      <div class="ml-auto font-medium">
        Marketing Agent
      </div>
    </div>
 
 
  </div>
</template>
