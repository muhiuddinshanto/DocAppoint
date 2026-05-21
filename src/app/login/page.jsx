"use client";

import React from "react";
import Link from "next/link";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaStethoscope } from "react-icons/fa6";

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    if (error) toast.error(`Login failed: ${error.message}`);
    if (data) toast.success("Login successful! Redirecting to homepage...");
  };

  const googlelogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-28 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-900 dark:shadow-none sm:p-8">
        <div className="mb-7 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-2xl text-white shadow-lg shadow-teal-500/20">
            <FaStethoscope />
          </div>
          <h1 className="text-2xl font-black text-slate-950 dark:text-white">Login</h1>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">Welcome back to DocTime</p>
        </div>

        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
            <Label className="text-sm font-bold text-slate-700 dark:text-slate-200">Email</Label>
            <Input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField isRequired name="password" type="password" className="flex flex-col gap-1.5">
            <Label className="text-sm font-bold text-slate-700 dark:text-slate-200">Password</Label>
            <Input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <Button type="submit" className="mt-2 w-full rounded-xl bg-teal-600 py-3 font-black text-white shadow-sm transition hover:bg-teal-700">
            Login
          </Button>
        </Form>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-white/10" />
          <span className="mx-4 text-xs font-black uppercase text-slate-400">OR</span>
          <div className="flex-grow border-t border-slate-200 dark:border-white/10" />
        </div>

        <Button
          onClick={googlelogin}
          variant="secondary"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 font-black text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
        >
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-black text-teal-700 hover:underline dark:text-teal-300">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
