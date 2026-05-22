import DoctorCard from "@/components/shared/DoctorCard";
import { appointmentsbySearch } from "@/data/data";
import { FaMagnifyingGlass, FaSliders } from "react-icons/fa6";



export async function generateMetadata({ searchParams }) {
    const resolvedSearchParams = await searchParams;
  const searchParam = resolvedSearchParams?.search;
  const search = Array.isArray(searchParam) ? searchParam[0] : searchParam || "";
    
   


    const pageTitle = search 
    ? `Search results for "${search}" | DocTime` 
    : "Book the Right Doctor | DocTime";

  const pageDescription = search
    ? `Find the best available doctors and specialists matching "${search}" on DocTime. Book your appointment easily.`
    : "Search by doctor name, specialty, hospital, or location and choose the appointment that fits your day.";

  return {
    title: pageTitle,
    description: pageDescription,
  };
}









const AppointmentsPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const searchParam = resolvedSearchParams?.search;
  const search = Array.isArray(searchParam) ? searchParam[0] : searchParam || "";
  const doctors = await appointmentsbySearch(search);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 px-4 py-16 dark:border-white/10 dark:bg-slate-950 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-black uppercase text-teal-700 shadow-sm dark:border-teal-400/20 dark:bg-white/5 dark:text-teal-200">
            <FaSliders />
            Find Care
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Book the Right Doctor
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            Search by doctor name, specialty, hospital, or location and choose the appointment that fits your day.
          </p>

          <form
            action="/appointments"
            className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-900 dark:shadow-none sm:flex-row"
          >
            <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4 dark:bg-white/5">
              <FaMagnifyingGlass className="shrink-0 text-slate-400 dark:text-slate-500" />
              <input
                type="search"
                name="search"
                defaultValue={search}
                placeholder="Search doctors, specialties..."
                className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 text-sm font-black text-white shadow-lg shadow-teal-500/20 transition hover:opacity-95"
            >
              <FaMagnifyingGlass />
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-teal-700 dark:text-teal-300">
                {doctors.length} doctor{doctors.length === 1 ? "" : "s"} found
              </p>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                Available Appointments
              </h2>
            </div>
          </div>

          {doctors.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">No doctors found</h3>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                Try another name, specialty, or location.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AppointmentsPage;
