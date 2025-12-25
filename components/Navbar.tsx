import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          VAITION
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link href="#problem" className="hover:text-white transition-colors">Problem</Link>
          <Link href="#solution" className="hover:text-white transition-colors">Solution</Link>
          <Link href="#technology" className="hover:text-white transition-colors">Technology</Link>
          <Link href="#team" className="hover:text-white transition-colors">Team</Link>
        </div>

        <button className="bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-cyan-300 transition-colors">
          Contact Investors
        </button>
      </div>
    </nav>
  );
}
