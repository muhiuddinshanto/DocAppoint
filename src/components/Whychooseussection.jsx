import { FaCalendarDays, FaClock, FaLock, FaShieldHeart } from "react-icons/fa6";

const features = [
  {
    icon: <FaCalendarDays />,
    title: "Easy Booking",
    desc: "Book appointments in just a few clicks, anytime and anywhere.",
    color: "bg-teal-100 text-teal-700 dark:bg-teal-400/10 dark:text-teal-200",
  },
  {
    icon: <FaShieldHeart />,
    title: "Verified Doctors",
    desc: "Every doctor profile is reviewed for trust and professional care.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200",
  },
  {
    icon: <FaClock />,
    title: "Quick Scheduling",
    desc: "See available slots clearly and choose the time that works for you.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-400/10 dark:text-purple-200",
  },
  {
    icon: <FaLock />,
    title: "Secure & Private",
    desc: "Your appointment and profile information stays protected.",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">Why Us</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            Healthcare that feels simple
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-slate-600 dark:text-slate-300">
            DocTime keeps the appointment journey clear, fast, and easy to use on every screen.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-950 dark:shadow-none"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-black text-slate-950 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-500 dark:text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
