"use client";

import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/container";

export const features = [
  {
    title: "Fast-Thinking Puzzles",
    description: "Every second counts! Analyze shapes and shadows in seconds for quick, addictive gaming sessions.",
    icon: "⚡",
  },
  {
    title: "Challenging Levels",
    description: "100 levels of increasing difficulty. Progress through stars, arrows, and complex irregular shapes.",
    icon: "🏆",
  },
  {
    title: "Classic & Time Attack",
    description: "Whether you prefer lives-based gameplay or beating the clock, we have a mode for you.",
    icon: "🎮",
  },
  {
    title: "Instant Feedback",
    description: "Soft success sounds, subtle animations, and clear visual cues for every correct and wrong Answer.",
    icon: "✨",
  },
  {
    title: "Progressive Difficulty",
    description: "Smooth learning curve with increasing shape complexity and reduced decision time.",
    icon: "📈",
  },
  {
    title: "Clean Design",
    description: "A minimalist, playful aesthetic designed to keep you focused on recognition, not guessing.",
    icon: "💎",
  },
];

const listAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-pretty">
            Powerful features to test your visual recognition.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            More than just a game, ShadowMatch is a visual training tool for your brain.
          </p>
        </div>
        
        <motion.div
          variants={listAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemAnimation}
              className="group rounded-2xl border border-white/50 bg-white/60 p-8 shadow-sm transition-all hover:bg-white hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
