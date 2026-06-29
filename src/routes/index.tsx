import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Flame, Award, Users, Sparkles, Check } from "lucide-react";
import heroFire from "@/assets/hero-fire.jpg";
import heroImage from "@/assets/hero-wedding-grilling.png.asset.json";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qfire Catering — Luxury Wedding, Corporate & Private Event Catering | Phoenix & San Diego" },
      { name: "description", content: "Qfire Catering by Chef Terry Matthews — full-service luxury catering for weddings, corporate dinners, private parties and intimate chef's tables across Phoenix Metro and San Diego County. Wood-fired flavors, Signature Live Fire Steakhouse Catering polish, white-glove service, stress-free execution." },
      { property: "og:title", content: "Qfire Catering — Wood-Fired Luxury, Signature Live Fire Steakhouse Catering Polish" },
      { property: "og:description", content: "Wood-fired flavors. Signature Live Fire Steakhouse Catering polish. Stress-free execution. Luxury catering for weddings, corporate events and private parties — Phoenix Metro & San Diego County." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage.url },
      { name: "twitter:image", content: heroImage.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        name: "Qfire Catering",
        description: "Full-service wood-fired and Signature Live Fire Steakhouse Catering for weddings, corporate events and private parties.",
        areaServed: ["Phoenix Metro, AZ", "San Diego County, CA"],
        servesCuisine: ["American", "Barbecue", "Signature Live Fire Steakhouse Catering"],
        priceRange: "$$$",
      }),
    }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img src={heroImage.url} alt="Chef grilling over live fire at elegant outdoor wedding" className="absolute inset-0 w-full h-full object-cover slow-zoom" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
        </div>

        <div className="container-luxe relative z-10 pt-32 pb-20">
          <div className="mb-10 flex items-center gap-4">
            <img src={asSeenOnBadge.url} alt="As seen on Food Network" className="w-16 h-16 rounded-full" />
            <div className="eyebrow">Featured on Food Network</div>
          </div>
          <h1 className="heading-xl text-bone max-w-5xl">
            <span className="text-gold italic font-light">Qfire</span> Catering.
            <br />
            Wood-fired,
            <br />
            <span className="text-bone/70">unforgettable.</span>
          </h1>
          <p className="mt-10 max-w-xl text-xl text-bone/80 leading-relaxed font-light">
            Full-service catering for weddings, corporate events and private parties.
          </p>
          <p className="mt-3 max-w-xl text-base text-bone/60 italic">
            Wood-fired flavors. Professional service. Stress-free execution.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/quote" className="btn-primary">
              Request a Quote <ArrowRight className="size-4" />
            </Link>
            <Link to="/locations" className="btn-ghost">Choose Your Location</Link>
          </div>

          <div className="mt-20 lg:mt-28 flex flex-wrap items-center gap-x-10 gap-y-4">
            <img src={asSeenOnBadge.url} alt="As seen on Food Network" className="w-16 h-16 rounded-full" />
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

      {/* SERVICE TYPES */}
      <section className="py-24 lg:py-36">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-end mb-20">
            <div>
              <div className="eyebrow mb-6">What We Cater</div>
              <h2 className="heading-lg text-bone">Three settings. One unforgettable standard.</h2>
            </div>
            <p className="text-lg text-bone/65 leading-relaxed">
              Whether you're hosting two hundred guests under bistro lights or
              twelve at a private chef's table, the standard never changes.
              Wood-fired. Plated by hand. Served without a single dropped detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { img: weddingTable, label: "Weddings", body: "Plated dinners and live-fire stations for the most photographed night of your life.", href: "/weddings" as const },
              { img: corporate, label: "Corporate", body: "Investor dinners, holiday parties, board retreats — refined hospitality at scale.", href: "/corporate" as const },
              { img: privateParty, label: "Private Parties", body: "Backyard luxury for milestones, anniversaries and the gatherings that matter most.", href: "/private-parties" as const },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="group relative block aspect-[3/4] overflow-hidden bg-ink">
                <img src={s.img} alt={s.label} loading="lazy" width={1600} height={1100}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <div className="heading-md text-bone group-hover:text-gold transition-colors">{s.label}</div>
                  <p className="mt-4 text-sm text-bone/70 leading-relaxed">{s.body}</p>
                  <div className="mt-6 flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="size-3" />
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
              { n: "2,000+", l: "Events Served", icon: Users },
              { n: "25+", l: "Years Behind Fire", icon: Flame },
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
              "Experienced wood-fire & Signature Live Fire Steakhouse Catering-trained team",
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
          {[g1.url, g2.url, g3.url, g4.url, g5.url, g6.url, g7.url, g8.url].map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <img src={img} alt="" loading="lazy" width={800} height={800}
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
              { q: "Backyard 50th birthday. Wood-fired everything. Guests thought we'd flown in a Signature Live Fire Steakhouse Catering. Absolutely premium.", a: "Sandra T.", e: "Private Party · Gilbert" },
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
            {[
              { q: "How far in advance should we book?", a: "Most weddings book 6–12 months out. Corporate and private events: 4–8 weeks is comfortable." },
              { q: "Do you handle full service?", a: "Yes. Staffing, rentals, bartending, setup and breakdown. You enjoy your event." },
              { q: "Can you accommodate dietary needs?", a: "Absolutely. Vegan, gluten-free, kosher-style and allergen-aware menus are part of how we plan." },
              { q: "Do you travel?", a: "Across Phoenix Metro and San Diego County, with destination service available on request." },
            ].map((f) => (
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

      <CTASection />
    </>
  );
}
