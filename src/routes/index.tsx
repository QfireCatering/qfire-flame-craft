import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Flame, Award, Users, Sparkles, Check } from "lucide-react";
import heroFire from "@/assets/hero-fire.jpg";
import heroImage from "@/assets/updated-background.png.asset.json";
import weddingTableAsset from "@/assets/wedding-couple.png.asset.json";
import steakAsset from "@/assets/steakhouse-backyard.png.asset.json";
const steak = steakAsset.url;
import brisket from "@/assets/brisket.jpg";
import brisketVideo from "@/assets/brisket-slice.mp4.asset.json";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";
import bobbyFlayTerry from "@/assets/bobby-flay-terry.png.asset.json";
import chefTerryWhite from "@/assets/chef-terry-white.jpg.asset.json";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";
import buffet from "@/assets/buffet.jpg";
import g1 from "@/assets/gallery/bbq-platter.avif.asset.json";
import g2 from "@/assets/gallery/couple-eating.avif.asset.json";
import g3 from "@/assets/gallery/wedding-buffet.jpg.asset.json";
import g4 from "@/assets/gallery/sunset-table.jpg.asset.json";
import g5 from "@/assets/gallery/buffet-line.jpg.asset.json";
import g6 from "@/assets/gallery/corporate-crowd.jpg.asset.json";
import g7 from "@/assets/gallery/onsite-grill-v2.png.asset.json";
import g8 from "@/assets/gallery/setup.avif.asset.json";
import phoenix from "@/assets/phoenix-metro.png.asset.json";
import sanDiego from "@/assets/san-diego.png.asset.json";
import corporateAsset from "@/assets/corporate-catering.png.asset.json";
import privatePartyAsset from "@/assets/private-party.png.asset.json";
const weddingTable = weddingTableAsset.url;
const corporate = corporateAsset.url;
const privateParty = privatePartyAsset.url;
import { CTASection } from "@/components/site/Sections";
import { TrustBar } from "@/components/site/TrustBar";
import { ConfidenceBar } from "@/components/site/ConfidenceBar";
import { AnswerBox } from "@/components/site/AnswerBox";
import { AtAGlance } from "@/components/site/AtAGlance";
import { ServiceStyleComparison } from "@/components/site/ServiceStyleComparison";
import { ReviewsSection, REVIEW_SCHEMA } from "@/components/site/ReviewsSection";
import { MobileHome } from "@/components/site/mobile/MobileHome";

const HOME_FAQS = [
  { q: "How far in advance should we book Qfire Catering?", a: "Most weddings book 6–12 months out for peak Saturdays. Corporate and private events are usually comfortable inside 4–8 weeks. Drop-off office catering can often be turned around in 24–72 hours. Call us — we move quickly whenever the date is open." },
  { q: "Do you handle full service from setup to cleanup?", a: "Yes. Our team arrives early, stages the kitchen and buffet, runs service with uniformed staff, and handles full breakdown — trash bagged, surfaces wiped, equipment removed. You enjoy your event." },
  { q: "Can you accommodate dietary needs and allergies?", a: "Absolutely. Vegetarian, vegan, gluten-free, dairy-free, kosher-style, and Halal-friendly menus are standard. For peanut, tree-nut, and shellfish allergies we run a dedicated prep line and label every plate at the pass." },
  { q: "Do you travel to our venue?", a: "Yes. We cater across Phoenix Metro and San Diego County, and travel to destination venues, vineyards, ranches, and private estates within driving distance. Travel and lodging are quoted transparently inside your proposal." },
  { q: "What makes Qfire different from other caterers?", a: "Qfire is a 100% dedicated catering company — not a restaurant that also caters. Chef Terry Matthews — featured on Food Network's BBQ Brawl with Bobby Flay, Camp Cutthroat, and a Cutthroat Kitchen champion — personally designs every menu. 2,500+ events, $10M+ catered since 2012, 4.9★ rated, fully licensed and insured, with live charcoal grilling at your venue." },
  { q: "What happens after I request a quote?", a: "A real person — usually Chef Terry or your account lead — calls or emails within 4 hours. We send an itemized proposal, refine the menu together, and lock the date with a 35% Date Retainer applied directly to your final invoice." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qfire Catering — BBQ Catering Phoenix AZ & San Diego | Wedding, Corporate & Private Party Catering" },
      { name: "description", content: "Qfire Catering by Chef Terry Matthews (The BBQ Daddy) — BBQ catering Phoenix AZ, BBQ catering San Diego, wood-fired catering and live-fire steakhouse catering for weddings, corporate events and private parties across Phoenix Metro and San Diego County. Featured on Food Network. 4.9★ rated. BBQ caterers for weddings, barbecue party catering and catering near me — all in one team." },
      { name: "keywords", content: "qfire catering, catering phoenix az, bbq catering phoenix az, bbq catering phoenix, bbq catering san diego, barbecue catering phoenix az, bbq catering scottsdale, bbq caterers for weddings, bbq wedding catering, barbecue party catering, bar b q catering, caterers phoenix, catering glendale az, catering in goodyear az, san diego catering, phoenix catering, wedding catering phoenix, wedding catering san diego, corporate catering phoenix, corporate catering san diego" },
      { property: "og:title", content: "Qfire Catering — BBQ Catering Phoenix AZ & San Diego | Wedding, Corporate & Private Party" },
      { property: "og:description", content: "BBQ, wood-fired and steakhouse catering for weddings, corporate events and private parties. Phoenix Metro & San Diego County. Chef Terry Matthews — Food Network." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/" },
      { property: "og:image", content: heroImage.url },
      { name: "twitter:image", content: heroImage.url },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "CateringService", "FoodEstablishment"],
          name: "Qfire Catering",
          alternateName: "The BBQ Daddy",
          description: "Full-service wood-fired and Steakhouse Experience for weddings, corporate events and private parties across Phoenix Metro and San Diego County.",
          url: "/",
          telephone: "+1-877-848-7211",
          email: "Eat@QfireCatering.com",
          areaServed: [
            { "@type": "AdministrativeArea", name: "Phoenix Metro, AZ" },
            { "@type": "AdministrativeArea", name: "San Diego County, CA" },
          ],
          servesCuisine: ["American", "Wood-Fired", "Steakhouse"],
          priceRange: "$$$",
          founder: { "@type": "Person", name: "Terry Matthews", alternateName: "The BBQ Daddy", jobTitle: "Executive Chef & Founder" },
          foundingDate: "2012",
          sameAs: [
            "https://www.thebbqdaddy.com",
            "https://www.instagram.com/thebbqdaddy",
            "https://www.facebook.com/thebbqdaddy",
            "https://www.foodnetwork.com/shows/bbq-brawl",
          ],
          contactPoint: [{
            "@type": "ContactPoint",
            telephone: "+1-877-848-7211",
            email: "Eat@QfireCatering.com",
            contactType: "Sales",
            areaServed: ["US-AZ", "US-CA"],
            availableLanguage: ["English", "Spanish"],
          }],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "400",
            bestRating: "5",
            worstRating: "1",
          },
          makesOffer: [
            { "@type": "Offer", name: "Wood-Fired Catering (1-Meat)", priceCurrency: "USD", price: "13.99", priceSpecification: { "@type": "UnitPriceSpecification", price: "13.99", priceCurrency: "USD", unitText: "per guest" } },
            { "@type": "Offer", name: "Wood-Fired Catering (2-Meat)", priceCurrency: "USD", price: "18.99" },
            { "@type": "Offer", name: "Wood-Fired Catering (3-Meat)", priceCurrency: "USD", price: "26.99" },
            { "@type": "Offer", name: "Steakhouse Experience", priceCurrency: "USD", price: "74.00" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(REVIEW_SCHEMA),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <MobileHome />
      {/* ==== DESKTOP / TABLET ONLY — mobile is rendered by <MobileHome /> above ==== */}
      <div className="hidden md:block">
      {/* HERO — desktop / tablet */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img src={heroImage.url} alt="Food Network Chef Terry Matthews live-fire grilling premium steaks at an elegant outdoor wedding — Qfire Catering, Phoenix Metro & San Diego County" className="absolute inset-0 w-full h-full object-cover slow-zoom" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
        </div>

        <div className="container-luxe relative z-10 pt-32 pb-20">
          <div className="mb-10 flex items-center gap-4">
            <img src={asSeenOnBadge.url} alt="As seen on Food Network" className="w-16 h-16 rounded-full" />
            <div className="eyebrow">Featured on Food Network</div>
          </div>
          <h1 className="heading-xl text-bone max-w-5xl">
            <span className="text-gold italic font-light">BBQ</span> & Wood-Fire Catering.
            <br />
            Steakhouse polish,
            <br />
            <span className="text-bone/70">unforgettable.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-xl text-bone/80 leading-relaxed font-light">
            Full-service BBQ catering, wood-fired catering and steakhouse catering for weddings, corporate events and private parties — Phoenix Metro &amp; San Diego County.
          </p>
          <p className="mt-3 max-w-xl text-base text-bone/60 italic">
            Wood-fired flavors. Professional service. Stress-free execution.
          </p>

          <div className="mt-12">
            <div className="eyebrow mb-6">What We Cater</div>
            <h2 className="font-display text-3xl md:text-4xl text-bone mb-8">Three settings. One unforgettable standard.</h2>
            <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 max-w-4xl">
              {[
                { img: weddingTable, label: "Weddings", body: "Plated dinners and live-fire stations for the most photographed night of your life.", href: "/weddings" as const },
                { img: corporate, label: "Corporate", body: "Investor dinners, holiday parties, board retreats — refined hospitality at scale.", href: "/corporate" as const },
                { img: privateParty, label: "Private Parties", body: "Backyard luxury for milestones, anniversaries and the gatherings that matter most.", href: "/private-parties" as const },
              ].map((s) => (
                <Link key={s.label} to={s.href} className="group relative block aspect-[3/4] overflow-hidden bg-ink">
                  <img src={s.img} alt={s.label} loading="lazy" width={1600} height={1100}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors">{s.label}</div>
                    <p className="mt-3 text-sm text-bone/70 leading-relaxed">{s.body}</p>
                    <div className="mt-4 flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-20 lg:mt-28 flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="text-[0.6rem] tracking-[0.35em] uppercase text-bone/50">As Seen On</div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {["Food Network", "BBQ Brawl", "Cutthroat Kitchen", "Camp Cutthroat"].map((logo) => (
                <span key={logo} className="text-bone/85 font-display text-lg tracking-tight italic">
                  {logo}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/40 text-[0.6rem] tracking-[0.4em] uppercase animate-pulse">
          Scroll
        </div>
      </section>

      <TrustBar />

      <AnswerBox
        question="What is Qfire Catering and where do you cater?"
        answer="Qfire Catering is a 100% dedicated full-service catering company — not a restaurant — led by Chef Terry Matthews, featured on Food Network's BBQ Brawl, Cutthroat Kitchen, and Camp Cutthroat. We specialize in live-fire, wood-fired BBQ and Steakhouse Experience catering for weddings, corporate events, and private parties across Phoenix Metro, Arizona and San Diego County, California. 2,500+ events catered since 2012, 4.9★ rated, fully licensed and insured."
        bullets={[
          "Wood-fired catering from $13.99 / guest · Steakhouse experience from $74 / guest",
          "Scales from intimate 25-guest dinners up to 2,500-guest galas",
          "Full service: menu design, staff, setup, service, and breakdown",
        ]}
      />

      <AtAGlance
        priceFrom="Phoenix from $13.99 / guest (wood-fired) · San Diego from $16.99 / guest · Steakhouse from $74–$79 / guest"
        guestCount="20 guests (Phoenix) · 50 guests (San Diego)"
      />

      <ReviewsSection />

      <ServiceStyleComparison />

      {/* TWO REGIONS */}
      <section className="relative py-28 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-charcoal/40 to-onyx" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.78_0.13_82_/_6%)_0%,_transparent_70%)]" />

        <div className="container-luxe relative z-10">
          <div className="text-center mb-20 lg:mb-24">
            <div className="eyebrow justify-center mb-6">Serving Two Regions</div>
            <h2 className="heading-lg text-bone">Where shall we cater?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { key: "phoenix", img: phoenix.url, name: "Phoenix Metro",
                cities: "Phoenix · Scottsdale · Mesa · Chandler · Gilbert · Glendale · Surprise · Avondale · Goodyear · Peoria",
                href: "/phoenix" as const },
              { key: "san-diego", img: sanDiego.url, name: "San Diego County",
                cities: "San Diego · Carlsbad · Encinitas · Del Mar · Rancho Santa Fe · Poway · La Jolla · Escondido · Vista · Oceanside",
                href: "/san-diego" as const },
            ].map((r) => (
              <Link key={r.key} to={r.href} className="group relative aspect-[4/5] overflow-hidden block border border-gold/20 hover:border-gold transition-colors">
                <img src={r.img} alt={r.name} loading="lazy" width={1600} height={1100}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="eyebrow text-gold mb-3">Catering Region</div>
                  <h3 className="font-display text-4xl md:text-5xl text-bone">{r.name}</h3>
                  <p className="mt-4 text-bone/80 font-light">{r.cities}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1">
                    Enter {r.name} <ArrowUpRight className="size-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* MENU STYLES — split with parallax feel */}
      <section className="relative">
          {[
            { video: brisketVideo.url, eyebrow: "Wood-Fired", title: "Smoke. Hardwood. Live fire.", body: "Slow-smoked brisket and tri-tip. Pulled pork and chicken. Comfort sides built around the fire — mac and cheese, baked beans, southern green beans, street corn. Backyard elegance, elevated.", href: "/wood-fired" as const, reverse: false },
            { img: steak, eyebrow: "Steakhouse", title: "The Steakhouse Experience... Brought To You", body: "Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf & turf served under candlelight with polished service and unforgettable presentation. Perfect for luxury weddings, corporate dinners, and private events.", href: "/steakhouse" as const, reverse: true },
          ].map((s, i) => (
            <div key={s.eyebrow} className={`grid lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                {"video" in s ? (
                  <video src={s.video} autoPlay muted loop playsInline ref={(el) => { if (el) el.playbackRate = 0.5; }} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <img src={s.img} alt={s.eyebrow} loading="lazy" width={1600} height={1100} className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
            </div>
            <div className="bg-onyx flex items-center [direction:ltr]">
              <div className="p-10 lg:p-20 max-w-xl">
                <div className="eyebrow mb-6">{s.eyebrow}</div>
                <h3 className="heading-lg text-bone">{s.title}</h3>
                <p className="mt-8 text-bone/70 text-lg leading-relaxed font-light">{s.body}</p>
                <Link to={s.href} className="mt-10 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors">
                  View Menu <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* WHY QFIRE */}
      <section className="py-28 lg:py-40 bg-gradient-to-b from-ink via-charcoal/30 to-ink">
        <div className="container-luxe">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="eyebrow justify-center mb-6">Why Qfire</div>
            <h2 className="heading-lg text-bone">Hospitality you can feel, the moment we arrive.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { n: "2,500+", l: "Events Served", icon: Users },
              { n: "15+", l: "Years Behind Fire", icon: Flame },
              { n: "4.9★", l: "Across All Platforms", icon: Award },
              { n: "Stress-Free", l: "Full-Service Execution", icon: Sparkles },
            ].map((s) => (
              <div key={s.l} className="bg-ink p-10 text-center">
                <s.icon className="size-7 mx-auto text-gold mb-6" strokeWidth={1.2} />
                <div className="text-3xl lg:text-4xl font-display text-bone tracking-tight">{s.n}</div>
                <div className="mt-3 text-[0.65rem] tracking-[0.3em] uppercase text-bone/55">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/why-qfire" className="btn-ghost">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <div className="eyebrow mb-6">What You Get</div>
            <h2 className="heading-lg text-bone">
              Everything handled. <span className="text-gold italic font-light">You enjoy your event.</span>
            </h2>
            <p className="mt-6 text-bone/70 leading-relaxed font-light text-lg">
              Hiring Qfire means hiring one team that runs the entire food, beverage and service experience — start to finish, set up to break down.
            </p>
            <Link to="/quote" className="btn-primary mt-10 inline-flex">Request Your Quote <ArrowRight className="size-4" /></Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Trained on both wood-fire grilling and live-fire steakhouse plating",
              "Beautifully styled buffets, stations and plated service",
              "Professional, uniformed service staff",
              "Generous, restaurant-grade portions every time",
              "Stress-free, choreographed event-day execution",
              "Venue & vendor coordination handled for you",
              "Full setup, replenishment and complete breakdown",
              "Custom menu design tailored to your guest count",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-bone/85 leading-relaxed">
                <Check className="size-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-luxe mb-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-6">Recent Events</div>
              <h2 className="heading-lg text-bone max-w-2xl">A look at the table.</h2>
            </div>
            <Link to="/pictures" className="btn-ghost">View Full Gallery</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { src: g1.url, alt: "Wood-fire catering platter — Texas-style brisket, pulled pork and smoked sausage by Chef Terry Matthews of Qfire Catering" },
            { src: g2.url, alt: "Couple enjoying dinner at a Qfire Catering luxury wedding reception in Phoenix Metro" },
            { src: g3.url, alt: "Elegant wedding buffet line styled by Qfire Catering with floral and gold accents" },
            { src: g4.url, alt: "Sunset reception table set for a luxury San Diego County wedding catered by Qfire" },
            { src: g5.url, alt: "Restaurant-quality buffet line at a Qfire Catering corporate dinner across Phoenix and San Diego" },
            { src: g6.url, alt: "Large corporate crowd dining at a Qfire Catering executive event" },
            { src: g7.url, alt: "Live charcoal onsite grilling station with Chef Terry — signature Qfire Catering wood-fire experience" },
            { src: g8.url, alt: "Qfire Catering luxury tablescape with black chafers and gold accents for a private event" },
          ].map(({ src, alt }, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <img src={src} alt={alt} loading="lazy" width={800} height={800}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-36 bg-onyx">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow justify-center mb-6">From Our Clients</div>
            <h2 className="heading-lg text-bone">Five-star, top to bottom.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { q: "Chef Terry — 'The BBQ Daddy' — and his team turned our wedding into the meal everyone is still talking about. Brisket, ribeye, the whole spread. Flawless.", a: "Lauren & Mark", e: "Scottsdale Wedding · 220 guests" },
              { q: "We hired Qfire for our company's annual partner dinner. Plated steaks for 140, served hot, served perfectly. Worth every penny.", a: "David K.", e: "Corporate Event · La Jolla" },
              { q: "Backyard 50th birthday. Wood-fired everything. Guests thought we'd flown in a luxury steakhouse. Absolutely premium.", a: "Sandra T.", e: "Private Party · Gilbert" },
            ].map((r, i) => (
              <figure key={i} className="bg-ink border border-white/5 p-8 lg:p-10 relative">
                <div className="text-gold text-5xl font-display leading-none mb-4">"</div>
                <blockquote className="text-bone/85 leading-relaxed font-light text-lg">{r.q}</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-bone font-medium">{r.a}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{r.e}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/reviews" className="btn-ghost">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* CHEF TERRY */}
      <section className="py-24 lg:py-36">
        <div className="container-luxe">
          <div className="mb-16 lg:mb-20 grid grid-cols-2 gap-6 lg:gap-10 max-w-3xl mx-auto">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-ink">
              <img src={bobbyFlayTerry.url} alt="Chef Terry Matthews with Bobby Flay" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-ink">
              <img src={chefTerryWhite.url} alt="Chef Terry Matthews — The BBQ Daddy" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden max-w-[16rem] mx-auto lg:max-w-[18rem]">
              <img src={chefTerry.url} alt="Chef Terry Matthews" loading="lazy" width={1024} height={1280}
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
            <div>
              <div className="eyebrow mb-6">Meet The Chef</div>
              <h2 className="heading-lg text-bone">
                Chef Terry Matthews.
                <span className="block text-bone/55 italic font-light text-3xl mt-3">Known to friends as "The BBQ Daddy."</span>
              </h2>
              <div className="mt-10 space-y-5 text-bone/75 text-lg leading-relaxed font-light">
                <p>
                  Thirteen years. Two thousand events. A national television run that
                  includes <em className="text-gold/90 not-italic">Cutthroat Kitchen</em> (winner),{" "}
                  <em className="text-gold/90 not-italic">BBQ Brawl Season 2</em>, and{" "}
                  <em className="text-gold/90 not-italic">Camp Cutthroat</em> — plus the kitchen of Bobby Flay.
                </p>
                <p>
                  Behind Qfire is a chef who treats every event like it's his own family's.
                  Warm with your guests. Surgical with your timeline.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/about" className="btn-primary">Chef Terry's Story</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-24 bg-onyx">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <div>
            <div className="eyebrow mb-6">FAQ</div>
            <h2 className="heading-md text-bone">Common questions, straight answers.</h2>
            <Link to="/faq" className="btn-ghost mt-8">All Questions</Link>
          </div>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {HOME_FAQS.slice(0, 4).map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-display text-bone group-hover:text-gold transition-colors pr-6">{f.q}</span>
                  <span className="text-gold text-2xl font-light transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-bone/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="py-20 lg:py-24 border-t border-white/5 bg-onyx/40">
        <div className="container-luxe text-center">
          <div className="eyebrow justify-center mb-6">The Resume</div>
          <h2 className="heading-md text-bone max-w-3xl mx-auto">
            The <span className="text-gold italic font-light">#1 Rated</span> Full-Service Steak &amp; BBQ Catering Co. in the State.
          </h2>
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 max-w-4xl mx-auto text-left">
            {[
              "Food Network Veteran",
              "Cooked alongside Bobby Flay",
              "Winner — Food Network's Cutthroat Kitchen",
              "Winner — Food Network's Camp Cutthroat",
              "Featured on BBQ Brawl Season 2",
              "International Chef Competition Host",
              "Catering Coach & Mentor",
              "15+ Years Behind the Fire",
              "4.9★ rating across ALL platforms",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-bone/85 leading-relaxed">
                <Check className="size-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SHORT-NOTICE CTA */}
      <section className="py-16 border-t border-gold/20 bg-gradient-to-r from-ink via-onyx to-ink">
        <div className="container-luxe text-center">
          <div className="text-[0.7rem] tracking-[0.35em] uppercase text-gold mb-4">Need Phoenix or San Diego Catering on Short Notice?</div>
          <h3 className="heading-md text-bone max-w-2xl mx-auto">
            We might be able to help. Call us right now.
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:8778487211" className="btn-primary">Call 877.848.7211</a>
            <Link to="/quote" className="btn-ghost">See If My Date Is Available</Link>
          </div>
        </div>
      </section>

      <ConfidenceBar tone="ink" />

      <CTASection />
      </div>
    </>
  );
}
