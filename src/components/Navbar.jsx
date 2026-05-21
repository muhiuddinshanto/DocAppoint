"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";

// ✅ Demo user state — replace with real auth (NextAuth / Firebase / JWT etc.)
const DEMO_USER = null; // Set to { name: "Rafi", image: "/avatar.jpg" } to test logged-in state

export default function Navbar() {
  // const [user, setUser] = useState(DEMO_USER);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);





  const handleSingout = async () => {
    await authClient.signOut();

  }




  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/appointments", label: "All Appointments" },
    { href: "/dashboard", label: "Dashboard", private: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-teal-100"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ─── Logo + Name ─── */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Doc<span className="text-teal-600">Appoint</span>
            </span>
          </Link>

          {/* ─── Desktop Nav Links ─── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${link.private
                    ? "text-teal-700 bg-teal-50 hover:bg-teal-100"
                    : "text-gray-600 hover:text-teal-700 hover:bg-teal-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ─── Auth Section ─── */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              /* Logged In */
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-50 rounded-full pl-1 pr-3 py-1 border border-gray-200">
                  {/* <img
                    src={user.image }
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span> */}
                  <Avatar>
                    <Avatar.Image alt={user.name} src={user.image } />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </div>
                <button
                  onClick={handleSingout}
                  className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              /* Logged Out */
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* ─── Mobile Menu Toggle ─── */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* ─── Mobile Menu ─── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-3 px-2 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700">
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex gap-2 px-2">
              {user ? (
                <button onClick={() => setUser(null)} className="flex-1 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50">Logout</button>
              ) : (
                <>
                  <Link href="/login" className="flex-1 py-2 text-center text-sm font-medium text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50">Login</Link>
                  <Link href="/register" className="flex-1 py-2 text-center text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}