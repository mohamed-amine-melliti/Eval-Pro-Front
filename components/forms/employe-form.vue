<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { InferType } from 'yup';
import { ref } from 'vue'
import { toRaw } from 'vue'
// Declare a boolean ref to track card visibility
const isCardVisible = ref(false)
// This will store the currently selected employee's details
const selectedEmployee = ref<Employee | null>(null); // Allow null if no employee is selected
// Function to handle selecting an employee
function selectEmployee(employee: Employee) {
  isCardVisible.value = !isCardVisible.value
  selectedEmployee.value = employee;
}
// Employee Schema
import EmployeeSchema from '~/zod-schemas/employee-schema';
import { Employee } from '~/entities/Employee'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/lib/registry/new-york/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '~/lib/registry/new-york/ui/tabs';
import {
  Checkbox,
} from '~/lib/registry/new-york/ui/checkbox';

import { Badge } from '~/lib/registry/new-york/ui/badge';
import { Button } from '~/lib/registry/default/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/lib/registry/new-york/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '~/lib/registry/new-york/ui/dropdown-menu';
import { Input } from '~/lib/registry/new-york/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '~/lib/registry/new-york/ui/sheet';
// Icons
import {
  Copy,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Truck,
  Users2,
} from 'lucide-vue-next';
import EmployeeTaskTracker from '../tracker/employee-task-tracker.vue';

const { handleSubmit, isSubmitting } = useForm<InferType<typeof EmployeeSchema>>({
  validationSchema: EmployeeSchema,
});

const dialog = ref(false);
const dialog2 = ref(false);

const closeDialog = (save: boolean) => {
  useToast().toast({
    title: save ? "Profile updated" : "Changes discarded",
    description: `Your changes have been ${save ? "saved" : "discarded"}.`,
    duration: 5000,
    icon: save ? "lucide:check" : "lucide:x",
  });
  dialog.value = false;
};

const showMessage = () => {
  useToast().toast({
    title: "Success",
    description: "Employee created successfully!",
    icon: "lucide:badge-check",
  });
};


// Define the form state
const form = ref({
  firstName: '',
  jobPosition: '',
  username: '',
  email: '',
  address: '',
  password: '',
  dateOfBirth: new Date(),
  startDate: new Date(),
  active: false,
})

const employeeStore = useEmployeeStore();

// Submit method using handleSubmit
async function onSubmit(formData: typeof form.value) {
  isSubmitting.value = true; // Set submitting state to true

  formData = toRaw(form.value)
  try {

    const dateOfBirth = new Date(formData.dateOfBirth)
    const startDate = new Date(formData.startDate)

    // Create a new employee instance
    const newEmployee = new Employee(
      employeeStore.generateId(),
      formData.username,
      formData.email,
      formData.firstName,
      formData.jobPosition,
      formData.address,
      formData.password,
      dateOfBirth, // Ensure valid Date object
      startDate,   // Ensure valid Date object
      formData.active
    )

    // Log the new employee details to the console before adding
    console.log('New Employee to be added:', toRaw(form.value));



    // Add new employee to the store
    await employeeStore.addEmployee(newEmployee)

    showMessage(); // Show success toast after submission
    // Display success notification


    Object.assign(form.value, {
      firstName: '',
      jobPosition: '',
      username: '',
      email: '',
      address: '',
      password: '',
      dateOfBirth: new Date(),
      startDate: new Date(),
      active: false,
    })

  } catch (error) {
    console.error('Error adding employee:', error)
    // Optionally, show an error notification here
  } finally {
    isSubmitting.value = false; // Reset submitting state
  }
}



// Get employee data from Pinia store
const employees = computed(() => employeeStore.getEmployees)

// Usage in your template or component

</script>


<template>
  <UiToastToaster />
  <div class="flex min-h-screen w-full flex-col bg-muted/40">

    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header
        class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button size="icon" variant="outline" class="sm:hidden">
              <PanelLeft class="h-5 w-5" />
              <span class="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="sm:max-w-xs">
            <nav class="grid gap-6 text-lg font-medium">
              <a href="#"
                class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
                <span class="sr-only">Acme Inc</span>
              </a>
              <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                <Home class="h-5 w-5" />
                Dashboard
              </a>
              <a href="#" class="flex items-center gap-4 px-2.5 text-foreground">
                <ShoppingCart class="h-5 w-5" />
                Orders
              </a>
              <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                <Package class="h-5 w-5" />
                Products
              </a>
              <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                <Users2 class="h-5 w-5" />
                Customers
              </a>
              <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                <LineChart class="h-5 w-5" />
                Settings
              </a>
            </nav>
          </SheetContent>
        </Sheet>


      </header>
      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card class="sm:col-span-2">
              <CardHeader class="pb-3">
                <CardTitle>Your Employees</CardTitle>
                <CardDescription class="max-w-lg text-balance leading-relaxed">
                  Your Employees
                </CardDescription>
              </CardHeader>
              <CardFooter>


                <div class="flex w-full items-center justify-center">
                  <UiDialog v-model:open="dialog">
                    <UiDialogTrigger as-child>
                      <UiButton variant="outline">Add Employee</UiButton>
                    </UiDialogTrigger>

                    <!---------------------Form---------------------->

                    <UiCardContent as="form" class="mt-10" @submit.prevent="onSubmit(form)">
                      <fieldset :disabled="isSubmitting" class="grid gap-5">
                        <UiDialogContent class="sm:max-w-[425px]" title="Add Employee">
                          <template #content>
                            <div class="grid gap-4 py-4">
                              <!-- First Name -->
                              <div class="grid grid-cols-4 items-center gap-4">
                                <UiLabel for="firstName" class="text-right"> Name</UiLabel>
                                <UiInput v-model="form.firstName" id="firstName" class="col-span-3" />
                              </div>

                              <!-- Job Position -->
                              <div class="grid grid-cols-4 items-center gap-4">
                                <UiLabel for="jobPosition" class="text-right">Position</UiLabel>
                                <UiInput v-model="form.jobPosition" id="jobPosition" class="col-span-3" />
                              </div>

                              <!-- Username -->
                              <div class="grid grid-cols-4 items-center gap-4">
                                <UiLabel for="username" class="text-right">Username</UiLabel>
                                <UiInput v-model="form.username" id="username" class="col-span-3" />
                              </div>

                              <!-- Email -->
                              <div class="grid grid-cols-4 items-center gap-4">
                                <UiLabel for="email" class="text-right">Email</UiLabel>
                                <UiVeeInput v-model="form.email" class="col-span-3" type="email" id="email"
                                  placeholder="john@example.com" />
                              </div>

                              <!-- Address -->
                              <div class="grid grid-cols-4 items-center gap-4">
                                <UiLabel for="address" class="text-right">Address</UiLabel>
                                <UiInput v-model="form.address" id="address" class="col-span-3" />
                              </div>

                           

                              <!-- Password -->
                              <div class="grid grid-cols-4 items-center gap-4">
                                <UiLabel for="password" class="text-right">Password</UiLabel>
                                <UiVeeInput v-model="form.password" type="password" id="password" class="col-span-3" />
                              </div>

                              <!-- Date of Birth -->
                              <div class="">
                                <UiVeeDatepicker v-model="form.dateOfBirth" :date-picker-props="{ mode: 'dateTime' }"
                                  readonly placeholder="MM/DD/YYYY HH:MM AM/PM" label="Date Of Birth" id="dateOfBirth"
                                  hint="This will be displayed to the public" />
                              </div>

                              <!-- Start Date -->
                              <div class="">
                                <UiVeeDatepicker v-model="form.startDate" :date-picker-props="{ mode: 'dateTime' }"
                                  readonly placeholder="MM/DD/YYYY HH:MM AM/PM" label="Start Date" id="startDate"
                                  hint="This will be displayed to the public" />
                              </div>

                              <!-- Active Checkbox -->
                              <div class="">
                                <UiVeeCheckbox v-model="form.active" name="active" value="true" label="Active"
                                  hint="Is the employee active?" />
                              </div>
                            </div>
                          </template>

                          <!-- Footer -->
                          <template #footer>
                            <UiDialogFooter>
                              <UiButton @click="closeDialog(false)" variant="outline" type="button"
                                class="mt-2 sm:mt-0">
                                Cancel
                              </UiButton>
                              <UiButton @click="onSubmit" type="submit">Save</UiButton>
                            </UiDialogFooter>
                          </template>
                        </UiDialogContent>
                      </fieldset>
                    </UiCardContent>


                    <!------------------------------------------------------------->
                  </UiDialog>
                </div>
              </CardFooter>
            </Card>

          </div>
          <Tabs default-value="active">
            <div class="flex items-center">
              <TabsList>
                <TabsTrigger value="active">
                  Active
                </TabsTrigger>

              </TabsList>
              <div class="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="outline" size="sm" class="h-7 gap-1 rounded-md px-3">
                      <ListFilter class="h-3.5 w-3.5" />
                      <span class="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Fulfilled
                        </label>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Declined
                        </label>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div class="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <label for="terms2"
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Refunded
                        </label>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" class="h-7 gap-1 rounded-md px-3">
                  <File class="h-3.5 w-3.5" />
                  <span class="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="active">
              <Card>
                <CardHeader class="px-7">
                  <CardTitle>Employees</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead class="hidden sm:table-cell">Address</TableHead>
                        <TableHead class="hidden sm:table-cell">Job Position</TableHead>
                        <TableHead class="hidden md:table-cell">Start Date</TableHead>
                        <TableHead class="text-right">Active</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow v-for="employee in employees" :key="employee.id" @click="selectEmployee(employee)"
                        class="bg-accent">
                        <TableCell>
                          <div class="font-medium">{{ employee.firstName }} {{ employee.lastName }}</div>
                          <div class="hidden text-sm text-muted-foreground md:inline">
                            {{ employee.email }}
                          </div>
                        </TableCell>
                        <TableCell class="hidden sm:table-cell">{{ employee.address }}</TableCell>
                        <TableCell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            {{ employee.jobPosition }}
                          </Badge>
                        </TableCell>
                        <TableCell class="hidden md:table-cell">{{ employee.startDate }}</TableCell>
                        <TableCell class="text-right">
                          {{ employee.active ? 'Yes' : 'No' }}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card v-if="isCardVisible" class="overflow-hidden mt-4">
            <CardHeader class="flex flex-row items-start bg-muted/50">
              <div class="grid gap-0.5">
                <CardTitle class="group flex items-center gap-2 text-lg">
                  <Button size="icon" variant="outline"
                    class="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <Copy class="h-3 w-3" />
                    <span class="sr-only">Copy Employee ID</span>
                  </Button>
                </CardTitle>
                <CardDescription>Date : 2024</CardDescription>
              </div>
              <div class="ml-auto flex items-center gap-1">

                <!-- Button that triggers the modal -->
                <UiDialog v-model:open="dialog2">
                  <UiDialogTrigger as-child>
                    <Button size="sm" variant="outline" class="h-8 gap-1">
                      <Truck class="h-3.5 w-3.5" />
                      <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Employee</span>
                    </Button>
                  </UiDialogTrigger>


                  <UiDialogContent style="background-color: transparent ;" class="sm:max-w-[425px] border-none"
                    title="Track Employee"
                    description="Make changes to your profile here. Click save when you're done.">
                    <EmployeeTaskTracker></EmployeeTaskTracker>
                  </UiDialogContent>
                </UiDialog>

                <!-- -------------------------------- -->
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button size="icon" variant="outline" class="h-8 w-8">
                      <MoreVertical class="h-3.5 w-3.5" />
                      <span class="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent class="p-6 text-sm">
              <!-- Employee Details Section -->
              <div v-if="selectedEmployee" class="grid gap-3">
                <div class="font-semibold">Employee Details</div>
                <ul class="grid gap-3">
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Salary</span>
                    <span>{{ selectedEmployee.firstName || '$0.00' }}</span>
                  </li>

                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Birth Date</span>
                    <span>{{ selectedEmployee.dateOfBirth ? selectedEmployee.dateOfBirth.toDateString() : 'N/A' }}</span>
                  </li>
                  
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Start Date</span>
                    <span>{{ selectedEmployee.startDate ? selectedEmployee.startDate.toDateString() : 'N/A' }}</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Position</span>
                    <span>{{ selectedEmployee.jobPosition }}</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Email</span>
                    <span>{{ selectedEmployee.email }}</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Address</span>
                    <span>{{ selectedEmployee.address }}</span>
                  </li>

                  <li class="flex items-center justify-between">
                    <span class="text-muted-foreground">Username</span>
                    <span>{{ selectedEmployee.username }}</span>
                  </li>
                  <!-- Add more employee info as needed -->
                </ul>
              </div>
            </CardContent>
            <CardFooter class="flex flex-row items-center border-t bg-muted/50 px-6 py-3">


            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  </div>
</template>