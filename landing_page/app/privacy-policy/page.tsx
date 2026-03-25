import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Container } from "@/components/ui/container";

const SUPPORT_EMAIL = "support@shadowmatch.app";
const LAST_UPDATED = "March 25, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container className="max-w-3xl">
          <header className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-sm text-slate-600">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="space-y-8 text-sm leading-7 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
              <p>
                This Privacy Policy explains how ShadowMatch ("ShadowMatch", "we",
                "us", or "our") collects, uses, and shares information when you use
                our mobile game and related services (collectively, the "Service").
              </p>
              <p>
                If you have questions about this policy, contact us at{" "}
                <a className="text-orange-700 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Information We Collect
              </h2>
              <p>
                The information we collect depends on how you use the Service and
                the settings on your device.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900">Gameplay &amp; performance data</h3>
                <p>
                  We may collect gameplay metrics such as score, accuracy, streaks,
                  session duration, and level progression to provide core gameplay
                  features and improve balance and difficulty tuning.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900">Device &amp; diagnostics data</h3>
                <p>
                  We may collect basic device information (such as device model,
                  OS version, language, and app version) and diagnostics (such as
                  crash reports and performance logs) to keep the Service stable
                  and fix bugs.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900">Support communications</h3>
                <p>
                  If you contact us, we will receive the information you include
                  in your message (for example, your email address and a
                  description of the issue).
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                How We Use Information
              </h2>
              <p>We use information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide and maintain the Service.</li>
                <li>Personalize gameplay (for example, difficulty progression).</li>
                <li>Measure performance and improve game design and user experience.</li>
                <li>Detect, prevent, and address technical issues and abuse.</li>
                <li>Respond to support requests and communicate with you.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Sharing of Information
              </h2>
              <p>
                We do not sell your personal information. We may share information
                in limited circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-semibold text-slate-900">Service providers</span>{" "}
                  that help us operate the Service (for example, analytics or crash
                  reporting), under contractual obligations consistent with this
                  policy.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Legal and safety</span>{" "}
                  when required by law or to protect rights, safety, and the
                  integrity of the Service.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Business transfers</span>{" "}
                  if we are involved in a merger, acquisition, financing, or sale
                  of assets, information may be transferred as part of that
                  transaction.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Data Retention
              </h2>
              <p>
                We retain information for as long as necessary to provide the
                Service, comply with legal obligations, resolve disputes, and
                enforce agreements. Crash logs and diagnostics are typically
                retained for a limited period and then deleted or anonymized.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Children’s Privacy
              </h2>
              <p>
                ShadowMatch is designed to be simple and accessible, including for
                younger players. We do not knowingly collect personal information
                from children in a manner that violates applicable law. If you
                believe a child has provided personal information to us, contact{" "}
                <a className="text-orange-700 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>{" "}
                and we will take appropriate steps.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Your Choices
              </h2>
              <p>
                Depending on your location, you may have rights regarding your
                information (such as access, deletion, or correction). To request
                help with these rights, email{" "}
                <a className="text-orange-700 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
              <p>
                You can also control certain permissions (like notifications) from
                your device settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. If we make
                changes, we will update the "Last updated" date above. Continued
                use of the Service after changes means you accept the updated
                policy.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
