import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
