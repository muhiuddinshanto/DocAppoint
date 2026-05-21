import Link from "next/link";
import { FaArrowRight, FaCalendarCheck } from "react-icons/fa6";

export default function CTASection() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 shadow-2xl shadow-teal-900/10 dark:border dark:border-white/10 sm:p-12 lg:p-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-4 py-2 text-xs font-black uppercase text-teal-200">
              <FaCalendarCheck />
              Ready when you are
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Book your next appointment today.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-300">
              Pick a doctor, choose a time, and confirm your visit from your phone or desktop.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-teal-50"
            >
              Get Started
              <FaArrowRight />
            </Link>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/10"
            >
              Browse Doctors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
