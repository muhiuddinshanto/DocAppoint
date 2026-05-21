"use client";
import { appointmentsById } from "@/data/data";
import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaCalendarDays,
  FaClock,
  FaFileLines,

} from "react-icons/fa6";
import BookingUpdateModal from "./BookingUpdateModal";
import { AppointDeleteModal } from "./AppointDeleteModal";

const MyBookings = () => {



  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  
  if (!isMounted) {
    return <div className="p-6 text-slate-500 text-center">Loading your bookings...</div>;
  }


  if (userData.isPending) {
    return <div className="p-6 text-slate-500 text-center">Loading your bookings...</div>;
  }

 
  if (!user) {
    return <div className="p-6 text-slate-500 text-center">Please log in to see your bookings.</div>;
  }

  
  if (loading) {
    return <div className="p-6 text-slate-500 text-center">Loading your bookings...</div>; 
  }

  // ৪. কোনো booking নেই
  if (bookings.length === 0) {
    return <div className="p-6 text-slate-500 text-center">No bookings found.</div>;
  }



  const handleUpdate = (updatedBooking) => {
     
    setBookings(prev =>
      prev.map(b => b._id === updatedBooking._id ? updatedBooking : b)
    );
  };


  const handleDeleteState = (deletedId) => {
    
    setBookings(prev => prev.filter(b => b._id !== deletedId));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-slate-50/50 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">My Bookings</h1>

      <div className="flex flex-wrap gap-5">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="w-full max-w-sm bg-white rounded-[28px] p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all hover:shadow-md"
          >
            {/* Booking Information */}
            <div>
              {/* ডক্টরের নাম */}
              <h3 className="text-[21px] font-bold text-[#007a87] tracking-tight mb-5">
                {booking.doctorName}
              </h3>

              <div className="flex flex-col gap-3.5 text-[15px]">
                {/* Patient Row */}
                <div className="flex items-center gap-3.5 text-slate-500">
                  <FaUser className="text-slate-400 text-sm shrink-0 w-4" />
                  <div className="flex gap-1.5 items-center">
                    <span className="text-slate-400 font-normal">Patient:</span>
                    <span className="text-slate-800 font-medium">{booking.patientName}</span>
                  </div>
                </div>

                {/* Date Row */}
                <div className="flex items-center gap-3.5 text-slate-500">
                  <FaCalendarDays className="text-slate-400 text-sm shrink-0 w-4" />
                  <div className="flex gap-1.5 items-center">
                    <span className="text-slate-400 font-normal">Date:</span>
                    <span className="text-slate-800 font-medium">{booking.appointmentDate}</span>
                  </div>
                </div>

                {/* Time Row */}
                <div className="flex items-start gap-3.5 text-slate-500">
                  <FaClock className="text-slate-400 text-sm shrink-0 w-4 mt-1" />
                  <div className="flex gap-1.5 items-start leading-tight">
                    <span className="text-slate-400 font-normal shrink-0">Time:</span>
                    <span className="text-slate-800 font-medium break-words">
                      {booking.appointmentTime}
                    </span>
                  </div>
                </div>

                {/* Reason Row */}
                <div className="flex items-start gap-3.5 text-slate-500">
                  <FaFileLines className="text-slate-400 text-sm shrink-0 w-4 mt-1" />
                  <div className="flex gap-1.5 items-start leading-tight">
                    <span className="text-slate-400 font-normal shrink-0">Reason:</span>
                    <span className="text-slate-700 font-normal">{booking.symptoms || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex items-center gap-3">
              {/* আপডেট মডাল */}
              <BookingUpdateModal booking={booking} onUpdate={handleUpdate}/>

              {/* ডিলিট বাটন */}
              <AppointDeleteModal booking={booking} handleDeleteState={handleDeleteState}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;