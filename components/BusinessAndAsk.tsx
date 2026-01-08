import { Clock, AlertCircle, TrendingUp, Cpu } from "lucide-react";

export function BusinessAndAsk() {
  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="container mx-auto px-6">

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

function WhyNowCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
