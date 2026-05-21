import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-teal-600 via-teal-600 to-cyan-600 rounded-3xl p-12 lg:p-16 text-center overflow-hidden shadow-2xl shadow-teal-200">

          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full" />
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Book Your Appointment
              <span className="block text-cyan-200">Today!</span>
            </h2>
            <p className="text-teal-100 text-lg max-w-xl mx-auto leading-relaxed">
              Don&apos;t wait — your health can&apos;t afford delays. Connect with a top doctor in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/appointments"
                className="px-8 py-4 bg-white text-teal-700 font-bold text-sm rounded-xl hover:bg-teal-50 transition-colors shadow-lg"
              >
                Get Started — It&apos;s Free
              </Link>
              <Link
                href="/appointments"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Browse Doctors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}