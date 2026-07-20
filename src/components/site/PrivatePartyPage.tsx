import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Award, Users, Star, Clock, Sparkles, Heart, PartyPopper, MessageCircle } from "lucide-react";
import { SectionNav } from "./SectionNav";
import { AnswerBox } from "./AnswerBox";
import { WoodFirePricing } from "./WoodFirePricing";
import { contact } from "@/lib/contact";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";

import privatePartyHero from "@/assets/private-parties-hero.png.asset.json";
import privatePartyAsset from "@/assets/private-party-setting.png.asset.json";
import privateRealAsset from "@/assets/private-real.jpg.asset.json";
import steakAsset from "@/assets/steakhouse-backyard.png.asset.json";
import steakMenuAsset from "@/assets/steakhouse-menu.png.asset.json";
import bbqPlatterAsset from "@/assets/bbq-platter.png.asset.json";
import bbqPlatter1Asset from "@/assets/bbq-platter1.png.asset.json";
import bartenderAsset from "@/assets/bartender.png.asset.json";
import weddingGrillingAsset from "@/assets/gallery/onsite-grill-v2.png.asset.json";
import chefAsset from "@/assets/chef-terry.jpg.asset.json";
import heroFire from "@/assets/hero-fire.jpg";
import buffet from "@/assets/buffet.jpg";
import carvingStationAsset from "@/assets/gallery/carving-station.png.asset.json";
import familyStyleAsset from "@/assets/gallery/family-style.png.asset.json";
const carvingStation = carvingStationAsset.url;
const familyStyle = familyStyleAsset.url;

const hero = privatePartyHero.url;
const setting = privatePartyAsset.url;
const lifestyle = privateRealAsset.url;
const grilling = weddingGrillingAsset.url;
const steak = steakAsset.url;
const steakMenu = steakMenuAsset.url;
const platter = bbqPlatterAsset.url;
const platter1 = bbqPlatter1Asset.url;
const bartender = bartenderAsset.url;
const chef = chefAsset.url;

export interface PrivatePartyRegionConfig {
  region: string;
  regionShort: string;
  regionSlug: "phoenix" | "san-diego";
  path: string;
  cities: string[];
  reviewCities: string[];
}

const baseFaqs = [
  { q: "About how much should we expect to spend on private party catering?", a: "Most Qfire private parties land between $48 and $165 per guest depending on menu (Wood-Fire buffet vs. plated Steakhouse Experience vs. surf & turf), staffing, live-fire grilling, bar service, and rentals. See the 'Average Cost for Catering' example above for a realistic 100-guest budget. Every proposal is itemized — no hidden fees, no surprise gratuities." },
  { q: "Can our menu be fully customized?", a: "Yes. Every Qfire private party menu is built from scratch around your guests, your dietary needs, your budget, and the vibe you want. Chef Terry will design a custom proposal — passed apps, entrees, sides, dessert — and you can refine it right up until roughly 14 days out." },
  { q: "Can we schedule a private tasting?", a: "Absolutely. As long as your date is still available, you're welcome to schedule a tasting before booking. You'll sample 3 meats, 3 sides, and 2 appetizers for 5–7 guests ($200) — then decide if we're the right fit." },
  { q: "How does the 35% Date Retainer work?", a: "Your date is reserved with a 35% Date Retainer that applies 100% to your final invoice. It locks in your date and our team — NOT your menu, guest count, or service style. Those all stay flexible as your planning evolves." },
  { q: "Do you grill onsite at our home or venue?", a: "Yes — live charcoal grilling is our signature. We roll in the wood-fired grill and cook ribeyes, picanha, brisket, salmon, and chicken right in your backyard, pool deck, estate, park, or rooftop. The aroma, the visual, the freshness — it's the moment your guests remember." },
  { q: "Can we update our guest count later?", a: "Yes. The final guest count locks in about 7 days before the party. Until then, you can scale up or down as RSVPs come in without any rebooking penalty." },
  { q: "What's the plan if it rains — or if it's 110° in July?", a: "We plan for weather from day one. Our live-fire grills operate under a canopy in rain, wind, and heat. For extreme conditions we can shift to a covered patio, garage, or interior space without changing your menu. Every proposal includes a weather contingency." },
  { q: "Do you accommodate allergies and dietary restrictions?", a: "Always. Every proposal includes vegetarian, vegan, gluten-free, and dairy-free options. For peanut, tree-nut, shellfish, and other serious allergies we run a dedicated prep line and label every plate at the pass." },
];

const whyChoose = [
  { icon: Award, title: "You're hiring a real chef", body: "13+ years professional. 2,500+ private parties. Featured on Food Network. Chef Terry personally designs every menu we serve — you're not getting a sales rep and a line cook." },
  { icon: Clock, title: "We show up on time. Every time.", body: "In 15 years we've never missed a party, never been late for setup, never made a host apologize to guests. That's the promise, and your neighbors will confirm it." },
  { icon: Flame, title: "Live fire. Real food. Hot plates.", body: "No sad chafing-dish reheats. Steaks, chops, chicken, and seafood grilled over hardwood charcoal right in your backyard — the moment your guests remember." },
  { icon: Sparkles, title: "You'll always know what's happening next", body: "Emails answered the same day. Timelines shared early. Changes handled without a sigh. You'll never feel like you're chasing us for an update." },
  { icon: Heart, title: "Stress-free hosting", body: "Setup, service, live-fire cooking, buffet refresh, bartending, breakdown — all handled. You won't touch a chafer, a trash bag, or a cocktail shaker." },
  { icon: PartyPopper, title: "You get to actually enjoy your party", body: "Hug your guests. Refill your own glass. Take a photo you're actually in. Show up, host, and let us handle every plate that hits the table." },
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
      "Perfect for most backyards and estates (30–200 guests)",
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
      "Great for milestone birthdays and anniversaries",
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
      "Ideal for engagement parties and milestone celebrations",
      "Menu cards, wine pairings, white-glove service",
      "The private party your guests describe as 'unreal'",
    ],
  },
];

export function PrivatePartyPage({ config }: { config: PrivatePartyRegionConfig }) {
  const { region, regionShort, cities, reviewCities, path } = config;

  const reviews = [
    { q: "Best 50th Birthday Dinner EVER! HUGE shoutout to Chef Terry and his amazing assistant, Leslie! They literally brought the steakhouse to my backyard — he brought his own grill! Every New York Strip, chicken, and salmon was grilled perfectly to temperature. What a FEAST!", a: "Tangy Robinson", e: "50th Birthday · 1/20/2026 · Google Review" },
    { q: "Terry cooked up a feast for my bachelor party and delivered it right to our backyard of the Airbnb. Food was amazing!!! We got the brisket, the BBQ chicken, mac n cheese, broccoli, and baked beans. The brisket was cooked perfectly.", a: "Michael C.", e: "Bachelor Party · 5/25/2022 · Google Review" },
    { q: "We had BBQ Daddy for an 85 person wedding shower. Terry BBQ'd tenderloin, rib eye steaks, and salmon along with 2 cold and 2 hot appys (the bacon wrapped scallops were to die for). The food was awesome and so was the staff. Terry was SUPER easy to deal with and had great communication throughout.", a: "Nanette B.", e: "Wedding Shower · 85 guests · 8/30/2023 · Google Review" },
    { q: "Terry's BBQ is a crowd pleaser and the way to go! All of our guests are still talking about the BBQ. Terry provides a great personal presence and energy — people said he could have easily been the MC! He truly cares about making guests happy and holds his employees to high standards.", a: "Mindy T.", e: "Private Event · 11/15/2021 · Google Review" },
    { q: "Terry and his crew helped make our special day magical. We did a food tasting a few weeks prior and were instantly sold. The staff arrived on time, were so professional and friendly. The food was amazing — we heard about it from our guests all night long.", a: "Tene", e: "Private Event · 8/20/2025 · Google Review" },
  ];


  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Qfire Catering — ${region} Private Party Catering`,
    image: hero,
    url: path,
    telephone: "+1-602-555-0123",
    priceRange: "$$$",
    servesCuisine: ["Wood-Fire", "Steakhouse Experience", "American", "Private Party Catering"],
    areaServed: cities.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "400" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Private Parties", item: "/private-parties" },
      { "@type": "ListItem", position: 3, name: `${region} Private Party Catering`, item: path },
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
    serviceType: "Private Party Catering",
    provider: { "@type": "LocalBusiness", name: "Qfire Catering" },
    areaServed: cities.join(", "),
    description: `Luxury private party catering across ${region} — live charcoal grilling, premium steaks, full-service buffets, family-style, and plated dinner service for backyards, birthdays, anniversaries, and milestone celebrations.`,
  };

  const sectionNavItems = [
    { id: "estimator", label: "Real Party Pricing" },
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
    { name: "Buffet Style", price: isPhx ? "$74" : "$79", per: "/ person", desc: `Smooth. Efficient. Elegant. Restaurant-quality buffet presentation. Ideal for ${regionShort} backyards and estates.` },
    { name: "Family Style", price: isPhx ? "$89" : "$94", per: "/ person", desc: "Shared dining. Passed platters. Connected guest experience. Luxury presentation, end to end." },
    { name: "Plated Service", price: isPhx ? "$128" : "$133", per: "/ person", desc: "Restaurant-style service. Each course individually served. Our most luxurious private dining experience." },
  ];

  return (
    <>
      <SectionNav items={sectionNavItems} />
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img src={hero} alt={`Luxury private party catering in ${regionShort} by Qfire`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative z-10 pb-20 lg:pb-28 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">{region} Private Party Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tight">
              You're hosting. <span className="italic text-gold font-light">Let's make it the party they never forget.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light leading-relaxed max-w-2xl">
              Planning a private party is a lot. The food shouldn't be the part that stresses you out. We've catered over 2,000 private parties across {region} — and we'd love to make yours one of them.
            </p>
            <p className="mt-6 text-lg text-bone/75 font-light leading-relaxed max-w-2xl">
              You'll get a real chef, honest pricing, a team that shows up on time, and a party where dinner is the thing your guests won't stop talking about.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#estimator" className="btn-primary">
                See Real Party Pricing <ArrowRight className="size-4" />
              </a>
              <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-gold/90 border border-gold/30 px-4 py-2.5 bg-gold/5">
                <Clock className="size-3.5" /> Usually responds within 4 business hours
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-bone/70">
              <div><span className="text-gold font-display text-2xl">15+</span> Years Doing This</div>
              <div><span className="text-gold font-display text-2xl">2,500+</span> Private Parties</div>
              <div><span className="text-gold font-display text-2xl">4.9★</span> Host-Rated</div>
              <div><span className="text-gold font-display text-2xl">Food Network</span> Featured Chef</div>
            </div>
            <div className="mt-6 text-xs tracking-[0.2em] uppercase text-bone/55">
              <span className="text-gold/80">Your Local {regionShort} Team</span> · <a href={contact.phoneHref} className="text-bone hover:text-gold transition-colors">{contact.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR ANSWER BOX (AI search / featured snippet) */}
      <AnswerBox
        question={`Who caters private parties and backyard events in ${regionShort}?`}
        answer={`Qfire Catering is a 100% dedicated full-service private-event catering company serving ${regionShort} since 2012. Chef Terry Matthews — two-time Food Network champion — brings live wood-fire grilling, steakhouse plating, and licensed bartending to your backyard, estate, or private venue. 2,500+ events catered · 4.9 / 5 · 156 Google reviews.`}
        bullets={[
          `Serving ${cities.slice(0, 4).join(", ")} and greater ${region}`,
          "Birthdays, anniversaries, graduations, retirements, celebrations of life",
          "Wood-Fire BBQ from $13.99/guest · Steakhouse Experience from $74/guest",
          "24-hour quote response · custom menus locked up to 15 days out",
        ]}
      />

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
              Live charcoal grilling, white-glove service, and restaurant-quality presentation at your {regionShort} home or venue.
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
            <h2 className="heading-lg text-bone">Qfire vs. the other private party catering options.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
              Most hosts get quotes from a personal chef, a local BBQ shop, and a full-service caterer like us. Here's the honest side-by-side.
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
                    <div className="text-bone/50 text-[0.65rem] tracking-[0.28em] uppercase mb-1">Personal Chef</div>
                    <div className="text-bone/70 font-display text-base">Solo operator</div>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <div className="text-bone/50 text-[0.65rem] tracking-[0.28em] uppercase mb-1">Local BBQ Shop</div>
                    <div className="text-bone/70 font-display text-base">Drop-off + serve</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { row: "Chef personally designs your menu", q: "Yes — Chef Terry", v: "Yes, but limited scale", b: "No — set menu" },
                  { row: "Live-fire grilling at your home", q: "Yes — hardwood charcoal", v: "Sometimes", b: "Occasionally" },
                  { row: "Real steakhouse plates (ribeye, filet, picanha)", q: "Yes", v: "Yes (extra $)", b: "No" },
                  { row: "Professional uniformed service staff", q: "Yes — included", v: "1–2 helpers max", b: "Usually not" },
                  { row: "Full setup, refresh, and breakdown", q: "Yes — included", v: "Sometimes", b: "No — you handle it" },
                  { row: "Custom menu (change it as you plan)", q: "Yes, up to 7 days out", v: "Flexible", b: "Menu only" },
                  { row: "Real photographable presentation", q: "Yes — styled buffets", v: "Simple plating", b: "Aluminum trays" },
                  { row: "Featured on Food Network", q: "Yes — BBQ Brawl + more", v: "Rarely", b: "No" },
                  { row: "Bartenders and full bar service", q: "Yes — licensed & insured", v: "No", b: "No" },
                  { row: "Typical per-guest range for BBQ", q: isPhx ? "$28 - $35" : "$35 - $54", v: "$120–$300+", b: "$18–$40" },
                  { row: "Typical per-guest range for Steakhouse", q: isPhx ? "$84 - $95" : "$84 - $100", v: "$120–$300+", b: "$40–$80" },
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
            Note: We're happy to be compared. Get quotes from anyone — then call us. Most hosts come back after they see the difference in what's actually included.
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
              <div className="text-bone font-display text-lg">2,500+ Events</div>
              <div className="text-xs text-bone/60 mt-1">13+ years professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">{regionShort} Private Party Catering FAQ</div>
            <h2 className="heading-lg text-bone">All the questions you're already thinking — answered.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light leading-relaxed">
              You shouldn't have to email us to find out the basics. Here's what hosts ask us most — pricing, tastings, allergies, guest counts, timing, and yes, the "what if it rains" question.
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
            <div className="eyebrow mb-6">Why Hosts Choose Qfire</div>
            <h2 className="heading-lg text-bone">The caterer you'll stop searching for.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Most hosts meet three to five caterers before they find us. Then the search is over. Here's what makes the difference — and why you'll feel it on your very first call.
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
            <Link to="/quote" className="btn-primary">Let's Plan My {regionShort} Private Party <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[0]} />

      {/* SERVICE STYLES */}
      <section id="service-styles" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">How Dinner Is Served</div>
            <h2 className="heading-lg text-bone">Three ways to serve dinner at your {regionShort} private party.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Not sure which style fits? Most hosts don't at first — and that's completely okay. Here's a quick look at the three, and Chef Terry will help you decide once we know your venue and guest count.
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
        </div>
      </section>

      <ScatteredReview review={reviews[1]} />

      {/* MENUS */}
      <section id="menus" className="pt-20 lg:pt-28 pb-12 scroll-mt-32">
        <div className="container-luxe max-w-5xl">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-6">{regionLabel} Private Party Catering</div>
            <h2 className="heading-xl text-bone">Choose your private party menu.</h2>
            <p className="mt-8 text-xl text-bone/70 leading-relaxed font-light">
              Every Qfire private party menu is fully customized to your event, your guests and your vibe — with {regionLabel} pricing and local service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <a href={woodMenuUrl} target="_blank" rel="noopener noreferrer" className="group relative aspect-[5/4] overflow-hidden border border-white/5">
              <img src={platter1} alt={`Wood-Fire/BBQ — ${regionLabel}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="heading-md text-bone group-hover:text-gold transition-colors">Wood-Fire/BBQ — {regionLabel}</div>
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
                <p className="mt-4 text-bone/70 max-w-sm">Ribeye, filet, picanha, prime rib. Plated dinners and family-style service. Restaurant-quality at your home or venue.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                  View Menu <ArrowRight className="size-3" />
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-12 text-center text-bone/75">
            <p className="text-lg font-light">Still not sure which one is right for you?</p>
            <Link to="/quote" className="inline-block mt-4 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
              Ask Chef Terry — He'll Help You Decide
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE FIRE */}
      <section id="live-fire" className="py-24 lg:py-32 scroll-mt-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={grilling} alt={`Live charcoal grilling at a ${regionShort} private party`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">The Moment Guests Remember</div>
            <h2 className="heading-lg text-bone">Real fire. Real steak. Right in the middle of your party.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Most caterers reheat everything in a back kitchen. We don't. Your steaks, chops, and chicken are grilled over real hardwood charcoal right in your backyard — the way great food is supposed to be cooked.</p>
              <p>Ribeyes. New York strips. Picanha. Brick chicken. Fresh seafood. Burgers seared to order. The aroma drifts across the yard. Guests wander over. Photos happen. The whole night just… levels up.</p>
              <p className="text-gold/90 italic text-base">"The live-fire station stopped the party. Guests are still texting us about it." — that's the note we get most often.</p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Grilled fresh in front of your guests", "Steakhouse-quality steaks & chops", "Wood-fired chicken & seafood", "Live-action carving stations", "A stunning visual centerpiece", "Restaurant-quality char every time"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm">
                  <Flame className="size-4 text-gold" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Bring the Fire to My Private Party <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <InlineFAQ
        eyebrow="Real questions we hear all the time"
        items={[
          { q: "What if it rains — or hits 110° in the afternoon?", a: "We plan for weather from day one. The live-fire grills operate under a canopy in rain, wind, and heat, and we can shift to a covered patio, garage, or interior space if conditions change — same menu, same timing. Every proposal includes a weather contingency baked in." },
          { q: "Can you handle allergies and dietary restrictions?", a: "Absolutely. Every party gets vegetarian, vegan, gluten-free, and dairy-free options as part of the menu. For peanut, tree-nut, shellfish, and other serious allergies, we run a dedicated prep line and label every plate at the pass. Just tell us who needs what." },
        ]}
      />

      {/* STEAKHOUSE */}
      <section id="steakhouse" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-6">The Steakhouse Experience</div>
            <h2 className="heading-lg text-bone">Want your private party to feel like a five-star steakhouse? We can do that.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf &amp; turf — plated under candlelight, served with white-glove polish, presented like you're at the nicest steakhouse in town.</p>
              <p>The food. The lighting. The service. The whole feeling of a great steakhouse — brought right to your home or venue. It's what most of our milestone birthdays and anniversaries pick, and it's the moment your guests will describe as "unreal."</p>
            </div>
            <Link to={steakMenuPath} className="inline-flex items-center gap-2 mt-10 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
              See the Steakhouse Experience Menu <ArrowRight className="size-3" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <img src={steak} alt={`Premium steaks grilled live for a ${regionShort} luxury private party`} className="absolute inset-0 w-full h-full object-cover" />
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
            <Link to="/quote" className="btn-primary mt-10">Reserve My Private Party Date <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[3]} />

      <InlineFAQ
        eyebrow="The stuff hosts always ask us"
        items={[
          { q: "Do you provide bartenders and a full bar?", a: "Yes — licensed and insured bartenders, signature cocktails, beer-and-wine packages, mocktail service, and full bar setup. Perfect for birthdays, anniversaries, engagement parties, and bachelor / bachelorette parties." },
          { q: "Are you licensed and fully insured?", a: "Yes. We carry full general liability insurance, food handler licensing, and workers' compensation coverage. If your HOA or venue requires a certificate of insurance, we handle that paperwork directly." },
        ]}
      />

      {/* MENU OPTIONS GRID */}
      <section id="menu-options" className="py-24 lg:py-32 bg-onyx scroll-mt-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">What You Can Serve</div>
            <h2 className="heading-lg text-bone">Wood-fired. Upscale steakhouse. Surf &amp; turf. Or all three.</h2>
            <p className="mt-6 text-bone/75 text-lg leading-relaxed font-light">
              Whatever you dream up for your {regionShort} private party menu, it comes off our live-fire grill — and Chef Terry will help you build the mix that fits your vibe and your budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { img: platter, title: "Wood-Fire/BBQ Catering", body: "Brisket, ribs, pulled pork, smoked chicken, sausage, all the sides.", to: "/menus" },
              { img: steakMenu, title: "Steakhouse", body: "Ribeye, NY strip, filet, picanha, prime rib, salmon, surf & turf.", to: steakMenuPath },
              { img: carvingStation, title: "Carving Stations", body: "Chef-attended live carving — picanha, brisket, prime rib, lamb.", to: "/menus" },
            ].map((m) => (
              <Link key={m.title} to={m.to} className="group relative aspect-[4/5] overflow-hidden block">
                <img src={m.img} alt={`${m.title} for ${regionShort} private parties`} loading="lazy" decoding="async" fetchPriority="low" width={800} height={1000} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              { img: familyStyle, title: "Family Style" },
              { img: heroFire, title: "Onsite Grilling" },
            ].map((m) => (
              <div key={m.title} className="relative aspect-square overflow-hidden bg-ink">
                <img src={m.img} alt={`${m.title} for ${regionShort} private parties`} loading="lazy" decoding="async" fetchPriority="low" width={600} height={600} className="absolute inset-0 w-full h-full object-cover" />
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
            <div className="eyebrow mb-6">{region} Private Party Service Area</div>
            <h2 className="heading-lg text-bone">Wherever your party is in {region} — we're there.</h2>
            <p className="mt-6 text-bone/75 text-lg font-light leading-relaxed">
              From private estates and pool decks to rented venues, parks, and vacation rentals, we cater private parties all across {region}, including:
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6">
            {cities.map((c) => (
              <li key={c} className="text-bone/85 text-base border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-gold">·</span> {c} Private Party Catering
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InlineFAQ
        eyebrow="One more thing hosts ask"
        items={[
          { q: "Are there travel fees for destination venues?", a: `Anything within roughly 30 miles of our ${regionShort} home base is included at no additional charge. For destination venues (Sedona, Flagstaff, Temecula, wine country), travel and lodging are quoted transparently up front and shown right on your proposal — no surprise mileage line items on your final invoice.` },
          { q: "How far in advance should we book?", a: "Most private parties book 30–90 days out. Holidays (Nov/Dec), graduation season (May), and prime backyard weekends fill 60–180 days in advance. Call us — we'll tell you what's still open." },
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
            <h2 className="heading-lg text-bone">Chef Terry Matthews — the guy actually cooking your private party.</h2>
            <div className="mt-8 space-y-5 text-bone/85 text-lg font-light leading-relaxed">
              <p>Fifteen years behind the grill. Over 2,000 private parties and catered events. Featured on Food Network's <em>BBQ Brawl</em> with Bobby Flay, <em>Camp Cutthroat</em>, and <em>Cutthroat Kitchen</em> — where he actually won.</p>
              <p>Here's the part most caterers won't tell you: when you hire Chef Terry, you get Chef Terry. He personally designs every private party menu Qfire serves. He knows your name. He knows your date. And he cares — genuinely — about making your party one of the good ones.</p>
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
            <div className="eyebrow justify-center mb-6">Real Hosts · Verified Reviews</div>
            <h2 className="heading-lg text-bone">Please don't just take our word for it.</h2>
            <p className="mt-5 text-bone/75 text-lg font-light">
              Here's what real Qfire hosts are saying on the platforms other planners trust most. Read every review — the good, the honest, all of it.
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
        <img src={lifestyle} alt={`Luxury ${regionShort} private party by Qfire`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        <div className="container-luxe relative z-10 text-center">
          <div className="eyebrow mb-6">Let's Plan Your {regionShort} Private Party</div>
          <h2 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
            The dinner your guests <span className="italic text-gold font-light">will remember forever.</span>
          </h2>
          <p className="mt-8 text-xl text-bone/85 max-w-2xl mx-auto font-light">
            Send us your date. We'll check availability, put together a proposal, and set up a private tasting once you're ready. No pressure, no hard sell — just an easy conversation with a chef who wants your party to be incredible.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/quote" className="btn-primary">Start Planning My Private Party <ArrowRight className="size-4" /></Link>
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
