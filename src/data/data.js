
export const doctorsData = async () => {
const res = await fetch(`${process.env.NEXT_PUBLIC_API}/doctors`, { cache: "no-store" });
const data = await res.json();
return data;
   
};

export const doctorsDataById = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/doctors/${id}`, { cache: "no-store",
         headers: {
            authorization: `Bearer ${token}`
        }
     });
    const data = await res.json();
    return data;
};



export const appointmentsById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/appoints/${id}`, { cache: "no-store" });
    
    const data = await res.json();
    return data;
};


export const appointmentsbySearch = async (search) => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/doctors?search=${search}`, { 
        cache: "no-store" 
    });
    return await res.json();
}