import Link from 'next/link';
import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { TbHeartRateMonitor } from 'react-icons/tb'; // মেডিকেল থিমের জন্য আইকন

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50/50 flex items-center justify-center px-6 py-12">
            <div className="max-w-2xl w-full text-center">

                {/* Title */}
                <div className="relative inline-block mb-4">
                   {/* 404 */}
                    <h1 className="text-[130px] sm:text-[200px] font-black text-slate-200/60 leading-none select-none tracking-tighter">
                        404
                    </h1>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center mt-4">
                        <TbHeartRateMonitor className="text-4xl sm:text-5xl text-[#00a896] animate-pulse mb-2" />
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide">
                            Page Not Found
                        </h2>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                    
                    <div className="w-16 h-1 bg-[#00a896] mx-auto rounded-full"></div>
                    <p className="text-slate-500 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
                        Sorry, the link you are looking for is not available at this time. The page may have been removed or the link was incorrect.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                   
                    <Link href="/">
                        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00a896] hover:bg-[#009485] px-8 py-3.5 text-sm font-bold text-white shadow-xs transition duration-200 active:scale-98 cursor-pointer uppercase tracking-wider">
                            <BiHomeAlt className="text-lg" />
                            Return Home
                        </button>
                    </Link>

                    
                    <Link href="/appointments">
                        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-8 py-3.5 text-sm font-bold text-slate-700 shadow-xs transition duration-200 active:scale-98 cursor-pointer uppercase tracking-wider">
                            Find Doctors
                        </button>
                    </Link>
                </div>

                {/* DocTime Brand Footer */}
                <div className="mt-20 pt-8 border-t border-slate-200/60">
                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-semibold">
                        DocTime Care • Precision in Healthcare
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;