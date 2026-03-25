"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-12">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image
                  src="/app_logo.png"
                  alt="ShadowMatch Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                ShadowMatch
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Boost your visual recognition & pattern matching skills with ShadowMatch. 
              The ultimate fast-thinking shadow matching game.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="#features" className="hover:text-orange-600">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-orange-600">How It Works</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-orange-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-600">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="/help" className="hover:text-orange-600">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-orange-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} ShadowMatch. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social Icons could go here */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
