import AboutSection from "@/components/about-section";
import FaqSection from "@/components/faq-section";
import FeaturedSection from "@/components/featured-section";
import Footer from "@/components/footer";
// import FeaturedSection from "@/components/featured-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import JobSection from "@/components/job-section";
import SlidingText from "@/components/sliding-text";
import TestimonialSection from "@/components/testimonial-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-background p-3 sm:items-start">
        <div className="bg-image md:p-6 p-3 rounded-3xl w-full lg:h-screen h-auto">
          <Header />
          <HeroSection />
        </div>
        <AboutSection />
        <SlidingText />
        <JobSection />
        <FeaturedSection />
        <TestimonialSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
