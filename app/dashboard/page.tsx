"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardNav } from "@/components/dashboard/nav";
import { OverviewCards } from "@/components/dashboard/overview-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-8 pt-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground">
                Welcome back! Here's an overview of your project.
              </p>
            </div>
            <OverviewCards />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
              <AnalyticsChart />
              <QuickActions />
            </div>
            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}