"use client";

import { appointmentsById } from "@/data/data";
import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import { FaCalendarDays, FaClock, FaFileLines, FaUser } from "react-icons/fa6";
import BookingUpdateModal from "./BookingUpdateModal";
import { AppointDeleteModal } from "./AppointDeleteModal";
import Loading from "@/app/loading";

const MyBookings = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const load = async () => {
      try {
        const data = await appointmentsById(user.id);
        setBookings(data);
      } catch (err) {
        console.error("Booking load error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [user?.id]);

  if (userData.isPending) {
    return <Loading/>;
  }

  if (!user) {
    return <div className="p-6 text-center text-slate-500 dark:text-slate-400">Please log in to see your bookings.</div>;
  }

  if (loading) {
    return <Loading/>;
  }

  // 🎯 Premium and responsive English Empty State when there are no bookings
  if (bookings.length === 0) {
    return (
      <div className="mx-auto max-w-7xl">
        {/* Heading remains untouched to keep layout consistency */}
        <h1 className="mb-6 text-2xl font-black tracking-tight text-slate-950 dark:text-white">My Bookings</h1>
        
        <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-xs dark:border-white/10 dark:bg-slate-900 sm:p-12">
          {/* Medical Calendar Icon Holder */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950/40">
            <FaCalendarDays className="text-2xl text-teal-600 dark:text-teal-400 animate-pulse" />
          </div>

          {/* Text Message */}
          <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            No Bookings Found
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm font-medium text-slate-500 dark:text-slate-400 sm:text-base">
            You do not have any upcoming doctor appointments scheduled at the moment. Take care of your health by scheduling a check-up.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-8">
            <a
              href="/appointments" // Change this path if your doctor list route is different (e.g., /doctors)
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00a896] hover:bg-[#009485] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 active:scale-98 cursor-pointer"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </div>
    );
  }

  const handleUpdate = (updatedBooking) => {
    setBookings((prev) => prev.map((b) => (b._id === updatedBooking._id ? updatedBooking : b)));
  };

  const handleDeleteState = (deletedId) => {
    setBookings((prev) => prev.filter((b) => b._id !== deletedId));
  };

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-black tracking-tight text-slate-950 dark:text-white">My Bookings</h1>

      <div className="grid gap-5 md:grid-cols-2">
        {bookings?.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-slate-900"
          >
            <div>
              <h3 className="mb-5 text-xl font-black tracking-tight text-teal-700 dark:text-teal-300">
                {booking.doctorName}
              </h3>

              <div className="flex flex-col gap-3.5 text-sm">
                {[
                  { icon: <FaUser />, label: "Patient", value: booking.patientName },
                  { icon: <FaCalendarDays />, label: "Date", value: booking.appointmentDate },
                  { icon: <FaClock />, label: "Time", value: booking.appointmentTime },
                  { icon: <FaFileLines />, label: "Reason", value: booking.symptoms || "N/A" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5 text-slate-500 dark:text-slate-300">
                    <span className="mt-0.5 w-4 shrink-0 text-slate-400">{item.icon}</span>
                    <div className="flex gap-1.5 leading-tight">
                      <span className="shrink-0 font-semibold text-slate-400">{item.label}:</span>
                      <span className="break-words font-bold text-slate-800 dark:text-white">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <BookingUpdateModal booking={booking} onUpdate={handleUpdate} />
              <AppointDeleteModal booking={booking} handleDeleteState={handleDeleteState} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
