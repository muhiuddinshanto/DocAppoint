"use client"

const errorPage = () => {
    return (
        <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-5 py-16 text-center">
            <div className="rounded-[2rem] border border-red-100 bg-white px-8 py-12 shadow-2xl shadow-slate-200/80">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-500">
                    Destination error
                </p>
                <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
                    Something went wrong
                </h1>
                <p className="mt-4 max-w-md text-slate-500">
                    Please refresh the page or try opening this destination again.
                </p>
            </div>
        </main>
    );
};

export default errorPage;
