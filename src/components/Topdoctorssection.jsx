import Link from "next/link";
import DoctorCard from "./shared/DoctorCard";
import { doctorsData } from "@/data/data";
import { FaArrowRight } from "react-icons/fa6";

const Topdoctorssection = async () => {
  const allDoctors = await doctorsData();
  const doctors = allDoctors.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">Top Rated</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            Our Best Doctors
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-slate-600 dark:text-slate-300">
            Meet highly rated specialists trusted by thousands of patients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-6 py-3.5 text-sm font-black text-teal-700 transition hover:bg-teal-600 hover:text-white dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200"
          >
            View All Doctors
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topdoctorssection;
