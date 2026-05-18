const testimonials = [
  {
    name: "Fatima Khanam",
    role: "Patient",
    text: "I booked an appointment within 2 minutes! The doctor was amazing and the whole process was seamless. Highly recommended for everyone.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    name: "Karim Uddin",
    role: "Patient",
    text: "Finally a platform that actually works in Bangladesh. Got a specialist appointment the same day. The interface is clean and easy to use.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=8",
  },
  {
    name: "Nusrat Jahan",
    role: "Patient",
    text: "DocAppoint saved me hours of waiting. I could see the doctor's availability and book instantly. The confirmation email was very helpful.",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=9",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= count ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            What Patients Say
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Real experiences from real patients who trusted DocAppoint.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 space-y-4 relative">
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-teal-100">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <Stars count={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed">&quot;{t.text}&quot;</p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}