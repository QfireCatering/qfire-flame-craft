import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, UtensilsCrossed, Beef, Candy } from "lucide-react";
import steakhouseBackyard from "@/assets/steakhouse-backyard.png.asset.json";
import steakhousePlatter from "@/assets/steakhouse-platter.png.asset.json";
import steakhouseMenu from "@/assets/steakhouse-menu.png.asset.json";
import privatePartySetting from "@/assets/private-party-setting.png.asset.json";
import weddingCouple from "@/assets/wedding-couple.png.asset.json";
import { TrustBar } from "./TrustBar";
import { FAQSection } from "./FAQSection";

export type RegionCopy = {
  city: string;            // "Phoenix" | "San Diego"
  region: string;          // "Phoenix Metro" | "San Diego County"
  serviceAreas: string;    // long form list
  shortAreas: string[];    // chips
};

export function SteakhouseExperiencePage({ r }: { r: RegionCopy }) {
  const isSD = r.city === "San Diego";
  const buffet = isSD ? "$79" : "$74";
  const family = isSD ? "$94" : "$89";
  const plated = isSD ? "$128" : "$133";
  const steakFaqs = [
    { q: `How much does the ${r.region} live-fire steakhouse experience cost?`, a: `Pricing starts at ${buffet} per guest for the chef-attended buffet, ${family} family style, and ${plated} for plated service. Every package includes a live charcoal Grill Master, three premium proteins, three gourmet sides, two desserts, polished dinnerware, and full setup and cleanup.` },
    { q: `What cuts of steak do you offer?`, a: `Ribeye, New York strip, T-bone, filet mignon, top sirloin, prime rib, tri-tip and picanha — charcoal-grilled over live fire to order. Beef tenderloin is available as a +$5 per steak upgrade. Surf and turf options pair steak with lobster tails, salmon, snapper, or bacon-wrapped scallops.` },
    { q: `Is everything grilled fresh on-site?`, a: `Yes. We bring the live charcoal grill to your venue and cook every steak to order in front of your guests. Nothing is reheated, nothing sits — the aroma alone changes the energy of the room.` },
    { q: `Can guests choose their steak temperature?`, a: `Yes. For plated and family-style service we collect temperature preferences in advance or fire to order tableside. For buffet service our Grill Master cooks a continuous rotation of rare through well-done so every guest gets exactly what they want.` },
    { q: `Is this a buffet or a plated experience?`, a: `Both — you choose. The buffet is chef-attended with a live grilling station and feels like an upscale steakhouse line. Family style sends shared platters down the center of each table. Plated service is fully coursed, restaurant-style, with captains and synchronized service.` },
    { q: `Can you accommodate dietary restrictions?`, a: `Yes. Every menu adapts for vegetarian, vegan, gluten-free, dairy-free, and Halal needs. For peanut, tree-nut and shellfish allergies we run a dedicated prep line and label each plate at the pass.` },
    { q: `What's the minimum guest count?`, a: `The live-fire steakhouse experience is built for events of 30 or more. For intimate ${r.city} dinners under 30 we'll build a custom proposal — reach out and we'll quote it directly.` },
    { q: `How far in advance should we book?`, a: `${r.region} peak Saturdays (spring through fall) typically book 6–12 months out. Off-peak weeknights and Sundays can often be accommodated inside 60–90 days. A 35% Date Charge locks your date and is applied to your final invoice.` },
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: r.region, item: `/${isSD ? "san-diego" : "phoenix"}` },
      { "@type": "ListItem", position: 3, name: "Signature Live Fire Steakhouse Catering", item: `/steakhouse-experience-${isSD ? "san-diego" : "phoenix"}` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Live-Fire Steakhouse Catering",
    provider: { "@type": "LocalBusiness", name: "Qfire Catering", telephone: "+1-877-848-7211" },
    areaServed: { "@type": "AdministrativeArea", name: r.region },
    description: `Premium live-fire steakhouse catering across ${r.region} — charcoal-grilled ribeye, filet mignon, prime rib, salmon and surf & turf served under candlelight with white-glove service.`,
    offers: [
      { "@type": "Offer", name: "Buffet", price: buffet.replace("$", ""), priceCurrency: "USD", description: "Chef-attended buffet with live charcoal grill" },
      { "@type": "Offer", name: "Family Style", price: family.replace("$", ""), priceCurrency: "USD", description: "Shared platters at every table" },
      { "@type": "Offer", name: "Plated Service", price: plated.replace("$", ""), priceCurrency: "USD", description: "Coursed, restaurant-style plated dinner" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* HERO (dark) */}
      <section className="relative min-h-[82vh] flex items-end overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img src={steakhouseBackyard.url} alt={`Charcoal-grilled steaks at a luxury ${r.region} catered event`} className="absolute inset-0 w-full h-full object-cover slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-transparent" />
        </div>
        <div className="container-luxe relative z-10 pt-40 pb-24 lg:pb-32">
          <div className="eyebrow mb-8">Signature Live Fire Steakhouse Catering · {r.region}</div>
          <h1 className="heading-xl text-bone max-w-4xl">
            The Surf &amp; Turf Signature Live Fire Steakhouse Catering Experience<br />
            <span className="text-gold/90 italic font-light">brought to {r.city}.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-bone/75 leading-relaxed font-light">
            Charcoal-grilled ribeye, filet mignon, prime rib, salmon and lobster — served at your {r.region} venue under candlelight, with the polish of a fine dining restaurant.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/quote" className="btn-primary">Request Your Custom Quote <ArrowRight className="size-4" /></Link>
            <a href={r.city === "San Diego" ? "/steak-seafood-menu-san-diego" : "/steak-seafood-menu"} className="btn-ghost">View Full Steakhouse Menu</a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* STEAKHOUSE PRICING SUMMARY */}
      <section className="py-20 lg:py-28 bg-onyx border-t border-white/5">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center mb-6">The Signature Live Fire Steakhouse Catering Experience — Pricing</div>
            <h2 className="heading-lg text-bone">
              Signature Live Fire Steakhouse Catering catering starting at <span className="text-gold italic font-light">{r.city === "San Diego" ? "$79" : "$74"}/guest.</span>
            </h2>
            <p className="mt-5 text-bone/65 text-base font-light">
              Live charcoal grilling, white-glove service, and restaurant-quality presentation at your {r.region} venue.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "Buffet Style", price: r.city === "San Diego" ? "$79" : "$74", per: "/ person", desc: "Smooth. Efficient. Elegant. Restaurant-quality buffet presentation. Ideal for " + r.city + " weddings, corporate events and private parties." },
              { name: "Family Style", price: r.city === "San Diego" ? "$94" : "$89", per: "/ person", desc: "Shared dining. Passed platters. Connected guest experience. Luxury presentation, end to end." },
              { name: "Plated Service", price: r.city === "San Diego" ? "$133" : "$128", per: "/ person", desc: "Restaurant-style service. Each course individually served. Our most luxurious dining experience.", featured: true },
            ].map((tier) => (
              <article
                key={tier.name}
                className={`relative p-9 lg:p-10 flex flex-col ${
                  tier.featured
                    ? "bg-ink border border-gold/40 shadow-[0_0_40px_rgba(212,175,55,0.08)]"
                    : "bg-ink/60 border border-white/10"
                }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gold text-ink text-[0.6rem] tracking-[0.3em] uppercase font-semibold">
                    Most Premium
                  </div>
                )}
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-4">{tier.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display text-bone tracking-tight">{tier.price}</span>
                  <span className="text-bone/55 text-sm">{tier.per}</span>
                </div>
                <p className="mt-6 text-bone/70 leading-relaxed font-light flex-1">{tier.desc}</p>
                <Link to="/quote" className={tier.featured ? "btn-primary mt-8" : "btn-ghost mt-8"}>
                  Request a Quote
                </Link>
              </article>
            ))}
          </div>
          <p className="text-center mt-10 text-xs text-bone/45 tracking-wider uppercase">
            Pricing varies by guest count, menu selections and venue specifics. Final proposals are built one-to-one.
          </p>
        </div>
      </section>


      {/* CREAM/IVORY STEAKHOUSE SECTION */}
      <section className="bg-[#f5f0e6] text-[#111] relative">
        {/* hairline gold dividers */}
        <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#bfa15a55,transparent)]" />

        <div className="container-luxe py-24 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.4em] uppercase text-[#8a6a2a] mb-8">
              <span className="h-px w-10 bg-[#bfa15a]" />
              An Elevated Experience
              <span className="h-px w-10 bg-[#bfa15a]" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[#0d0d0d]">
              The Surf &amp; Turf<br />Signature Live Fire Steakhouse Catering Experience
            </h2>
            <div className="mt-8 mx-auto h-px w-24 bg-[#bfa15a]" />
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-[#2a2a2a] font-light">
              If you're looking for something that feels more elevated than traditional catering, this is where our {r.city} clients usually lean.
            </p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-[#2a2a2a] font-light">
              We don't simply serve dinner. We create a live Signature Live Fire Steakhouse Catering dining experience your guests will remember long after the event ends.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="mt-20 grid md:grid-cols-2 gap-px bg-[#d9cdb3]">
            {[
              {
                Icon: Flame,
                title: "Live Charcoal Grill Master",
                body: `Your steaks, seafood and premium proteins are grilled over real charcoal while your ${r.city} guests watch. The aroma. The fire. The presentation. It becomes part of the entertainment.`,
              },
              {
                Icon: UtensilsCrossed,
                title: "Luxury Table Presentation",
                body: "Four-piece dinnerware, polished silverware, cloth napkins, glassware and an elegant buffet presentation. Everything arrives looking restaurant quality.",
              },
              {
                Icon: Beef,
                title: "Premium Proteins",
                body: "Ribeye, New York Strip, Filet Mignon, Picanha, Beef Tenderloin, Atlantic Salmon, Shrimp — and Lobster Tail as an optional upgrade. Hand-selected, never an afterthought.",
              },
              {
                Icon: Candy,
                title: "Elevated Dining Atmosphere",
                body: `Every detail — from plating to pacing to service cadence — is designed to feel like an upscale ${r.city} Signature Live Fire Steakhouse Catering, not a catered event.`,
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="bg-[#f5f0e6] p-10 lg:p-14">
                <Icon className="size-7 text-[#8a6a2a]" strokeWidth={1.25} />
                <h3 className="mt-6 font-display text-2xl md:text-3xl text-[#0d0d0d]">{title}</h3>
                <div className="mt-4 h-px w-12 bg-[#bfa15a]" />
                <p className="mt-5 text-[#2a2a2a]/85 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Alternating photo/text rows */}
          <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <img src={steakhousePlatter.url} alt={`Charcoal-grilled ribeye and surf and turf platter for a ${r.region} catered dinner`} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="eyebrow text-[#8a6a2a] mb-6">Grilled Over Live Fire</div>
              <h3 className="font-display text-4xl md:text-5xl text-[#0d0d0d] leading-tight">Ribeye. Tenderloin.<br />Lobster. Live fire.</h3>
              <div className="mt-6 h-px w-16 bg-[#bfa15a]" />
              <p className="mt-6 text-lg leading-relaxed text-[#2a2a2a] font-light">
                Our pitmaster builds a charcoal grill on-site at your {r.region} venue. Steaks are seared to order while servers in pressed black plate each guest. It's the kind of moment guests pull out their phones for.
              </p>
              <ul className="mt-8 space-y-3 text-[#2a2a2a]">
                {["Ribeye, NY Strip, Filet Mignon, Picanha","Beef Tenderloin, Top Sirloin, Prime Rib","Atlantic Salmon, Shrimp, Mahi, Snapper","Cold-water Lobster Tails (optional upgrade)"].map((l) => (
                  <li key={l} className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-[#bfa15a]" />{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="eyebrow text-[#8a6a2a] mb-6">Restaurant-Quality Presentation</div>
              <h3 className="font-display text-4xl md:text-5xl text-[#0d0d0d] leading-tight">Cloth napkins.<br />Polished silver. Candlelight.</h3>
              <div className="mt-6 h-px w-16 bg-[#bfa15a]" />
              <p className="mt-6 text-lg leading-relaxed text-[#2a2a2a] font-light">
                Four-piece dinnerware, glassware, polished flatware, linen napkins and elegant chafer presentation. Whether it's a {r.city} wedding, a corporate dinner or a private celebration, your tables look like the dining room of a fine Signature Live Fire Steakhouse Catering.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <img src={privatePartySetting.url} alt={`Elegant ${r.region} reception table set for a luxury Signature Live Fire Steakhouse Catering catered dinner`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="border-t border-[#d9cdb3]">
          <div className="container-luxe py-24 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow text-[#8a6a2a] justify-center mb-6">A Six-Touchpoint Evening</div>
              <h2 className="font-display text-4xl md:text-5xl text-[#0d0d0d]">What Your Guests Experience</h2>
              <div className="mt-6 mx-auto h-px w-24 bg-[#bfa15a]" />
            </div>

            <ol className="mt-16 max-w-3xl mx-auto">
              {[
                { t: "Cold Appetizer", b: "Choose one chilled starter to open the evening — bright, elegant, served as guests arrive." },
                { t: "Warm Appetizer", b: "Choose one handcrafted hot hors d'oeuvre, finished moments before serving." },
                { t: "Signature Surf & Turf Entrée", b: "Three premium proteins. Three gourmet sides. Grilled live, plated with care." },
                { t: "Desserts", b: "Choose two desserts — pastries, cheesecake, petit fours or our chocolate selection." },
                { t: "Beverage Service", b: "Two non-alcoholic beverage options, continuously refreshed throughout dinner." },
                { t: "White-Glove Breakdown", b: "Our team handles every cleared plate, every cleaned chafer — your venue is left immaculate." },
              ].map((s, i) => (
                <li key={s.t} className="relative pl-16 pb-12 last:pb-0 border-l border-[#d9cdb3] ml-4">
                  <span className="absolute -left-[1.05rem] top-0 size-9 rounded-full bg-[#0d0d0d] text-[#f5f0e6] flex items-center justify-center text-xs tracking-[0.2em]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-[#0d0d0d]">{s.t}</h3>
                  <p className="mt-3 text-[#2a2a2a]/85 leading-relaxed max-w-xl">{s.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* SERVICE STYLE COMPARISON */}
        <div className="border-t border-[#d9cdb3]">
          <div className="container-luxe py-24 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="eyebrow text-[#8a6a2a] justify-center mb-6">Choose Your Service Style</div>
              <h2 className="font-display text-4xl md:text-5xl text-[#0d0d0d]">Three Ways to Experience the Signature Live Fire Steakhouse Catering</h2>
              <p className="mt-6 text-[#2a2a2a]/80 text-lg font-light">All three include live on-site charcoal grilling, full setup, service staff and breakdown.</p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { name: "Buffet Style", price: "$74", per: "/ person", lines: ["Smooth. Efficient. Elegant.", "Restaurant-quality buffet presentation.", `Ideal for ${r.city} weddings, corporate events and private parties.`], featured: false },
                { name: "Family Style", price: "$89", per: "/ person", lines: ["Shared dining. Passed platters.", "Connected guest experience.", "Luxury presentation, end to end."], featured: false },
                { name: "Plated Service", price: "$128", per: "/ person", lines: ["Restaurant-style service.", "Each course individually served.", "Our most luxurious dining experience."], featured: true },
              ].map((p) => (
                <div key={p.name} className={`relative bg-white p-10 lg:p-12 ${p.featured ? "border-2 border-[#bfa15a] shadow-[0_30px_80px_-30px_rgba(191,161,90,0.45)]" : "border border-[#e5dcc6]"}`}>
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0d0d0d] text-[#bfa15a] text-[0.65rem] tracking-[0.3em] uppercase px-4 py-1.5">Most Premium</div>
                  )}
                  <h3 className="font-display text-3xl text-[#0d0d0d]">{p.name}</h3>
                  <div className="mt-4 h-px w-10 bg-[#bfa15a]" />
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl text-[#0d0d0d]">{p.price}</span>
                    <span className="text-[#2a2a2a]/60 text-sm">{p.per}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {p.lines.map((l) => (
                      <li key={l} className="text-[#2a2a2a]/85 leading-relaxed flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-[#bfa15a]" />{l}</li>
                    ))}
                  </ul>
                  <Link to="/quote" className="mt-10 inline-flex items-center gap-2 text-[#0d0d0d] font-medium border-b border-[#bfa15a] pb-1 hover:gap-3 transition-all">
                    Request a Quote <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-[#2a2a2a]/60 italic">All pricing reflects our most current {r.region} catering rates. Travel and venue specifics adjusted in your custom quote.</p>
          </div>
        </div>

        {/* Photo strip */}
        <div className="border-t border-[#d9cdb3]">
          <div className="container-luxe py-20 lg:py-24">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: steakhouseMenu.url, alt: `Live charcoal grilling at a ${r.region} Signature Live Fire Steakhouse Catering catered event` },
                { src: weddingCouple.url, alt: `Luxury ${r.city} wedding Signature Live Fire Steakhouse Catering reception` },
                { src: steakhouseBackyard.url, alt: `Backyard ${r.region} Signature Live Fire Steakhouse Catering and surf & turf catering` },
              ].map((img) => (
                <div key={img.alt} className="aspect-[4/5] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Localized service area band */}
        <div className="border-t border-[#d9cdb3] bg-[#efe7d4]">
          <div className="container-luxe py-16 lg:py-20 text-center">
            <div className="eyebrow text-[#8a6a2a] justify-center mb-5">Proudly Serving</div>
            <h3 className="font-display text-3xl md:text-4xl text-[#0d0d0d]">Signature Live Fire Steakhouse Catering Across {r.region}</h3>
            <p className="mt-5 max-w-3xl mx-auto text-[#2a2a2a]/85 leading-relaxed">{r.serviceAreas}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {r.shortAreas.map((a) => (
                <span key={a} className="px-4 py-2 bg-white border border-[#e5dcc6] text-[#2a2a2a] text-sm">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-charcoal/40 to-ink" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-burgundy/30 blur-[140px]" />
        </div>
        <div className="container-luxe relative text-center">
          <div className="eyebrow justify-center mb-8">Bring the Signature Live Fire Steakhouse Catering to {r.city}</div>
          <h2 className="heading-lg text-bone max-w-3xl mx-auto">Ready to Bring the Signature Live Fire Steakhouse Catering to Your Event?</h2>
          <p className="mt-6 max-w-2xl mx-auto text-bone/70 text-lg">
            Whether you're planning an intimate dinner, an elegant {r.city} wedding, an upscale corporate event or a luxury private celebration, we'll bring the Signature Live Fire Steakhouse Catering experience directly to your {r.region} venue.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn-primary">Request Your Custom Quote <ArrowRight className="size-4" /></Link>
            <a href={r.city === "San Diego" ? "/steak-seafood-menu-san-diego" : "/steak-seafood-menu"} className="btn-ghost">View Full Steakhouse Menu</a>
          </div>
        </div>
      </section>
    </>
  );
}
