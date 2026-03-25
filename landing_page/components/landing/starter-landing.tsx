"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQ } from "@/components/landing/FAQ";
import { AppScreen } from "@/components/mockup/AppScreen";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function StarterLanding() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-orange-600/30 selection:text-orange-950">
      <Navbar />
      
      <main>
        <div className="relative pb-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <Hero />
            <div className="hidden lg:flex justify-center pr-20 pt-48">
              <AppScreen />
            </div>
        </div>
        
        <Features />
        
        <HowItWorks />
        
        <section id="download" className="py-24 bg-slate-900 overflow-hidden relative">
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Ready to test your <br />
                <span className="text-orange-400">visual recognition?</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-8">
                ShadowMatch is free, addictive, and fast-paced. 
                Whether you have 30 seconds or 30 minutes, 
                it's the perfect way to sharpen your mind.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <Button href="#" className="bg-white text-slate-900 border-none hover:bg-slate-100 min-w-[200px] h-14">
                    App Store
                 </Button>
                 <Button href="#" className="bg-orange-600 text-white border-none hover:bg-orange-500 min-w-[200px] h-14">
                    Play Store
                 </Button>
              </div>
            </div>
          </Container>
          
          <div className="absolute top-1/2 left-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl w-full h-[30rem] bg-orange-600 rounded-full" />
        </section>

        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}