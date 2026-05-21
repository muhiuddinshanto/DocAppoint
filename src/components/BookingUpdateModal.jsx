"use client";
import React, { useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaPen } from "react-icons/fa6";
import toast from "react-hot-toast";



const BookingUpdateModal = ({ booking, onUpdate }) => {

    const [isOpen, setIsOpen] = useState(false); 
    const labelClass = "mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200";
    const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500";

   
    const convertTo12Hour = (time24) => {
        if (!time24) return "";
        let [hours, minutes] = time24.split(":");
        hours = parseInt(hours, 10);
        const modifier = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${String(hours).padStart(2, "0")}:${minutes} ${modifier}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        if (formValues.appointmentTime) {
            formValues.appointmentTime = convertTo12Hour(formValues.appointmentTime);
        }

        console.log(formValues, "Updated Booking Data (12 Hour Format)");

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/appoints/${booking._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });

        if (res.ok) {
            await res.json();
            toast.success("Appointment updated successfully!");

            setIsOpen(false); 
            const updatedBooking = { ...booking, ...formValues };
            onUpdate(updatedBooking);
        } else {
            toast.error("Failed to update appointment.");
        }
    };

    
    const convertTo24Hour = (timeStr) => {
        if (!timeStr) return "";
        const time = timeStr.includes(" - ") ? timeStr.split(" - ")[0].trim() : timeStr.trim();
        if (!time.includes("AM") && !time.includes("PM")) return time;

        const [timePart, modifier] = time.split(" ");
        let [hours, minutes] = timePart.split(":");

        if (hours === "12") hours = "00";
        if (modifier === "PM") hours = parseInt(hours, 10) + 12;

        return `${String(hours).padStart(2, '0')}:${minutes}`;
    };

    const defaultTimeValue = convertTo24Hour(booking?.appointmentTime);

    return (
        <>
           
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Trigger>
                    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10">
                        <FaPen className="text-xs" />
                        Update
                    </button>
                </Modal.Trigger>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900 sm:max-w-md">
                            <Modal.CloseTrigger className="text-slate-400 transition hover:text-slate-600 dark:hover:text-white" />

                            <Modal.Header className="pb-2">
                                <Modal.Heading className="text-xl font-bold text-slate-900 dark:text-white">
                                    Update Appointment
                                </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6 pt-2">
                                <Surface variant="default" className="border-none bg-transparent p-0 shadow-none">
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                                        <TextField
                                            defaultValue={booking?.doctorName}
                                            isReadOnly
                                            className="w-full"
                                            name="doctorName"
                                            variant="secondary"
                                        >
                                            <Label className={labelClass}>Doctor</Label>
                                            <Input className={`${inputClass} cursor-not-allowed bg-slate-50 text-slate-500 dark:bg-slate-800/70 dark:text-slate-300`} />
                                        </TextField>

                                        <TextField
                                            defaultValue={booking?.patientName}
                                            className="w-full"
                                            name="patientName"
                                            variant="secondary"
                                        >
                                            <Label className={labelClass}>Patient Name</Label>
                                            <Input placeholder="Enter patient name" className={inputClass} />
                                        </TextField>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-1 w-full">
                                                <Label className={labelClass}>Date</Label>
                                                <input
                                                    type="date"
                                                    name="appointmentDate"
                                                    defaultValue={booking?.appointmentDate}
                                                    className={`${inputClass} h-11 dark:[color-scheme:dark]`}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1 w-full">
                                                <Label className={labelClass}>Time *</Label>
                                                <input
                                                    type="time"
                                                    name="appointmentTime"
                                                    defaultValue={defaultTimeValue}
                                                    className={`${inputClass} h-11 cursor-pointer dark:[color-scheme:dark]`}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <TextField
                                            defaultValue={booking?.symptoms}
                                            className="w-full"
                                            name="symptoms"
                                            variant="secondary"
                                        >
                                            <Label className={labelClass}>Reason</Label>
                                            <Input placeholder="Enter reason" className={inputClass} />
                                        </TextField>

                                        <Button
                                            type="submit" 
                                            className="mt-2 h-12 w-full rounded-xl bg-teal-600 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-teal-700"
                                        >
                                            Save Changes
                                        </Button>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
};

export default BookingUpdateModal;
