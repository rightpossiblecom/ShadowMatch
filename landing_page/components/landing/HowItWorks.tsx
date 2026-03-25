"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const steps = [
  {
    number: "01",
    title: "See the Shape",
    description: "A clear, colored shape appears in the center of the screen.",
  },
  {
    number: "02",
    title: "Find the Shadow",
    description: "Analyze the three shadow silhouettes displayed below.",
  },
  {
    number: "03",
    title: "Tap to Match",
    description: "Select the correct shadow instantly to move to the next round.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <Container>
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Matching as easy as 1-2-3
        </h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative text-center group"
            >
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-full h-[1px] bg-slate-100 -z-10 group-hover:bg-orange-100 transition-colors" />
              )}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-2xl font-bold text-orange-600 ring-8 ring-white shadow-xl transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 tracking-tight">{step.title}</h3>
              <p className="px-4 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
