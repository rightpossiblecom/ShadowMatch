import Link from "next/link";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Container } from "@/components/ui/container";

const SUPPORT_EMAIL = "support@shadowmatch.app";

const topics = [
  {
    title: "How to play",
    description:
      "Learn the core loop: match the shape to the correct shadow from three options—fast.",
  },
  {
    title: "Game modes",
    description:
      "Classic mode (lives) and Time Attack (score as much as possible in 60 seconds).",
  },
  {
    title: "Scoring & streaks",
    description:
      "Understand how accuracy, speed, and streaks influence your performance.",
  },
  {
    title: "Troubleshooting",
    description:
      "Fix common issues like lag, crashes, or missing audio with quick device checks.",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">Help Center</h1>
            <p className="mt-4 text-slate-600 leading-7">
              Need help with ShadowMatch? Start with the topics below. If you can’t
              find what you need, reach out at{" "}
              <a className="text-orange-700 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
            {topics.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-slate-900">{t.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{t.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-xl font-bold tracking-tight">Contact support</h2>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              For bug reports, include your device model, OS version, and what you
              were doing when the issue happened. Screenshots help.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Email {SUPPORT_EMAIL}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact page
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
