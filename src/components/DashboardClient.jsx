"use client";

import { Tabs } from "@heroui/react";
import MyBookings from "@/components/MyBookings";
import MyProfile from "@/components/MyProfile";

const DashboardClient = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-28 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">Dashboard</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">Manage Your Care</h1>
        </div>

        <Tabs className="w-full">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Dashboard" className="rounded-2xl border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-slate-900">
              <Tabs.Tab id="bookings">
                My Bookings
                <Tabs.Indicator />
              </Tabs.Tab>

              <Tabs.Tab id="profile">
                My Profile
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>

          <Tabs.Panel id="bookings" className="pt-6">
            <MyBookings />
          </Tabs.Panel>

          <Tabs.Panel id="profile" className="pt-6">
            <MyProfile />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardClient;