import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type RegionKey = "phoenix" | "san-diego";

const REGION_PRICING: Record<RegionKey, { buffet: string; family: string; plated: string; region: string }> = {
  phoenix: { buffet: "$74", family: "$89", plated: "$128", region: "Phoenix Metro" },
  "san-diego": { buffet: "$79", family: "$94", plated: "$133", region: "San Diego County" },
};

function buildFaqs(regionKey: RegionKey) {
  const p = REGION_PRICING[regionKey];
  return [
    {
      q: `How much does the ${p.region} Signature Live Fire Steakhouse Catering Experience cost per guest?`,
      a: `Our ${p.region} pricing starts at ${p.buffet} per guest for the Full-Service Buffet, ${p.family} per guest for Family Style, and ${p.plated} per guest for Plated Signature Live Fire Steakhouse Catering Service. Final pricing depends on protein selections, guest count, venue, and any add-ons like bar service or premium upgrades.`,
    },
    {
      q: "What's included in the per-guest price?",
      a: "Every package includes a live charcoal Grill Master, premium dinnerware, polished silver flatware, cloth napkins, glassware, professional buffet décor, a chilled starter, hot hors d'oeuvre, three premium proteins, three gourmet sides, two desserts, and two non-alcoholic beverages. No hidden setup or service fees.",
    },
    {
      q: "Is there a minimum guest count?",
      a: "The Signature Live Fire Steakhouse Experience is built for events of 30 guests or more. For intimate dinners under 30, we'll build a custom proposal — reach out and we'll quote your event directly.",
    },
    {
      q: "Can you accommodate dietary restrictions and allergies?",
      a: "Yes. Every menu can be adapted for vegetarian, vegan, gluten-free, dairy-free, and Halal needs. For serious allergies (peanut, tree-nut, shellfish), we run a dedicated prep line and label each plate at the pass.",
    },
    {
      q: "How far in advance should we book the live-fire steakhouse experience Experience?",
      a: "Peak Saturdays (March–November) typically book 6–12 months out. Off-peak weeknights and Sundays can often be accommodated inside 60–90 days. Premium dates lock in with a 35% Date Charge applied to your final invoice.",
    },
    {
      q: "Is bar service included?",
      a: "Bar service is available as an add-on. We offer licensed bartenders, signature cocktails, beer and wine programs, mixers, ice, and glassware. We can run the bar fully or partner with your venue's beverage program.",
    },
    {
      q: "Do you upcharge for premium cuts like Beef Tenderloin?",
      a: "Beef Tenderloin carries a +$5 per steak upcharge over the standard package. All other cuts on the menu — Ribeye, New York Strip, T-Bone, Top Sirloin, Filet Mignon, Prime Rib, Tri-Tip — are included at the listed package price. Additional protein selections beyond three are +$32 per serving.",
    },
    {
      q: `What ${p.region} areas do you serve?`,
      a:
        regionKey === "phoenix"
          ? "We serve the entire Phoenix Metro — Phoenix, Scottsdale, Paradise Valley, Mesa, Chandler, Gilbert, Tempe, Glendale, Peoria, Queen Creek, Ahwatukee, Anthem, Cave Creek, Carefree, and surrounding communities."
          : "We serve all of San Diego County — La Jolla, Del Mar, Rancho Santa Fe, Coronado, Carmel Valley, Encinitas, Solana Beach, Carlsbad, Oceanside, Poway, Chula Vista, Downtown San Diego, and surrounding coastal communities.",
    },
  ];
}

export function SteakhouseMenuFAQ({ regionKey }: { regionKey: RegionKey }) {
  const faqs = buildFaqs(regionKey);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20 lg:py-28 border-t border-white/5">
      <div className="container-luxe max-w-4xl">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center mb-5 text-gold">Luxury Steakhouse Dining Experience FAQs</p>
          <h2 className="heading-md text-bone">Questions about pricing, dietary needs & booking.</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
              <AccordionTrigger className="text-left text-bone font-display text-lg lg:text-xl hover:no-underline hover:text-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-bone/70 leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
