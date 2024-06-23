import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="mx-auto py-4 flex min-h-screen flex-col items-center justify-between p-24 bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
