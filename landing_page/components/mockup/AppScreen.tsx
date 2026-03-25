"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AppScreen() {
  return (
    <div className="relative mx-auto max-w-[320px] overflow-hidden rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl transition-transform hover:scale-105 active:scale-100">
      {/* Mockup Notch */}
      <div className="absolute top-0 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
      
      {/* Game Content */}
      <div className="relative h-[640px] w-full bg-white overflow-hidden p-6 pt-12">
        {/* Game Header */}
        <div className="mb-12 flex justify-between items-center px-4">
           <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Score: 1250</div>
           <div className="flex gap-1">
             <span className="text-red-500">❤️</span>
             <span className="text-red-500">❤️</span>
             <span className="text-red-500">❤️</span>
           </div>
        </div>
        
        {/* Main Shape */}
        <div className="mb-20 flex justify-center">
           <div className="h-40 w-40 flex items-center justify-center p-4">
              <div className="h-28 w-28 bg-orange-500 rounded-xl transform rotate-12 shadow-inner" />
           </div>
        </div>
        
        {/* Shadow Options */}
        <div className="bg-slate-50/50 rounded-3xl p-6 py-10 space-y-8">
           <p className="text-center font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">Pick the Matching Shadow</p>
           <div className="grid grid-cols-3 gap-4">
             {/* Option 1: Incorrect */}
             <div className="h-16 w-16 bg-slate-200 rounded-xl transform rotate-45 border-2 border-transparent hover:border-slate-300 transition-colors" />
             {/* Option 2: Correct */}
             <div className="h-16 w-16 bg-slate-300 rounded-xl transform rotate-12 ring-4 ring-orange-200 ring-offset-2 ring-offset-white border-2 border-orange-500 shadow-lg" />
             {/* Option 3: Incorrect */}
             <div className="h-16 w-16 bg-slate-200 rounded-xl transform scale-y-125 border-2 border-transparent hover:border-slate-300 transition-colors" />
           </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 text-center">
            <div className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
               Perfect Match!
            </div>
        </div>
      </div>
    </div>
  );
}
