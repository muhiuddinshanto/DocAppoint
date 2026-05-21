"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCalendarCheck, FaMagnifyingGlass, FaShieldHeart, FaStar } from "react-icons/fa6";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/appointments${searchQuery.trim() ? `?search=${encodeURIComponent(searchQuery)}` : ""}`);
  };

  const stats = [
    { value: "500+", label: "Doctors" },
    { value: "20k+", label: "Patients" },
    { value: "50+", label: "Specialties" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 dark:bg-slate-950 lg:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,184,166,0.14),transparent_34%),linear-gradient(300deg,rgba(14,165,233,0.13),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase text-teal-700 shadow-sm dark:border-teal-400/20 dark:bg-white/5 dark:text-teal-200">
              <FaShieldHeart />
              Trusted Healthcare Platform
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                Find doctors and book appointments without the waiting room.
              </h1>
              <p className="max-w-2xl text-base font-medium leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                Search verified specialists, compare availability, and confirm your visit in minutes from any device.
              </p>
            </div>

            <form
              onSubmit={handleSearch}
              className="flex max-w-2xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-900 dark:shadow-none sm:flex-row"
            >
              <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4 dark:bg-white/5">
                <FaMagnifyingGlass className="shrink-0 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search doctors, specialties..."
                  className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 text-sm font-black text-white shadow-lg shadow-teal-500/20 transition hover:opacity-95"
              >
                Search
                <FaArrowRight />
              </button>
            </form>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
              >
                Find Doctors
                <FaArrowRight />
              </Link>
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-black text-slate-700 transition hover:border-teal-200 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <FaCalendarCheck />
                Book Appointment
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-6 dark:border-white/10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white p-4 shadow-sm dark:bg-white/5">
                  <div className="flex items-center gap-1 text-2xl font-black text-slate-950 dark:text-white">
                    {s.value}
                    {s.label === "Rating" && <FaStar className="text-base text-amber-400" />}
                  </div>
                  <div className="mt-1 text-xs font-black uppercase text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-slate-300/60 dark:border-white/10 dark:bg-slate-900 dark:shadow-none">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                alt="Doctor consulting a patient"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/92 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/85">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <FaCalendarCheck />
                </span>
                <div>
                  <p className="font-black text-slate-950 dark:text-white">Instant confirmation</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Choose a slot and get booked right away.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
