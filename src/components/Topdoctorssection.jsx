import Link from "next/link";

// ─── Static demo data — replace with real API fetch ───
const TOP_DOCTORS = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 214,
    experience: "12 years",
    image: "https://i.pravatar.cc/300?img=47",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Rafiq Hassan",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 189,
    experience: "10 years",
    image: "https://i.pravatar.cc/300?img=12",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Nadia Hossain",
    specialty: "Pediatrician",
    rating: 4.8,
    reviews: 167,
    experience: "8 years",
    image: "https://i.pravatar.cc/300?img=23",
    available: false,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function DoctorCard({ doctor }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Card Image */}
      <div className="relative overflow-hidden h-56 bg-gradient-to-br from-teal-50 to-cyan-50">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Availability badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
          doctor.available
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-500"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? "bg-green-500" : "bg-gray-400"}`} />
          {doctor.available ? "Available" : "Busy"}
        </div>
        {/* Specialty tag */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-teal-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {doctor.specialty}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{doctor.experience} experience</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarRating rating={doctor.rating} />
            <span className="text-sm font-semibold text-gray-700">{doctor.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({doctor.reviews} reviews)</span>
        </div>

        <Link
          href={`/doctors/${doctor.id}`}
          className="block w-full text-center py-2.5 px-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default function TopDoctorsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Top Rated
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Our Best Doctors
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Meet our highest-rated specialists — trusted by thousands of patients.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOP_DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-teal-600 text-teal-700 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all"
          >
            View All Doctors
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}