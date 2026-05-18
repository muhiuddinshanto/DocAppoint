import Link from "next/link";
import { FaLocationDot, FaRegClock, FaStar, FaUserGraduate } from "react-icons/fa6";

const getDoctorId = (doctor) => doctor?.id || doctor?._id;

const getDoctorFee = (fee) => {
  if (!fee) return "Consultation fee available on details";
  return typeof fee === "number" ? `৳${fee}` : fee;
};

const getFirstSlot = (availability) => {
  if (Array.isArray(availability) && availability.length > 0) {
    return availability[0];
  }
  return availability || "Schedule available on details";
};

const DoctorCard = ({ doctor }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image & Badges Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50">
        <img
          src={doctor.image || "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"}
          alt={doctor.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Specialty Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-teal-700 shadow-sm">
          {doctor.specialty || "Specialist"}
        </div>
        {/* Rating & Reviews Badge */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-950/85 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
          <FaStar className="text-amber-300" />
          <span>{doctor.rating || "4.8"}</span>
          {doctor.reviewsCount && (
            <span className="text-slate-400 font-normal">({doctor.reviewsCount})</span>
          )}
        </div>
      </div>

      {/* Details Container */}
      <div className="flex flex-1 flex-col p-6">
        
        {/* Name, Experience & Status */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-slate-950 group-hover:text-teal-600 transition-colors">
              {doctor.name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-teal-600">
              {doctor.experience || "Experienced"} Experience
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
              doctor.available === false
                ? "bg-slate-100 text-slate-500"
                : "bg-emerald-50 text-emerald-700"
            }`}
          >
            {doctor.available === false ? "Busy" : "Available"}
          </span>
        </div>

        {/* Qualification / Degrees */}
        {doctor.qualification && (
          <p className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">
            <FaUserGraduate className="text-slate-400 shrink-0" />
            <span className="line-clamp-1">{doctor.qualification}</span>
          </p>
        )}

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
          {doctor.description ||
            "Trusted specialist focused on patient-friendly treatment and clear appointment guidance."}
        </p>

        {/* Location & Availability Slots */}
        <div className="mt-5 space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-4">
          <p className="flex items-start gap-3">
            <FaLocationDot className="text-teal-500 mt-0.5 shrink-0" />
            <span className="line-clamp-2">
              <strong className="text-slate-800 font-semibold">{doctor.hospital}</strong>
              {doctor.location ? `, ${doctor.location}` : ""}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <FaRegClock className="text-cyan-500 shrink-0" />
            <span className="text-slate-700 font-medium">
              Next Slot: {getFirstSlot(doctor.availability)}
            </span>
          </p>
        </div>

        {/* Footer / Fee & CTA Button */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Consultation Fee
            </p>
            <p className="mt-1 text-xl font-black text-slate-950">
              {getDoctorFee(doctor.fee)}
            </p>
          </div>
          <Link
            href={`/doctors/${doctor._id}`}
            className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:from-teal-500 hover:to-cyan-500 hover:shadow-md"
          >
            View Details
          </Link>
        </div>

      </div>
    </article>
  );
};

export default DoctorCard;