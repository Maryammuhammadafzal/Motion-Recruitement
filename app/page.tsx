import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SlidingText from "@/components/sliding-text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-background p-3 sm:items-start">
        <div className="bg-image p-6 rounded-3xl w-full h-screen">
          <Header />
          <HeroSection />
        </div>
        <AboutSection />
        <SlidingText />
      </main>
    </div>
  );
}
