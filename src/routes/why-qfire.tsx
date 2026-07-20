import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import buffet from "@/assets/buffet.jpg";
import { PageHero, CTASection } from "@/components/site/Sections";
import { DefinitiveContent } from "@/components/site/DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";

export const Route = createFileRoute("/why-qfire")({
  head: () => ({
    meta: [
      { title: "Why Qfire — Luxury Catering with Stress-Free Execution" },
      { name: "description", content: "Why luxury hosts choose Qfire: Food Network pedigree, white-glove hospitality, custom menus, full-service staffing, licensed bar program, rentals coordination and 2,500+ events of disciplined execution across Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Why Qfire" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/why-qfire" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/why-qfire" }],
  }),
  component: WhyPage,
});

const reasons = [
  { title: "Stress-Free Execution", body: "From your first call to the final breakdown, one team handles everything. You enjoy your event." },
  { title: "Professional Hospitality", body: "Uniformed servers, captains, chefs and bartenders. Trained, polished and unmissable in the best way." },
  { title: "Beautiful Presentation", body: "Plates, platters and stations designed to be photographed — and remembered." },
  { title: "Food Network Pedigree", body: "Chef Terry has competed on Cutthroat Kitchen, BBQ Brawl and Camp Cutthroat. The kitchen is led with real range." },
  { title: "Custom Menus", body: "Every menu is built around your guests, your venue and your vision. Nothing is templated." },
  { title: "Full-Service Catering", body: "Setup, service, breakdown. Rentals coordinated. Bar program managed. One vendor, one invoice." },
  { title: "Experienced Staff", body: "Veteran captains and servers who've run hundreds of events together. They show up early and leave it spotless." },
  { title: "On-Site Live-Fire Grilling", body: "We bring the fire to your venue. Guests gather. Memories form." },
  { title: "Licensed Bartending", body: "Insured bar service with full bar packages and custom cocktails." },
  { title: "Rentals Handled", body: "Linens, china, glassware, chafers — sourced, set and struck." },
  { title: "Thousands of Happy Clients", body: "Over 2,000 events catered across Phoenix Metro and San Diego County." },
  { title: "One Standard", body: "Whether it's twelve guests or three hundred — the same standard, the same chef, the same fire." },
];

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Qfire"
        title={<>Hospitality you can feel, <span className="text-gold italic font-light">the moment we arrive.</span></>}
        subtitle="Twelve reasons clients hire Qfire — and twelve reasons they call us back."
        image={buffet}
      />
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {reasons.map((r, i) => (
              <div key={i} className="bg-ink p-8 lg:p-10">
                <Check className="size-5 text-gold mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-display text-bone mb-3">{r.title}</h3>
                <p className="text-sm text-bone/65 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DefinitiveContent topic="Why Qfire Catering" region="luxury hosts in Phoenix & San Diego" {...definitiveCopy.whyQfire} />
      <CTASection />
    </>
  );
}
