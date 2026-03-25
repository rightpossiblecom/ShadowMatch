"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <Container className="relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.55, ease: "easeOut" }}
           className="mx-auto max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600">
            Now Available for Mobile
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Recognition, <br />
            <span className="text-orange-600">Not Guessing.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
            ShadowMatch is a fast-thinking visual puzzle game. Boost your visual recognition 
            skills by matching shapes to their shadows in seconds.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#download" className="bg-orange-600 hover:bg-orange-500 shadow-orange-200/50">
              Get Started
            </Button>
            <Button href="#how-it-works" variant="outline">
              How it works
            </Button>
          </div>
        </motion.div>
      </Container>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -z-10 translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-20 pointer-events-none">
        <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-orange-400 to-sky-400" />
      </div>
    </section>
  );
}
