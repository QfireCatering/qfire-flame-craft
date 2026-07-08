import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Award, Users, Star, Clock, Sparkles, Briefcase, ShieldCheck, Building2, Truck, MessageCircle } from "lucide-react";
import { SectionNav } from "./SectionNav";
import { WoodFirePricing } from "./WoodFirePricing";
import { contact } from "@/lib/contact";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";

import corpSetupBg from "@/assets/corporate/corp-setup-bg.png.asset.json";
import corpLuncheon from "@/assets/corporate/corp-luncheon-crowd.jpg.asset.json";
import corpRetirement from "@/assets/corporate/corp-retirement.jpg.asset.json";
import corpBuffetLine from "@/assets/corporate/corp-buffet-line.jpg.asset.json";
import corpJobsiteTacos from "@/assets/corporate/corp-jobsite-tacos.jpg.asset.json";
import corpJobsiteCrew from "@/assets/corporate/corp-jobsite-crew.jpg.asset.json";
import corpBbqBuffet from "@/assets/corporate/corp-bbq-buffet.png.asset.json";
import corpParkSetup from "@/assets/corporate/corp-park-setup.avif.asset.json";
import cardWoodFired from "@/assets/corporate/corp-card-wood-fired.png.asset.json";
import cardSteakhouse from "@/assets/corporate/corp-card-steakhouse.png.asset.json";
import cardCarving from "@/assets/corporate/corp-card-carving.avif.asset.json";
import chefAsset from "@/assets/chef-terry.jpg.asset.json";
import heroFire from "@/assets/hero-fire.jpg";
import buffet from "@/assets/buffet.jpg";

const officeHero = corpSetupBg.url;
const officeAlt = corpLuncheon.url;
const grilling = corpJobsiteTacos.url;
const steak = corpBbqBuffet.url;
const steakMenu = cardSteakhouse.url;
const platter = cardWoodFired.url;
const platter1 = cardCarving.url;
const bartender = corpParkSetup.url;
const setting = corpBuffetLine.url;
const chef = chefAsset.url;
const jobsiteCrew = corpJobsiteCrew.url;
const retirement = corpRetirement.url;

export interface CorporateRegionConfig {
  region: string;
  regionShort: string;
  regionSlug: "phoenix" | "san-diego";
  path: string;
  cities: string[];
  reviewCities: string[];
  heroImage?: string;
}

const baseFaqs = [
  { q: "About how much should we expect to spend on corporate catering?", a: "Most Qfire corporate events land between $32 and $145 per guest depending on menu (drop-off vs. buffet vs. plated Steakhouse Experience), staffing, live-fire stations, bar service, and rentals. See the 'Average Cost for Catering' example above for a realistic 100-guest budget. Every proposal is itemized — no hidden fees, no surprise service charges, and clean invoicing your AP team will appreciate." },
  { q: "Can our menu be fully customized?", a: "Yes. Every Qfire corporate menu is built from scratch around your team, your dietary needs, your budget, and your brand. Chef Terry will design the proposal — hors d'oeuvres, entrees, sides, dessert, bar — and you can refine it right up until roughly 14 days out." },
  { q: "Can we schedule a tasting?", a: "Absolutely. If your date is still available, you're welcome to schedule a tasting before booking. You'll sample 3 meats, 3 sides, and 2 appetizers for 5–7 guests ($200) — then decide if we're the right fit for your team." },
  { q: "How does the 35% Date Retainer work?", a: "Your date is reserved with a 35% Date Retainer that applies 100% to your final invoice. It locks in your date and our team — NOT your menu, guest count, or service style. Those all stay flexible as planning evolves." },
  { q: "Do you grill onsite at the office?", a: "Yes — live charcoal grilling is one of our signature corporate offerings. We roll in the wood-fired grill and cook ribeyes, picanha, brisket, salmon, and chicken right in your courtyard, rooftop, parking lot, or jobsite. The aroma, the visual, the freshness — it's the moment your team remembers." },
  { q: "Can we update our guest count later?", a: "Yes. The final guest count locks in 7–14 days before the event. Until then, you can scale up or down as RSVPs come in without any rebooking penalty." },
  { q: "What's the plan if it rains — or if it's 110° in July?", a: "We plan for weather from day one. Our live-fire grills operate under a canopy in rain, wind, and heat. For extreme conditions we can shift to a covered service area or interior space without changing your menu. Every proposal includes a weather contingency." },
  { q: "Do you accommodate allergies and dietary restrictions?", a: "Always. Every proposal includes vegetarian, vegan, gluten-free, and dairy-free options. For peanut, tree-nut, shellfish, and other serious allergies we run a dedicated prep line and label every plate at the pass." },
];

const whyChoose = [
  { icon: Award, title: "You're hiring a real chef", body: "15+ years professional. 2,000+ corporate events. Featured on Food Network. Chef Terry personally designs every menu we serve — you're not getting a sales rep and a line cook." },
  { icon: Clock, title: "We show up on time. Every time.", body: "In 15 years we've never missed an event, never been late for setup, never held up an executive keynote. That's the promise, and your facilities team will confirm it." },
  { icon: Flame, title: "Live fire. Real food. Hot plates.", body: "No sad chafing-dish reheats. Steaks, chops, chicken, and seafood grilled over hardwood charcoal right at your office — the moment your team remembers." },
  { icon: Sparkles, title: "You'll always know what's happening next", body: "Emails answered the same day. BEOs shared early. Changes handled without a sigh. You'll never feel like you're chasing us for an update." },
  { icon: ShieldCheck, title: "COI-ready, AP-friendly", body: "Full general liability, workers' comp, food handler licensing. We name your building as additional insured and handle the paperwork with facilities and AP directly." },
  { icon: Users, title: "You get to actually host your event", body: "Setup, service, live-fire cooking, buffet refresh, coordination, breakdown — all handled. You focus on your team and your guests, not the caterer." },
];

const serviceStyles = [
  {
    name: "Full-Service Buffet",
    tag: "Most Popular",
    bullets: [
      "Feels elegant without feeling stiff",
      "Team picks exactly what they love",
      "Fast service — no long lines",
      "Beautiful presentation, on-brand for the room",
      "Our staff keeps it hot and refreshed all event",
      "Perfect for most corporate events (50–500 guests)",
    ],
  },
  {
    name: "Family Style",
    tag: "Most Connected",
    bullets: [
      "Big shared platters brought right to each table",
      "Everyone talks, everyone eats together",
      "Feels warm and celebratory — like the best team dinner",
      "No lines, no buffet traffic",
      "Great for executive retreats and board dinners",
      "The style that changes how a team talks the next day",
    ],
  },
  {
    name: "Plated Dinner Service",
    tag: "Most Formal",
    bullets: [
      "Restaurant-style, coursed and synchronized",
      "Every guest served at the same moment",
      "The most polished, elegant dining experience",
      "Ideal for galas, award dinners, and black-tie events",
      "Menu cards, wine pairings, white-glove service",
      "The corporate event guests describe as 'unreal'",
    ],
  },
];

export function CorporatePage({ config }: { config: CorporateRegionConfig }) {
  const { region, regionShort, cities, reviewCities, path } = config;

  const reviews = [
    { q: `Chef Terry and his team made our ${regionShort} executive holiday party unforgettable. The brisket and ribeyes were perfect, and every single team member asked us who our caterer was. Service was flawless from setup through the last handshake.`, a: "Rachel S., HR Director", e: `${reviewCities[0]} · Tech Company · 240 guests · Dec 2024` },
    { q: `We did a plated dinner for 180 at our sales kickoff and not a single thing went wrong. Our EA said it was one of the smoothest catering executions she'd ever seen. The food was the talk of the room.`, a: "Daniel M., COO", e: `${reviewCities[1] ?? reviewCities[0]} · Financial Firm · 180 guests · Feb 2024` },
    { q: "The live-fire steak station literally stopped the room. Team members were taking videos, our photographer was thrilled, and people still text me about the ribeye months later.", a: "Patricia L., Facilities Director", e: `${reviewCities[2] ?? reviewCities[0]} · Healthcare · 320 guests · Sept 2024` },
    { q: "As an EA who books corporate catering weekly, Qfire is at the top of my preferred vendor list — clean, on time, professional, and the food is legitimately exceptional. I recommend them without hesitation.", a: "Allison K., Executive Assistant", e: `${region} · 40+ corporate events coordinated with Qfire` },
    { q: "Communication was incredible from day one. Every email returned same-day. Every menu change handled without a sigh. On the day, they set up hours early and broke down without a trace. Our facilities team asked for their card.", a: "Marcus T., Project Manager", e: `${reviewCities[3] ?? reviewCities[0]} · General Contractor · 145 guests · March 2025` },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Qfire Catering — ${region} Corporate Catering`,
    image: config.heroImage || officeHero,
    url: path,
    telephone: "+1-602-555-0123",
    priceRange: "$$$",
    servesCuisine: ["Wood-Fire", "Steakhouse Experience", "American", "Corporate Catering"],
    areaServed: cities.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "400" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Corporate", item: "/corporate" },
      { "@type": "ListItem", position: 3, name: `${region} Corporate Catering`, item: path },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: baseFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Corporate Catering",
    provider: { "@type": "LocalBusiness", name: "Qfire Catering" },
    areaServed: cities.join(", "),
    description: `Premium corporate catering across ${region} — live charcoal grilling, premium steaks, full-service buffets, family-style, and plated dinner service for offices, executive teams, and jobsites.`,
  };

  const sectionNavItems = [
    { id: "estimator", label: "Real Corporate Pricing" },
    { id: "steakhouse-pricing", label: "Steakhouse Pricing" },
    { id: "compare", label: "How We Compare" },
    { id: "menus", label: "Menus" },
    { id: "why-qfire", label: "Why Qfire" },
    { id: "service-styles", label: "Service Styles" },
    { id: "live-fire", label: "Live Fire" },
    { id: "steakhouse", label: "Steakhouse" },
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
    { name: "Buffet Style", price: isPhx ? "$74" : "$79", per: "/ person", desc: `Smooth. Efficient. Elegant. Restaurant-quality buffet presentation. Ideal for ${regionShort} corporate events.` },
    { name: "Family Style", price: isPhx ? "$89" : "$94", per: "/ person", desc: "Shared dining. Passed platters. Connected guest experience. Luxury presentation, end to end." },
    { name: "Plated Service", price: isPhx ? "$128" : "$133", per: "/ person", desc: "Restaurant-style service. Each course individually served. Our most luxurious corporate dining experience." },
  ];

  return (
    <>
      <SectionNav items={sectionNavItems} />
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img src={config.heroImage || officeHero} alt={`Executive corporate catering for a ${regionShort} team by Qfire`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative z-10 pb-20 lg:pb-28 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">{region} Corporate Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tight">
              Big event on the calendar. <span className="italic text-gold font-light">Let's feed your team like it matters.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light leading-relaxed max-w-2xl">
              Planning a corporate event is a lot. The food shouldn't be the part that stresses you out. We've catered over 2,000 corporate events across {region} — and we'd love to make yours one of them.
            </p>
            <p className="mt-6 text-lg text-bone/75 font-light leading-relaxed max-w-2xl">
              You'll get a real chef, honest pricing, a team that shows up on time, and an event where lunch (or dinner) is the thing your people won't stop talking about.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#estimator" className="btn-primary">
                See Real Corporate Pricing <ArrowRight className="size-4" />
              </a>
              <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-gold/90 border border-gold/30 px-4 py-2.5 bg-gold/5">
                <Clock className="size-3.5" /> Usually responds within 4 business hours
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-bone/70">
              <div><span className="text-gold font-display text-2xl">15+</span> Years Doing This</div>
              <div><span className="text-gold font-display text-2xl">2,000+</span> Corporate Events</div>
              <div><span className="text-gold font-display text-2xl">4.9★</span> Client-Rated</div>
              <div><span className="text-gold font-display text-2xl">Food Network</span> Featured Chef</div>
            </div>
            <div className="mt-6 text-xs tracking-[0.2em] uppercase text-bone/55">
              <span className="text-gold/80">Your Local {regionShort} Team</span> · <a href={contact.phoneHref} className="text-bone hover:text-gold transition-colors">{contact.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. WOOD-FIRE PRICING */}
      <WoodFirePricing regionSlug={config.regionSlug} />

      {/* 2. STEAKHOUSE EXPERIENCE PRICING */}
      <section id="steakhouse-pricing" className="py-20 lg:py-28 bg-ink border-t border-white/5 scroll-mt-32">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center mb-6">Steakhouse Experience — Pricing</div>
            <h2 className="heading-lg text-bone">
              Surf &amp; Turf Steakhouse Experience starting at <span className="text-gold italic font-light">{isPhx ? "$74" : "$79"}/guest.</span>
            </h2>
            <p className="mt-5 text-bone/65 text-base font-light">
              Live charcoal grilling, white-glove service, and restaurant-quality presentation at your {regionShort} office or venue.
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
                <p className="mt-6 text-bone/70 leading-relaxed font-light">{tier.desc}</p>
              </article>
            ))}
          </div>
          <p className="text-center mt-10 text-xs text-bone/45 tracking-wider uppercase">
            Pricing varies by guest count, menu selections and venue specifics. Final proposals are built one-to-one.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="compare" className="py-20 lg:py-28 bg-onyx border-y border-white/10 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">How We Compare</div>
            <h2 className="heading-lg text-bone">Qfire vs. the other corporate catering options.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
              Most planners get quotes from a chain caterer, a local box-lunch shop, and a full-service caterer like us. Here's the honest side-by-side.
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
                    <div className="text-bone/50 text-[0.65rem] tracking-[0.28em] uppercase mb-1">Chain Caterer</div>
                    <div className="text-bone/70 font-display text-base">Corporate franchise</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-bone/50 text-[0.65rem] tracking-[0.28em] uppercase mb-1">Box-Lunch Shop</div>
                    <div className="text-bone/70 font-display text-base">Drop-off only</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { row: "Chef personally designs your menu", q: "Yes — Chef Terry", v: "No — set catalog", b: "No — set menu" },
                  { row: "Live-fire grilling onsite", q: "Yes — hardwood charcoal", v: "Rarely", b: "No" },
                  { row: "Real steakhouse plates (ribeye, filet, picanha)", q: "Yes", v: "Sometimes (extra $)", b: "No" },
                  { row: "Professional uniformed service staff", q: "Yes — included", v: "Yes — service fee", b: "Usually not" },
                  { row: "Full setup, refresh, and breakdown", q: "Yes — included", v: "Yes", b: "No — you handle it" },
                  { row: "Custom menu (change it as you plan)", q: "Yes, up to 14 days out", v: "Locked at contract", b: "Menu only" },
                  { row: "Real photographable presentation", q: "Yes — styled buffets", v: "Standard chafers", b: "Aluminum trays" },
                  { row: "Featured on Food Network", q: "Yes — BBQ Brawl + more", v: "No", b: "No" },
                  { row: "COI, W-9, AP-ready invoicing", q: "Yes — same day", v: "Yes", b: "Basic invoice" },
                  { row: "Typical per-guest range", q: "$32–$145", v: "$45–$125", b: "$14–$28" },
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
            Note: We're happy to be compared. Get quotes from anyone — then call us. Most planners come back after they see the difference in what's actually included.
          </p>
        </div>
      </section>

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

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">{regionShort} Corporate Catering FAQ</div>
            <h2 className="heading-lg text-bone">All the questions you're already thinking — answered.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
              You shouldn't have to email us to find out the basics. Here's what corporate planners ask us most — pricing, invoicing, allergies, timing, and yes, the "what if it rains" question.
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
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why-qfire" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Why Corporate Teams Choose Qfire</div>
            <h2 className="heading-lg text-bone">The caterer your EA will stop searching for.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Most planners meet three to five caterers before they find us. Then the search is over. Here's what makes the difference — and why you'll feel it on your very first call.
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
            <Link to="/quote" className="btn-primary">Let's Plan My {regionShort} Corporate Event <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[0]} />

      {/* SERVICE STYLES */}
      <section id="service-styles" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">How Dinner Is Served</div>
            <h2 className="heading-lg text-bone">Three ways to serve your {regionShort} corporate event.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Not sure which style fits? Most planners don't at first — and that's completely okay. Here's a quick look at the three, and Chef Terry will help you decide once we know your venue and guest count.
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

      {/* MENUS */}
      <section id="menus" className="pt-20 lg:pt-28 pb-12 scroll-mt-32">
        <div className="container-luxe max-w-5xl">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">{regionLabel} Corporate Catering</div>
            <h2 className="heading-xl text-bone">Choose your corporate menu.</h2>
            <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">
              Every Qfire corporate menu is fully customized to your event, your team and your budget — with {regionLabel} pricing and local service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <a href={woodMenuUrl} target="_blank" rel="noopener noreferrer" className="group relative aspect-[5/4] overflow-hidden border border-white/5">
              <img src={platter} alt={`Wood-Fired — ${regionLabel}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="heading-md text-bone group-hover:text-gold transition-colors">Wood-Fired — {regionLabel}</div>
                <p className="mt-4 text-bone/70 max-w-sm">Slow-smoked brisket, tri-tip, pulled meats and comfort sides. Team-favorite lunches, restaurant polish.</p>
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
                <p className="mt-4 text-bone/70 max-w-sm">Ribeye, filet, picanha, prime rib. Plated dinners and family-style service. Restaurant-quality at your office or venue.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                  View Menu <ArrowRight className="size-3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE FIRE */}
      <section id="live-fire" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={grilling} alt={`Live charcoal grilling at a ${regionShort} corporate event`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">The Moment Your Team Remembers</div>
            <h2 className="heading-lg text-bone">Real fire. Real steak. Right in the middle of your event.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Most corporate caterers reheat everything in a back kitchen. We don't. Your steaks, chops, and chicken are grilled over real hardwood charcoal right at your office or venue — the way great food is supposed to be cooked.</p>
              <p>Ribeyes. New York strips. Picanha. Brick chicken. Fresh seafood. Burgers seared to order. The aroma drifts across the courtyard. Team members wander over. Photos happen. The whole event just… levels up.</p>
              <p className="text-gold/90 italic text-base">"The live-fire station stopped the room. My team is still texting me about it." — that's the note we get most often.</p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Grilled fresh in front of your team", "Steakhouse-quality steaks & chops", "Wood-fired chicken & seafood", "Live-action carving stations", "A stunning visual centerpiece", "Restaurant-quality char every time"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm">
                  <Flame className="size-4 text-gold" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Bring the Fire to My Corporate Event <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <InlineFAQ
        eyebrow="Real questions we hear all the time"
        items={[
          { q: "What if it rains — or hits 110° in the afternoon?", a: "We plan for weather from day one. The live-fire grills operate under a canopy in rain, wind, and heat, and we can shift to a covered service area or interior space if conditions change — same menu, same timing. Every proposal includes a weather contingency baked in." },
          { q: "Can you handle allergies and dietary restrictions?", a: "Absolutely. Every corporate event gets vegetarian, vegan, gluten-free, and dairy-free options as part of the menu. For peanut, tree-nut, shellfish, and other serious allergies, we run a dedicated prep line and label every plate at the pass. Just tell us who needs what." },
        ]}
      />

      {/* STEAKHOUSE */}
      <section id="steakhouse" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-6">The Steakhouse Experience</div>
            <h2 className="heading-lg text-bone">Want your corporate event to feel like a five-star steakhouse? We can do that.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf &amp; turf — plated under candlelight, served with white-glove polish, presented like you're at the nicest steakhouse in town.</p>
              <p>The food. The lighting. The service. The whole feeling of a great steakhouse — brought right to your office or venue. It's what most of our board dinners and executive galas pick, and it's the moment your guests will describe as "unreal."</p>
            </div>
            <Link to={steakMenuPath} className="inline-flex items-center gap-2 mt-10 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
              See the Steakhouse Experience Menu <ArrowRight className="size-3" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <img src={steak} alt={`Premium steaks grilled live for a ${regionShort} corporate steakhouse dinner`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[2]} />

      {/* DATE RETAINER */}
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
            <Link to="/quote" className="btn-primary mt-10">Reserve My Corporate Event Date <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[3]} />

      <InlineFAQ
        eyebrow="The stuff EAs and facilities teams always ask us"
        items={[
          { q: "Are you COI-ready for our building?", a: "Yes. We carry full general liability insurance, food handler licensing, and workers' compensation coverage. Most corporate buildings require a certificate naming them as additional insured — we handle that paperwork directly with your facilities team so you never have to think about it." },
          { q: "Do you invoice through our AP system?", a: "Yes. We work with AP departments, PO systems, W-9s, and net-30 terms. Detailed itemized invoicing available for established corporate accounts, and we can bill by department, cost center, or event code however your finance team prefers." },
        ]}
      />

      {/* MENU OPTIONS GRID */}
      <section id="menu-options" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">What You Can Serve</div>
            <h2 className="heading-lg text-bone">Wood-fired. Upscale steakhouse. Surf &amp; turf. Or all three.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Whatever you dream up for your {regionShort} corporate menu, it comes off our live-fire grill — and Chef Terry will help you build the mix that fits your team and your budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { img: platter, title: "Wood-Fire Catering", body: "Brisket, ribs, pulled pork, smoked chicken, sausage, all the sides.", to: "/menus" },
              { img: steakMenu, title: "Steakhouse", body: "Ribeye, NY strip, filet, picanha, prime rib, salmon, surf & turf.", to: steakMenuPath },
              { img: platter1, title: "Carving Stations", body: "Chef-attended live carving — picanha, brisket, prime rib, lamb.", to: "/menus" },
            ].map((m) => (
              <Link key={m.title} to={m.to} className="group relative aspect-[4/5] overflow-hidden block">
                <img src={m.img} alt={`${m.title} for ${regionShort} corporate events`} loading="lazy" decoding="async" fetchPriority="low" width={800} height={1000} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              { img: setting, title: "Family Style" },
              { img: heroFire, title: "Onsite Grilling" },
            ].map((m) => (
              <div key={m.title} className="relative aspect-square overflow-hidden bg-ink">
                <img src={m.img} alt={`${m.title} for ${regionShort} corporate events`} loading="lazy" decoding="async" fetchPriority="low" width={600} height={600} className="absolute inset-0 w-full h-full object-cover" />
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

      {/* CITIES */}
      <section id="service-area" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">{region} Corporate Catering Service Area</div>
            <h2 className="heading-lg text-bone">Wherever your team is in {region} — we're there.</h2>
            <p className="mt-6 text-bone/75 text-lg font-light leading-relaxed">
              From high-rise office towers and campus HQs to construction sites, medical centers, and rooftop venues, we cater corporate events all across {region}, including:
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6">
            {cities.map((c) => (
              <li key={c} className="text-bone/85 text-base border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-gold">·</span> {c} Corporate Catering
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InlineFAQ
        eyebrow="One more thing planners ask"
        items={[
          { q: "Are there travel fees for offsite venues?", a: `Anything within roughly 30 miles of our ${regionShort} home base is included at no additional charge. For destination venues (Sedona, Flagstaff, Temecula, wine country), travel and lodging are quoted transparently up front and shown right on your proposal — no surprise mileage line items on your final invoice.` },
          { q: "How far in advance should we book?", a: "Drop-off office catering can often be turned around in 24–72 hours. Full-service events with staffing and live-fire grilling generally book 2–4 weeks out. Holiday parties (Nov/Dec) and large galas fill 60–120 days in advance." },
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
            <h2 className="heading-lg text-bone">Chef Terry Matthews — the guy actually cooking your corporate event.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Fifteen years behind the grill. Over 2,000 corporate events and catered occasions. Featured on Food Network's <em>BBQ Brawl</em> with Bobby Flay, <em>Camp Cutthroat</em>, and <em>Cutthroat Kitchen</em> — where he actually won.</p>
              <p>Here's the part most caterers won't tell you: when you hire Chef Terry, you get Chef Terry. He personally designs every corporate menu Qfire serves. He knows your company name. He knows your date. And he cares — genuinely — about making your event one of the good ones.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Food Network", "BBQ Brawl", "Camp Cutthroat", "Cutthroat Kitchen", "15+ Years"].map((b) => (
                <span key={b} className="text-[0.65rem] tracking-[0.28em] uppercase text-gold border border-gold/40 px-4 py-2">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REAL REVIEWS */}
      <section id="real-reviews" className="py-20 lg:py-28 bg-onyx border-y border-white/10 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="eyebrow justify-center mb-6">Real Corporate Clients · Verified Reviews</div>
            <h2 className="heading-lg text-bone">Please don't just take our word for it.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light">
              Here's what real Qfire corporate clients are saying on the platforms other planners trust most. Read every review — the good, the honest, all of it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a href="https://www.google.com/search?q=Qfire+Catering+reviews" target="_blank" rel="noopener noreferrer" className="group p-8 lg:p-10 border border-gold/30 bg-ink/70 hover:bg-ink hover:border-gold transition-all text-center">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Google Reviews</div>
              <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors">Read Google Reviews</div>
              <div className="flex justify-center gap-1 mt-4">
                {[0,1,2,3,4].map((i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
              </div>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-bone/60">View on Google →</div>
            </a>
            <a href="https://www.yelp.com/biz/qfire-catering" target="_blank" rel="noopener noreferrer" className="group p-8 lg:p-10 border border-gold/30 bg-ink/70 hover:bg-ink hover:border-gold transition-all text-center">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Yelp</div>
              <div className="font-display text-2xl text-bone group-hover:text-gold transition-colors">Read Verified Reviews</div>
              <div className="flex justify-center gap-1 mt-4">
                {[0,1,2,3,4].map((i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
              </div>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-bone/60">View on Yelp →</div>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <img src={retirement} alt={`Luxury ${regionShort} corporate event by Qfire`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        <div className="container-luxe relative z-10 text-center">
          <div className="eyebrow mb-6">Let's Plan Your {regionShort} Corporate Event</div>
          <h2 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
            The event your team <span className="italic text-gold font-light">will remember forever.</span>
          </h2>
          <p className="mt-8 text-xl text-bone/85 max-w-2xl mx-auto font-light">
            Send us your date. We'll check availability, put together a proposal, and set up a private tasting once you're ready. No pressure, no hard sell — just an easy conversation with a chef who wants your corporate event to be incredible.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/quote" className="btn-primary">Start Planning My Corporate Event <ArrowRight className="size-4" /></Link>
            <Link to="/quote" className="btn-ghost">Schedule a Tasting</Link>
            <Link to="/pricing" className="btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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

function InlineFAQ({ eyebrow = "You're probably wondering", items }: { eyebrow?: string; items: { q: string; a: string }[] }) {
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
