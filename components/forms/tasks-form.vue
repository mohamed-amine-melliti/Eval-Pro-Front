<script setup lang="ts">
import tasks from "./tasks/data/tasks.json"
import DataTable from "./tasks/components/DataTable.vue";
import { columns } from './tasks/components/columns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/lib/registry/new-york/ui/card';
import { Button } from '~/lib/registry/default/ui/button';
import { Progress } from '~/lib/registry/new-york/ui/progress';
import AutoForm from "~/lib/registry/default/ui/auto-form/AutoForm.vue";
import TaskSchema from "~/zod-schemas/task-schema";
import { useTaskStore } from '~/stores/taskStore';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/lib/registry/default/ui/dialog'

const form = ref({
  employeeID: null,
  status: 'Todo',
  priority: 'Medium',
  type: 'Feature',
  title: ''
});


const showMessage = () => {
  useToast().toast({
    title: "Success",
    description: "Task created successfully!",
    icon: "lucide:badge-check",
  });
};

const taskStore = useTaskStore();


async function handleSubmit(formData: typeof form.value) {
  //isSubmitting.value = true; // Set submitting state to true

  formData = toRaw(form.value)
  try {


    // Create a new employee instance
    const newTask = new Task(
      taskStore.generateId(),
      formData.employeeID,
      formData.priority,
      formData.status,
      formData.type,
      formData.title,
      formData.password,
     
      formData.active
    )

    // Log the new employee details to the console before adding
    console.log('New Employee to be added:', toRaw(form.value));



    // Add new employee to the store
    await employeeStore.addEmployee(newEmployee)

    showMessage(); // Show success toast after submission
    // Display success notification


    // Reset the form fields
    // Object.assign(form.value, {
    //   firstName: '',
    //   jobposition: '',
    //   username: '',
    //   email: '',
    //   address: '',
    //   password: '',
    //   dateOfBirth: new Date(),
    //   startDate: new Date(),
    //   active: false,
    // })

  } catch (error) {
    console.error('Error adding employee:', error)
    // Optionally, show an error notification here
  } finally {
    isSubmitting.value = false; // Reset submitting state
  }
}

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
          <CardTitle>Your Tasks</CardTitle>
          <CardDescription class="max-w-lg text-balance leading-relaxed">
            Your Tasks
          </CardDescription>
        </CardHeader>
        <CardFooter>

          <Dialog>

            <DialogTrigger   as-child>
              <Button>Create New Tasks</Button>
            </DialogTrigger >

            <DialogContent  class="w-80 p-6">
              <form>
                <div class="flex h-full flex-col gap-1.5">

                  <AutoForm :schema="TaskSchema" :submit-handler="handleSubmit" @submit="(data) => {
                    // Do something with the data
                  }">

                    <Button  @click="handleSubmit" type="submit">
                      Submit
                    </Button>
                  </AutoForm>

                </div>
              </form>
            </DialogContent >
          </Dialog>
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