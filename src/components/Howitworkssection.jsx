import { FaCalendarCheck, FaHospital, FaMagnifyingGlass } from "react-icons/fa6";

const steps = [
  {
    step: "01",
    title: "Choose a Doctor",
    desc: "Browse verified specialists and pick the doctor that matches your needs.",
    icon: <FaMagnifyingGlass />,
  },
  {
    step: "02",
    title: "Book Appointment",
    desc: "Select your preferred date and time slot with instant confirmation.",
    icon: <FaCalendarCheck />,
  },
  {
    step: "03",
    title: "Visit the Hospital",
    desc: "Arrive at your scheduled time with your booking details ready.",
    icon: <FaHospital />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-black uppercase text-teal-300">Simple Steps</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-slate-300">
            Three clear steps from search to confirmed appointment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-2xl text-white shadow-lg shadow-teal-900/40">
                {step.icon}
              </div>
              <span className="mt-5 inline-block text-xs font-black uppercase text-teal-300">{step.step}</span>
              <h3 className="mt-2 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
