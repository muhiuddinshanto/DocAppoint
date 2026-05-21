import { ModalComponent } from "@/components/Modal";
import { doctorsData } from "@/data/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { 
  FaBuildingHospital, 
  FaCalendarCheck, 
  FaClock, 
  FaLocationDot, 
  FaMoneyCheckDollar, 
  FaStar 
} from "react-icons/fa6";
import { TbBuildingHospital } from "react-icons/tb";

const appointmentsDetialsPage = async ({params}) => {


    const { id } = await params;
    
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);
        
    
        const doctors = await doctorsData(id,);
    
       
        const doctor = doctors.find(doc => doc._id === id);
        


    return (
        <div>
                    <main className="min-h-screen bg-slate-50/50 py-12 sm:py-16">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
                            {/* Main Grid Container */}
                            <div className="grid md:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-start bg-white p-6 sm:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        
                                {/* Left Column: Doctor Image */}
                                <div className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md bg-slate-100">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover object-top hover:scale-102 transition duration-300"
                                    />
                                </div>
        
                                {/* Right Column: Doctor Info Details */}
                                <div className="flex flex-col h-full pt-2">
        
                                    {/* Specialty Badge */}
                                    <div className="self-start">
                                        <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 border border-teal-100">
                                            {doctor.specialty}
                                        </span>
                                    </div>
        
                                    {/* Name & Rating */}
                                    <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                                        {doctor.name}
                                    </h1>
        
                                    <div className="mt-2 flex items-center gap-1 text-sm font-bold text-slate-700">
                                        <FaStar className="text-amber-400" />
                                        <span>{doctor.rating}</span>
                                        <span className="text-slate-400 font-medium">/ {doctor.maxRating}</span>
                                    </div>
        
                                    {/* Description */}
                                    <p className="mt-6 text-sm sm:text-base leading-7 text-slate-500 font-medium max-w-3xl">
                                        {doctor.description}
                                    </p>
        
                                    {/* Info Grid Cards */}
                                    <div className="mt-8 grid sm:grid-cols-2 gap-4">
        
                                        {/* Experience Card */}
                                        <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                                                <FaClock className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</p>
                                                <p className="mt-0.5 text-sm sm:text-base font-black text-slate-900">{doctor.experience}</p>
                                            </div>
                                        </div>
        
                                        {/* Hospital Card */}
                                        <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                                                <TbBuildingHospital className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hospital</p>
                                                <p className="mt-0.5 text-sm sm:text-base font-black text-slate-900">{doctor.hospital}</p>
                                            </div>
                                        </div>
        
                                        {/* Location Card */}
                                        <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                                <FaLocationDot className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                                                <p className="mt-0.5 text-sm sm:text-base font-black text-slate-900">{doctor.location}</p>
                                            </div>
                                        </div>
        
                                        {/* Consultation Fee Card */}
                                        <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                                                <FaMoneyCheckDollar className="text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Consultation Fee</p>
                                                <p className="mt-0.5 text-sm sm:text-base font-black text-slate-900">৳{doctor.fee}</p>
                                            </div>
                                        </div>
        
                                    </div>
        
                                    {/* Availability Section */}
                                    <div className="mt-8">
                                        <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
                                            Availability
                                        </h3>
                                        <div className="mt-3 flex flex-wrap gap-3">
                                            {doctor.availability.map((slot, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center rounded-xl bg-teal-50/60 border border-teal-100/80 px-4 py-2 text-xs sm:text-sm font-bold text-teal-700"
                                                >
                                                    {slot}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
        
                                    {/* ModalComponent */}
                                    <div className="mt-5">
                                        <ModalComponent doctor={doctor} />
                                    </div>
                                    
        
                                </div>
                            </div>
        
                        </div>
                    </main>
                </div>
    );
};

export default appointmentsDetialsPage;