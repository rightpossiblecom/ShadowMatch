"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";

const faqs = [
  {
    question: "What exactly is ShadowMatch?",
    answer: "ShadowMatch is a fast-thinking visual puzzle game where you have to match a shape to its correct shadow from three different options as quickly as possible. It is designed to boost visual recognition and pattern matching skills.",
  },
  {
    question: "How many levels are there in ShadowMatch?",
    answer: "The game features over 100 progressive levels. As you progress, the shapes become more complex, rotate more frequently, and the decision time is reduced.",
  },
  {
    question: "Are there both Classic and Time Attack modes?",
    answer: "Yes! Classic mode allows for 3 lives and endless rounds, while Time Attack mode challenges you to get as many correct answers as possible in 60 seconds.",
  },
  {
    question: "Is this game suitable for children?",
    answer: "Absolutely. ShadowMatch is excellent for developing visual recognition and spatial awareness in children, but it's equally challenging and fun for adults in higher levels.",
  },
  {
    question: "Does it work without an internet connection?",
    answer: "Yes, once downloaded, ShadowMatch can be played entirely offline, making it perfect for travel or quick breaks.",
  },
  {
    question: "Is the app free to play?",
    answer: "Yes, the core gameplay experience is entirely free. We focus on recognition and fun without intrusive barriers.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white/50">
      <Container className="max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-slate-50 p-6 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
