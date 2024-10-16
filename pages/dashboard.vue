<script setup lang="ts">
import Overview from '~/components/dashboard/components/Overview.vue'
import DateRangePicker from '~/components/dashboard/components/DateRangePicker.vue'
import MainNav from '~/components/dashboard/components/MainNav.vue'
import RecentSales from '~/components/dashboard/components/RecentSales.vue'
import Search from '~/components/dashboard/components/Search.vue'
import TeamSwitcher from '~/components/dashboard/components/TeamSwitcher.vue'
import UserNav from '~/components/dashboard/components/UserNav.vue'
import Tabs from '~/components/Ui/Tabs/Tabs.vue'
import TabsContent from '~/components/Ui/Tabs/Content.vue'
import TabsList from '~/components/Ui/Tabs/List.vue'
import TabsTrigger from '~/components/Ui/Tabs/Trigger.vue'
import Button from '~/components/Ui/Button.vue'
import Card from '~/components/Ui/Card/Card.vue'
import CardTitle from '~/components/Ui/Card/Title.vue'
import CardContent from '~/components/Ui/Card/Content.vue';
import CardDescription from '~/components/Ui/Card/Description.vue'
import CardHeader from '~/components/Ui/Card/Header.vue'


import { Import } from 'lucide-vue-next'
import MlForm from '~/components/forms/ml-form.vue'
import TeamsForm from '~/components/forms/teams-form.vue'
import InterviewsForm from '~/components/forms/interviews-form.vue'
import RapportForm from '~/components/forms/rapport-form.vue'
</script>

<template>
    <div class="md:hidden">
        <VPImage alt="Dashboard" width="1280" height="1214" class="block" :image="{
            dark: '/examples/dashboard-dark.png',
            light: '/examples/dashboard-light.png',
        }" />
    </div>

    <div class="hidden flex-col md:flex">
        <div class="border-b">
            <div class="flex h-16 items-center px-4">
                <TeamSwitcher />
                <div class="ml-auto flex items-center space-x-4">
                    <UserNav />
                </div>
            </div>
        </div>
        <div class="flex-1 space-y-4 p-8 pt-6">
            <div class="flex items-center justify-between space-y-2">
                <h2 class="text-3xl font-bold tracking-tight">
                    Dashboard
                </h2>
                <div class="flex items-center space-x-2">
                    <DateRangePicker />
                    <Button>Download</Button>
                </div>
            </div>
            <Tabs default-value="overview" class="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="employees">
                        Employees
                    </TabsTrigger>
                    <TabsTrigger value="teams">
                        Teams
                    </TabsTrigger>
                    <TabsTrigger value="rapports">
                        Rapports
                    </TabsTrigger>

                    <TabsTrigger value="goals">
                        Goals
                    </TabsTrigger>

                    <TabsTrigger value="interviews">
                        Interviews
                    </TabsTrigger>


                    <TabsTrigger value="evaluations">
                        Evaluations
                    </TabsTrigger>


                    <TabsTrigger value="campaign">
                        Campaign
                    </TabsTrigger>

                    <TabsTrigger value="ml-ai">
                        ML/AI
                    </TabsTrigger>

                </TabsList>

                <!-----------------Overview Tab------------------------------------->

                <TabsContent value="overview" class="space-y-4">
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Total Completed Evaluations
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">
                                    +1,200

                                </div>
                                <p class="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Pending Evaluations
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">
                                    +23
                                </div>
                                <p class="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Evaluation Campaigns In Progress
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                    <path d="M2 10h20" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">
                                    +2
                                </div>
                                <p class="text-xs text-muted-foreground">
                                    +19% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Notifications Sent
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">
                                    +3
                                </div>
                                <p class="text-xs text-muted-foreground">
                                    +3 since last hour
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card class="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent class="pl-2">
                                <Overview />
                            </CardContent>
                        </Card>
                        <Card class="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Interviews</CardTitle>
                                <CardDescription>
                                    You made 3 interiews this month.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <!-----------------Employes Tab------------------------------------->
                <TabsContent value="employees" class="space-y-4">
                    <FormsEmployeForm></FormsEmployeForm>
                </TabsContent>
                <!-----------------Teams Tab------------------------------------->
                <TabsContent value="teams" class="space-y-4">
                    <FormsTeamsForm></FormsTeamsForm>
                </TabsContent>
                <!-----------------Goals Tab------------------------------------->
                <TabsContent value="goals" class="space-y-4">
                    <FormsGoalsForm></FormsGoalsForm>
                </TabsContent>
                <!-----------------AI Tab------------------------------------->
                <TabsContent value="ml-ai" class="space-y-4">
                    <MlForm></MlForm>
                </TabsContent>
                <!-----------------Interviews Tab------------------------------------->
                <TabsContent value="interviews" class="space-y-4">
                    <InterviewsForm></InterviewsForm>
                </TabsContent>
                <!-----------------AI Tab------------------------------------->
                <TabsContent value="Evaluations" class="space-y-4">
                </TabsContent>

                <!-----------------rapport Tab------------------------------------->
                <TabsContent value="rapports" class="space-y-4">
                    <RapportForm></RapportForm>
                </TabsContent>

            </Tabs>
        </div>
    </div>
</template>