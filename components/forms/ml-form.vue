<script setup lang="ts">
import { Bird, Book, Bot, Code2, CornerDownLeft, LifeBuoy, Mic, Paperclip, Rabbit, Settings, Settings2, Share, SquareTerminal, SquareUser, Triangle, Turtle } from 'lucide-vue-next'

import { Badge } from '@/lib/registry/new-york/ui/badge'
import { Button } from '@/lib/registry/new-york/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/lib/registry/new-york/ui/drawer'
import { Input } from '@/lib/registry/new-york/ui/input'
import { Label } from '@/lib/registry/new-york/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/lib/registry/new-york/ui/select'
import { Textarea } from '@/lib/registry/new-york/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/lib/registry/new-york/ui/tooltip'
import { query } from '../../utils/inference-type'


import { ref } from 'vue';

const message = ref('');
const files = ref([]);

const fileInput = ref(null);

const triggerFileUpload = () => {
    fileInput.value.click();
};

const handleFileUpload = (event) => {
    const selectedFiles = event.target.files;
    for (let i = 0; i < selectedFiles.length; i++) {
        files.value.push(selectedFiles[i]);
    }
    // Clear the file input to allow re-uploading the same file if needed
    event.target.value = '';
};

const removeFile = (index) => {
    files.value.splice(index, 1);
};

const submitMessage = () => {
    // Handle the message submission, including the message text and attached files
    console.log('Message:', message.value);
    console.log('Attached files:', files.value);
    // Reset the form
    message.value = '';
    files.value = [];
};

</script>

<template>
    <div class="grid h-screen w-full pl-[56px]">
        <aside class="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
            <div class="border-b p-2">
                <Button variant="outline" size="icon" aria-label="Home">
                    <Triangle class="size-5 fill-foreground" />
                </Button>
            </div>
            <nav class="grid gap-1 p-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="ghost" size="icon" class="rounded-lg bg-muted" aria-label="Playground">
                                <SquareTerminal class="size-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" :side-offset="5">
                            Playground
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="ghost" size="icon" class="rounded-lg" aria-label="Models">
                                <Bot class="size-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" :side-offset="5">
                            Models
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="ghost" size="icon" class="rounded-lg" aria-label="API">
                                <Code2 class="size-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" :side-offset="5">
                            API
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="ghost" size="icon" class="rounded-lg" aria-label="Documentation">
                                <Book class="size-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" :side-offset="5">
                            Documentation
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="ghost" size="icon" class="rounded-lg" aria-label="Settings">
                                <Settings2 class="size-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" :side-offset="5">
                            Settings
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav class="mt-auto grid gap-1 p-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="ghost" size="icon" class="mt-auto rounded-lg" aria-label="Help">
                                <LifeBuoy class="size-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" :side-offset="5">
                            Help
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="ghost" size="icon" class="mt-auto rounded-lg" aria-label="Account">
                                <SquareUser class="size-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" :side-offset="5">
                            Account
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
        <div class="flex flex-col">
            <header class="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 class="text-xl font-semibold">
                    Playground
                </h1>
                <Drawer>
                    <DrawerTrigger as-child>
                        <Button variant="ghost" size="icon" class="md:hidden">
                            <Settings class="size-4" />
                            <span class="sr-only">Settings</span>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent class="max-h-[80vh]">
                        <DrawerHeader>
                            <DrawerTitle>Configuration</DrawerTitle>
                            <DrawerDescription>
                                Configure the settings for the model and messages.
                            </DrawerDescription>
                        </DrawerHeader>
                        <form class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                            <fieldset class="grid gap-6 rounded-lg border p-4">
                                <legend class="-ml-1 px-1 text-sm font-medium">
                                    Settings
                                </legend>
                                <div class="grid gap-3">
                                    <Label for="model">Model</Label>
                                    <Select>
                                        <SelectTrigger id="model" class="items-start [&_[data-description]]:hidden">
                                            <SelectValue placeholder="Select a model" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="genesis">
                                                <div class="flex items-start gap-3 text-muted-foreground">
                                                    <Rabbit class="size-5" />
                                                    <div class="grid gap-0.5">
                                                        <p>
                                                             Campaign Progress and Generate Reports
                                                            <span class="font-medium text-foreground">
                                                                AI
                                                            </span>
                                                        </p>
                                                        <p class="text-xs" data-description>
                                                            Our fastest model for general use cases.
                                                        </p>
                                                    </div>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="explorer">
                                                <div class="flex items-start gap-3 text-muted-foreground">
                                                    <Bird class="size-5" />
                                                    <div class="grid gap-0.5">
                                                        <p>
                                                            Neural
                                                            <span class="font-medium text-foreground">
                                                                Explorer
                                                            </span>
                                                        </p>
                                                        <p class="text-xs" data-description>
                                                            Performance and speed for efficiency.
                                                        </p>
                                                    </div>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="quantum">
                                                <div class="flex items-start gap-3 text-muted-foreground">
                                                    <Turtle class="size-5" />
                                                    <div class="grid gap-0.5">
                                                        <p>
                                                            Neural
                                                            <span class="font-medium text-foreground">
                                                                Quantum
                                                            </span>
                                                        </p>
                                                        <p class="text-xs" data-description>
                                                            The most powerful model for complex
                                                            computations.
                                                        </p>
                                                    </div>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div class="grid gap-3">
                                    <UiVeeNumberField :min="0" label="Top P" name="temperature">
                                        <UiNumberFieldInput placeholder="15" />
                                        <UiNumberFieldDecrement class="border-l" />
                                        <UiNumberFieldIncrement class="border-l" />
                                    </UiVeeNumberField>
                                </div>
                                <div class="grid gap-3">
                                    <Label for="top-p">Top P</Label>
                                    <Input id="top-p" type="number" placeholder="0.7" />
                                </div>
                                <div class="grid gap-3">
                                    <Label for="top-k">Top K</Label>
                                    <Input id="top-k" type="number" placeholder="0.0" />
                                </div>
                            </fieldset>
                            <fieldset class="grid gap-6 rounded-lg border p-4">
                                <legend class="-ml-1 px-1 text-sm font-medium">
                                    Messages
                                </legend>
                                <div class="grid gap-3">
                                    <Label for="role">Role</Label>
                                    <Select default-value="system">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="system">
                                                System
                                            </SelectItem>
                                            <SelectItem value="user">
                                                User
                                            </SelectItem>
                                            <SelectItem value="assistant">
                                                Assistant
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div class="grid gap-3">
                                    <Label for="content">Content</Label>
                                    <Textarea id="content" placeholder="You are a..." />
                                </div>
                            </fieldset>
                        </form>
                    </DrawerContent>
                </Drawer>
                <Button variant="outline" size="sm" class="ml-auto gap-1.5 text-sm">
                    <Share class="size-3.5" />
                    Share
                </Button>
            </header>
            <main class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                <div class="relative hidden flex-col items-start gap-8 md:flex">
                    <form class="grid w-full items-start gap-6">
                        <fieldset class="grid gap-6 rounded-lg border p-4">
                            <legend class="-ml-1 px-1 text-sm font-medium">
                                Settings
                            </legend>
                            <div class="grid gap-3">
                                <Label for="model">Model</Label>
                                <Select>
                                    <SelectTrigger id="model" class="items-start [&_[data-description]]:hidden">
                                        <SelectValue placeholder="Select a model" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="genesis">
                                            <div class="flex items-start gap-3 text-muted-foreground">
                                                <Rabbit class="size-5" />
                                                <div class="grid gap-0.5">
                                                    <p>
                                                        Campaign Progress and Generate Reports

                                                        <span class="font-medium text-foreground">
                                                            AI
                                                        </span>
                                                    </p>
                                                    <p class="text-xs" data-description>
                                                        Our fastest model for general use cases.
                                                    </p>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="explorer">
                                            <div class="flex items-start gap-3 text-muted-foreground">
                                                <Bird class="size-5" />
                                                <div class="grid gap-0.5">
                                                    <p>
                                                        General Automation and AI Integration
                                                        <span class="font-medium text-foreground">
                                                            ML
                                                        </span>
                                                    </p>
                                                    <p class="text-xs" data-description>
                                                        Performance and speed for efficiency.
                                                    </p>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="quantum">
                                            <div class="flex items-start gap-3 text-muted-foreground">
                                                <Turtle class="size-5" />
                                                <div class="grid gap-0.5">
                                                    <p>
                                                        Tracking Campaign Progress and Reporting
                                                        <span class="font-medium text-foreground">
                                                            AI
                                                        </span>
                                                    </p>
                                                    <p class="text-xs" data-description>
                                                        The most powerful model for complex computations.
                                                    </p>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="grid gap-3">
                                <UiVeeNumberField :min="0" label="Temperature" name="temperature">
                                    <UiNumberFieldInput placeholder="15" />
                                    <UiNumberFieldDecrement class="border-l" />
                                    <UiNumberFieldIncrement class="border-l" />
                                </UiVeeNumberField>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="grid gap-3">
                                    <UiVeeNumberField :min="0" label="Top P" name="payment">
                                        <UiNumberFieldInput placeholder="15" />
                                        <UiNumberFieldDecrement class="border-l" />
                                        <UiNumberFieldIncrement class="border-l" />
                                    </UiVeeNumberField>
                                </div>
                                <div class="grid gap-3">
                                    <UiVeeNumberField :min="0" label="Top K" name="payment">
                                        <UiNumberFieldInput placeholder="15" />
                                        <UiNumberFieldDecrement class="border-l" />
                                        <UiNumberFieldIncrement class="border-l" />
                                    </UiVeeNumberField>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="grid gap-6 rounded-lg border p-4">
                            <legend class="-ml-1 px-1 text-sm font-medium">
                                Messages
                            </legend>
                            <div class="grid gap-3">
                                <Label for="role">Role</Label>
                                <Select default-value="system">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                        <SelectItem value="user">
                                            User
                                        </SelectItem>
                                        <SelectItem value="assistant">
                                            Assistant
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="grid gap-3">
                                <Label for="content">Content</Label>
                                <Textarea id="content" placeholder="You are a..." class="min-h-[9.5rem]" />
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                    <Badge variant="outline" class="absolute right-3 top-3">
                        Output
                    </Badge>
                    <div class="flex-1" >Welcome To  AI/ML Chatbot ...</div>
                   
                    <form
                        class="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                        @submit.prevent="submitMessage">
                        <Label for="message" class="sr-only">Message</Label>
                        <div class="min-h-12 p-3">
                            <div class="message-input">
                                <!-- Attachments Area -->
                                <div class="attachments" v-if="files.length">
                                    <div v-for="(file, index) in files" :key="index" class="attachment">
                                        <Paperclip class="size-4 mr-2" />
                                        <span>{{ file.name }}</span>
                                        <button type="button" @click="removeFile(index)" class="ml-auto">
                                            ✕
                                        </button>
                                    </div>
                                </div>
                                <!-- Message Textarea -->
                                <Textarea id="message" v-model="message" placeholder="Type your message here..."
                                    class="resize-none border-0 shadow-none focus-visible:ring-0" />
                            </div>
                        </div>
                        <div class="flex items-center p-3 pt-0">
                            <!-- File Upload Button -->
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <div>
                                            <input type="file" id="file-upload" ref="fileInput" style="display: none;"
                                                @change="handleFileUpload" />
                                            <Button variant="ghost" size="icon" @click.prevent="triggerFileUpload">
                                                <Paperclip class="size-4" />
                                                <span class="sr-only">Attach file</span>
                                            </Button>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">Attach File</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <!-- Other Buttons -->
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <Button variant="ghost" size="icon">
                                            <Mic class="size-4" />
                                            <span class="sr-only">Use Microphone</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">Use Microphone</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <!-- Send Message Button -->
                            <Button type="submit" size="sm" class="ml-auto gap-1.5">
                                Send Message
                                <CornerDownLeft class="size-3.5" />
                            </Button>
                        </div>
                    </form>

                </div>
            </main>
        </div>
    </div>
</template>