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

import { Badge } from '~/lib/registry/new-york/ui/badge';
import { Button } from '~/lib/registry/default/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/lib/registry/new-york/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '~/lib/registry/new-york/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '~/lib/registry/new-york/ui/sheet';

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


import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from   '~/lib/registry/new-york/ui/tags-input';
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

              <UiPopover>
                <UiPopoverTrigger as-child>

                  <Button size="sm" class="h-7 gap-1">
                    <PlusCircle class="h-3.5 w-3.5" />
                    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add Team
                    </span>
                  </Button>
                </UiPopoverTrigger>
                <UiPopoverContent class="w-80 p-6">

                  <form>
                    <div class="flex h-full flex-col gap-1.5">
                      <p class="font-semibold leading-none">New Team</p>
                      <p class="text-sm text-muted-foreground">Set the informations.</p>
                      <div class="mt-5 grid gap-3">
                        <div class="grid grid-cols-3 items-center gap-4">
                          <UiLabel for="width">Name</UiLabel>
                          <UiInput id="width" type="text" value="100%" class="col-span-2 h-8" />
                        </div>
                        <div class="grid grid-cols-3 items-center gap-4">
                          <UiLabel for="maxWidth">Manager</UiLabel>
                          <Select>
                            <SelectTrigger class="w-[180px]">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">
                                  Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                  Banana
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">
                                  Grapes
                                </SelectItem>
                                <SelectItem value="pineapple">
                                  Pineapple
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div class="grid grid-cols-1 items-center ">

                          <UiLabel for="height">Members</UiLabel>

                          <FormField v-slot="{ value }" name="fruits">
                          <TagsInput :model-value="value">
                            <TagsInputItem v-for="item in value" :key="item" :value="item">
                              <TagsInputItemText />
                              <TagsInputItemDelete />
                            </TagsInputItem>

                            <TagsInputInput placeholder="Fruits..." />
                          </TagsInput>
                          </FormField>
                        </div>


                        <div class="grid grid-cols-3 items-center gap-4">
                          <UiLabel for="maxHeight">Active</UiLabel>
                          <UiInput id="maxHeight" type="text" value="none" class="col-span-2 h-8" />
                        </div>

                      </div>
                    </div>
                  </form>
                </UiPopoverContent>
              </UiPopover>

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