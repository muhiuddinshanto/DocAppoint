"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { FaCalendarCheck } from "react-icons/fa6";

export function ModalComponent({ doctor }) {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const labelClass = "text-xs font-semibold text-slate-700 dark:text-slate-200";
  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500";
  const readonlyClass =
    "w-full cursor-not-allowed rounded-xl border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 outline-none dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-300";

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
        toast.success("Appointment booked successfully!");
        
      }
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
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

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="my-auto w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-slate-900 sm:max-w-md">
            <Modal.CloseTrigger className="text-slate-400 transition hover:text-slate-600 dark:hover:text-white" />
            
            <Modal.Header className="flex flex-col gap-0 pb-2">
              <Modal.Heading className="text-lg font-bold text-slate-800 dark:text-white">Book Appointment</Modal.Heading>
              <p className="text-xs font-normal text-slate-400 dark:text-slate-400">
                with {doctor?.name}
              </p>
            </Modal.Header>
            
            <Modal.Body className="p-0 overflow-visible">
              <form className="flex flex-col gap-3" onSubmit={onSubmit}>

                <div className="flex flex-col gap-1">
                  <Label className={labelClass}>User Email</Label>
                  <Input
                    className={readonlyClass}
                    value={user?.email || ""}
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <Label className={labelClass}>Doctor Name</Label>
                  <Input
                    className={readonlyClass}
                    value={doctor?.name || ""}
                    readOnly
                  />
                </div>

                <TextField isRequired className="w-full flex flex-col gap-1" type="text">
                  <Label className={labelClass}>Patient Name *</Label>
                  <Input 
                    name="patientName" 
                    placeholder="Full name" 
                    className={`${inputClass} h-9`}
                  />
                </TextField>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <Label className={labelClass}>Gender *</Label>
                    <select
                      name="gender"
                      className={`${inputClass} h-9`}
                      defaultValue="Male"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <TextField isRequired className="w-full flex flex-col gap-1" type="tel">
                    <Label className={labelClass}>Phone *</Label>
                    <Input 
                      name="phone" 
                      placeholder="01XXXXXXXXX" 
                      className={`${inputClass} h-9`}
                    />
                  </TextField>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <TextField isRequired className="w-full flex flex-col gap-1" type="date">
                    <Label className={labelClass}>Date *</Label>
                    <Input 
                      name="appointmentDate" 
                      className={`${inputClass} h-9 dark:[color-scheme:dark]`}
                    />
                  </TextField>

                  <div className="flex flex-col gap-1">
                    <Label className={labelClass}>Time *</Label>
                    <select
                      name="appointmentTime"
                      className={`${inputClass} h-9`}
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

                <TextField className="w-full flex flex-col gap-1">
                  <Label className={labelClass}>Reason (optional)</Label>
                  <Input 
                    name="symptoms" 
                    placeholder="Brief reason for visit" 
                    className={`${inputClass} h-9`}
                  />
                </TextField>

                <Button slot="close" type="submit" className="mt-2 h-10 w-full rounded-xl bg-teal-600 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700">
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
