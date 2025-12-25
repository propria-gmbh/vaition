import { Lock, Radio, CheckCircle2, Unlock, Link as LinkIcon } from "lucide-react";

export function LayerZeroProcess() {
  const steps = [
    {
      icon: <Lock className="w-5 h-5 text-red-400" />,
      step: "STEP 1",
      title: "Gatekeeper Lock",
      description: "Authentication UIs and API endpoints remain encrypted and non-executable by default.",
      align: "left"
    },
    {
      icon: <Radio className="w-5 h-5 text-purple-400" />,
      step: "STEP 2",
      title: "Entropy Streaming",
      description: "Device streams real-time stochastic signals—physiological (pulse, micro-tremor) and kinetic (IMU motions).",
      align: "right"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
      step: "STEP 3",
      title: "Verification",
      description: "Entropy is verified on-edge and server-side for liveness and non-simulatability.",
      align: "left"
    },
    {
      icon: <Unlock className="w-5 h-5 text-green-400" />,
      step: "STEP 4",
      title: "Gate Opens",
      description: "Only upon verification does the login interface or execution environment render.",
      align: "right"
    },
    {
      icon: <LinkIcon className="w-5 h-5 text-indigo-400" />,
      step: "STEP 5",
      title: "Persistent Reality-Binding",
      description: "Unbreakable cryptographic bridge anchoring every action to the physical world. If presence stops, authority vanishes instantly.",
      align: "left"
    }
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-black to-black -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-8 py-3 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-lg font-medium mb-8">
            The Breakthrough
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Layer 0 <span className="text-cyan-400">(L0)</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            VAITION introduces the <span className="text-white">Continuity Layer</span>—a new infrastructure primitive that enforces a deterministic rule.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent transform md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${
              step.align === 'right' ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyan-500 rounded-full border-4 border-black transform -translate-x-1.5 md:-translate-x-1.5 z-10 box-content" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                step.align === 'right' ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <div className={`p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all group ${
                    step.align === 'right' ? 'md:items-end' : ''
                } flex flex-col`}>
                  <div className={`flex items-center gap-3 mb-3 ${
                      step.align === 'right' ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        {step.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fail-Stop Guarantee */}
        <div className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl bg-red-950/10 border border-red-900/30 text-center backdrop-blur-sm">
          <h3 className="text-red-400 font-bold mb-2">Fail-Stop Guarantee</h3>
          <p className="text-gray-400 text-sm">
            If presence stops, authority vanishes <span className="text-white">instantly</span>. There is no grace period, no fallback, no vulnerability window.
          </p>
        </div>
      </div>
    </section>
  );
}
