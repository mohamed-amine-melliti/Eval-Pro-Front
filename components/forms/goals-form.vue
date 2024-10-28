<script setup lang="ts">
import tasks from "./tasks/data/tasks.json"
import DataTable from "./tasks/components/DataTable.vue";
import UserNav from "./tasks/components/UserNav.vue";
import { columns } from './tasks/components/columns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/lib/registry/new-york/ui/card';
import { Button } from '~/lib/registry/default/ui/button';
import { Progress } from '~/lib/registry/new-york/ui/progress';
import AutoForm from "~/lib/registry/default/ui/auto-form/AutoForm.vue";
import TaskSchema from "~/zod-schemas/task-schema";
const form = ref({
  employeeID: null,
  status: 'Todo',
  priority: 'Medium',
  type: 'Feature',
  title: ''
});

const handleSubmit = () => {
      try {
        // Validate form data against TaskSchema
        TaskSchema.parse(form.value);

        // If validation passes, proceed with task creation logic
        // This could include adding the task to a store or making an API request
        console.log('Task created successfully:', form.value);
        errorMessage.value = '';
      } catch (error) {
        // If validation fails, set an error message
        errorMessage.value = error.errors?.[0]?.message || 'Validation error';
      }
    };
</script>

<template>
  <div class="md:hidden">
    <VPImage alt="Tasks" width="1280" height="1214" class="block" :image="{
      dark: '/examples/tasks-dark.png',
      light: '/examples/tasks-light.png',
    }" />
  </div>

  <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card class="sm:col-span-2">
        <CardHeader class="pb-3">
          <CardTitle>Your Goals</CardTitle>
          <CardDescription class="max-w-lg text-balance leading-relaxed">
            Your Goals
          </CardDescription>
        </CardHeader>
        <CardFooter>

          <UiPopover>

            <UiPopoverTrigger as-child>
              <Button>Create New Goal</Button>
            </UiPopoverTrigger>

            <UiPopoverContent class="w-80 p-6">
              <form>
                <div class="flex h-full flex-col gap-1.5">

                  <AutoForm  :schema="TaskSchema" />

                </div>
              </form>
            </UiPopoverContent>
          </UiPopover>
        </CardFooter>
      </Card>


      <Card>
        <CardHeader class="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle class="text-4xl">
            1329
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-xs text-muted-foreground">
            +25% from last week
          </div>
        </CardContent>
        <CardFooter>
          <Progress :model-value="25" aria-label="25% increase" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader class="pb-2">
          <CardDescription>This Month</CardDescription>
          <CardTitle class="text-3xl">
            329
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-xs text-muted-foreground">
            +10% from last month
          </div>
        </CardContent>
        <CardFooter>
          <Progress :model-value="12" aria-label="12% increase" />
        </CardFooter>
      </Card>
    </div>


    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Welcome back Feryel!
        </h2>
        <p class="text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>

    </div>
    <DataTable :data="tasks" :columns="columns" />
  </div>
</template>