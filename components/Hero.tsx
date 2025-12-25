import { AlertTriangle, Shield, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
          Ontological Security Layer
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
          Code is <span className="text-cyan-400">Not Authority</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          The digital world faces an ontological failure. VAITION introduces Layer 0—
          <span className="text-white font-semibold"> No physical human presence, no digital authority.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
          <Card 
            icon={<AlertTriangle className="h-6 w-6 text-red-400" />}
            title="The Entropy Gap"
            description="Current security verifies identity, but not whether a living human is physically present right now."
          />
          <Card 
            icon={<Shield className="h-6 w-6 text-purple-400" />}
            title="Simulatable Power"
            description="Code-based authority is reproducible and emulable. AI can simulate it faster than humans can act."
          />
          <Card 
            icon={<DollarSign className="h-6 w-6 text-cyan-400" />}
            title="$330B-$500B"
            description="Annual cost of AI-driven fraud, account takeovers, and parasitic bot traffic globally."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-colors text-left group">
      <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
