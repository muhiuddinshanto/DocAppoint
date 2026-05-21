"use client";
import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/appointments?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const stats = [
    { value: "500+", label: "Doctors" },
    { value: "20k+", label: "Patients" },
    { value: "50+", label: "Specialties" },
    { value: "4.9★", label: "Rating" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950">

      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ─── Left Content ─── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">Trusted Healthcare Platform</span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Find &amp; Book
                <span className="block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  Best Doctors
                </span>
                Easily
              </h1>
              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                Connect with top-rated specialists near you. Book appointments in minutes — no waiting, no hassle.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2 bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-sm">
              <div className="flex-1 flex items-center gap-2 px-3">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search doctors, specialties..."
                  className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-teal-900/50"
              >
                Search
              </button>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointments"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-teal-900/50"
              >
                Find Doctors
              </Link>
              <Link
                href="/appointments"
                className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Book Appointment
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Visual ─── */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 rounded-full border border-teal-500/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl shadow-teal-900/60">
                  <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Appointment</p>
                  <p className="text-xs text-gray-500">Confirmed!</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "4s" }}>
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">500+ Doctors</p>
                  <p className="text-xs text-gray-500">Available Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}