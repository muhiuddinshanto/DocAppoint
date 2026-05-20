"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { FaCalendarCheck } from "react-icons/fa6";

export function ModalComponent({ doctor }) {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  
  
  

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    
    const appointmentData = {
      ...formValues,
      userId: user?.id,
      userEmail: user?.email,
      doctorId: doctor?._id,
      doctorName: doctor?.name,
    };

    console.log("Submitting Data:", appointmentData);

    try {
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/appoints`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      const data = await res.json();
      
      if (data.insertedId) {
        alert("Appointment booked successfully!");
        
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-teal-500/10 transition-all duration-200 hover:opacity-95 hover:shadow-lg active:scale-98">
          <FaCalendarCheck className="text-base" />
          Book Appointment
        </button>
      </Modal.Trigger>

      {/* Modal Content */}
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-md w-full rounded-3xl p-5 bg-white shadow-xl overflow-hidden my-auto">
            <Modal.CloseTrigger className="text-slate-400 hover:text-slate-600 transition" />
            
            <Modal.Header className="flex flex-col gap-0 pb-2">
              <Modal.Heading className="text-lg font-bold text-slate-800">Book Appointment</Modal.Heading>
              <p className="text-xs text-slate-400 font-normal">
                with {doctor?.name || "Dr. Shafiqur Rahman"}
              </p>
            </Modal.Header>
            
            <Modal.Body className="p-0 overflow-visible">
              <form className="flex flex-col gap-3" onSubmit={onSubmit}>

                {/* User Email */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-semibold text-slate-700">User Email</Label>
                  <Input
                    className="w-full border border-slate-100 bg-slate-50 text-slate-500 rounded-xl px-3 py-1.5 outline-none cursor-not-allowed text-xs"
                    value={user?.email || "dmxxtremet20@gmail.com"}
                    readOnly
                  />
                </div>

                {/* Doctor Name */}
                <div className="flex flex-col gap-1">
                  <Label className="text-xs font-semibold text-slate-700">Doctor Name</Label>
                  <Input
                    className="w-full border border-slate-100 bg-slate-50 text-slate-500 rounded-xl px-3 py-1.5 outline-none cursor-not-allowed text-xs"
                    value={doctor?.name || "Dr. Shafiqur Rahman"}
                    readOnly
                  />
                </div>

                {/* Patient Name -> আসল ইনপুট ট্যাগে name="patientName" দেওয়া হয়েছে */}
                <TextField isRequired className="w-full flex flex-col gap-1" type="text">
                  <Label className="text-xs font-semibold text-slate-700">Patient Name *</Label>
                  <Input 
                    name="patientName" 
                    placeholder="Full name" 
                    className="w-full border border-slate-200 rounded-xl px-3 py-1.5 text-slate-800 focus:border-[#00a896] transition outline-none text-xs h-9" 
                  />
                </TextField>

                {/* Gender & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <Label className="text-xs font-semibold text-slate-700">Gender *</Label>
                    <select
                      name="gender"
                      className="w-full border border-slate-200 rounded-xl px-3 py-1.5 bg-white text-slate-800 focus:border-[#00a896] transition outline-none text-xs h-9"
                      defaultValue="Male"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Phone -> আসল ইনপুট ট্যাগে name="phone" দেওয়া হয়েছে */}
                  <TextField isRequired className="w-full flex flex-col gap-1" type="tel">
                    <Label className="text-xs font-semibold text-slate-700">Phone *</Label>
                    <Input 
                      name="phone" 
                      placeholder="01XXXXXXXXX" 
                      className="w-full border border-slate-200 rounded-xl px-3 py-1.5 text-slate-800 focus:border-[#00a896] transition outline-none text-xs h-9" 
                    />
                  </TextField>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Date -> আসল ইনপুট ট্যাগে name="appointmentDate" দেওয়া হয়েছে */}
                  <TextField isRequired className="w-full flex flex-col gap-1" type="date">
                    <Label className="text-xs font-semibold text-slate-700">Date *</Label>
                    <Input 
                      name="appointmentDate" 
                      className="w-full border border-slate-200 rounded-xl px-3 py-1.5 text-slate-800 focus:border-[#00a896] transition outline-none text-xs h-9" 
                    />
                  </TextField>

                  <div className="flex flex-col gap-1">
                    <Label className="text-xs font-semibold text-slate-700">Time *</Label>
                    <select
                      name="appointmentTime"
                      className="w-full border border-slate-200 rounded-xl px-3 py-1.5 bg-white text-slate-800 focus:border-[#00a896] transition outline-none text-xs h-9"
                      defaultValue=""
                    >
                      <option value="" disabled>--:-- --</option>
                      {doctor?.availability?.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      )) || (
                        <>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="04:30 PM">04:30 PM</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Reason -> আসল ইনপুট ট্যাগে name="symptoms" দেওয়া হয়েছে */}
                <TextField className="w-full flex flex-col gap-1">
                  <Label className="text-xs font-semibold text-slate-700">Reason (optional)</Label>
                  <Input 
                    name="symptoms" 
                    placeholder="Brief reason for visit" 
                    className="w-full border border-slate-200 rounded-xl px-3 py-1.5 text-slate-800 focus:border-[#00a896] transition outline-none text-xs h-9" 
                  />
                </TextField>

                {/* Confirm Booking Button */}
                <Button slot="close" type="submit" className="w-full bg-[#00a896] text-white font-bold py-2.5 rounded-xl hover:bg-[#009485] transition mt-2 shadow-sm text-sm h-10">
                  Confirm Booking
                </Button>

              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}