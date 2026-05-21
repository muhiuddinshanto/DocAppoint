"use client";

import { useState } from "react"; 
import { authClient } from "@/lib/auth-client";
import { Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaPen } from "react-icons/fa6";
import toast from "react-hot-toast";

export function ProfileUpdateModal({ user }) {

    const [isOpen, setIsOpen] = useState(false);

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
            console.error("Update failed:", error);
            alert("Profile update failed. Please try again.");
        } 
    };

    return (
        <>
           
            <button
                onClick={() => setIsOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#00a896] hover:bg-[#009485] py-3 text-sm font-bold text-white shadow-xs transition duration-200 active:scale-98 cursor-pointer"
            >
                <FaPen className="text-xs" />
                Update Profile
            </button>

            
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Update Profile</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                        
                                        
                                        <TextField
                                            defaultValue={user?.name || ""}
                                            className="w-full" 
                                            name="name" 
                                            type="text" 
                                            variant="secondary"
                                        >
                                            <Label>Name</Label>
                                            <Input />
                                        </TextField>
                                        
                                        {/* Photo URL Input */}
                                        <TextField
                                            defaultValue={user?.image || ""}
                                            className="w-full" 
                                            name="image" 
                                            type="url" 
                                            variant="secondary"
                                        >
                                            <Label>Photo URL</Label>
                                            <Input placeholder="https://..." />
                                        </TextField>

                                        <Modal.Footer>
                                            <button
                                                type="submit" 
                                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#00a896] hover:bg-[#009485] py-3 text-sm font-bold text-white shadow-xs transition duration-200 active:scale-98 cursor-pointer"
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