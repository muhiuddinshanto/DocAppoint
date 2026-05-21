"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaPen } from "react-icons/fa6";
import toast from "react-hot-toast";



const BookingUpdateModal = ({ booking, onUpdate }) => {

    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
    }, []);

   
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
            const data = await res.json();
            toast.success("Appointment updated successfully!");

            setIsOpen(false); 
            const updatedBooking = { ...booking, ...formValues };
            onUpdate(updatedBooking);
        } else {
            const errorText = await res.text();
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

    if (!isMounted) return null;

    return (
        <>
           
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Trigger>
                    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition active:scale-98 shadow-xs cursor-pointer">
                        <FaPen className="text-xs" />
                        Update
                    </button>
                </Modal.Trigger>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md overflow-hidden rounded-2xl">
                            <Modal.CloseTrigger />

                            <Modal.Header className="pb-2">
                                <Modal.Heading className="text-xl font-bold text-[#0f2942]">
                                    Update Appointment
                                </Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6 pt-2">
                                <Surface variant="default" className="border-none p-0 shadow-none bg-transparent">
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                                        {/* Doctor Field */}
                                        <TextField
                                            defaultValue={booking?.doctorName}
                                            isReadOnly
                                            className="w-full"
                                            name="doctorName"
                                            variant="secondary"
                                        >
                                            <Label className="text-sm font-semibold text-[#0f2942] mb-1 block">Doctor</Label>
                                            <Input className="w-full px-4 py-2.5 rounded-xl border-none bg-[#e8f4f8] text-slate-700 font-medium focus:outline-none" />
                                        </TextField>

                                        {/* Patient Name */}
                                        <TextField
                                            defaultValue={booking?.patientName}
                                            className="w-full"
                                            name="patientName"
                                            variant="secondary"
                                        >
                                            <Label className="text-sm font-semibold text-[#0f2942] mb-1 block">Patient Name</Label>
                                            <Input placeholder="Enter patient name" className="w-full px-4 py-2.5 rounded-xl text-slate-700" />
                                        </TextField>

                                        {/* Date and Time */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {/* Date Field */}
                                            <div className="flex flex-col gap-1 w-full">
                                                <Label className="text-sm font-semibold text-[#0f2942] mb-1">Date</Label>
                                                <input
                                                    type="date"
                                                    name="appointmentDate"
                                                    defaultValue={booking?.appointmentDate}
                                                    className="w-full border border-slate-200 rounded-xl px-3 py-1.5 bg-white text-slate-800 focus:border-[#00b2b2] outline-none transition text-sm h-11"
                                                />
                                            </div>

                                            {/* Time Field */}
                                            <div className="flex flex-col gap-1 w-full">
                                                <Label className="text-sm font-semibold text-[#0f2942] mb-1">Time *</Label>
                                                <input
                                                    type="time"
                                                    name="appointmentTime"
                                                    defaultValue={defaultTimeValue}
                                                    className="w-full border border-slate-200 rounded-xl px-3 py-1.5 bg-white text-slate-800 focus:border-[#00b2b2] outline-none transition text-sm h-11 cursor-pointer"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Reason Field */}
                                        <TextField
                                            defaultValue={booking?.symptoms}
                                            className="w-full"
                                            name="symptoms"
                                            variant="secondary"
                                        >
                                            <Label className="text-sm font-semibold text-[#0f2942] mb-1 block">Reason</Label>
                                            <Input placeholder="Enter reason" className="w-full px-4 py-2.5 rounded-xl text-slate-700" />
                                        </TextField>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit" 
                                            className="w-full bg-[#00b2b2] hover:bg-[#009999] text-white font-bold py-3 rounded-xl transition-colors mt-2 shadow-sm text-base h-12"
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