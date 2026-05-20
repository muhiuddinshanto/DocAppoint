import React from "react";
import { authClient } from "@/lib/auth-client";
import { FaEnvelope, FaPen } from "react-icons/fa6";
import { Avatar } from "@heroui/react";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);


  const handleUpdateProfile = () => {
    console.log("Update Profile Clicked");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto flex justify-center items-center min-h-[300px]">


      <div className="w-full max-w-md bg-white rounded-[28px] p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-6">


        <div className="flex items-center gap-5">


          <div className="h-20 w-20 shrink-0 rounded-full p-1 border-2 border-cyan-100/70 bg-gradient-to-tr from-cyan-50 to-white shadow-inner overflow-hidden flex items-center justify-center">
            <Avatar>
              <Avatar.Image alt="John Doe" src={user?.image} />
              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
          </div>

          {/* নাম এবং ইমেইল কন্টেন্ট */}
          <div className="flex flex-col gap-1">
            {/* ইউজার নাম */}
            <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-none">
              {user?.name}
            </h2>

            {/* ইউজার ইমেইল (আইকন সহ হালকা গ্রে কালার) */}
            <div className="flex items-center gap-2 text-slate-500 text-[14px] mt-1">
              <FaEnvelope className="text-slate-400 text-xs shrink-0" />
              <span className="font-normal break-all">
                {user?.email}
              </span>
            </div>
          </div>

        </div>

        {/* আপডেট প্রোফাইল অ্যাকশন বাটন (ছবির মতো চওড়া এবং সায়ান-গ্রিন কালার) */}
        <button
          onClick={handleUpdateProfile}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#00a896] hover:bg-[#009485] py-3 text-sm font-bold text-white shadow-xs transition duration-200 active:scale-98 cursor-pointer"
        >
          <FaPen className="text-xs" />
          Update Profile
        </button>

      </div>

    </div>
  );
};

export default MyProfile;