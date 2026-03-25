"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
            <Image
              src="/app_logo.png"
              alt="ShadowMatch Logo"
              fill
              className="object-contain transform transition-transform group-hover:scale-110"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Shadow<span className="text-orange-600">Match</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">How It Works</Link>
          <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">FAQ</Link>
        </div>

        <div>
          <Link 
            href="#download"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
          >
            Play Now
          </Link>
        </div>
      </Container>
    </nav>
  );
}
