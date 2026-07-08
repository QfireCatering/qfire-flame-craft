import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Award, Users, Star, Clock, Sparkles, MessageCircle } from "lucide-react";
import { DefinitiveContent } from "./DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";
import { BookingProcess } from "./BookingProcess";
import { ObjectionBuster } from "./ObjectionBuster";

import { SectionNav } from "./SectionNav";
import { WeddingBuffetEstimator } from "./WeddingBuffetEstimator";
import { contact } from "@/lib/contact";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";


import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";
import weddingRealAsset from "@/assets/wedding-real.jpg.asset.json";
import weddingGrillingAsset from "@/assets/gallery/onsite-grill-v2.png.asset.json";
import steakAsset from "@/assets/steakhouse-backyard.png.asset.json";
import steakMenuAsset from "@/assets/steakhouse-menu.png.asset.json";
import bbqPlatterAsset from "@/assets/bbq-platter.png.asset.json";
import bbqPlatter1Asset from "@/assets/bbq-platter1.png.asset.json";
import bartenderAsset from "@/assets/bartender.png.asset.json";
import privatePartyAsset from "@/assets/private-party-setting.png.asset.json";
import chefAsset from "@/assets/chef-terry.jpg.asset.json";
import heroFire from "@/assets/hero-fire.jpg";
import buffet from "@/assets/buffet.jpg";
import brisket from "@/assets/brisket.jpg";

const couple = weddingCoupleAsset.url;
const reception = weddingRealAsset.url;
const grilling = weddingGrillingAsset.url;
const steak = steakAsset.url;
const steakMenu = steakMenuAsset.url;
const platter = bbqPlatterAsset.url;
const platter1 = bbqPlatter1Asset.url;
const bartender = bartenderAsset.url;
const setting = privatePartyAsset.url;
const chef = chefAsset.url;

export interface WeddingRegionConfig {
  /** "Phoenix Metro" or "San Diego County" */
  region: string;
  /** "Phoenix" or "San Diego" */
  regionShort: string;
  /** "phoenix" or "san-diego" */
  regionSlug: "phoenix" | "san-diego";
  /** URL of this page e.g. "/wedding-catering-phoenix" */
  path: string;
  /** List of cities for SEO */
  cities: string[];
  /** Venues / neighborhoods we cater */
  venues: string[];
  /** Location-flavored testimonial city tags */
  reviewCities: string[];
}

const baseFaqs = [
  {
    q: "About how much should I expect to spend on wedding catering?",
    a: "A typical full-service Qfire wedding buffet (2 meats, sides, appetizer, drinks, staff, setup, and breakdown) starts around $37.15/guest in Phoenix Metro and $44.95/guest in San Diego County — see the 'Average Cost for Catering' example above for a realistic 100-guest budget. Premium upgrades (live-fire grilling, surf & turf, plated service, full bar) move the number up. Every proposal is itemized — no hidden fees, no surprise gratuities.",
  },
  {
    q: "Can our wedding menu be fully customized?",
    a: "Yes. Every Qfire menu is built from scratch around your taste, your venue, and your guest list. Chef Terry will design a custom proposal with passed hors d'oeuvres, entrees, sides, and dessert pairings — and you can refine it in a private tasting before the contract is finalized. Menu stays flexible up to 15 days out.",
  },
  {
    q: "Can we schedule a private tasting?",
    a: "Absolutely. As long as your date is still available, you're welcome to schedule a tasting before booking. You'll sample 3 meats, 3 sides, and 2 appetizers for 5–7 guests ($200) — then decide if we're the right fit.",
  },
  {
    q: "How does the 35% Date Retainer work?",
    a: "Your date is reserved with a 35% Date Retainer that applies 100% to your final invoice. It locks in your date and our team — NOT your menu, guest count, or service style. Those all stay flexible as your planning evolves.",
  },
  {
    q: "Do you grill onsite at the venue?",
    a: "Yes — live charcoal grilling is one of our signature offerings. We roll in the wood-fired grill and cook ribeyes, picanha, brisket, salmon, and chicken right in front of your guests. The aroma, the visual, the freshness — it's the moment people remember.",
  },
  {
    q: "Can we update our guest count later?",
    a: "Yes. The final guest count locks in 14 days before the wedding. Until then, you can scale up or down as RSVPs come in without any rebooking penalty.",
  },
  {
    q: "What's the plan if it rains — or if it's 110° in July?",
    a: "We plan for weather from day one. Our live-fire grills operate under a canopy in rain, wind, and heat. For extreme conditions we can shift to a covered service area or venue kitchen without changing your menu. Every proposal includes a weather contingency.",
  },
  {
    q: "Do you accommodate allergies and dietary restrictions?",
    a: "Always. Every proposal includes vegetarian, vegan, gluten-free, and dairy-free options. For peanut, tree-nut, shellfish, and other serious allergies we run a dedicated prep line and label every plate at the pass.",
  },
];

const extraFaqs = [
  { q: "Do you travel for weddings?", a: "Yes. We cater weddings throughout the entire metro and to destination venues, vineyards, ranches, and private estates within driving distance. Travel and lodging are quoted transparently inside your proposal." },
  { q: "Can we change our menu after we book?", a: "Yes. Most couples refine their menu several times between booking and the final tasting. The menu is a living document until roughly 15 days out." },
  { q: "Do you provide bartenders?", a: "Yes. Licensed and insured bartenders, signature cocktails, beer and wine programs, mixers, ice, and glassware." },
  { q: "Do you provide rentals?", a: "We coordinate linens, chinaware, glassware, flatware, chafers, serving pieces, and staging through trusted rental partners — billed at cost and managed by our team." },
  { q: "Do you offer vegetarian options?", a: "Yes — beautifully composed vegetarian plates that stand alongside the steaks. Wood-fired vegetables, grain bowls, stuffed portobellos, handmade pastas, and seasonal sides." },
  { q: "Do you offer vegan options?", a: "Yes. Fully plant-based plated dinners and stations — grilled vegetable platters, vegan grain bowls, plant-protein entrees, and dairy-free desserts." },
  { q: "How early should we reserve our wedding date?", a: "Most couples book Qfire 6 to 12 months in advance for peak Saturdays. Off-peak dates and intimate weddings can often be accommodated inside 90 days." },
  { q: "What service styles do you offer?", a: "Plated dinner, buffet, family-style, live-fire grilling stations, action stations (carving, raw bar, pasta), and passed-only cocktail receptions." },
  { q: "Do you provide professional service staff?", a: "Yes. Every wedding includes uniformed servers, captains, chefs, and a lead coordinator." },
  { q: "Who handles setup and cleanup?", a: "We do — arrival hours before guest count, full staging, buffet dressing, breakdown, trash bagged, surfaces wiped. Your venue manager will ask for our card." },
  { q: "What if our venue has restrictions?", a: "We work inside almost every major venue's catering rules. If your venue has specific power, propane, or fire-marshal restrictions for live grilling, we coordinate permits directly." },
  { q: "Do you handle cake cutting?", a: "Yes. $100 cake-cutting fee covers the additional staff time to cut, plate, and serve — including outside-bakery cakes and dessert bars." },
  { q: "Do you feed our vendors — photographer, DJ, planner?", a: "Yes. Vendor meals billed at $18–$24 per vendor, served hot from the same kitchen right after main service." },
  { q: "Are you licensed and insured?", a: "Yes — full general liability, food handler licensing, workers' comp. We name your venue as additional insured and handle the paperwork directly with them." },
  { q: "What does a typical wedding-day timeline look like?", a: "5pm ceremony / 6pm reception: team arrives 1–2pm, passed apps at 6pm, dinner at first-dance cue (~7pm), cake around 8pm, breakdown by 11pm. Your account lead builds a detailed run-of-show with your planner." },
  { q: "Are there travel fees for destination venues?", a: "Anything within roughly 30 miles of home base is included at no additional charge. Destination venues (Sedona, Flagstaff, Temecula) get transparent travel and lodging quotes up front." },
];

const whyChoose = [
  { icon: Award, title: "You're hiring a real chef", body: "15+ years professional. 2,000+ weddings. Featured on Food Network. Chef Terry personally designs every menu we serve — you're not getting a sales rep and a line cook." },
  { icon: Clock, title: "We show up on time. Every time.", body: "In 15 years we've never missed a wedding, never been late for setup, never held up a first dance. That's the promise, and your planner will confirm it." },
  { icon: Flame, title: "Live fire. Real food. Hot plates.", body: "No sad chafing-dish reheats. Steaks, chops, chicken, and seafood grilled over hardwood charcoal right at your venue — the moment your guests remember." },
  { icon: Sparkles, title: "You'll always know what's happening next", body: "Emails answered the same day. Timelines shared early. Changes handled without a sigh. You'll never feel like you're chasing us for an update." },
  { icon: Check, title: "Your venue and planner already know us", body: "Approved or preferred at most major venues across Phoenix Metro and San Diego County. Planners actively recommend us. Fewer surprises for you." },
  { icon: Users, title: "You get to actually enjoy your day", body: "Setup, service, live-fire cooking, buffet refresh, coordination, breakdown — all handled. You spend the night with the people you love, not the caterer." },
];


const serviceStyles = [
  {
    name: "Full-Service Buffet",
    tag: "Most Popular",
    bullets: [
      "Feels elegant without feeling stiff",
      "Guests pick exactly what they love",
      "Fast service — no long lines",
      "Beautiful presentation, styled for photos",
      "Our staff keeps it hot and refreshed all night",
      "Perfect for most wedding receptions (75–250 guests)",
    ],
  },
  {
    name: "Family Style",
    tag: "Most Intimate",
    bullets: [
      "Big shared platters brought right to each table",
      "Everyone talks, everyone eats together",
      "Feels warm and celebratory — like a big family dinner",
      "No lines, no buffet traffic",
      "Great for medium receptions who want intimacy",
      "The style guests remember for the vibe alone",
    ],
  },
  {
    name: "Plated Dinner Service",
    tag: "Most Formal",
    bullets: [
      "Restaurant-style, coursed and synchronized",
      "Every guest served at the same moment",
      "The most polished, elegant dining experience",
      "Ideal for luxury and black-tie receptions",
      "Menu cards, wine pairings, white-glove service",
      "The wedding reception your guests describe as 'unreal'",
    ],
  },
];


export function WeddingPage({ config }: { config: WeddingRegionConfig }) {
  const { region, regionShort, cities, venues, reviewCities, path } = config;

  const reviews = [
    {
      q: `Chef Terry and his team made our ${regionShort} wedding reception unforgettable. The brisket and ribeyes were perfect, and every single guest asked us who our caterer was. Service was flawless from setup through the last dance.`,
      a: "Lauren & Mark H.",
      e: `${venues[0] ?? reviewCities[0]} · ${reviewCities[0]} · 220 guests · Oct 2024`,
    },
    {
      q: `We did a plated dinner for 180 and not a single thing went wrong. My planner said it was one of the smoothest catering executions she'd ever seen. The food was the talk of the night.`,
      a: "Megan & Ryan S.",
      e: `${venues[1] ?? reviewCities[1] ?? reviewCities[0]} · ${reviewCities[1] ?? reviewCities[0]} · 180 guests · May 2024`,
    },
    {
      q: "The live-fire steak station literally stopped the room. Guests were taking videos, our photographer was thrilled, and people still text us about the ribeye nine months later.",
      a: "Sophia & James W.",
      e: `${venues[2] ?? reviewCities[2] ?? reviewCities[0]} · ${reviewCities[2] ?? reviewCities[0]} · 160 guests · Sept 2024`,
    },
    {
      q: "As a wedding planner I work with caterers every single weekend. Qfire is at the top of my preferred list — clean, on time, professional, and the food is legitimately exceptional. I recommend them without hesitation.",
      a: "Alyssa T., Wedding Planner",
      e: `${region} · 40+ wedding receptions coordinated with Qfire`,
    },
    {
      q: "Communication was incredible from day one. Every email returned same-day. Every menu change handled without a sigh. On the day, they set up hours early and broke down without a trace. We felt taken care of the entire time.",
      a: "Jessica & David M.",
      e: `${venues[3] ?? reviewCities[3] ?? reviewCities[0]} · ${reviewCities[3] ?? reviewCities[0]} · 145 guests · March 2025`,
    },
  ];


  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Qfire Catering — ${region} Wedding Reception Catering`,
    image: couple,
    url: path,
    telephone: "+1-602-555-0123",
    priceRange: "$$$",
    servesCuisine: ["Wood-Fire", "Steakhouse Experience", "American", "Wedding Catering"],
    areaServed: cities.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "400" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Weddings", item: "/weddings" },
      { "@type": "ListItem", position: 3, name: `${region} Wedding Reception Catering`, item: path },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: baseFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wedding Catering",
    provider: { "@type": "LocalBusiness", name: "Qfire Catering" },
    areaServed: cities.join(", "),
    description: `Luxury wedding reception catering across ${region} — live charcoal grilling, premium steaks, full-service buffets, family-style, and plated dinner service.`,
  };

  const sectionNavItems = [
    { id: "estimator", label: "Real Wedding Pricing" },
    { id: "steakhouse-pricing", label: "Steakhouse Pricing" },
    { id: "features", label: "Features" },
    { id: "compare", label: "How We Compare" },

    { id: "menus", label: "Menus" },
    { id: "why-qfire", label: "Why Qfire" },
    { id: "service-styles", label: "Service Styles" },
    { id: "live-fire", label: "Live Fire" },
    { id: "steakhouse", label: "Steakhouse" },
    { id: "process", label: "Process" },
    { id: "real-reviews", label: "Real Reviews" },
    { id: "menu-options", label: "Menu Options" },
    { id: "chef", label: "Chef Terry" },
    { id: "faq", label: "FAQ" },
  ];

  const isPhx = config.regionSlug === "phoenix";
  const regionLabel = isPhx ? "Phoenix Metro" : "San Diego County";
  const steakMenuPath = isPhx ? "/steak-seafood-menu" : "/steak-seafood-menu-san-diego";
  const woodMenuUrl = isPhx
    ? "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index"
    : "https://fs17.formsite.com/matthews3404/SanDiego/index";
  const steakTiers = [
    { name: "Buffet Style", price: isPhx ? "$74" : "$79", per: "/ person", desc: `Smooth. Efficient. Elegant. Restaurant-quality buffet presentation. Ideal for ${regionShort} wedding receptions.` },
    { name: "Family Style", price: isPhx ? "$89" : "$94", per: "/ person", desc: "Shared dining. Passed platters. Connected guest experience. Luxury presentation, end to end." },
    { name: "Plated Service", price: isPhx ? "$128" : "$133", per: "/ person", desc: "Restaurant-style service. Each course individually served. Our most luxurious dining experience." },
  ];
  const weddingFeatures = [
    "Custom multi-course menu designed by Chef Terry",
    "Premium proteins (Wood-Fire, Live-Fire Steakhouse, or surf & turf)",
    "Passed hors d'oeuvres + cocktail-hour stations (optional)",
    "Chef-attended live-fire grilling on-site",
    "Buffet, family-style, plated, or stationed service",
    "Salads, fresh-baked breads, sauces, and signature sides",
    "Linen-draped buffet, chafing dishes, and serving equipment",
    "Professional uniformed service staff",
    "Full setup, refresh, and breakdown",
    "Trash removal and venue walk-through at end of night",
    "Optional bar program with bartenders and glassware",
    "Optional rentals: china, flatware, linens, lounge, dance floor",
  ];


  return (
    <>
      <SectionNav items={sectionNavItems} />
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img src={couple} alt={`Bride and groom enjoying their ${regionShort} wedding reception catered by Qfire`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative z-10 pb-20 lg:pb-28 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">{region} Wedding Reception Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tight">
              Congratulations. <span className="italic text-gold font-light">Now let's feed your wedding reception.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light leading-relaxed max-w-2xl">
              Planning a wedding reception is a lot. The food shouldn't be the part that stresses you out. We've catered over 2,000 wedding receptions across {region} — and we'd love to make yours one of them.
            </p>
            <p className="mt-6 text-lg text-bone/75 font-light leading-relaxed max-w-2xl">
              You'll get a real chef, honest pricing, a team that shows up on time, and a wedding reception where dinner is the thing your guests won't stop talking about.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#estimator" className="btn-primary">
                See Real Wedding Pricing <ArrowRight className="size-4" />
              </a>
              <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-gold/90 border border-gold/30 px-4 py-2.5 bg-gold/5">
                <Clock className="size-3.5" /> Usually responds within 4 business hours
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-bone/70">
              <div><span className="text-gold font-display text-2xl">15+</span> Years Doing This</div>
              <div><span className="text-gold font-display text-2xl">2,000+</span> Wedding Receptions Catered</div>
              <div><span className="text-gold font-display text-2xl">4.9★</span> Bride-Rated</div>
              <div><span className="text-gold font-display text-2xl">Food Network</span> Featured Chef</div>
            </div>
            <div className="mt-6 text-xs tracking-[0.2em] uppercase text-bone/55">
              <span className="text-gold/80">Your Local {regionShort} Team</span> · <a href={contact.phoneHref} className="text-bone hover:text-gold transition-colors">{contact.phone}</a>
            </div>
          </div>
        </div>
      </section>


      {/* 1. REAL WEDDING PRICING (directly under hero) */}
      <WeddingBuffetEstimator region={region} regionShort={regionShort as "Phoenix" | "San Diego"} />

      {/* 2. STEAKHOUSE EXPERIENCE PRICING */}
      <section id="steakhouse-pricing" className="py-20 lg:py-28 bg-ink border-t border-white/5 scroll-mt-32">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center mb-6">Steakhouse Experience — Pricing</div>
            <h2 className="heading-lg text-bone">
              Surf &amp; Turf Steakhouse Experience starting at <span className="text-gold italic font-light">{isPhx ? "$74" : "$79"}/guest.</span>
            </h2>
            <p className="mt-5 text-bone/65 text-base font-light">
              Live charcoal grilling, white-glove service, and restaurant-quality presentation at your {regionShort} venue.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steakTiers.map((tier) => (
              <article key={tier.name} className="relative p-9 lg:p-10 flex flex-col bg-ink/60 border border-white/10">
                <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-4">{tier.name}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display text-bone tracking-tight">{tier.price}</span>
                  <span className="text-bone/55 text-sm">{tier.per}</span>
                </div>
                <p className="mt-6 text-bone/70 leading-relaxed font-light flex-1">{tier.desc}</p>
                <Link to={steakMenuPath} className="btn-ghost mt-8">View Menu</Link>
              </article>
            ))}
          </div>
          <p className="text-center mt-10 text-xs text-bone/45 tracking-wider uppercase">
            Pricing varies by guest count, menu selections and venue specifics. Final proposals are built one-to-one.
          </p>
        </div>
      </section>


      {/* COMPARISON TABLE — how Qfire compares to other wedding-catering options */}
      <section id="compare" className="py-20 lg:py-28 bg-onyx border-y border-white/10 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">How We Compare</div>
            <h2 className="heading-lg text-bone">Qfire vs. the other options you're considering.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
              Most brides get quotes from a hotel/venue caterer, a local BBQ shop, and a full-service caterer like us. Here's the honest side-by-side.
            </p>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-4 pr-4 text-[0.65rem] tracking-[0.28em] uppercase text-bone/60 font-normal align-bottom">What matters to you</th>
                  <th className="py-4 px-4 text-center bg-gold/10 border-x border-gold/30">
                    <div className="text-gold text-[0.65rem] tracking-[0.28em] uppercase mb-1">Qfire Catering</div>
                    <div className="text-bone font-display text-base">Chef-led, live-fire</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-bone/50 text-[0.65rem] tracking-[0.28em] uppercase mb-1">Venue / Hotel</div>
                    <div className="text-bone/70 font-display text-base">In-house catering</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-bone/50 text-[0.65rem] tracking-[0.28em] uppercase mb-1">Local BBQ Shop</div>
                    <div className="text-bone/70 font-display text-base">Drop-off + serve</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { row: "Chef personally designs your menu", q: "Yes — Chef Terry", v: "No — banquet template", b: "No — set menu" },
                  { row: "Live-fire grilling at your venue", q: "Yes — hardwood charcoal", v: "Rarely", b: "Occasionally" },
                  { row: "Real steakhouse plates (ribeye, filet, picanha)", q: "Yes", v: "Sometimes (extra $)", b: "No" },
                  { row: "Professional uniformed service staff", q: "Yes — included", v: "Yes — 22% service charge", b: "Usually not" },
                  { row: "Full setup, refresh, and breakdown", q: "Yes — included", v: "Yes", b: "No — you handle it" },
                  { row: "Custom menu (change it as you plan)", q: "Yes, up to 15 days out", v: "Locked at contract", b: "Menu only" },
                  { row: "Real photographable presentation", q: "Yes — styled buffets", v: "Standard chafers", b: "Aluminum trays" },
                  { row: "Featured on Food Network", q: "Yes — BBQ Brawl + more", v: "No", b: "No" },
                  { row: "You keep your date flexible after booking", q: "Yes — deposit is a credit", v: "Usually non-refundable", b: "Small deposit" },
                  { row: "Typical per-guest range", q: "$37–$130", v: "$95–$225+", b: "$18–$40" },
                ].map((r) => (
                  <tr key={r.row} className="border-b border-white/10">
                    <td className="py-4 pr-4 text-bone/85 font-light">{r.row}</td>
                    <td className="py-4 px-4 text-center bg-gold/[0.04] border-x border-gold/20 text-bone">{r.q}</td>
                    <td className="py-4 px-4 text-center text-bone/60 font-light">{r.v}</td>
                    <td className="py-4 px-4 text-center text-bone/60 font-light">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-bone/60 text-sm font-light max-w-3xl">
            Note: We're happy to be compared. Get quotes from anyone — then call us. Most brides come back after they see the difference in what's actually included.
          </p>
        </div>
      </section>

      {/* 4. TWO WAYS TO SET THE TABLE — menu cards */}

      <section id="menus" className="pt-20 lg:pt-28 pb-12 scroll-mt-32">
        <div className="container-luxe max-w-5xl">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">{regionLabel} Wedding Reception Catering</div>
            <h2 className="heading-xl text-bone">Choose your wedding reception menu.</h2>
            <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">
              Every Qfire wedding reception menu is fully customized to your day, your guests and your vision — with {regionLabel} pricing and local service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <a href={woodMenuUrl} target="_blank" rel="noopener noreferrer" className="group relative aspect-[5/4] overflow-hidden border border-white/5">
              <img src={platter1} alt={`Wood-Fired — ${regionLabel}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="heading-md text-bone group-hover:text-gold transition-colors">Wood-Fired — {regionLabel}</div>
                <p className="mt-4 text-bone/70 max-w-sm">Slow-smoked brisket, tri-tip, pulled meats and comfort sides. Backyard elegance, restaurant polish.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                  View Menu <ArrowRight className="size-3" />
                </div>
              </div>
            </a>
            <Link to={steakMenuPath} className="group relative aspect-[5/4] overflow-hidden border border-white/5">
              <img src={steakMenu} alt={`Steakhouse — ${regionLabel}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="heading-md text-bone group-hover:text-gold transition-colors">Steakhouse — {regionLabel}</div>
                <p className="mt-4 text-bone/70 max-w-sm">Ribeye, filet, picanha, prime rib. Plated dinners and family-style service. Restaurant-quality at your venue.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                  View Menu <ArrowRight className="size-3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


      <InlineFAQ
        items={[
          {
            q: "Do we get a tasting before we book?",
            a: "As long as your reception date is still available, you're welcome to schedule a tasting before booking. You'll try 3 meats, 3 sides, and 2 appetizers — serving 5–7 guests — for $200, then decide if we're the right fit for your event.",
          },
          {
            q: "Do you charge a cake-cutting fee?",
            a: "Yes. We charge a $100 cake-cutting fee because cake is typically served after dinner, when our team would normally be wrapping up. This covers the additional staff time needed to beautifully cut, plate, and serve your cake so you can enjoy the moment worry-free.",
          },
        ]}
      />



      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-onyx py-10">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">As Seen On</div>
              <img src={asSeenOnBadge.url} alt="As seen on Food Network" className="w-16 h-16 rounded-full mx-auto mb-2" />
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-3">Featured</div>
              <div className="space-y-1">
                <div className="text-bone font-display text-base">Camp Cutthroat</div>
                <div className="text-bone font-display text-base">Cutthroat Kitchen Champion</div>
                <div className="text-bone font-display text-base">BBQ Crawl w/ Bobby Flay</div>
              </div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Reputation</div>
              <div className="text-bone font-display text-lg">4.9★ Average</div>
              <div className="text-xs text-bone/60 mt-1">Across hundreds of reviews</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Experience</div>
              <div className="text-bone font-display text-lg">2,000+ Events</div>
              <div className="text-xs text-bone/60 mt-1">15+ years professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (moved up — brides want questions answered early) */}
      <section id="faq" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">{regionShort} Wedding Catering FAQ</div>
            <h2 className="heading-lg text-bone">All the questions you're already thinking — answered.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
              You shouldn't have to email us to find out the basics. Here's everything brides ask us most — pricing, tastings, allergies, guest counts, timing, and yes, the "what if it rains" question.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {baseFaqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                  <h3 className="text-lg lg:text-xl text-bone font-display">{f.q}</h3>
                  <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="mt-4 text-bone/75 text-base lg:text-lg leading-relaxed font-light max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/wedding-faq" className="btn-ghost">See all wedding catering FAQs <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* WHY COUPLES CHOOSE QFIRE */}
      <section id="why-qfire" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Why Brides Choose Qfire</div>
            <h2 className="heading-lg text-bone">The caterer you'll stop searching for.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Most brides meet three to five caterers before they find us. Then the search is over. Here's what makes the difference — and why you'll feel it on your very first call.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {whyChoose.map((w) => (
              <div key={w.title} className="bg-ink p-8 group hover:bg-onyx transition-colors">
                <w.icon className="size-6 text-gold mb-5" strokeWidth={1.4} />
                <h3 className="text-xl font-display text-bone mb-3">{w.title}</h3>
                <p className="text-sm text-bone/65 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/quote" className="btn-primary">Let's Start Planning My {regionShort} Wedding Reception <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[0]} />

      {/* SERVICE STYLE COMPARISON */}
      <section id="service-styles" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">How Dinner Is Served</div>
            <h2 className="heading-lg text-bone">Three ways to serve dinner at your {regionShort} wedding reception.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Not sure which style fits? Most brides don't at first — and that's completely okay. Here's a quick look at the three, and Chef Terry will help you decide once we know your venue and guest count.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceStyles.map((s) => (
              <div key={s.name} className="bg-ink border border-white/10 p-8 lg:p-10 flex flex-col">
                <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-4">{s.tag}</div>
                <h3 className="font-display text-3xl text-bone mb-6">{s.name}</h3>
                <ul className="space-y-3 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-bone/80 text-sm">
                      <Check className="size-4 text-gold/70 mt-1 shrink-0" strokeWidth={1.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-auto text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold self-start">
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-bone/75">
            <p className="text-lg font-light">Still not sure which one is right for you?</p>
            <Link to="/quote" className="inline-block mt-4 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
              Ask Chef Terry — He'll Help You Decide
            </Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[1]} />

      {/* LIVE CHARCOAL GRILLING */}
      <section id="live-fire" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={grilling} alt={`Live charcoal grilling at a ${regionShort} wedding reception`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">The Moment Guests Remember</div>
            <h2 className="heading-lg text-bone">Real fire. Real steak. Right in the middle of your reception.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Most wedding caterers reheat everything in a back kitchen. We don't. Your steaks, chops, and chicken are grilled over real hardwood charcoal right at your venue — the way great food is supposed to be cooked.</p>
              <p>Ribeyes. New York strips. Picanha (that prized Brazilian top sirloin cap). Brick chicken. Fresh seafood. Burgers seared to order. The aroma drifts across your reception. Guests wander over. Photos happen. The whole night just… levels up.</p>
              <p className="text-gold/90 italic text-base">"The live-fire station stopped the room. Guests are still texting us about it." — that's the note we get most often.</p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Grilled fresh in front of your guests", "Steakhouse-quality steaks & chops", "Wood-fired chicken & seafood", "Live-action carving stations", "A stunning visual centerpiece", "Restaurant-quality char every time"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm">
                  <Flame className="size-4 text-gold" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Bring the Fire to My Wedding Reception <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <InlineFAQ
        eyebrow="Real questions we hear all the time"
        items={[
          {
            q: "What if it rains — or hits 110° in the afternoon?",
            a: "We plan for weather from day one. The live-fire grills operate under a canopy in rain, wind, and heat, and we can shift to a covered service area or venue kitchen if conditions change — same menu, same timing. Every proposal includes a weather contingency baked in.",
          },
          {
            q: "Can you handle allergies and dietary restrictions?",
            a: "Absolutely. Every wedding gets vegetarian, vegan, gluten-free, and dairy-free options as part of the menu. For peanut, tree-nut, shellfish, and other serious allergies, we run a dedicated prep line and label every plate at the pass. Just tell us who needs what.",
          },
        ]}
      />

      {/* STEAKHOUSE EXPERIENCE */}
      <section id="steakhouse" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-6">The Steakhouse Experience</div>
            <h2 className="heading-lg text-bone">Want your wedding reception to feel like a five-star steakhouse? We can do that.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf &amp; turf — plated under candlelight, served with white-glove polish, presented like you're at the nicest steakhouse in town.</p>
              <p>The food. The lighting. The service. The whole feeling of a great steakhouse — brought right to your venue. It's what most of our black-tie brides pick, and it's the moment your guests will describe as "unreal."</p>
            </div>
            <Link to={steakMenuPath} className="inline-flex items-center gap-2 mt-10 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
              See the Steakhouse Experience Menu <ArrowRight className="size-3" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <img src={steak} alt={`Premium steaks grilled live for a ${regionShort} luxury wedding reception`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[2]} />


      {/* DATE CHARGE */}
      <section className="py-24 lg:py-32 bg-onyx border-y border-white/10">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <div className="gold-rule mb-8" />
            <div className="eyebrow mb-6">About That Date Retainer</div>
            <h2 className="heading-md text-bone">Reserve your date without locking in anything else.</h2>
          </div>
          <div>
            <p className="text-bone/85 text-lg font-light leading-relaxed">
              Once you're ready, we hold your date with a <strong className="text-gold">35% Date Retainer</strong> — and here's the important part: <em>it applies 100% to your final invoice</em>. You're not paying extra. You're just protecting your date on our calendar.
            </p>
            <p className="mt-5 text-bone/75 text-base font-light leading-relaxed">
              We know it can feel scary to sign anything early in planning. So here's exactly what the retainer does <em>not</em> do:
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "It does NOT lock in your menu — that stays flexible",
                "It does NOT lock in your guest count — RSVPs happen later",
                "It does NOT lock in your service style — buffet, family, plated, all still open",
                "It does NOT lock in your bar package — swap or add anytime",
                "It does NOT lock in your upgrades — most planning happens after you book",
                "It DOES lock in your date and our team so no one else can take it",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-bone/85 text-base">
                  <Check className="size-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Reserve My Wedding Reception Date <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[3]} />


      <InlineFAQ
        eyebrow="The stuff planners always ask us"
        items={[
          {
            q: "Do you feed the photographer, DJ, and planner?",
            a: "Yes — vendor meals are billed at a reduced rate (typically $18–$24 per vendor) and served hot from the same kitchen right after your main service. A fed vendor is a happy vendor, and your planner will love you for it.",
          },
          {
            q: "Are you licensed and fully insured?",
            a: "Yes. We carry full general liability insurance, food handler licensing, and workers' compensation coverage. Most venues require a certificate naming them as additional insured — we handle that paperwork directly with your venue so you never have to think about it.",
          },
        ]}
      />

      {/* MENU OPTIONS GRID */}
      <section id="menu-options" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">What You Can Serve</div>
            <h2 className="heading-lg text-bone">Wood-fired. Upscale steakhouse. Surf &amp; turf. Or all three.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Whatever you dream up for your {regionShort} wedding reception menu, it comes off our live-fire grill — and Chef Terry will help you build the mix that fits your vibe and your budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { img: platter, title: "Wood-Fire Catering", body: "Brisket, ribs, pulled pork, smoked chicken, sausage, all the sides.", to: "/menus" },
              { img: steakMenu, title: "Steakhouse", body: "Ribeye, NY strip, filet, picanha, prime rib, salmon, surf & turf.", to: steakMenuPath },
              { img: platter1, title: "Carving Stations", body: "Chef-attended live carving — picanha, brisket, prime rib, lamb.", to: "/menus" },
            ].map((m) => (
              <Link key={m.title} to={m.to} className="group relative aspect-[4/5] overflow-hidden block">
                <img src={m.img} alt={`${m.title} for ${regionShort} wedding receptions`} loading="lazy" decoding="async" fetchPriority="low" width={800} height={1000} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl text-bone">{m.title}</h3>
                  <p className="text-sm text-bone/80 mt-2 font-light">{m.body}</p>
                  <div className="mt-4 text-[0.65rem] tracking-[0.28em] uppercase text-gold">View Menu →</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { img: bartender, title: "Bartending" },
              { img: buffet, title: "Buffet Service" },
              { img: reception, title: "Family Style" },
              { img: heroFire, title: "Onsite Grilling" },
            ].map((m) => (
              <div key={m.title} className="relative aspect-square overflow-hidden bg-ink">
                <img src={m.img} alt={`${m.title} for ${regionShort} wedding receptions`} loading="lazy" decoding="async" fetchPriority="low" width={600} height={600} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-bone font-display text-lg">{m.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[4]} />

      {/* CITIES WE SERVE */}
      <section id="service-area" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">{region} Wedding Reception Service Area</div>
            <h2 className="heading-lg text-bone">Wherever you're getting married in {region} — we're there.</h2>
            <p className="mt-6 text-bone/75 text-lg font-light leading-relaxed">
              From private estates and vineyards to grand ballrooms and intimate backyards, we cater wedding receptions all across {region}, including:
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6">
            {cities.map((c) => (
              <li key={c} className="text-bone/85 text-base border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-gold">·</span> {c} Wedding Reception Catering
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InlineFAQ
        eyebrow="One more thing brides ask"
        items={[
          {
            q: "Are there travel fees for destination venues?",
            a: `Anything within roughly 30 miles of our ${regionShort} home base is included at no additional charge. For destination venues (Sedona, Flagstaff, Temecula, wine country), travel and lodging are quoted transparently up front and shown right on your proposal — no surprise mileage line items on your final invoice.`,
          },
          {
            q: "How far in advance should we book?",
            a: "Most brides reserve Qfire 6–12 months out for peak Saturdays. Off-peak dates and intimate weddings can sometimes be booked inside 90 days — but if you have a spring or fall Saturday in mind, sooner is better.",
          },
        ]}
      />

      {/* CHEF BIO */}
      <section id="chef" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden max-w-md">
            <img src={chef} alt="Chef Terry Matthews — The BBQ Daddy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Meet Your Chef</div>
            <h2 className="heading-lg text-bone">Chef Terry Matthews — the guy actually cooking your wedding reception.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Fifteen years behind the grill. Over 2,000 weddings and catered events. Featured on Food Network's <em>BBQ Brawl</em> with Bobby Flay, <em>Camp Cutthroat</em>, and <em>Cutthroat Kitchen</em> — where he actually won.</p>
              <p>Here's the part most caterers won't tell you: when you hire Chef Terry, you get Chef Terry. He personally designs every wedding reception menu Qfire serves. He knows your name. He knows your date. And he cares — genuinely — about making your wedding reception one of the good ones.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Food Network", "BBQ Brawl", "Camp Cutthroat", "Cutthroat Kitchen", "15+ Years"].map((b) => (
                <span key={b} className="text-[0.65rem] tracking-[0.28em] uppercase text-gold border border-gold/40 px-4 py-2">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* REAL REVIEWS — independent third-party platforms */}
      <section id="real-reviews" className="py-20 lg:py-28 bg-onyx border-y border-white/10 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="eyebrow justify-center mb-6">Real Brides · Verified Reviews</div>
            <h2 className="heading-lg text-bone">Please don't just take our word for it.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light">
              Here's what real Qfire brides are saying on the two platforms other brides trust most. Read every review — the good, the honest, all of it.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="https://www.google.com/search?q=Qfire+Catering+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 lg:p-10 border border-gold/30 bg-ink/70 hover:bg-ink hover:border-gold transition-all text-center"
            >
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Google Reviews</div>
              <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors">Read Google Reviews</div>
              <div className="flex justify-center gap-1 mt-4">
                {[0,1,2,3,4].map((i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
              </div>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-bone/60">View on Google →</div>
            </a>
            <a
              href="https://www.weddingwire.com/reviews/qfire-catering/4c33661ea8bcf7a8.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 lg:p-10 border border-gold/30 bg-ink/70 hover:bg-ink hover:border-gold transition-all text-center"
            >
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">WeddingWire</div>
              <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors">Read Verified Reviews</div>
              <div className="flex justify-center gap-1 mt-4">
                {[0,1,2,3,4].map((i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
              </div>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-bone/60">View on WeddingWire →</div>
            </a>
            <a
              href="https://www.theknot.com/marketplace/qfire-catering-san-diego-ca-531715"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 lg:p-10 border border-gold/30 bg-ink/70 hover:bg-ink hover:border-gold transition-all text-center"
            >
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">The Knot</div>
              <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors">Read Verified Reviews</div>
              <div className="flex justify-center gap-1 mt-4">
                {[0,1,2,3,4].map((i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
              </div>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-bone/60">View on The Knot →</div>
            </a>
          </div>
        </div>
      </section>





      {/* FINAL CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <img src={reception} alt={`Luxury ${regionShort} wedding reception by Qfire`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        <div className="container-luxe relative z-10 text-center">
          <div className="eyebrow mb-6">Let's Plan Your {regionShort} Wedding Reception</div>
          <h2 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
            The dinner your guests <span className="italic text-gold font-light">will remember forever.</span>
          </h2>
          <p className="mt-8 text-xl text-bone/85 max-w-2xl mx-auto font-light">
            Send us your date. We'll check availability, put together a proposal, and set up a private tasting once you're ready. No pressure, no hard sell — just an easy conversation with a chef who wants your wedding reception to be incredible.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/quote" className="btn-primary">Start Planning My Wedding Reception <ArrowRight className="size-4" /></Link>
            <Link to="/quote" className="btn-ghost">Schedule a Tasting</Link>
            <Link to="/pricing" className="btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </>
  );
}

function ScatteredReview({ review }: { review: { q: string; a: string; e: string } }) {
  return (
    <section className="py-16 bg-ink border-y border-white/5">
      <div className="container-luxe">
        <figure className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[0,1,2,3,4].map((i) => <Star key={i} className="size-5 fill-gold text-gold" />)}
          </div>
          <blockquote className="font-display text-2xl md:text-3xl text-bone leading-snug italic font-light">
            "{review.q}"
          </blockquote>
          <figcaption className="mt-6 text-bone/70">
            <span className="text-bone font-medium">{review.a}</span>
            <span className="mx-3 text-gold">·</span>
            <span className="text-xs tracking-[0.2em] uppercase">{review.e}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function InlineFAQ({
  eyebrow = "You're probably wondering",
  items,
}: {
  eyebrow?: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="py-14 lg:py-16 bg-ink/60 border-y border-gold/10">
      <div className="container-luxe">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-gold">
            <MessageCircle className="size-4" strokeWidth={1.6} />
            <span className="text-[0.65rem] tracking-[0.3em] uppercase">{eyebrow}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {items.map((f) => (
              <div key={f.q} className="border-l-2 border-gold/40 pl-5">
                <h3 className="font-display text-xl lg:text-2xl text-bone leading-snug mb-3">
                  {f.q}
                </h3>
                <p className="text-bone/80 text-base leading-relaxed font-light">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

