import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — Qfire Catering" },
      { name: "description", content: "Qfire Catering's commitment to digital and event accessibility for all guests." },
      { property: "og:title", content: "Accessibility — Qfire Catering" },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-ink">
      <div className="container-luxe max-w-3xl">
        <div className="eyebrow mb-6">Accessibility</div>
        <h1 className="heading-lg text-bone mb-10">Accessibility Statement</h1>

        <p className="text-bone/75 leading-relaxed mb-10">
          Qfire Catering is committed to making our website and our events
          accessible to every guest. We target conformance with WCAG 2.1 Level
          AA on this site and review accessibility regularly.
        </p>

        {[
          {
            h: "On the website",
            p: "Semantic HTML, keyboard-navigable interactions, high-contrast typography, descriptive alt text on imagery, and focus-visible states throughout.",
          },
          {
            h: "At your event",
            p: "Buffet stations and food displays can be configured at seated-guest height. Allergen-aware menus, dietary substitutions, and special meal accommodations are standard at no additional cost.",
          },
          {
            h: "Dietary accommodations",
            p: "Gluten-free, vegetarian, vegan, kosher-style, halal-style, and severe-allergy protocols available. Tell us in your inquiry.",
          },
          {
            h: "Feedback",
            p: "If you encounter an accessibility barrier on this site or at one of our events, email Eat@QfireCatering.com or call (877) 848-7211. We respond within 2 business days.",
          },
        ].map((s) => (
          <div key={s.h} className="mb-10">
            <h2 className="heading-sm text-bone mb-3">{s.h}</h2>
            <p className="text-bone/75 leading-relaxed">{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
