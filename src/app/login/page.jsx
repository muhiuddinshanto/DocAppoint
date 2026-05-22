import LoginClient from '@/components/LoginClient';
import React from 'react';


export const metadata = {
  title: "Login | DocTime - Access Your Healthcare Portal",
  description: "Log in to your DocTime account to book doctor appointments, consult with medical professionals, and manage your health records effortlessly.",
};


const LoginPage = () => {
  return (
    <div>
      <LoginClient/>
    </div>
  );
};

export default LoginPage;