"use client";

import { useState } from "react"; 
import { authClient } from "@/lib/auth-client";
import { Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaPen } from "react-icons/fa6";
import toast from "react-hot-toast";

export function ProfileUpdateModal({ user }) {

    const [isOpen, setIsOpen] = useState(false);
    const labelClass = "text-sm font-semibold text-slate-700 dark:text-slate-200";
    const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500";

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        try {
            await authClient.updateUser({
                image,
                name,
            });
            toast.success("Profile updated successfully!")
            
            
            setIsOpen(false); 
            
        } catch (error) {
            toast.error("Failed to update profile.");
        } 
    };

    return (
        <>
           
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-teal-700"
            >
                <FaPen className="text-xs" />
                Update Profile
            </button>

            
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900 sm:max-w-md">
                            <Modal.CloseTrigger className="text-slate-400 transition hover:text-slate-600 dark:hover:text-white" />
                            <Modal.Header>
                                <Modal.Heading className="text-xl font-bold text-slate-900 dark:text-white">Update Profile</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default" className="border-none bg-transparent p-0 shadow-none">
                                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                        <TextField
                                            defaultValue={user?.name || ""}
                                            className="w-full" 
                                            name="name" 
                                            type="text" 
                                            variant="secondary"
                                        >
                                            <Label className={labelClass}>Name</Label>
                                            <Input className={inputClass} />
                                        </TextField>

                                        <TextField
                                            defaultValue={user?.image || ""}
                                            className="w-full" 
                                            name="image" 
                                            type="url" 
                                            variant="secondary"
                                        >
                                            <Label className={labelClass}>Photo URL</Label>
                                            <Input placeholder="https://..." className={inputClass} />
                                        </TextField>

                                        <Modal.Footer>
                                            <button
                                                type="submit" 
                                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-teal-700"
                                            >
                                                Save
                                            </button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
}
