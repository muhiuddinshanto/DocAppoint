"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Fatima Khanam",
    role: "Patient",
    text: "I booked an appointment within 2 minutes. The process felt clean, quick, and completely reliable.",
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
    text: "DocTime saved me hours of waiting and made the whole booking experience simple and stress-free.",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=9",
  },
  {
    name: "Arif Rahman",
    role: "Patient",
    text: "Excellent service! The video consultation was crystal clear and the doctor was very helpful.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Sadia Islam",
    role: "Patient",
    text: "Super easy to use. I got a confirmed appointment in under 3 minutes from my phone.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=20",
  },
  {
    name: "Tanvir Hossain",
    role: "Patient",
    text: "The reminders and follow-up notifications kept me on track. Really thoughtful design.",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=15",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={s <= count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={s <= count ? "text-amber-400" : "text-slate-200 dark:text-slate-700"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-24 lg:py-32">
      {/* Subtle ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-50 opacity-70 blur-3xl dark:bg-teal-900/20" />
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-50 opacity-70 blur-3xl dark:bg-teal-900/20" />
      </div>

      {/* Left + Right fade masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent dark:from-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent dark:from-slate-950"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 dark:border-teal-800 dark:bg-teal-900/30">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              Patient Stories
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-5xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400">
            Real experiences from patients who found their care through DocTime.
          </p>
        </div>
      </div>

      {/* ── Infinite Swiper slider (full-bleed, outside max-w container) ── */}
      <style>{`
        .testimonial-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .testimonial-swiper .swiper-slide {
          width: min(320px, 85vw) !important;
        }
        @media (max-width: 480px) {
          .testimonial-swiper .swiper-slide {
            width: min(280px, 82vw) !important;
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay]}
        className="testimonial-swiper px-4 sm:px-0"
        loop={true}
        slidesPerView="auto"
        spaceBetween={16}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        grabCursor={true}
        breakpoints={{
          640: { spaceBetween: 20, speed: 4500 },
          1024: { spaceBetween: 24, speed: 5000 },
        }}
      >
        {/* Duplicate slides for a seamless infinite feel */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <SwiperSlide
            key={`${t.name}-${i}`}
            className="py-3"
          >
            <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              {/* Top: stars + quote decoration */}
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <Stars count={t.rating} />
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-teal-100 dark:text-teal-900"
                  >
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.333C7.333 11.791 8.791 10 10 10V8zm16 0c-3.314 0-6 2.686-6 6v10h10V14h-6.667C23.333 11.791 24.791 10 26 10V8z" />
                  </svg>
                </div>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Bottom: author */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-teal-100 dark:ring-teal-900"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trust bar */}
      <div className="relative mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 border-t border-slate-100 pt-10 dark:border-slate-800 sm:gap-8">
          {[
            { value: "10,000+", label: "Appointments booked" },
            { value: "4.9★", label: "Average rating" },
            { value: "500+", label: "Verified doctors" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-teal-700 dark:text-teal-400">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}