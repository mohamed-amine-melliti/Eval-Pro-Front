<script setup lang="ts">
import { ref } from "vue";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/lib/registry/new-york/ui/avatar";
import { Button } from "@/lib/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/registry/new-york/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/registry/new-york/ui/select";
import { Separator } from "@/lib/registry/new-york/ui/separator";

const isAdded = ref(false);
</script>

<template>
  <Card class="w-full max-w-sm mx-auto">
    <CardHeader>
      <CardTitle class="text-center text-lg font-semibold">Marguerita</CardTitle>
    </CardHeader>
    <CardContent class="space-y-4">
      <Separator />
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <!-- Avatar and Info -->
        <div class="flex items-center gap-3 flex-1 min-w-[120px]">
          <Avatar class="w-10 h-10 flex-shrink-0">
            <AvatarImage src="/avatars/03.png" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <p class="text-sm font-medium truncate">Tomate/Fromage</p>
        </div>

        <!-- Select & Button container -->
        <div class="flex items-center gap-2 flex-shrink-0">
          <!-- Select Size -->
          <Select default-value="edit">
            <SelectTrigger class="w-[100px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="junior">Junior</SelectItem>
              <SelectItem value="super">Super</SelectItem>
              <SelectItem value="Mega">Mega</SelectItem>
            </SelectContent>
          </Select>

          <!-- Action Button -->
          <Button :variant="isAdded ? 'destructive' : 'default'" class="w-[110px]" @click="isAdded = !isAdded">
            {{ isAdded ? "Supprimer" : "Ajouter" }}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
