<script setup lang="ts">
import {
  CircleUser,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-vue-next'



import { ref, watch } from 'vue'
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxTrigger, ComboboxViewport, TagsInputRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'

import { Badge } from '~/lib/registry/new-york/ui/badge';
import { Button } from '~/lib/registry/default/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/lib/registry/new-york/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '~/lib/registry/new-york/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '~/lib/registry/new-york/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/lib/registry/new-york/ui/dialog';


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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/lib/registry/new-york/ui/select';


import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '~/lib/registry/new-york/ui/tags-input';
const modelValue = ref(['Apple', 'Banana'])
// Define reactive variables for form fields
const teamName = ref('');
const selectedManager = ref('');
const teamMembers = ref([]);
const isActive = ref('');

</script>

<template>
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
              <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                <ShoppingCart class="h-5 w-5" />
                Orders
              </a>
              <a href="#" class="flex items-center gap-4 px-2.5 text-foreground">
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

      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs default-value="all">
          <div class="flex items-center">
            <TabsList>
              <TabsTrigger value="all">
                All
              </TabsTrigger>
              <TabsTrigger value="active">
                Active
              </TabsTrigger>
              <TabsTrigger value="draft">
                Draft
              </TabsTrigger>
              <TabsTrigger value="archived" class="hidden sm:flex">
                Archived
              </TabsTrigger>
            </TabsList>
            <div class="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button variant="outline" size="sm" class="h-7 gap-1">
                    <ListFilter class="h-3.5 w-3.5" />
                    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem checked>
                    Active
                  </DropdownMenuItem>
                  <DropdownMenuItem>Draft</DropdownMenuItem>
                  <DropdownMenuItem>
                    Archived
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" class="h-7 gap-1">
                <File class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>

              <!-------------------------------Add Team-------------------------------->

              <Dialog>
                <DialogTrigger>
                  <Button size="sm" class="h-7 gap-1">
                    <PlusCircle class="h-3.5 w-3.5" />
                    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Team</span>
                  </Button>
                </DialogTrigger>

                <DialogContent class="w-80 p-6">
                  <form>
                    <div class="flex flex-col gap-1.5">
                      <p class="font-semibold leading-none">New Team</p>
                      <p class="text-sm text-muted-foreground">Set the information.</p>

                      <div class="mt-5 grid gap-3">
                        <!-- Name Input -->
                        <div class="grid grid-cols-3 items-center gap-4">
                          <UiLabel for="team-name">Name</UiLabel>
                          <UiInput id="team-name" type="text" v-model="teamName" class="col-span-2 h-8" />
                        </div>

                        <!-- Manager Select -->
                        <div class="grid grid-cols-3 items-center gap-4">
                          <UiLabel for="manager">Manager</UiLabel>
                          <Select v-model="selectedManager">
                            <SelectTrigger class="w-[180px]">
                              <SelectValue placeholder="Select a manager" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Managers</SelectLabel>
                                <SelectItem value="alice">Alice</SelectItem>
                                <SelectItem value="bob">Bob</SelectItem>
                                <SelectItem value="charlie">Charlie</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>

                        <!-- Tags Input -->
                        <div class="grid grid-cols-2 items-center gap-0">
                          <UiLabel for="members">Members</UiLabel>
                          <TagsInput v-model="modelValue">
                            <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
                              <TagsInputItemText />
                              <TagsInputItemDelete />
                            </TagsInputItem>
                            <TagsInputInput placeholder="Fruits..." />
                          </TagsInput>
                        </div>

                        <!-- Active Input -->
                        <div class="grid grid-cols-3 items-center gap-4">
                          <UiLabel for="active-status">Active</UiLabel>
                          <UiInput id="active-status" type="text" v-model="isActive" class="col-span-2 h-8" />
                        </div>

                      </div>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>

              <!-------------------------------------------------------------------->

            </div>
          </div>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>Teams</CardTitle>
                <CardDescription>
                  Manage your Teams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead class="hidden w-[100px] sm:table-cell">
                        <span class="sr-only">Image</span>
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Manager</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <span class="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <!-- Assuming you have a computed property or method to get the list of teams -->
                    <TableRow v-for="team in teams" :key="team.id">
                      <TableCell class="hidden sm:table-cell">
                        <img alt="Team image" class="aspect-square rounded-md object-cover" height="64"
                          src="/placeholder.svg" width="64">
                      </TableCell>
                      <TableCell class="font-medium">
                        {{ team.name }}
                      </TableCell>
                      <TableCell>
                        {{ team.manager }} <!-- Assuming you are displaying the manager's name directly -->
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {{ team.status }} <!-- Assuming status is a string (e.g., 'Active', 'Inactive') -->
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger as-child>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal class="h-4 w-4" />
                              <span class="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </TabsContent>

        </Tabs>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Global Form Styles */
.form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: black;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.form-description {
  font-size: 0.875rem;
  color: #666;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Form Groups */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Labels */
.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: white
}

/* Inputs and Selects */
.form-control {
  width: 100%;
  padding: 10px 12px;
  font-size: 0.875rem;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  outline: none;
}

.form-control:hover {
  border-color: #bbb;
}

/* Tags Input */
.tags-input {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 0.875rem;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
}

.tag-remove {
  margin-left: 4px;
  font-size: 1rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}

.tag-remove:hover {
  color: #ff4d4f;
}

/* Responsive */
@media (max-width: 768px) {
  .form {
    padding: 16px;
  }
}
</style>