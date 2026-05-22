import DashboardClient from '@/components/DashboardClient';
import React from 'react';



export const metadata = {
  title: "Patient Dashboard | DocTime",
  description: "Manage your doctor appointments, view upcoming medical schedules, and update your patient profile easily on DocTime.",
};

const DashboardPage = () => {
  return (
    <div>
      <DashboardClient/>
    </div>
  );
};

export default DashboardPage;