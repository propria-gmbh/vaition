import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheCrisis } from "@/components/TheCrisis";
import { LayerZeroProcess } from "@/components/LayerZeroProcess";
import { StrategicMoat } from "@/components/StrategicMoat";
import { BusinessAndAsk } from "@/components/BusinessAndAsk";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <TheCrisis />
      <LayerZeroProcess />
      <StrategicMoat />
      <BusinessAndAsk />
      <Team />
      <Footer />
    </main>
  );
}
