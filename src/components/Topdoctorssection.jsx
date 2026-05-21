import Link from "next/link";
import DoctorCard from "./shared/DoctorCard";
import { doctorsData } from "@/data/data";



const Topdoctorssection = async () => {



  const allDoctors = await doctorsData(); 
  

  const doctors = allDoctors
    .sort((a, b) => b.rating - a.rating) 
    .slice(0, 3);
  

  return (
    <div>
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
            {doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
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
    </div>
  );
};

export default Topdoctorssection;