import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaPhone, FaStethoscope, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/appointments", label: "Appointments" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FaFacebookF /> },
  { label: "X", href: "#", icon: <FaXTwitter /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
                <FaStethoscope />
              </span>
              <span className="text-xl font-black text-white">
                Doc<span className="text-teal-300">Time</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm font-medium leading-7">
              Making quality healthcare easier to find, compare, and book with verified doctors.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-teal-500 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-black uppercase text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold transition hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-black uppercase text-white">Contact</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-1 shrink-0 text-teal-300" />
                Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="shrink-0 text-lg text-teal-300" />
                support@doctime.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="shrink-0 text-teal-300" />
                +880 1700-000000
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 text-xs font-semibold sm:flex-row">
          <p>(c) {new Date().getFullYear()} DocTime. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-teal-300">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-teal-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
