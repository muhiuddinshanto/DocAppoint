


export const doctorsData = async () => {
    const res = await fetch(`http://${process.env.LOCAL_API}/doctors`);
    const data = await res.json();
    return data || [];
    };

export const doctorsDataById = async (id) => {
    const res = await fetch(`http://${process.env.LOCAL_API}/doctors/${id}`);
    const data = await res.json();
    return data || [];
    };