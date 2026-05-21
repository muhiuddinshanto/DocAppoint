"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-5 py-28 text-center">
      <div className="rounded-[2rem] border border-red-100 bg-white px-8 py-12 shadow-2xl shadow-slate-200/80 dark:border-red-400/20 dark:bg-slate-900 dark:shadow-none">
        <p className="text-sm font-bold uppercase text-red-500">Doctor Not Found</p>
        <h1 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-5xl">
          We could not find this doctor
        </h1>
        <p className="mt-4 max-w-md text-slate-500 dark:text-slate-300">
          The doctor profile you are looking for may have been removed, or the ID is incorrect.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="rounded-xl bg-slate-900 px-5 py-2 font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950"
          >
            Go Back
          </button>
          <Link
            href="/appointments"
            className="rounded-xl border border-slate-200 px-5 py-2 font-bold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
          >
            Browse Doctors
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
