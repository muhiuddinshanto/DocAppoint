import Link from "next/link";
import { FaLocationDot, FaRegClock, FaStar, FaUserGraduate } from "react-icons/fa6";

const DoctorCard = ({ doctor }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900 dark:shadow-none">
      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/40 dark:to-cyan-950/40 sm:h-64">
        <img
          src={doctor.image || "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"}
          alt={doctor.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-teal-700 shadow-sm dark:bg-slate-950/90 dark:text-teal-200">
          {doctor.specialty || "Specialist"}
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-950/85 px-3 py-1.5 text-xs font-black text-white backdrop-blur-sm">
          <FaStar className="text-amber-300" />
          <span>{doctor.rating || "4.8"}</span>
          {doctor.reviewsCount && (
            <span className="font-normal text-slate-300">({doctor.reviewsCount})</span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-slate-950 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-300">
              {doctor.name}
            </h3>
            <p className="mt-1 text-sm font-bold text-teal-600 dark:text-teal-300">
              {doctor.experience || "Experienced"} Experience
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-black ${
              doctor.available === false
                ? "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400"
                : "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
            }`}
          >
            {doctor.available === false ? "Busy" : "Available"}
          </span>
        </div>

        {doctor.qualification && (
          <p className="mt-3 flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <FaUserGraduate className="shrink-0 text-slate-400" />
            <span className="line-clamp-1">{doctor.qualification}</span>
          </p>
        )}

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {doctor.description ||
            "Trusted specialist focused on patient-friendly treatment and clear appointment guidance."}
        </p>

        <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
          <p className="flex items-start gap-3">
            <FaLocationDot className="mt-0.5 shrink-0 text-teal-500 dark:text-teal-300" />
            <span className="line-clamp-2">
              <strong className="font-bold text-slate-800 dark:text-white">{doctor.hospital}</strong>
              {doctor.location ? `, ${doctor.location}` : ""}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <FaRegClock className="shrink-0 text-cyan-500 dark:text-cyan-300" />
            <span className="font-semibold">Next Slot: {doctor.availability}</span>
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-white/10">
          <div>
            <p className="text-xs font-black uppercase text-slate-400">Consultation Fee</p>
            <p className="mt-1 text-xl font-black text-slate-950 dark:text-white">{doctor.fee}</p>
          </div>
          <Link
            href={`/doctors/${doctor._id}`}
            className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:opacity-95 hover:shadow-md"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DoctorCard;
