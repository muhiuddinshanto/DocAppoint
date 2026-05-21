"use client"

export default function Loading() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-5 py-16 text-center">
            <div className="relative flex flex-col items-center justify-center">
                
                {/* মেডিকেল পালস/হার্টবিট ইফেক্ট (আউটার রিং) */}
                <div className="absolute h-20 w-20 animate-ping rounded-full bg-[#00a896]/10 duration-1000" />
                
                {/* মডার্ন লোডিং স্পিনার */}
                <div className="relative h-16 w-16 rounded-full border-4 border-slate-100 border-t-[#00a896] animate-spin" />
                
                {/* সেন্টারে ছোট একটি মেডিকেল ডট বা লোগো প্লেসহোল্ডার */}
                <div className="absolute h-3 w-3 rounded-full bg-[#00a896]" />
            </div>

            {/* লোডিং টেক্সট */}
            <div className="mt-8 space-y-2">
                <h2 className="text-xl font-bold tracking-wide text-slate-800 dark:text-slate-100 animate-pulse">
                    DocTime
                </h2>
                <p className="text-sm font-medium tracking-wider text-slate-400 uppercase">
                    Loading ...
                </p>
            </div>
        </main>
    );
}
