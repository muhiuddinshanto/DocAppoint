"use client";

const ErrorPage = () => {
    return (
        <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-5 py-16 text-center">
            <div className="rounded-[2rem] border border-red-100 bg-white px-8 py-12 shadow-2xl shadow-slate-200/80">

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-500">
                    Doctor Not Found
                </p>

                <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
                    We couldn’t find this doctor
                </h1>

                <p className="mt-4 max-w-md text-slate-500">
                    The doctor profile you are looking for may have been removed,
                    or the ID is incorrect. Please check and try again.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="rounded-xl bg-slate-900 px-5 py-2 text-white hover:bg-slate-800"
                    >
                        Go Back
                    </button>

                    <a
                        href="/doctors"
                        className="rounded-xl border border-slate-200 px-5 py-2 text-slate-700 hover:bg-slate-50"
                    >
                        Browse Doctors
                    </a>
                </div>

            </div>
        </main>
    );
};

export default ErrorPage;