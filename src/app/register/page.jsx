"use client";
import React from "react";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {

    const router = useRouter();

    const googlelogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log("Registered User:", user);



        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.photoUrl || null,
            callbackURL: '/',

        })

        if (error) {
            
            toast.error(`Registration failed: ${error.message}`);
        }
        if (data) {
            console.log("Registration Successful:", data);
            toast.success("Registration successful! Please check your email to verify your account.");
            router.push("/");
        }
    }



    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="border border-slate-100 bg-white mx-auto w-full max-w-md p-8 rounded-3xl shadow-sm">

                {/* Logo & Header */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-14 h-14 bg-[#00a896] rounded-2xl flex items-center justify-center mb-4 text-white shadow-sm">
                        {/* Stethoscope Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.8 2.3A.3.3 0 1 0 4.5 2v1a.3.3 0 1 0 .3-.7z" />
                            <path d="M9.3 10.7a2.5 2.5 0 1 1-3.6 0v-4A2.5 2.5 0 0 1 9.2 5" />
                            <path d="M11 11.5a4.5 4.5 0 0 0 4.5-4.5V3" />
                            <path d="M15.5 3H14a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-1.5" />
                            <path d="M7.5 14.7v1.8a4.5 4.5 0 0 0 8.3 2.4l1.4 2.4a.5.5 0 0 0 .7.2h1.6" />
                            <circle cx="19.5" cy="18.5" r="1.5" />
                        </svg>
                    </div>
                    <h1 className="text-center text-2xl font-bold text-slate-800">Register</h1>
                    <p className="text-sm text-slate-500 mt-1">Create your DocAppoint account</p>
                </div>

                {/* Registration Form */}
                <Form className="flex flex-col gap-4" onSubmit={handleSubmit} >

                    {/* Name Field */}
                    <TextField isRequired name="name" type="text" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-semibold text-slate-700">Name</Label>
                        <Input className="w-full border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00a896] transition" />
                        <FieldError className="text-xs text-red-500" />
                    </TextField>

                    {/* Email Field */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="flex flex-col gap-1.5"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-semibold text-slate-700">Email</Label>
                        <Input className="w-full border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00a896] transition" />
                        <FieldError className="text-xs text-red-500" />
                    </TextField>

                    {/* Photo URL Field */}
                    <TextField name="photoUrl" type="url" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-semibold text-slate-700">Photo URL <span className="text-slate-400 font-normal">(optional)</span></Label>
                        <Input placeholder="https://..." className="w-full border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00a896] transition placeholder:text-slate-300" />
                        <FieldError className="text-xs text-red-500" />
                    </TextField>

                    {/* Password Field */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        className="flex flex-col gap-1.5"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-semibold text-slate-700">Password</Label>
                        <Input className="w-full border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00a896] transition" />
                        <FieldError className="text-xs text-red-500" />
                    </TextField>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-[#00a896] text-white font-medium py-3 rounded-xl hover:bg-[#009485] transition mt-2 shadow-sm">
                        Register
                    </Button>
                </Form>

                {/* Divider */}
                <div className="relative flex items-center my-6">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-slate-400 font-medium">OR</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                </div>

                {/* Social Login */}
                <Button
                onClick={googlelogin}
                variant="secondary" className="w-full border border-slate-200 bg-white text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-sm">
                    {/* Google Icon SVG */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61a5.66 5.66 0 0 1-2.45 3.71v3.08h3.95a12 12 0 0 0 3.63-8.64z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.95-3.08c-1.1.74-2.5 1.18-3.98 1.18-3.07 0-5.67-2.08-6.6-4.88H1.31v3.18A12 12 0 0 0 12 24z" />
                        <path fill="#FBBC05" d="M5.4 14.31A7.16 7.16 0 0 1 5 12c0-.81.14-1.6.4-2.31V6.51H1.31A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.31 5.49l4.09-3.18z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.36 2.65 1.31 6.51l4.09 3.18c.93-2.8 3.53-4.94 6.6-4.94z" />
                    </svg>
                    Continue with Google
                </Button>

                {/* Footer Link */}
                <p className="text-center text-sm text-slate-500 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#00a896] font-semibold hover:underline">
                        Login
                    </a>
                </p>
            </Card>
        </div>
    );
};

export default RegisterPage;