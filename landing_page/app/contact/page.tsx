import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Container } from "@/components/ui/container";

const SUPPORT_EMAIL = "support@shadowmatch.app";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
            <p className="mt-4 text-slate-600 leading-7">
              We’d love to hear from you—whether it’s feedback, a bug report, or a
              question about ShadowMatch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl">
            <div className="rounded-2xl border border-white/60 bg-white/60 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Email</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The fastest way to reach us is email. We typically respond within a
                few business days.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm">
              <h2 className="text-xl font-semibold">What to include</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-200 list-disc pl-5">
                <li>Your device model and OS version</li>
                <li>App version (if available)</li>
                <li>What happened, and what you expected</li>
                <li>Steps to reproduce (if you can)</li>
                <li>Screenshots or screen recordings (optional)</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
