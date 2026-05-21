import { ModalComponent } from "@/components/Modal";
import { doctorsData } from "@/data/data";
import { FaClock, FaLocationDot, FaMoneyCheckDollar, FaStar } from "react-icons/fa6";
import { TbBuildingHospital } from "react-icons/tb";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const doctormeta = await doctorsData(id);
  const doctor = doctormeta.find((doc) => doc._id === id);

  return {
    title: `${doctor?.name || "Doctor"} | DocTime`,
    description: doctor?.description?.slice(0, 160),
  };
}

const DoctorsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctors = await doctorsData(id);
  const doctor = doctors.find((doc) => doc._id === id);

  if (!doctor) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-28 text-center dark:bg-slate-950">
        <h1 className="text-2xl font-black text-slate-950 dark:text-white">Doctor not found</h1>
      </main>
    );
  }

  const infoCards = [
    { label: "Experience", value: doctor.experience, icon: <FaClock />, color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-400/10 dark:text-cyan-200" },
    { label: "Hospital", value: doctor.hospital, icon: <TbBuildingHospital />, color: "text-teal-600 bg-teal-50 dark:bg-teal-400/10 dark:text-teal-200" },
    { label: "Location", value: doctor.location, icon: <FaLocationDot />, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-400/10 dark:text-emerald-200" },
    { label: "Consultation Fee", value: `Tk ${doctor.fee}`, icon: <FaMoneyCheckDollar />, color: "text-amber-600 bg-amber-50 dark:bg-amber-400/10 dark:text-amber-200" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-28 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-900 dark:shadow-none md:grid-cols-[360px_1fr] lg:gap-10 lg:p-8">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 dark:bg-white/5 md:aspect-auto">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="w-fit rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-black text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200">
              {doctor.specialty}
            </span>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              {doctor.name}
            </h1>

            <div className="mt-2 flex items-center gap-1 text-sm font-black text-slate-700 dark:text-slate-200">
              <FaStar className="text-amber-400" />
              <span>{doctor.rating}</span>
              <span className="font-semibold text-slate-400">/ {doctor.maxRating}</span>
            </div>

            <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              {doctor.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {infoCards.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase text-slate-400">{item.label}</p>
                    <p className="mt-1 truncate text-sm font-black text-slate-900 dark:text-white sm:text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-black uppercase text-slate-900 dark:text-white">Availability</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {doctor.availability.map((slot, index) => (
                  <span
                    key={index}
                    className="rounded-xl border border-teal-100 bg-teal-50 px-4 py-2 text-xs font-black text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200 sm:text-sm"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <ModalComponent doctor={doctor} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DoctorsDetailsPage;
