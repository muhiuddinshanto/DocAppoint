import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Fatima Khanam",
    role: "Patient",
    text: "I booked an appointment within 2 minutes. The process felt clean, quick, and reliable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    name: "Karim Uddin",
    role: "Patient",
    text: "I found a specialist the same day and the appointment details were easy to follow.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=8",
  },
  {
    name: "Nusrat Jahan",
    role: "Patient",
    text: "DocTime saved me hours of waiting and made the whole booking experience simple.",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=9",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <FaStar key={s} className={s <= count ? "text-amber-400" : "text-slate-200 dark:text-slate-700"} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">Testimonials</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            What Patients Say
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-slate-600 dark:text-slate-300">
            Real experiences from patients who booked care through DocTime.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
              <FaQuoteLeft className="absolute right-6 top-6 text-3xl text-teal-100 dark:text-teal-400/10" />
              <Stars count={t.rating} />
              <p className="mt-5 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">&quot;{t.text}&quot;</p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-black text-slate-950 dark:text-white">{t.name}</p>
                  <p className="text-xs font-bold text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
