<script setup lang="ts">
import { ref } from 'vue'
import { CaretSortIcon, PlusCircledIcon, CheckIcon } from '@radix-icons/vue'

import { cn } from '@/lib/utils'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/lib/registry/new-york/ui/avatar'
import { Button } from '@/lib/registry/new-york/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/registry/new-york/ui/dialog'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/lib/registry/new-york/ui/command'
import { Input } from '@/lib/registry/new-york/ui/input'
import { Label } from '@/lib/registry/new-york/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/lib/registry/new-york/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/registry/new-york/ui/select'

const groups = [
  {
    label: 'Current Deparement',
    teams: [
      {
        label: 'Departement HR',
        value: 'hr',
      },
    ],
  },
  {
    label: 'Teams',
    teams: [
      {
        label: 'Departement Financier.',
        value: 'financier',
      },
      {
        label: 'Departement Developpment.',
        value: 'dev',
      },
    ],
  },
]


const employeeStore = useEmployeeStore();
const employees = computed(() => employeeStore.getEmployees)

const showMessage = () => {
  useToast().toast({
    title: "Success",
    description: "Departement created successfully!",
    icon: "lucide:badge-check",
  });
};

type Team = (typeof groups)[number]['teams'][number]
import { useDepartmentStore } from '@/stores/departmentStore'; // Assuming this is the path to your Pinia store

const open = ref(false)
const showNewTeamDialog = ref(false)
const selectedTeam = ref<Team>(groups[0].teams[0])

const form = ref({
  departmentName: '',
  manager: ''
});


async function onSubmit(formData) {
  const departmentStore = useDepartmentStore() // Get the store instance

  await departmentStore.addDepartment({
    label: form.value.departmentName, // Assuming this is the input for department name
    manager: form.value.manager, // Assuming you have a manager selected
    teams: [], // Default to an empty team array or provide initial teams if available
  })


  console.log('New Deaprtement to be added:', toRaw(form.value));

  showMessage(); // Show success toast after submission

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

}

</script>

<template>
  <Dialog v-model:open="showNewTeamDialog">
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button variant="outline" role="combobox" aria-expanded="open" aria-label="Select a team"
          :class="cn('w-[200px] justify-between', $attrs.class ?? '')">
          <Avatar class="mr-2 h-5 w-5">
            <AvatarImage :src="`https://avatar.vercel.sh/${selectedTeam.value}.png`" :alt="selectedTeam.label" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {{ selectedTeam.label }}
          <CaretSortIcon class="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[200px] p-0">
        <Command :filter-function="(list, term) => list.filter(i => i.label?.toLowerCase()?.includes(term))">
          <CommandList>
            <CommandInput placeholder="Search team..." />
            <CommandEmpty>No team found.</CommandEmpty>
            <CommandGroup v-for="group in groups" :key="group.label" :heading="group.label">
              <CommandItem v-for="team in group.teams" :key="team.value" :value="team" class="text-sm" @select="() => {
                selectedTeam = team
                open = false
              }">
                <Avatar class="mr-2 h-5 w-5">
                  <AvatarImage :src="`https://avatar.vercel.sh/${team.value}.png`" :alt="team.label"
                    class="grayscale" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                {{ team.label }}
                <CheckIcon :class="cn('ml-auto h-4 w-4',
                  selectedTeam.value === team.value
                    ? 'opacity-100'
                    : 'opacity-0',
                )" />
              </CommandItem>
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <DialogTrigger as-child>
                <CommandItem value="create-team" @select="() => {
                  open = false
                  showNewTeamDialog = true
                }">
                  <PlusCircledIcon class="mr-2 h-5 w-5" />
                  Create Departement
                </CommandItem>
              </DialogTrigger>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Departement</DialogTitle>
        <DialogDescription>
          Add a new Departement to your company
        </DialogDescription>
      </DialogHeader>
      <div>
        <form @submit.prevent="onSubmit">
          <div class="space-y-4 py-2 pb-4">
            <!-- Department Name -->
            <div class="space-y-2">
              <Label for="name">Department Name</Label>
              <Input id="name" v-model="form.departmentName" placeholder="Acme Inc." />
            </div>

            <!-- Manager Selection -->
            <div class="space-y-2">
              <Label for="manager">Manager</Label>
              <Select v-model="form.manager">
                <SelectTrigger>
                  <SelectValue placeholder="Select a Manager" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="employee in employees" :key="employee.id" :value="employee.id">
                    <span class="font-medium">{{ employee.firstName }} {{ employee.lastName }}</span> -
                    <span class="text-muted-foreground">{{ employee.jobPosition }}</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- Submit Button -->
            <UiButton type="submit">Add Department</UiButton>
          </div>
        </form>
      </div>
      <DialogFooter>
        <Button variant="outline" @click="showNewTeamDialog = false">
          Cancel
        </Button>

      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>