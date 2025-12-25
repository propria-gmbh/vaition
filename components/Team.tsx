export function Team() {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 text-xs font-medium mb-6">
            Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-cyan-400">Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            World-class expertise in cryptography, security systems, and enterprise operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMember 
            initials="VT"
            name="Vadim Tsyvian"
            role="Founder & CEO"
            description="Researcher in Ontological Cryptography; lead architect of the HISPU protocol and Continuity Layer."
          />
          <TeamMember 
            initials="SK"
            name="Sergii Kornielev"
            role="CTO"
            description="30+ years of experience in Security Systems Architecture and large-scale digital defense."
          />
          <TeamMember 
            initials="ID"
            name="Ilja Disterheft"
            role="COO"
            description="20+ years in international complex technology project management and operational scaling."
          />
          <TeamMember 
            initials="MS"
            name="Prof. Michael Segal"
            role="Scientific Consultant"
            description="Ben-Gurion University; world-renowned expert in Distributed Systems and Network Security with 200+ publications."
          />
        </div>
      </div>
    </section>
  );
}

function TeamMember({ initials, name, role, description }: { initials: string, name: string, role: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-center group">
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-xl font-bold text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
        {initials}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-xs font-bold text-cyan-400 mb-4 uppercase tracking-wide">{role}</p>
      <p className="text-xs text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
