import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Container } from "@/components/ui/container";

const SUPPORT_EMAIL = "support@shadowmatch.app";
const LAST_UPDATED = "March 25, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container className="max-w-3xl">
          <header className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-3 text-sm text-slate-600">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="space-y-8 text-sm leading-7 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">Agreement</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of
                ShadowMatch (the "Service"). By downloading, accessing, or using
                the Service, you agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree to these Terms, do not use the Service. For
                questions, contact{" "}
                <a className="text-orange-700 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">Eligibility</h2>
              <p>
                You may use the Service only if you can form a binding contract
                with us and are not prohibited from using the Service under
                applicable law. If you are using the Service on behalf of an
                organization, you represent that you have authority to bind that
                organization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                License and Acceptable Use
              </h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable
                license to use the Service for your personal, non-commercial use,
                subject to these Terms.
              </p>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reverse engineer, decompile, or attempt to extract source code.</li>
                <li>Cheat, exploit bugs, or use automation that harms fair play.</li>
                <li>Interfere with the Service or attempt unauthorized access.</li>
                <li>Use the Service in a way that violates applicable law.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Gameplay, Scores, and Progress
              </h2>
              <p>
                Scores, progress, and achievements may be stored locally on your
                device or in associated services depending on the version of the
                app. We do not guarantee that progress will always be available,
                and we are not responsible for loss of progress due to device
                changes, reinstalls, or technical issues.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Updates and Changes
              </h2>
              <p>
                We may modify, suspend, or discontinue the Service (in whole or in
                part) at any time. We may also release updates that add, modify, or
                remove features. Continued use of the Service after an update may
                require acceptance of updated Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Intellectual Property
              </h2>
              <p>
                The Service, including all content, visuals, gameplay mechanics,
                and branding, is owned by us or our licensors and is protected by
                intellectual property laws. You may not use our trademarks,
                branding, or assets without our prior written permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Disclaimers
              </h2>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis to
                the fullest extent permitted by law. We disclaim all warranties of
                any kind, whether express or implied, including implied warranties
                of merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, we will not be liable for
                any indirect, incidental, special, consequential, or punitive
                damages, or any loss of profits or revenues, arising out of or
                related to your use of the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">Termination</h2>
              <p>
                We may suspend or terminate your access to the Service at any time
                if we reasonably believe you have violated these Terms, or if we
                discontinue the Service. You may stop using the Service at any
                time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Contact
              </h2>
              <p>
                If you have questions or concerns about these Terms, contact{" "}
                <a className="text-orange-700 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
