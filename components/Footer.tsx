import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 p-12 rounded-3xl bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure the <span className="text-cyan-400">Future?</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-8">
              Join us in building the ontological security layer that will define the next era of <span className="text-white">human-machine interaction</span>.
            </p>
            
            <div className="mt-8 text-sm text-gray-500">
              Contact: <a href="mailto:vadim@vaition.com" className="text-cyan-400 hover:underline">vadim@vaition.com</a>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-3xl -z-0" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center font-bold text-white text-xs">V</div>
            <span className="font-bold text-white tracking-widest">VAITION</span>
          </div>

          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-2 h-2 rounded-full bg-cyan-900 border border-cyan-500/50" />
            <span>No physical human presence, no digital authority.</span>
          </div>

          <div>
            © 2025 VAITION. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
