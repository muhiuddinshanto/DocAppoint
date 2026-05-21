"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaBars, FaMoon, FaRegSun, FaStethoscope, FaXmark } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/appointments", label: "Appointments" },
  { href: "/dashboard", label: "Dashboard", private: true },
];

function UserAvatar({ user }) {
  if (user?.image) {
    return (
      <img
        src={user.image}
        alt={user.name || "User"}
        className="h-9 w-9 rounded-full object-cover ring-2 ring-teal-100 dark:ring-teal-900/60"
      />
    );
  }

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-sm font-black text-teal-700 dark:bg-teal-900/60 dark:text-teal-200">
      {user?.name?.charAt(0) || "U"}
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!");
  };

  const navClass = scrolled
    ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85"
    : "border-b border-transparent bg-white/70 backdrop-blur-md dark:bg-slate-950/50";

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20 transition-transform group-hover:scale-105">
              <FaStethoscope className="text-lg" />
            </span>
            <span className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
              Doc<span className="text-teal-600 dark:text-teal-300">Time</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              if (link.private && !user) return null;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-200"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-200 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-teal-200"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? <FaRegSun /> : <FaMoon />}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <UserAvatar user={user} />
                  <span className="max-w-28 truncate text-sm font-bold text-slate-700 dark:text-slate-200">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={handleSignout}
                  className="rounded-xl border border-red-200 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50 dark:border-red-400/20 dark:text-red-300 dark:hover:bg-red-400/10"
                  type="button"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border border-teal-200 px-4 py-2 text-sm font-bold text-teal-700 transition hover:bg-teal-50 dark:border-teal-400/30 dark:text-teal-200 dark:hover:bg-teal-400/10"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition hover:opacity-95"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? <FaRegSun /> : <FaMoon />}
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              type="button"
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-slate-900">
              {navLinks.map((link) => {
                if (link.private && !user) return null;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-teal-50 hover:text-teal-700 dark:text-slate-200 dark:hover:bg-teal-400/10 dark:hover:text-teal-200"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="border-t border-slate-100 pt-3 dark:border-white/10">
                {user ? (
                  <button
                    onClick={handleSignout}
                    className="w-full rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600 dark:bg-red-400/10 dark:text-red-300"
                    type="button"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/login" className="rounded-xl border border-teal-200 py-3 text-center text-sm font-bold text-teal-700 dark:border-teal-400/30 dark:text-teal-200">
                      Login
                    </Link>
                    <Link href="/register" className="rounded-xl bg-teal-600 py-3 text-center text-sm font-bold text-white">
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
