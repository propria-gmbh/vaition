export function TheCrisis() {
  return (
    <section id="problem" className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6">
          The Crisis
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Ontological <span className="text-red-500">Crisis</span>
        </h2>
        
        <p className="max-w-3xl mx-auto text-gray-400 mb-16 text-lg">
          The digital world is facing an <span className="text-white">ontological failure</span>, not just a security one. Current security verifies <span className="text-white">who you claim to be</span> (Identity), but not whether a <span className="text-cyan-400">living human is physically present right now</span> (Presence).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CrisisCard 
            title="Identity ≠ Presence"
            description="A stolen password, a compromised token, or a deepfake can all pass identity verification. None of them prove a human is actually there."
          />
          <CrisisCard 
            title="AI Scales Faster"
            description="In the age of AI, code-based authority can be simulated faster and cheaper than human action. Bots outnumber humans on critical infrastructure."
          />
        </div>
      </div>
    </section>
  );
}

function CrisisCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-left hover:border-red-500/30 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
