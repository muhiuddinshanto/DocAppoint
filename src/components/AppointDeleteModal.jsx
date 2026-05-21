"use client";

import React, { useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import { FaTrashCan } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function AppointDeleteModal({ booking, onDelete }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/appoints/${booking._id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json'
        }
      });

      if (res.ok) {
        const data = await res.json();
        toast.success("Appointment deleted successfully!");


        setIsOpen(false);
        window.location.reload();

      } else {

      }
    } catch (error) {

    }
  };

  return (

    <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger>
        <button className="inline-flex items-center gap-2 rounded-xl bg-[#cc1111] hover:bg-red-700 px-5 py-2.5 text-sm font-bold text-white transition active:scale-98 shadow-xs cursor-pointer">
          <FaTrashCan className="text-xs" />
          Delete
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container placement="auto">
          <AlertDialog.Dialog className="sm:max-w-[400px] overflow-hidden rounded-2xl">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header className="pb-2">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-lg font-bold text-slate-800">
                Cancel Appointment
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="p-6 pt-2">
              <p className="text-sm text-slate-500 leading-relaxed">
                Are you sure you want to delete the appointment of{" "}
                <span className="font-semibold text-slate-800">{booking?.patientName}</span> with{" "}
                <span className="font-semibold text-[#007a87]">{booking?.doctorName}</span>?
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex gap-3">
              <Button
                onClick={() => setIsOpen(false)}
                variant="tertiary"
                className="w-full"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                variant="danger"
                className="w-full bg-red-600 font-bold"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}