"use client";

import { Tabs } from "@heroui/react";
import MyBookings from "@/components/MyBookings";
import MyProfile from "@/components/MyProfile";

const page = () => {
    return (
       <div className="pt-28 flex justify-center">

      <Tabs className="w-full max-w-3xl">

        <Tabs.ListContainer>
          <Tabs.List aria-label="Dashboard">

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

        {/* Component 1 */}
        <Tabs.Panel id="bookings" className="pt-5">
          <MyBookings />
        </Tabs.Panel>

        {/* Component 2 */}
        <Tabs.Panel id="profile" className="pt-5">
          <MyProfile />
        </Tabs.Panel>

      </Tabs>

    </div>
    );
};

export default page;