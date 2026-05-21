import React from "react";
import { authClient } from "@/lib/auth-client";
import { FaEnvelope } from "react-icons/fa6";
import { ProfileUpdateModal } from "./ProfileUpdateModal";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="mx-auto flex min-h-[300px] max-w-7xl items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <div className="flex items-center gap-5">
          {user?.image ? (
            <img src={user.image} alt={user?.name || "User"} className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-teal-100 dark:ring-teal-400/10" />
          ) : (
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-teal-100 text-2xl font-black text-teal-700 dark:bg-teal-400/10 dark:text-teal-200">
              {user?.name?.charAt(0) || "U"}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-xl font-black tracking-tight text-slate-950 dark:text-white">
              {user?.name || "User"}
            </h2>
            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-300">
              <FaEnvelope className="shrink-0 text-slate-400" />
              <span className="break-all">{user?.email}</span>
            </div>
          </div>
        </div>

        <ProfileUpdateModal user={user} />
      </div>
    </div>
  );
};

export default MyProfile;
