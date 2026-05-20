import DoctorCard from '@/components/shared/DoctorCard';
import { appointmentsbySearch, doctorsData } from '@/data/data';
import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';


const appointmentsPage = async ({ searchParams }) => {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams?.search || ''; // ব্রাউজারের ইউআরএল থেকে সার্চের লেখাটি নিচ্ছে

    // ব্যাকগ্রাউন্ডে /doctors এপিআই থেকে ডেটা আনছে, কিন্তু ব্রাউজারের ইউআরএল /appointments-ই থাকবে
    const doctors = await appointmentsbySearch(search);

    return (
        <div className='py-5'>
            <section className="bg-slate-50 py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                        All Appointments
                    </h1>

                    {/* Subheading */}
                    <p className="mt-3 text-base sm:text-lg font-medium text-slate-500">
                        Find the right doctor for you.
                    </p>

                    {/* Search Input Container */}
                    <div className="mt-8 max-w-xl mx-auto">
                        <form action="" className="relative group">
                            {/* Search Icon */}
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <FaMagnifyingGlass className="h-4 w-4 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                            </div>

                            {/* Input Field */}
                            <input
                                type="search"
                                name="search"
                                defaultValue={search}
                                placeholder="Search by doctor name or specialty..."
                                className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-900 placeholder-slate-400 shadow-sm outline-none transition-all duration-200 focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                            />
                        </form>
                    </div>
                </div>
            </section>

            <section>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto'>
                    {
                        doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </section>
        </div>
    );
};

export default appointmentsPage;