import { createFileRoute, Link } from "@tanstack/react-router";
import buffet from "@/assets/buffet.jpg";
import { PageHero, CTASection } from "@/components/site/Sections";
import { contact } from "@/lib/contact";

type FAQ = { q: string; a: string };
type Section = { title: string; faqs: FAQ[] };

const sections: Section[] = [
  {
    title: "Pricing & Investment",
    faqs: [
      {
        q: "💰 What does catering for my event typically cost?",
        a: "Our pricing is structured on a per-person basis, with the final investment determined by several key factors: total guest count, menu selections (Wood-Fired vs. Signature Live Fire Steakhouse), and desired service style (delivery, buffet, family-style, or plated). View our Surf & Turf / Steakhouse pricing or Wood-Fired dinner pricing for details based on your preferred experience.",
      },
      {
        q: "💡 What is the average cost of catering?",
        a: "There isn't a true 'average' cost — every event is different. We serve everything from simple setups with hot dogs and burgers to full wood-fired spreads with ribs and brisket, up to elevated steakhouse experiences with steak and lobster. Pricing typically starts around $13 per person and can go up to $125+ per person depending on the level of food, service, and overall experience. A casual backyard party with burgers and sides sits on the lower end, a full wood-fired buffet with brisket and multiple sides falls in the middle, and a plated steak-and-lobster experience with full staff and live grilling sits at the higher end. It all comes down to the experience you want your guests to have — and we build around that.",
      },
      {
        q: "📅 How is my event secured?",
        a: "A 35% initial payment, referred to as the Date Charge, is required to secure your event date. Once processed, your date is exclusively reserved.",
      },
      {
        q: "🔁 What is your rescheduling policy?",
        a: "In the event of unforeseen circumstances that make the original event date unworkable (such as severe weather or emergency conditions), the initial payment may be applied as a credit toward one future event within one year. The rescheduled event must retain a minimum of 80% of the original contracted value, based on availability.",
      },
    ],
  },
  {
    title: "Service Styles",
    faqs: [
      {
        q: "🍽 Buffet vs. Plated Catering — What's the difference?",
        a: "Buffet Service is efficient and cost-conscious for larger guest counts, allows guests to select their own portions and preferences, and keeps service flowing — best suited for events that prioritize flexibility, efficiency, and faster guest service. Plated (Seated) Service features individually plated, professionally served courses with elevated, restaurant-style presentation, and requires a higher level of staffing and coordination — best for weddings and events focused on a refined, structured dining experience. Pricing varies based on staffing requirements, with plated service representing the more premium offering.",
      },
      {
        q: "🛠️ What catering services are available?",
        a: "We offer a full range of service options: Delivery (food prepared and delivered ready-to-serve), Pickup (client pickup from our kitchen), Full-Service Catering (buffet, family-style, or plated), Onsite Grilling (live, chef-led cooking experience), and Carving Stations (ideal for weddings and upscale environments).",
      },
      {
        q: "Is onsite grilling available?",
        a: "Yes. Live grilling services are available as an enhancement to your event.",
      },
      {
        q: "Is staffing included?",
        a: "Professional service staff is available for buffet, family-style, and plated service at an additional cost.",
      },
    ],
  },
  {
    title: "Menu & Customization",
    faqs: [
      {
        q: "🔥 What defines your wood-fired style?",
        a: "Our wood-fired cooking reflects a proprietary approach developed over years of refinement — combining traditional slow-smoking techniques with bold seasoning profiles. This signature flavor is what we refer to as the BBQ Daddy style.",
      },
      {
        q: "Can menus be customized?",
        a: "Yes. All menus are flexible and built around your selections.",
      },
      {
        q: "Do you offer vegetarian or vegan options?",
        a: "Yes — including wood-fired jackfruit, plant-based proteins, and grilled vegetable options.",
      },
      {
        q: "Do you provide desserts and beverages?",
        a: "Yes — including house-made desserts and non-alcoholic beverage options.",
      },
      {
        q: "What are your minimums?",
        a: "Wood-Fired Menu: 20 guest minimum. Signature Live Fire Steakhouse Menu: 15 guest minimum. Private Chef Services: 4 guest minimum.",
      },
    ],
  },
  {
    title: "Tastings",
    faqs: [
      {
        q: "🍖 Are tastings available prior to booking?",
        a: "Yes, based on availability. Wood-Fired Tastings: $200 investment, designed to serve approximately 5 guests, includes 3 meats (excluding steakhouse cuts), 3 sides, and 2 appetizers or 1 dessert. Extra guests are $40 per person, additional meats $8.49 per selection, additional sides $5.99 per serving (minimum of 5). Available Wednesdays & Thursdays (Friday & Saturday availability varies).",
      },
      {
        q: "🥩 What's included in the Steakhouse Tasting Experience?",
        a: "Our Steakhouse Tastings give you a true preview of the full Qfire Steakhouse experience — not just samples, but an intimate private chef evening tailored to your event vision. Chef Terry personally comes to your home or location and prepares your selections fresh onsite, letting you experience the quality, presentation, timing, and atmosphere that make our steakhouse service unique. Your tasting includes 2 cold appetizers, 2 warm appetizers, 3 premium steakhouse entrées, 3 signature sides, and 2 desserts. Priced at $175 per person with a 2-person minimum. Call 877-848-7211 to schedule.",
      },
    ],
  },
  {
    title: "Locations & Logistics",
    faqs: [
      {
        q: "📍 Where is Qfire Catering based?",
        a: "We operate out of Phoenix, AZ and San Diego, CA — servicing events exclusively. We do not operate a dine-in restaurant.",
      },
      {
        q: "🚗 Do you travel for events?",
        a: "Yes. We provide catering services throughout Arizona and across San Diego County, California.",
      },
      {
        q: "🚚 Do you operate a food truck?",
        a: "No. Qfire Catering is a dedicated full-service catering company focused exclusively on private and corporate events.",
      },
      {
        q: "How far in advance should I book?",
        a: "As long as availability remains, events can be accommodated with as little as 36 hours' notice.",
      },
    ],
  },
  {
    title: "Common Considerations — And How We Address Them",
    faqs: [
      {
        q: "Food Quantity & Guest Satisfaction",
        a: "We carefully calculate portions and actively manage service to ensure all guests are fully accommodated.",
      },
      {
        q: "Food Quality & Temperature Control",
        a: "We utilize professional-grade equipment and timing protocols to maintain optimal food quality throughout service.",
      },
      {
        q: "Portion Control During Service",
        a: "Our staffed service approach ensures balanced distribution and prevents early depletion of menu items.",
      },
      {
        q: "Event Setup & Cleanup",
        a: "Our team manages all operational components, allowing clients to remain fully present during their event.",
      },
      {
        q: "Execution & Reliability",
        a: "With extensive event experience and structured processes in place, we operate with contingency planning to ensure smooth execution.",
      },
    ],
  },
];

const allFaqs = sections.flatMap((s) => s.faqs);

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Catering FAQ — Pricing, Tastings, Service & Booking | Qfire" },
      {
        name: "description",
        content:
          "Answers to the most common catering questions — pricing, buffet vs. plated, tastings, minimums, dietary needs, deposits, travel and booking across Phoenix Metro and San Diego County.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Qfire Catering" },
      {
        property: "og:description",
        content:
          "Pricing tiers, service styles, tastings, deposits, minimums and logistics — every question we hear, answered honestly.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Common questions,{" "}
            <span className="text-gold italic font-light">straight answers.</span>
          </>
        }
        subtitle="Pricing, tastings, service styles, logistics — everything you need to know before you book. If your question isn't here, call or email and we'll answer personally."
        image={buffet}
      />

      <section className="py-20 lg:py-28">
        <div className="container-luxe max-w-4xl space-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-3xl lg:text-4xl text-bone mb-8">
                <span className="text-gold italic font-light">{section.title}</span>
              </h2>
              <div className="divide-y divide-white/5 border-y border-white/5">
                {section.faqs.map((f) => (
                  <details key={f.q} className="group py-7">
                    <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                      <span className="text-lg lg:text-xl font-display text-bone group-hover:text-gold transition-colors">
                        {f.q}
                      </span>
                      <span className="text-gold text-3xl font-light transition-transform group-open:rotate-45 shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-5 text-bone/70 leading-relaxed text-base lg:text-lg font-light whitespace-pre-line">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-8 border-t border-white/5">
            <p className="text-bone/60 text-sm tracking-[0.18em] uppercase mb-4">
              Still have a question?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contact.phoneHref} className="btn-ghost">
                Call {contact.phone}
              </a>
              <Link to="/quote" className="btn-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
