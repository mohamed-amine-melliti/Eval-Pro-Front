<script lang="ts" setup>
import type { Mail } from '../data/mails'
import { ref, computed, onMounted } from 'vue'

import type { LinkProp } from './Nav.vue'
import { Input } from '@/lib/registry/new-york/ui/input'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/lib/registry/new-york/ui/resizable'
import { Separator } from '@/lib/registry/new-york/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/lib/registry/new-york/ui/tabs'
import { TooltipProvider } from '@/lib/registry/new-york/ui/tooltip'
import { cn } from '@/lib/utils'
import { refDebounced } from '@vueuse/core'
import {
  Search,
} from 'lucide-vue-next'
import AccountSwitcher from './AccountSwitcher.vue'
import MailDisplay from './MailDisplay.vue'
import MailList from './MailList.vue'
import Nav from './Nav.vue'

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: string
  }[]
  mails: Mail[]
  defaultLayout?: number[]
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

const props = withDefaults(defineProps<MailProps>(), {
  defaultCollapsed: false,
  defaultLayout: () => [265, 440, 655],
})

const isCollapsed = ref(props.defaultCollapsed)
const selectedMail = ref<string | undefined>(props.mails[0].id)
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

const filteredMailList = computed(() => {
  let output: Mail[] = []
  const searchValue = debouncedSearch.value?.trim()
  if (!searchValue) {
    output = props.mails
  }

  else {
    output = props.mails.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
    })
  }

  return output
})

const unreadMailList = computed(() => filteredMailList.value.filter(item => !item.read))

const selectedMailData = computed(() => props.mails.find(item => item.id === selectedMail.value))

const links: LinkProp[] = [
  {
    title: 'Inbox',
    label: '128',
    icon: 'lucide:inbox',
    variant: 'default',
  },
  {
    title: 'Drafts',
    label: '9',
    icon: 'lucide:file',
    variant: 'ghost',
  },
  {
    title: 'Sent',
    label: '',
    icon: 'lucide:send',
    variant: 'ghost',
  },
  {
    title: 'Junk',
    label: '23',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
  {
    title: 'Trash',
    label: '',
    icon: 'lucide:trash',
    variant: 'ghost',
  },
  {
    title: 'Archive',
    label: '',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
]

const links2: LinkProp[] = [
  {
    title: 'Social',
    label: '972',
    icon: 'lucide:user-2',
    variant: 'ghost',
  },
  {
    title: 'Updates',
    label: '342',
    icon: 'lucide:alert-circle',
    variant: 'ghost',
  },
  {
    title: 'Forums',
    label: '128',
    icon: 'lucide:message-square',
    variant: 'ghost',
  },
  {
    title: 'Shopping',
    label: '8',
    icon: 'lucide:shopping-cart',
    variant: 'ghost',
  },
  {
    title: 'Promotions',
    label: '21',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
]

function onCollapse() {
  isCollapsed.value = true
}

function onExpand() {
  isCollapsed.value = false
}


// Responsive state detection
const isMobile = ref(false)

// Function to check screen size
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

// Run check on mount and on resize
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div class="flex justify-center items-center h-screen w-full p-4">
      <!-- Responsive Panel Group -->
      <ResizablePanelGroup
        id="resize-panel-group-1"
        :direction="isMobile ? 'vertical' : 'horizontal'"
        class="h-[90vh] w-full max-w-5xl items-stretch border rounded-lg shadow-lg bg-white"
      >
        <!-- First Panel (Inbox) -->
        <ResizablePanel 
          id="resize-panel-1"
          :default-size="isMobile ? 60 : 70"  
          :min-size="isMobile ? 50 : 40"
          :max-size="isMobile ? 70 : 80"
          collapsible
          class="p-4"
          @expand="onExpand"
          @collapse="onCollapse"
        >
          <Tabs default-value="all">
            <div class="flex items-center px-4 py-2">
              <h1 class="text-xl font-bold">Inbox</h1>
              <TabsList class="ml-auto">
                <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200">All mail</TabsTrigger>
                <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200">Unread</TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div class="relative">
                  <Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                  <Input v-model="searchValue" placeholder="Search" class="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" class="m-0">
              <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" />
            </TabsContent>
            <TabsContent value="unread" class="m-0">
              <MailList v-model:selected-mail="selectedMail" :items="unreadMailList" />
            </TabsContent>
          </Tabs>
        </ResizablePanel>

        <!-- Resize Handle (Hidden on Mobile) -->
        <ResizableHandle id="resize-handle-1" with-handle v-if="!isMobile" />

        <!-- Second Panel (Mail Display) -->
        <ResizablePanel 
          id="resize-panel-2"
          :default-size="isMobile ? 40 : 30"
          :min-size="isMobile ? 30 : 20"
          :max-size="isMobile ? 50 : 40"
          class="p-4"
        >
          <MailDisplay :mail="selectedMailData" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </TooltipProvider>
</template>

<style>
/* Optional: Ensure smooth transition between mobile & desktop */
@media (max-width: 768px) {
  .h-screen {
    height: 100vh;
  }
}
</style>
