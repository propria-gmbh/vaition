import { Building2, Network, Scale, Clock, AlertCircle, TrendingUp, Cpu } from "lucide-react";

export function BusinessAndAsk() {
  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="container mx-auto px-6">
        
        {/* Business Model */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Business Model: <span className="text-cyan-400">Infrastructure Licensing</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              VAITION monetizes Layer 0 as foundational infrastructure — not SaaS, not consumer app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BusinessCard 
              icon={<Building2 className="w-6 h-6 text-cyan-400" />}
              title="Enterprise Direct"
              items={[
                "SDK licensing: banking, healthcare, corporate",
                "Gateway fees: $/transaction for high-value operations",
                "Target: Fortune 500 banks, healthcare systems"
              ]}
            />
            <BusinessCard 
              icon={<Network className="w-6 h-6 text-cyan-400" />}
              title="Platform Partnerships"
              items={[
                "License L0 to IAM providers & cloud platforms",
                "Structure: Platform fee + per-user royalties OR revenue share",
                "Value: 'Make your authentication stack presence-grounded'"
              ]}
            />
            <BusinessCard 
              icon={<Scale className="w-6 h-6 text-cyan-400" />}
              title="Standards & IP"
              items={[
                "Position L0 as industry standard for presence verification",
                "License essential patents to ecosystem",
                "AI safety compliance for emerging regulations"
              ]}
            />
          </div>
        </div>

        {/* The Ask */}
        <div className="rounded-3xl bg-gradient-to-br from-cyan-900/10 to-black border border-cyan-500/20 p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-6">
                Investment Opportunity
              </div>
              <h2 className="text-4xl font-bold mb-6">
                The Ask: <span className="text-white">$3M Seed Round (SAFE)</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">12-Month Milestones</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span> Production SDK (OAuth/SAML compatible)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span> 1 enterprise pilot (banking, healthcare, AI)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span> First revenue deployments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span> Standards body engagement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Use of Funds</h3>
              <div className="space-y-4">
                <FundItem label="Protocol Finalization" value={30} />
                <FundItem label="SDK Development" value={40} />
                <FundItem label="Enterprise Pilots" value={20} />
                <FundItem label="IP Protection" value={10} />
              </div>
            </div>
          </div>
        </div>

        {/* Why Now */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-6">Why Now?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WhyNowCard 
                icon={<AlertCircle className="w-5 h-5 text-red-400" />}
                title="AI Exposed the Crisis" 
                description="Deepfakes, synthetic identities, simulation at scale."
            />
            <WhyNowCard 
                icon={<Clock className="w-5 h-5 text-cyan-400" />}
                title="Regulators Demanding Solutions" 
                description="EU AI Act, financial compliance requirements."
            />
            <WhyNowCard 
                icon={<TrendingUp className="w-5 h-5 text-orange-400" />}
                title="Enterprise Pain Acute" 
                description="Fraud costs accelerating exponentially."
            />
            <WhyNowCard 
                icon={<Cpu className="w-5 h-5 text-purple-400" />}
                title="Technology Ready" 
                description="Edge computing + modern sensors enable L0."
            />
        </div>
      </div>
    </section>
  );
}

function BusinessCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
      <div className="mb-4 p-2 bg-cyan-500/10 rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
            <span className="text-cyan-500/50 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FundItem({ label, value }: { label: string, value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-cyan-400">{value}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-cyan-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function WhyNowCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
