import { Fingerprint, Users, ShieldCheck } from "lucide-react";

export function StrategicMoat() {
  return (
    <section id="technology" className="py-24 bg-black/80 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-xs font-medium mb-6">
            Core IP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Strategic <span className="text-purple-400">Moat</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Our technology creates an asymmetric advantage that is impossible to replicate without access to the physical world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <MoatCard 
            icon={<Fingerprint className="w-8 h-8 text-cyan-400" />}
            title="HISPU"
            subtitle="Human In-Situ Presence Unit"
            description="A proprietary cryptographic proof generated exclusively from ongoing, verified human entropy. It cannot be forged, replayed, or simulated."
          />
          <MoatCard 
            icon={<Users className="w-8 h-8 text-cyan-400" />}
            title="Asymmetric Authority"
            subtitle="Entropy Donors vs Consumers"
            description="Humans act as 'Entropy Donors,' while AI agents act as 'Entropy Consumers.' Agents can only execute power as long as they are fueled by a verified human tether."
          />
          <MoatCard 
            icon={<ShieldCheck className="w-8 h-8 text-cyan-400" />}
            title="Non-Extractable Trust"
            subtitle="Physics-Based Security"
            description="Authority is grounded in physical reality (spacetime and biology) rather than mathematical puzzles, making it inherently resistant to AI simulation and quantum attacks."
          />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Traditional Security</h4>
            <h3 className="text-xl font-bold text-white mb-4">Mathematical Puzzles</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Vulnerable to quantum computing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Can be brute-forced over time
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Tokens can be stolen and replayed
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:border-l border-white/10 md:pl-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">VAITION L0</h4>
            <h3 className="text-xl font-bold text-white mb-4">Physical Reality</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Quantum-resistant by design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Cannot be computed or simulated
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Presence must be continuous and live
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoatCard({ icon, title, subtitle, description }: { icon: React.ReactNode, title: string, subtitle: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
      <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-6 group-hover:bg-cyan-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-xs font-medium text-cyan-400 mb-4 uppercase tracking-wide">{subtitle}</p>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
