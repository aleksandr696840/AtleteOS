import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import PlatformPreview from "@/components/PlatformPreview";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d]">

      <Navbar />

      <Hero />

      <TrustedBy />

      <Features />

      <PlatformPreview />

      <Pricing />

      <CTA />

      <Footer />

    </main>
  );
}