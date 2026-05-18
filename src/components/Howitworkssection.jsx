const steps = [
  {
    step: "01",
    title: "Choose a Doctor",
    desc: "Browse our list of verified specialists and pick the one that suits your needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Book Appointment",
    desc: "Select your preferred date and time slot. Instant confirmation sent to your email.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Visit the Hospital",
    desc: "Show up at your scheduled time. Your doctor will be ready and waiting for you.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-950 to-slate-900 relative overflow-hidden">

      {/* Decorative bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Simple Steps
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Getting medical care has never been this simple. Three steps is all it takes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-0.5 bg-gradient-to-r from-teal-500/30 via-teal-400/60 to-teal-500/30" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Step number bubble */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-teal-500/50 transition-colors backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-teal-900/50 group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xs font-black text-teal-700">{step.step}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}