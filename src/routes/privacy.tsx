import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Qfire Catering" },
      { name: "description", content: "How Qfire Catering collects, uses, and protects information from visitors and clients." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy — Qfire Catering" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-ink">
      <div className="container-luxe max-w-3xl prose-luxe">
        <div className="eyebrow mb-6">Legal</div>
        <h1 className="heading-lg text-bone mb-10">Privacy Policy</h1>
        <p className="text-bone/60 mb-12">Last updated: January 2026.</p>

        <Section title="What we collect">
          When you request a quote or contact us, we collect the name, email,
          phone number, event details, and any message you send. That's it. We
          don't use third-party trackers to build a marketing profile on you.
        </Section>

        <Section title="How we use it">
          Only to respond to your inquiry, send a proposal, and coordinate your
          event. We don't sell your information. We don't rent it. We don't
          share it with anyone outside our team unless required by law.
        </Section>

        <Section title="How long we keep it">
          Inquiry data is retained for up to 24 months. Booked-client records
          are retained for 7 years to satisfy tax and accounting requirements.
        </Section>

        <Section title="Cookies">
          We use minimal first-party cookies for site functionality. No
          advertising or cross-site tracking cookies are set by us.
        </Section>

        <Section title="Your rights">
          You can request deletion of your inquiry data at any time by emailing
          Eat@QfireCatering.com. We will confirm deletion within 30 days.
        </Section>

        <Section title="Contact">
          Questions about this policy? Email Eat@QfireCatering.com or call (877) 848-7211.
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="heading-sm text-bone mb-4">{title}</h2>
      <p className="text-bone/75 leading-relaxed">{children}</p>
    </div>
  );
}
