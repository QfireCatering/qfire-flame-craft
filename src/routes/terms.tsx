import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Qfire Catering" },
      { name: "description", content: "Terms governing use of the Qfire Catering website and catering services." },
      { property: "og:title", content: "Terms of Service — Qfire Catering" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-ink">
      <div className="container-luxe max-w-3xl">
        <div className="eyebrow mb-6">Legal</div>
        <h1 className="heading-lg text-bone mb-10">Terms of Service</h1>
        <p className="text-bone/60 mb-12">Last updated: January 2026.</p>

        {[
          {
            h: "Acceptance",
            p: "By using qfirecatering.com or booking with Qfire Catering LLC, you agree to these terms. If you don't agree, please don't use the site.",
          },
          {
            h: "Quotes & Bookings",
            p: "Quotes are valid for 30 days. Dates are confirmed only on receipt of a signed contract and a 35% non-refundable Date Retainer, which secures your event date and is applied directly to your final invoice. Final guest counts are due 14 days before the event.",
          },
          {
            h: "Cancellation",
            p: "Retainers are non-refundable. Cancellations within 30 days of the event are responsible for 75% of the contracted total. Within 14 days, 100%.",
          },
          {
            h: "Liability",
            p: "Qfire Catering carries general liability insurance. We are not responsible for venue restrictions, weather-related issues, or guest-supplied items consumed during the event.",
          },
          {
            h: "Website Use",
            p: "Content on this site is owned by Qfire Catering LLC. You may not reproduce, republish, or use it commercially without written permission.",
          },
          {
            h: "Governing Law",
            p: "These terms are governed by the laws of the State of Arizona. Disputes are resolved in Maricopa County courts.",
          },
          {
            h: "Contact",
            p: "Questions? Eat@QfireCatering.com · (877) 848-7211.",
          },
        ].map((s) => (
          <div key={s.h} className="mb-12">
            <h2 className="heading-sm text-bone mb-4">{s.h}</h2>
            <p className="text-bone/75 leading-relaxed">{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
