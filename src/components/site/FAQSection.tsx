import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQItem { q: string; a: string }

export interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  faqs: FAQItem[];
  /** Emit FAQPage JSON-LD. Defaults true. Set false if the page already has FAQPage schema elsewhere to avoid duplicates. */
  emitSchema?: boolean;
  className?: string;
}

/**
 * Reusable FAQ section with built-in FAQPage JSON-LD.
 * Premium, accordion-driven, matches the luxury dark theme.
 */
export function FAQSection({
  eyebrow = "Frequently Asked",
  title = "Answers, before you ask.",
  intro,
  faqs,
  emitSchema = true,
  className = "",
}: FAQSectionProps) {
  if (!faqs.length) return null;
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
    <section className={`py-20 lg:py-28 ${className}`}>
      <div className="container-luxe max-w-4xl">
        <div className="text-center mb-12">
          <div className="eyebrow justify-center mb-5 text-gold">{eyebrow}</div>
          <h2 className="heading-md text-bone">{title}</h2>
          {intro && <p className="mt-5 text-bone/65 text-base font-light max-w-2xl mx-auto">{intro}</p>}
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
      {emitSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </section>
  );
}
