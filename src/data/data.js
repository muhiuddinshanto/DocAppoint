// import { unstable_rethrow } from "next/navigation";

// const getApiBaseUrl = () => {
//     const apiUrl = process.env.NEXT_PUBLIC_API;

//     if (!apiUrl) {
//         return "";
//     }

//     return apiUrl.startsWith("http://") || apiUrl.startsWith("https://")
//         ? apiUrl
//         : `http://${apiUrl}`;
// };

export const doctorsData = async () => {
const res = await fetch(`${process.env.NEXT_PUBLIC_API}/doctors`, { cache: "no-store" });
const data = await res.json();
return data;
   
};

export const doctorsDataById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/doctors/${id}`, { cache: "no-store" });
    const data = await res.json();
    return data;
};



export const appointmentsById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/appointments/${id}`, { cache: "no-store" });
    
    const data = await res.json();
    return data;
};


export const appointmentsbySearch = async (search) => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/doctors?search=${search}`, { 
        cache: "no-store" 
    });
    return await res.json();
}