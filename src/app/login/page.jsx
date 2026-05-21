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
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
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
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
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
