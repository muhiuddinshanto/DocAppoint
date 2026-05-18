import CTASection from "@/components/Ctasection";
import HeroSection from "@/components/Herosection";
import HowItWorksSection from "@/components/Howitworkssection";
import TestimonialsSection from "@/components/Testimonialssection";
import TopDoctorsSection from "@/components/Topdoctorssection";
import WhyChooseUsSection from "@/components/Whychooseussection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <TopDoctorsSection/>
   <WhyChooseUsSection/>
   <HowItWorksSection/>
   <TestimonialsSection/>
   <CTASection/>
   </>
  );
}
