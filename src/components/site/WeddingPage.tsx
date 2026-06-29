import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Award, Users, Star, Clock, Sparkles } from "lucide-react";
import { DefinitiveContent } from "./DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";
import { BookingProcess } from "./BookingProcess";
import { PricingHero } from "./PricingHero";
import { ObjectionBuster } from "./ObjectionBuster";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";
import { GuestScaleStat } from "./GuestScaleStat";
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
    q: "How much does luxury wedding catering cost?",
    a: "Most full-service Qfire weddings land between $95 and $185 per guest depending on protein selection (Wood-Fire vs. Signature Live Fire Steakhouse Catering vs. surf & turf), service style, bar package, rentals, and staffing. Every proposal is itemized — no hidden fees, no surprise gratuities.",
  },
  {
    q: "Can our wedding menu be fully customized?",
    a: "Yes. Every Qfire menu is built from scratch around your taste, your venue, and your guest list. Chef Terry will design a custom proposal with passed hors d'oeuvres, entrees, sides, and dessert pairings — and you can refine it in a private tasting before the contract is finalized.",
  },
  {
    q: "Do you travel for weddings?",
    a: "Yes. We cater weddings throughout the entire metro and to destination venues, vineyards, ranches, and private estates within driving distance. Travel and lodging are quoted transparently inside your proposal.",
  },
  {
    q: "Can we schedule a private tasting?",
    a: "Absolutely. Couples seriously considering Qfire are invited to a private chef's-table tasting with Chef Terry. You'll sample your proposed entrees, sides, and a signature cocktail, then refine the menu in real time before contracts are finalized.",
  },
  {
    q: "How does the 35% Date Charge work?",
    a: "Your wedding date is reserved with a 35% Date Charge applied directly to your final invoice. It locks in your date and our team — it does NOT lock in your menu, guest count, or service style. Those can all change as your planning evolves.",
  },
  {
    q: "Can we change our menu after we book?",
    a: "Yes. Most couples refine their menu several times between booking and the final tasting. We expect it. Your Date Charge holds the date and the team — the menu is a living document until roughly 30 days out.",
  },
  {
    q: "Can we update our guest count later?",
    a: "Yes. The final guest count locks in 14 days before the wedding. Until then, you can scale up or down as RSVPs come in without any rebooking penalty.",
  },
  {
    q: "Do you grill onsite at the venue?",
    a: "Yes — live charcoal grilling is one of our signature offerings. We roll in the wood-fired grill and cook ribeyes, picanha, brisket, salmon, and chicken right in front of your guests. The aroma, the visual, the freshness — it's the moment people remember.",
  },
  {
    q: "Do you provide bartenders?",
    a: "Yes. Licensed and insured bartenders, signature cocktails, beer and wine programs, mixers, ice, and glassware. We can run the bar entirely or partner with your venue's beverage program.",
  },
  {
    q: "Do you provide rentals?",
    a: "We coordinate linens, chinaware, glassware, flatware, chafers, serving pieces, and staging through trusted rental partners — billed at cost and managed by our team so you don't field three vendor calls a week.",
  },
  {
    q: "Do you accommodate allergies?",
    a: "Always. Every proposal includes vegetarian, vegan, gluten-free, and dairy-free options. For peanut, tree-nut, shellfish, and other serious allergies we run a dedicated prep line and label every plate at the pass.",
  },
  {
    q: "Do you offer vegetarian options?",
    a: "Yes — beautifully composed vegetarian plates that stand alongside the steaks. Wood-fired vegetables, grain bowls, stuffed portobellos, handmade pastas, and seasonal sides built around what's at the market.",
  },
  {
    q: "Do you offer vegan options?",
    a: "Yes. Fully plant-based plated dinners and stations are available — grilled vegetable platters, vegan grain bowls, plant-protein entrees, and dairy-free desserts.",
  },
  {
    q: "How early should we reserve our wedding date?",
    a: "Most couples book Qfire 6 to 12 months in advance for peak Saturdays. Off-peak dates and intimate weddings can often be accommodated inside 90 days — but Saturdays from March through November book first.",
  },
  {
    q: "What service styles do you offer?",
    a: "Plated dinner, buffet, family-style, live-fire grilling stations, action stations (carving, raw bar, pasta), and passed-only cocktail receptions. Every menu can be served in the format that fits your venue and guest count.",
  },
  {
    q: "Do you provide professional service staff?",
    a: "Yes. Every wedding includes uniformed servers, captains, chefs, and a lead coordinator — fully staffed by our team, dressed appropriately for the level of the wedding, and trained to your timeline.",
  },
  {
    q: "Who handles setup?",
    a: "We do. Our team arrives hours before guest count, stages the kitchen, dresses every table assigned to catering, sets buffet and station displays, and coordinates with your planner and venue manager. You don't lift a thing.",
  },
  {
    q: "Who handles cleanup?",
    a: "We do. Full breakdown of all catering equipment, buffet stations, bar areas, and back-of-house. Trash bagged. Surfaces wiped. Your venue manager will ask for our card.",
  },
  {
    q: "What if our venue has restrictions?",
    a: "We work inside almost every major venue's catering rules and have existing relationships with most of the region's preferred-vendor lists. If your venue has specific power, propane, or fire-marshal restrictions for live grilling, we coordinate permits and approvals directly.",
  },
  {
    q: "What areas do you serve?",
    a: "We cater weddings throughout Phoenix Metro (including Scottsdale, Paradise Valley, Mesa, Chandler, Gilbert, Tempe, Peoria, and Queen Creek) and San Diego County (including La Jolla, Del Mar, Carlsbad, Rancho Santa Fe, Coronado, and Encinitas).",
  },
];

const whyChoose = [
  { icon: Award, title: "Professionalism", body: "Trained captains, uniformed servers, and a lead coordinator at every wedding. Every detail accounted for." },
  { icon: Clock, title: "Reliability", body: "On time, every time. Twenty-five years of weddings without a missed call or a late entree." },
  { icon: Sparkles, title: "Communication", body: "Direct line to your account lead. No agencies, no call centers, no waiting for callbacks." },
  { icon: Check, title: "Organization", body: "Detailed timelines, BEOs, allergy cards, and run-of-show. Your planner will love working with us." },
  { icon: Star, title: "Presentation", body: "Buffet displays, carving stations, and plate-ups built to be photographed." },
  { icon: Flame, title: "Execution", body: "Live fire, hot food, perfect timing. Service that holds up from cocktail hour through the last dance." },
  { icon: Award, title: "Experience", body: "25+ years of professional cooking. 2,000+ weddings and catered events delivered." },
  { icon: Star, title: "Confidence", body: "Featured on Food Network's BBQ Brawl with Bobby Flay, Camp Cutthroat, and Cutthroat Kitchen." },
  { icon: Users, title: "Guest Experience", body: "Generous portions, warm plates, and food guests still talk about months later." },
  { icon: Sparkles, title: "Stress Reduction", body: "We handle setup, service, breakdown, rentals, and venue coordination. You enjoy your day." },
  { icon: Check, title: "Venue Relationships", body: "Approved or preferred at most major venues across both regions." },
  { icon: Clock, title: "Timeline Coordination", body: "Plate-up timed to the minute with your DJ, planner, and photographer." },
  { icon: Star, title: "Consistency", body: "4.9-star reputation across hundreds of reviews. The 1,000th wedding tastes like the first." },
];

const serviceStyles = [
  {
    name: "Full-Service Buffet",
    tag: "Most Popular",
    bullets: [
      "Great balance of elegance and value",
      "Guests choose their favorites",
      "Fast service, no long lines",
      "Beautiful buffet presentation",
      "Staff maintains buffet throughout service",
      "Ideal for most weddings (75–250 guests)",
    ],
  },
  {
    name: "Family Style",
    tag: "Most Intimate",
    bullets: [
      "Shared platters brought directly to each table",
      "Encourages conversation",
      "Upscale and interactive",
      "No buffet lines",
      "Great for medium-sized receptions",
      "Elegant, warm dining experience",
    ],
  },
  {
    name: "Plated Dinner Service",
    tag: "Most Formal",
    bullets: [
      "Restaurant-style synchronized service",
      "Individually plated, coursed meals",
      "Highest level of formality",
      "Perfect for luxury weddings",
      "Ideal for black-tie receptions",
      "Premium, white-glove guest experience",
    ],
  },
];

const timelineSteps = [
  { n: "01", title: "Request a Quote", body: "Submit your date, venue, and rough guest count. Takes about 90 seconds." },
  { n: "02", title: "We Personally Contact You", body: "A real person — usually Chef Terry or your account lead — calls within 24 hours." },
  { n: "03", title: "Customize Your Menu", body: "We design a proposal around your taste, venue, and guest list. Revise as much as you want." },
  { n: "04", title: "Reserve Your Date", body: "Lock in your wedding with a 35% Date Charge — applied directly to your final invoice." },
  { n: "05", title: "Finalize Guest Count Later", body: "Final headcount and menu adjustments lock 14–30 days before the wedding." },
  { n: "06", title: "Enjoy Your Wedding", body: "We handle setup, service, live-fire grilling, bar, and cleanup. You spend the night with your guests." },
];

export function WeddingPage({ config }: { config: WeddingRegionConfig }) {
  const { region, regionShort, cities, venues, reviewCities, path } = config;

  const reviews = [
    {
      q: `Chef Terry and his team made our ${regionShort} wedding unforgettable. The brisket and ribeyes were perfect, and the service was flawless from start to finish.`,
      a: "Lauren & Mark",
      e: `${reviewCities[0]} · 220 guests`,
    },
    {
      q: `We did a plated dinner for 180 in ${regionShort} and not a single thing went wrong. The food was the talk of the night.`,
      a: "Megan & Ryan",
      e: `${reviewCities[1] ?? reviewCities[0]} Wedding`,
    },
    {
      q: "The live-fire steak station stopped the room. Guests still text us about it nine months later.",
      a: "Sophia & James",
      e: `${reviewCities[2] ?? reviewCities[0]} · 160 guests`,
    },
    {
      q: "As a planner I work with caterers every weekend. Qfire is at the top of my list — clean, on time, professional, and the food is legitimately exceptional.",
      a: "Alyssa T., Wedding Planner",
      e: `${region}`,
    },
    {
      q: "Communication was incredible from day one. Every email returned the same day. Every change handled without a sigh.",
      a: "Jessica & David",
      e: `${reviewCities[3] ?? reviewCities[0]} Reception`,
    },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Qfire Catering — ${region} Wedding Catering`,
    image: couple,
    url: path,
    telephone: "+1-602-555-0123",
    priceRange: "$$$",
    servesCuisine: ["Wood-Fire", "Signature Live Fire Steakhouse Catering", "American", "Wedding Catering"],
    areaServed: cities.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "400" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Weddings", item: "/weddings" },
      { "@type": "ListItem", position: 3, name: `${region} Wedding Catering`, item: path },
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
    description: `Luxury wedding catering across ${region} — live charcoal grilling, premium steaks, full-service buffets, family-style, and plated dinner service.`,
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img src={couple} alt={`Bride and groom enjoying their ${regionShort} wedding reception catered by Qfire`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="container-luxe relative z-10 pb-20 lg:pb-28 pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">{region} Wedding Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tight">
              Luxury wedding catering <span className="italic text-gold font-light">in {regionShort}.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light leading-relaxed max-w-2xl">
              Live charcoal grilling, premium steaks, professional staff, and a stress-free experience — trusted by thousands of couples across {region}.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">
                Request Your Wedding Quote <ArrowRight className="size-4" />
              </Link>
              <Link to="/quote" className="btn-ghost">Check Date Availability</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-bone/70">
              <div><span className="text-gold font-display text-2xl">25+</span> Years Experience</div>
              <div><span className="text-gold font-display text-2xl">2,000+</span> Weddings & Events</div>
              <div><span className="text-gold font-display text-2xl">4.9★</span> Couple-Rated</div>
              <div><span className="text-gold font-display text-2xl">Food Network</span> Featured Chef</div>
            </div>
          </div>
        </div>
      </section>

      <GuestScaleStat regionKey={config.regionSlug} />


      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-onyx py-10">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">As Seen On</div>
              <img src={asSeenOnBadge.url} alt="As seen on Food Network" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <div className="text-xs text-bone/60 mt-1">BBQ Brawl with Bobby Flay</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Featured</div>
              <div className="text-bone font-display text-lg">Camp Cutthroat</div>
              <div className="text-xs text-bone/60 mt-1">Cutthroat Kitchen Champion</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Reputation</div>
              <div className="text-bone font-display text-lg">4.9★ Average</div>
              <div className="text-xs text-bone/60 mt-1">Across hundreds of reviews</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Experience</div>
              <div className="text-bone font-display text-lg">2,000+ Events</div>
              <div className="text-xs text-bone/60 mt-1">25+ years professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY COUPLES CHOOSE QFIRE */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Why Couples Choose Qfire</div>
            <h2 className="heading-lg text-bone">The kind of caterer you stop searching for.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              Most couples interview three to five caterers before they find Qfire. Then they stop looking. Here's why.
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
            <Link to="/quote" className="btn-primary">Request Your {regionShort} Wedding Quote <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[0]} />

      {/* SERVICE STYLE COMPARISON */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Service Styles</div>
            <h2 className="heading-lg text-bone">Three ways to serve your {regionShort} wedding.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              Choose the dining experience that fits your venue, your guest count, and the feeling you want for the night.
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
          <div className="mt-12 text-center text-bone/70">
            <p className="text-lg font-light">Not sure which service style is right for your wedding?</p>
            <Link to="/quote" className="inline-block mt-4 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
              Talk to Chef Terry
            </Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[1]} />

      {/* LIVE CHARCOAL GRILLING */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={grilling} alt={`Live charcoal grilling at a ${regionShort} wedding reception`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Live Charcoal Grilling</div>
            <h2 className="heading-lg text-bone">The aroma. The fire. The moment guests remember.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Most wedding food is reheated in a back kitchen. Ours is grilled in front of your guests over real hardwood charcoal — the way steak is supposed to be cooked.</p>
              <p>Ribeyes. New York strips. Picanha. Brick chicken. Fresh seafood. Burgers seared to order. The aroma drifts across the venue. Guests gather. Photos happen. The night levels up.</p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Freshly grilled steaks", "Wood-fired chicken", "Seared fresh seafood", "Live-action carving", "Visual centerpiece", "Restaurant-quality char"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm">
                  <Flame className="size-4 text-gold" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Bring the Fire to Our Wedding <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* STEAKHOUSE EXPERIENCE */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-6">The Signature Live Fire Steakhouse Experience</div>
            <h2 className="heading-lg text-bone">A live-fire steakhouse experience — brought to your venue.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf & turf — served under candlelight with polished service and unforgettable presentation.</p>
              <p>The food, the atmosphere, the service. The luxury of a great steakhouse, without leaving your venue. Perfect for luxury weddings, black-tie receptions, and rehearsal dinners across {region}.</p>
            </div>
            <Link to="/steak-seafood-menu" className="inline-flex items-center gap-2 mt-10 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">
              View the chef-attended steakhouse buffet Menu <ArrowRight className="size-3" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <img src={steak} alt={`Premium steaks grilled live for a ${regionShort} luxury wedding`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[2]} />

      {/* WHAT HAPPENS NEXT */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">What Happens Next</div>
            <h2 className="heading-lg text-bone">From "request a quote" to "I do" — handled.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {timelineSteps.map((s) => (
              <div key={s.n} className="bg-ink p-8 lg:p-10">
                <div className="text-gold font-display text-4xl mb-4">{s.n}</div>
                <h3 className="text-xl font-display text-bone mb-3">{s.title}</h3>
                <p className="text-sm text-bone/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/quote" className="btn-primary">Start Step 1 — Request a Quote <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* DATE CHARGE */}
      <section className="py-24 lg:py-32 bg-onyx border-y border-white/10">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <div className="gold-rule mb-8" />
            <div className="eyebrow mb-6">The 35% Date Charge</div>
            <h2 className="heading-md text-bone">Lock the date. Not the menu.</h2>
          </div>
          <div>
            <p className="text-bone/85 text-lg font-light leading-relaxed">
              Your wedding date is secured with a <strong className="text-gold">35% Date Charge</strong> — applied directly to your final invoice. It reserves our team for your day and nothing more.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "You are NOT locking yourself into your menu",
                "Menus can change later",
                "Guest counts can change later",
                "Food selections can change later",
                "Bar packages can change later",
                "Most planning happens after booking",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-bone/85 text-base">
                  <Check className="size-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Reserve Our Date <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[3]} />

      {/* WEDDING PLANNERS LOVE US */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={setting} alt={`Elegant ${regionShort} wedding reception table set by Qfire`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Wedding Planners Love Us</div>
            <h2 className="heading-lg text-bone">A caterer planners actually recommend.</h2>
            <p className="mt-6 text-bone/80 text-lg font-light leading-relaxed">
              Ask any planner in {region} what they want in a caterer. Then watch them describe Qfire. We're on the preferred-vendor lists planners reach for when the wedding has to be perfect.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Professional communication",
                "Detailed timelines",
                "Run-of-show coordination",
                "Dependable execution",
                "Clean setup",
                "Clean breakdown",
                "Easy to work with",
                "Venue-tested",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm">
                  <Check className="size-4 text-gold" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MENU OPTIONS GRID */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">Menu Options</div>
            <h2 className="heading-lg text-bone">Wood-fired. Premium upscale steakhouse catering. Surf & turf.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              Whatever you serve at your {regionShort} wedding, it comes off our live-fire grill.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { img: platter, title: "Wood-Fire Catering", body: "Brisket, ribs, pulled pork, smoked chicken, sausage, all the sides.", to: "/menus" },
              { img: steakMenu, title: "Steakhouse", body: "Ribeye, NY strip, filet, picanha, prime rib, salmon, surf & turf.", to: "/steak-seafood-menu" },
              { img: platter1, title: "Carving Stations", body: "Chef-attended live carving — picanha, brisket, prime rib, lamb.", to: "/menus" },
            ].map((m) => (
              <Link key={m.title} to={m.to} className="group relative aspect-[4/5] overflow-hidden block">
                <img src={m.img} alt={`${m.title} for ${regionShort} weddings`} loading="lazy" decoding="async" fetchPriority="low" width={800} height={1000} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                <img src={m.img} alt={`${m.title} for ${regionShort} weddings`} loading="lazy" decoding="async" fetchPriority="low" width={600} height={600} className="absolute inset-0 w-full h-full object-cover" />
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
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">{region} Wedding Service Area</div>
            <h2 className="heading-lg text-bone">Catering weddings across {region}.</h2>
            <p className="mt-6 text-bone/70 text-lg font-light leading-relaxed">
              From private estates to vineyards, ballrooms to backyards — Qfire caters luxury weddings throughout {region}, including:
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6">
            {cities.map((c) => (
              <li key={c} className="text-bone/85 text-base border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-gold">·</span> {c} Wedding Catering
              </li>
            ))}
          </ul>
          {venues.length > 0 && (
            <div className="mt-16">
              <div className="eyebrow mb-6">Venue Experience</div>
              <h3 className="heading-md text-bone mb-6">{regionShort} venues we know.</h3>
              <p className="text-bone/70 max-w-3xl font-light leading-relaxed">
                We've executed weddings at {venues.slice(0, -1).join(", ")}, and {venues[venues.length - 1]} — plus dozens of private estates, vineyards, and resorts throughout the area. Already booked your venue? There's a good chance we already know the kitchen.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CHEF BIO */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden max-w-md">
            <img src={chef} alt="Chef Terry Matthews — The BBQ Daddy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Meet Your Chef</div>
            <h2 className="heading-lg text-bone">Chef Terry Matthews — The BBQ Daddy.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Twenty-five years of professional cooking. Over 2,000 weddings and catered events. Featured on Food Network's <em>BBQ Brawl</em> with Bobby Flay, <em>Camp Cutthroat</em>, and <em>Cutthroat Kitchen</em>.</p>
              <p>Chef Terry — known to fans as <em>The BBQ Daddy</em> — personally designs every wedding menu Qfire serves. When you book Qfire, you book him.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Food Network", "BBQ Brawl", "Camp Cutthroat", "Cutthroat Kitchen", "25+ Years"].map((b) => (
                <span key={b} className="text-[0.65rem] tracking-[0.28em] uppercase text-gold border border-gold/40 px-4 py-2">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DefinitiveContent
        topic={`${regionShort} Wedding Catering`}
        region={`${regionShort} couples`}
        {...definitiveCopy.wedding}
      />

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">{regionShort} Wedding Catering FAQ</div>
            <h2 className="heading-lg text-bone">Answers, before you ask.</h2>
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

      <ObjectionBuster
        eyebrow={`Before You Book Your ${regionShort} Wedding`}
        title="Every question we hear from brides — answered before you ask."
        ctaLabel={`Request My ${regionShort} Wedding Quote`}
      />

      <BookingProcess
        eyebrow="Booking Your Wedding Is Simple"
        title={`From inquiry to "I do" — exactly what happens.`}
      />

      {/* FINAL CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <img src={reception} alt={`Luxury ${regionShort} wedding reception by Qfire`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        <div className="container-luxe relative z-10 text-center">
          <div className="eyebrow mb-6">Let's Plan Your {regionShort} Wedding</div>
          <h2 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
            The wedding food <span className="italic text-gold font-light">guests will remember.</span>
          </h2>
          <p className="mt-8 text-xl text-bone/80 max-w-2xl mx-auto font-light">
            Check your date. Request a quote. Schedule a tasting. We'll handle the rest.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/quote" className="btn-primary">Request Your Wedding Quote <ArrowRight className="size-4" /></Link>
            <Link to="/quote" className="btn-ghost">Schedule a Tasting</Link>
            <Link to="/pricing" className="btn-ghost">View Pricing</Link>
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
