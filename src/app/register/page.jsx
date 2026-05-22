import RegisterClient from '@/components/RegisterClient';



export const metadata = {
  title: "Create an Account | DocTime - Join Today",
  description: "Sign up for a DocTime account to discover specialized doctors, manage your appointments, and take control of your health schedule.",
};

const RegisterPage = () => {
  return (
    <div>
      <RegisterClient/>
    </div>
  );
};

export default RegisterPage;