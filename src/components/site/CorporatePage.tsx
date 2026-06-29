import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Award, Users, Star, Clock, Sparkles, Briefcase, Building2, ShieldCheck, Truck } from "lucide-react";
import { DefinitiveContent } from "./DefinitiveContent";
import { definitiveCopy } from "@/lib/definitive-copy";
import { BookingProcess } from "./BookingProcess";
import { ObjectionBuster } from "./ObjectionBuster";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";
import { GuestScaleStat } from "./GuestScaleStat";
import corpSetupBg from "@/assets/corporate/corp-setup-bg.png.asset.json";
import corpLuncheon from "@/assets/corporate/corp-luncheon-crowd.jpg.asset.json";
import corpRetirement from "@/assets/corporate/corp-retirement.jpg.asset.json";
import corpBuffetLine from "@/assets/corporate/corp-buffet-line.jpg.asset.json";
import corpJobsiteTacos from "@/assets/corporate/corp-jobsite-tacos.jpg.asset.json";
import corpJobsiteCrew from "@/assets/corporate/corp-jobsite-crew.jpg.asset.json";
import corpBbqBuffet from "@/assets/corporate/corp-bbq-buffet.png.asset.json";
import corpJobsiteSpread from "@/assets/corporate/corp-jobsite-spread.jpg.asset.json";
import corpBuffetSet from "@/assets/corporate/corp-buffet-set.avif.asset.json";
import corpParkSetup from "@/assets/corporate/corp-park-setup.avif.asset.json";

const officeHero = corpSetupBg.url;
const officeAlt = corpLuncheon.url;
const steak = corpBbqBuffet.url;
const steakMenu = corpBuffetSet.url;
const platter = corpJobsiteSpread.url;
const platter1 = corpBbqBuffet.url;
const bartender = corpParkSetup.url;
const setting = corpBuffetLine.url;
const chef = corpRetirement.url;
const heroFire = corpJobsiteTacos.url;
const buffet = corpJobsiteCrew.url;

export interface CorporateRegionConfig {
  region: string; // "Phoenix Metro" / "San Diego County"
  regionShort: string; // "Phoenix" / "San Diego"
  regionSlug: "phoenix" | "san-diego";
  path: string;
  cities: string[];
  reviewCities: string[];
  heroImage?: string;
}

const baseFaqs = [
  { q: "How much does corporate catering cost?", a: "Most Qfire corporate events land between $32 and $145 per guest depending on menu (drop-off vs. buffet vs. plated Signature Live Fire Steakhouse Catering), staffing, live-fire stations, bar service, and rentals. Every proposal is itemized — no hidden fees, no surprise service charges, and clean invoicing your AP team will appreciate." },
  { q: "Can you accommodate last-minute orders?", a: "Yes. Drop-off office catering can often be turned around in 24–72 hours depending on guest count. Full-service events with staffing and live-fire grilling generally require 1–2 weeks. Call us — we move quickly for executive teams." },
  { q: "Do you deliver?", a: "Yes. We deliver hot, ready-to-serve corporate catering across the entire region with uniformed delivery staff, professional presentation, and chafing setup on request. Delivery windows are guaranteed to the minute." },
  { q: "Do you offer recurring office lunches?", a: "Yes. We run weekly, bi-weekly, and monthly recurring lunch programs for HR teams, real-estate offices, healthcare groups, and tech companies. One contact, one invoice, rotating menus, predictable schedule." },
  { q: "Can you handle 500+ guests?", a: "Yes. Our team regularly executes corporate events of 500, 1,000, and 2,000+ guests — including grand openings, company picnics, conferences, and government events. We bring the right number of chefs, servers, and equipment." },
  { q: "Can you grill onsite at the office?", a: "Yes. Live charcoal grilling is one of our most-requested corporate services. We roll in the wood-fired grill and cook ribeyes, brisket, chicken, and salmon right in your courtyard, rooftop, parking lot, or job site." },
  { q: "Do you provide bartenders?", a: "Yes. Licensed and insured bartenders, signature cocktails, beer-and-wine programs, mocktail service, and full setup for corporate holiday parties, client appreciation events, and executive dinners." },
  { q: "Do you provide rentals?", a: "Yes. Linens, chinaware, glassware, flatware, chafers, high-tops, lounge furniture, and AV staging through trusted partners — billed at cost and coordinated by our team." },
  { q: "Can menus be customized?", a: "Absolutely. Every corporate menu is built around your team, your dietary needs, your budget, and your brand. Need a Texas Wood-Fire theme for sales kickoff? A black-tie plated dinner for the board? Done." },
  { q: "Can you accommodate allergies?", a: "Always. Vegetarian, vegan, gluten-free, dairy-free, kosher-style, and halal-friendly options are standard. For peanut, tree-nut, and shellfish allergies we run a dedicated prep line and label every dish." },
  { q: "Do you offer vegetarian options?", a: "Yes — beautifully composed vegetarian plates, wood-fired vegetables, grain bowls, stuffed portobellos, salads, and seasonal sides built around what's in the market." },
  { q: "Do you offer vegan options?", a: "Yes. Fully plant-based menus available — grilled vegetable platters, vegan grain bowls, plant-protein entrees, and dairy-free desserts." },
  { q: "Do you provide setup?", a: "Yes. Our team arrives early, stages the buffet, sets chafers, builds beautiful presentations, and coordinates with your office manager or facilities team. You don't lift a thing." },
  { q: "Do you handle cleanup?", a: "Yes. Full breakdown, trash bagged, surfaces wiped, equipment removed. Your facilities team will ask for our card." },
  { q: "How early should we book?", a: "Drop-off catering: 24–72 hours. Full-service events: 1–4 weeks. Holiday parties (Nov/Dec) and large galas: book 60–120 days out for best availability." },
  { q: "Can you serve construction job sites?", a: "Yes. We cater construction-site lunches across the region — hot, hearty, on-time meals delivered to active jobsites. Hard-hat-friendly setup, fast turnover, and crews are fed in 30 minutes or less." },
  { q: "Can you serve multiple shifts?", a: "Yes. We handle multi-shift hospitals, manufacturing facilities, warehouses, and 24-hour operations with staggered drop-offs or on-site service across the day." },
  { q: "Can we mix service styles?", a: "Yes. Many corporate events combine passed hors d'oeuvres, a live-fire grilling station, a buffet, and a plated dessert — we'll design the right blend for your event." },
  { q: "Can we change our menu later?", a: "Yes. Your 35% Date Charge holds the date and the team. Menus, guest counts, and service styles stay flexible until roughly 14 days before the event." },
  { q: "Do you provide invoicing and corporate accounts?", a: "Yes. We work with AP departments, PO systems, COIs, and W-9s. Detailed invoicing available for established corporate accounts." },
];

const whyChoose = [
  { icon: Clock, title: "On-Time Execution", body: "Doors open when we say they will. Buffet flows when it's supposed to flow. Twenty-five years without a late event." },
  { icon: ShieldCheck, title: "Reliable Service", body: "Licensed, insured, COI-ready, and trusted by Fortune 500 offices, hospitals, and government agencies across the region." },
  { icon: Sparkles, title: "Professional Communication", body: "Direct line to your account lead. Same-day responses. No agencies, no call centers, no chasing answers." },
  { icon: Check, title: "Organized Planning", body: "Detailed BEOs, allergy lists, timelines, floor plans, and signage. Your executive assistant will love working with us." },
  { icon: Star, title: "Beautiful Presentation", body: "Buffets, plated courses, and stations built to be photographed. Your event reflects the level of your brand." },
  { icon: Flame, title: "Restaurant-Quality Food", body: "Hot, fresh, wood-fired flavor — not steam-pan catering. The food guests actually look forward to." },
  { icon: Award, title: "Large-Event Experience", body: "Events of 25 to 2,500+ guests. Construction sites, conferences, galas, multi-shift programs — handled." },
  { icon: Users, title: "Professional Staff", body: "Uniformed servers, captains, chefs, and bartenders — trained, polished, and on-brand." },
  { icon: Briefcase, title: "Executive-Level Service", body: "C-suite dinners, board retreats, client-appreciation events — discreet, polished, white-glove." },
  { icon: Truck, title: "Logistics-Ready", body: "Loading docks, freight elevators, security badges, multi-floor delivery, jobsite access — coordinated in advance." },
  { icon: Building2, title: "Recurring Programs", body: "Weekly office lunches, employee appreciation cycles, training-season catering — one contact, predictable execution." },
  { icon: Sparkles, title: "Stress-Free Planning", body: "You send the brief. We handle setup, service, breakdown, rentals, COI, and parking permits." },
];

const businessEvents = [
  { title: "Office Lunches", img: officeHero },
  { title: "Executive Meetings", img: setting },
  { title: "Holiday Parties", img: officeAlt },
  { title: "Grand Openings", img: bartender },
  { title: "Construction Site Lunches", img: platter },
  { title: "Employee Appreciation", img: buffet },
  { title: "Client Appreciation", img: steak },
  { title: "Training Events", img: officeHero },
  { title: "Sales Meetings", img: officeAlt },
  { title: "Company Picnics", img: platter1 },
  { title: "Fundraisers", img: setting },
  { title: "Award Ceremonies", img: steakMenu },
  { title: "Networking Events", img: bartender },
  { title: "Conferences", img: buffet },
  { title: "Open Houses", img: officeAlt },
  { title: "Government Events", img: officeHero },
  { title: "Healthcare Appreciation", img: platter },
  { title: "University Events", img: heroFire },
];

const serviceStyles = [
  { name: "Delivery / Drop-Off", tag: "Most Efficient", bullets: ["Best for office lunches & quick meetings", "Hot and ready when we arrive", "Minimal setup, maximum value", "Professional presentation", "Budget-conscious option", "Individual or buffet-ready packaging"] },
  { name: "Full-Service Buffet", tag: "Most Popular", bullets: ["Best for holiday parties & employee appreciation", "Professional uniformed attendants", "Elegant buffet presentation", "Continuous buffet maintenance", "Beautiful displays for any space", "Ideal for 50–500+ guests"] },
  { name: "Family Style", tag: "Most Connected", bullets: ["Ideal for executive retreats & board meetings", "Shared platters at every table", "Elevated, interactive dining", "Encourages conversation", "Elegant table presentation", "Perfect for 20–80 executives"] },
  { name: "Plated Dinner Service", tag: "Most Formal", bullets: ["Best for galas, banquets & awards dinners", "Restaurant-style synchronized service", "Highest level of formality", "Luxury corporate experiences", "Coursed dining with captains", "White-glove guest experience"] },
];

const timelineSteps = [
  { n: "01", title: "Request a Quote", body: "Send your date, headcount, and brief — takes about 90 seconds." },
  { n: "02", title: "Receive Transparent Pricing", body: "An itemized proposal back within 24 business hours. No hidden fees." },
  { n: "03", title: "Customize Your Menu", body: "Refine the menu, service style, and bar program with your account lead." },
  { n: "04", title: "Reserve with the Date Charge", body: "35% Date Charge locks your date and team — applied to your final invoice." },
  { n: "05", title: "Finalize Guest Count", body: "Headcount and menu adjustments lock 7–14 days before the event." },
  { n: "06", title: "We Execute Everything", body: "Setup, service, live-fire grilling, bar, breakdown — handled. You host." },
];

const menuOptions = [
  "Wood-Fire Catering", "Signature Live Fire Steakhouse Catering", "Surf & Turf", "Breakfast Catering", "Brunch Catering",
  "Lunch Catering", "Dinner Catering", "Appetizers & Passed Hors d'oeuvres", "Desserts & Coffee Service",
  "Vegetarian Menus", "Vegan Menus", "Gluten-Free & Allergy Menus", "Live Charcoal Grilling Stations",
  "Premium Steaks & Carving Stations", "Boxed Executive Lunches", "Continental & Working Breakfasts",
];

export function CorporatePage({ config }: { config: CorporateRegionConfig }) {
  const { region, regionShort, cities, reviewCities, path } = config;

  const reviews = [
    { q: `Qfire has been our recurring lunch caterer for over a year. Every drop-off is on time, hot, and beautifully presented. Our ${regionShort} office team genuinely looks forward to lunch days.`, a: "Rachel S., HR Director", e: `${reviewCities[0]} · Tech Company` },
    { q: `We brought Qfire in for a 240-person executive holiday party in ${regionShort}. Polished, professional, and the Signature Steakhouse plated dinner was unforgettable.`, a: "Daniel M., COO", e: `${reviewCities[1] ?? reviewCities[0]} · Financial Firm` },
    { q: "The live charcoal grilling station at our employee appreciation event was the talk of the office for weeks. Easily the best vendor decision we made all year.", a: "Patricia L., Facilities Director", e: `${reviewCities[2] ?? reviewCities[0]} · Healthcare` },
    { q: "We needed lunch for 180 construction workers across three job sites — same day, hot, on time. Qfire delivered flawlessly. They're now our standing vendor.", a: "Marcus T., Project Manager", e: `${region} · General Contractor` },
    { q: "From COI to invoicing to setup, every detail was handled. As an EA who books a lot of corporate catering, Qfire is the easiest vendor I work with.", a: "Allison K., Executive Assistant", e: `${reviewCities[0]} · Real Estate` },
    { q: "Plated dinner for our board retreat in a private venue. The food, the service, the timing — all executive level. We'll be using them again.", a: "Jonathan P., VP Operations", e: `${reviewCities[3] ?? reviewCities[0]} · Professional Services` },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Qfire Catering — ${region} Corporate Catering`,
    image: officeHero,
    url: path,
    telephone: "+1-602-555-0123",
    priceRange: "$$$",
    servesCuisine: ["Wood-Fire", "live-fire steakhouse experience", "American", "Corporate Catering", "Office Catering"],
    areaServed: cities.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "400" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Corporate Catering", item: "/corporate" },
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
    description: `Premium corporate catering across ${region} — office lunches, executive dinners, holiday parties, construction-site catering, live-fire grilling stations, and full-service buffets.`,
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "LocalBusiness", name: `Qfire Catering — ${region} Corporate Catering` },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: reviews[0].a },
    reviewBody: reviews[0].q,
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img src={officeHero} alt={`Executive corporate catering for ${regionShort} office buffet by Qfire Catering`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="container-luxe relative z-10 pb-20 lg:pb-28 pt-32">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-[0.2em] uppercase text-bone/60">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2 text-gold">/</span>
            <Link to="/corporate" className="hover:text-gold">Corporate</Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-gold">{region}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">{region} Corporate Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tight">
              Corporate catering <span className="italic text-gold font-light">that makes you look good.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light leading-relaxed max-w-2xl">
              Reliable, on-time, restaurant-quality catering for executive teams, HR departments, construction sites, and large companies across {region}.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">Request Pricing <ArrowRight className="size-4" /></Link>
              <Link to="/quote" className="btn-ghost">Check Availability</Link>
              <Link to="/quote" className="btn-ghost">Schedule Your Event</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-bone/70">
              <div><span className="text-gold font-display text-2xl">25+</span> Years Experience</div>
              <div><span className="text-gold font-display text-2xl">2,000+</span> Events Catered</div>
              <div><span className="text-gold font-display text-2xl">4.9★</span> Client-Rated</div>
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
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Credentials</div>
              <div className="text-bone font-display text-lg">Licensed & Insured</div>
              <div className="text-xs text-bone/60 mt-1">COI-ready</div>
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

      {/* WHY COMPANIES CHOOSE QFIRE */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Why Companies Choose Qfire</div>
            <h2 className="heading-lg text-bone">The corporate caterer you stop searching for.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              Most {regionShort} executive teams interview three to five caterers before they find Qfire. Then they stop looking. Here's why.
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
            <Link to="/quote" className="btn-primary">Request Your {regionShort} Corporate Quote <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[0]} />

      {/* BUSINESS EVENTS WE CATER */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Business Events We Cater</div>
            <h2 className="heading-lg text-bone">Every kind of corporate event in {regionShort}.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              From a five-person executive lunch to a 2,000-guest grand opening — we've executed it across {region}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            {businessEvents.map((e) => (
              <div key={e.title} className="relative aspect-square overflow-hidden bg-ink group">
                <img src={e.img} alt={`${e.title} catering in ${regionShort} by Qfire`} loading="lazy" decoding="async" fetchPriority="low" width={600} height={600} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-bone font-display text-sm lg:text-base leading-tight">{e.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[1]} />

      {/* SERVICE STYLE COMPARISON */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Service Styles</div>
            <h2 className="heading-lg text-bone">Four ways to serve your {regionShort} corporate event.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              From a no-fuss office drop-off to a black-tie plated banquet — we'll deliver the level of service that fits your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceStyles.map((s) => (
              <div key={s.name} className="bg-ink border border-white/10 p-8 flex flex-col">
                <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-4">{s.tag}</div>
                <h3 className="font-display text-2xl text-bone mb-6">{s.name}</h3>
                <ul className="space-y-3 mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-bone/80 text-sm">
                      <Check className="size-4 text-gold/70 mt-1 shrink-0" strokeWidth={1.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-auto text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold self-start">Get a Quote</Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-bone/70">
            <p className="text-lg font-light">Not sure which service style fits your event? We'll help you choose.</p>
            <Link to="/quote" className="inline-block mt-4 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">Talk With Chef Terry</Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[2]} />

      {/* LIVE CHARCOAL GRILLING */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={heroFire} alt={`Live charcoal grilling at a ${regionShort} corporate event by Qfire Catering`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Live Charcoal Grilling</div>
            <h2 className="heading-lg text-bone">The employee appreciation event your team won't forget.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Most corporate food is reheated in a back kitchen. Ours is grilled in your courtyard, your rooftop, your parking lot, or your job site — over real hardwood charcoal.</p>
              <p>The aroma drifts across the property. Guests gather. Conversation happens naturally. Photos get taken. The event levels up — and your team actually remembers it.</p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Freshly grilled steaks", "Wood-fired chicken & salmon", "Live-action carving stations", "Restaurant-quality char", "Visual centerpiece", "Built-in conversation starter"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm"><Flame className="size-4 text-gold" strokeWidth={1.5} /> {x}</li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Bring the Fire to Our Office <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* STEAKHOUSE EXPERIENCE */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-6">Executive Steakhouse Experience</div>
            <h2 className="heading-lg text-bone">A chef-attended steakhouse buffet — brought to your boardroom.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf & turf — served under candlelight with polished service for executive dinners, board retreats, and client appreciation events across {region}.</p>
              <p>The food, the atmosphere, the service. The luxury of a great upscale steakhouse catering, without leaving your venue.</p>
            </div>
            <Link to="/steak-seafood-menu" className="inline-flex items-center gap-2 mt-10 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">View the Steakhouse Menu <ArrowRight className="size-3" /></Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <img src={steak} alt={`Premium steaks plated for a ${regionShort} executive corporate dinner`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[3]} />

      {/* WHAT HAPPENS NEXT */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">What Happens Next</div>
            <h2 className="heading-lg text-bone">From "request a quote" to "event executed" — handled.</h2>
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
      <section className="py-24 lg:py-32 border-y border-white/10">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <div className="gold-rule mb-8" />
            <div className="eyebrow mb-6">The 35% Date Charge</div>
            <h2 className="heading-md text-bone">Lock the date. Not the menu.</h2>
          </div>
          <div>
            <p className="text-bone/85 text-lg font-light leading-relaxed">
              Your corporate event date is secured with a <strong className="text-gold">35% Date Charge</strong> — applied directly to your final invoice. It reserves our team for your date and nothing more.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Menus stay flexible until ~14 days out",
                "Guest counts stay flexible until ~7 days out",
                "Service style can evolve",
                "Bar package can evolve",
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

      {/* MENU OPTIONS */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">Corporate Menu Options</div>
            <h2 className="heading-lg text-bone">Wood-fired. Premium charcoal-grilled steakhouse experience. Breakfast to banquet.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              Whatever your {regionShort} team eats — it comes off our live-fire grill or our scratch kitchen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { img: platter, title: "Wood-Fire Catering", body: "Brisket, ribs, pulled pork, smoked chicken, sausage, all the sides.", to: "/menus" },
              { img: steakMenu, title: "Steakhouse", body: "Ribeye, NY strip, filet, picanha, prime rib, salmon, surf & turf.", to: "/steak-seafood-menu" },
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
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-6">
            {menuOptions.map((m) => (
              <li key={m} className="text-bone/80 text-sm border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="text-gold">·</span> {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScatteredReview review={reviews[4]} />

      {/* WHY COMPANIES TRUST QFIRE — PROFESSIONAL EXECUTION */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={setting} alt={`Beautiful corporate buffet setup by Qfire Catering staff in ${regionShort}`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Professional Execution</div>
            <h2 className="heading-lg text-bone">Why companies trust Qfire.</h2>
            <p className="mt-6 text-bone/80 text-lg font-light leading-relaxed">
              Executive assistants, HR directors, office managers, and facilities teams across {region} keep us on speed dial because the execution is the same every single time.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Professional uniformed staff", "Organized advance setup", "Polished, on-brand appearance", "Timeline coordination", "Fast buffet flow", "Clean visual presentation", "Fast, thorough cleanup", "Clear communication", "Dependable execution", "Discretion at executive events", "Site-specific logistics", "AP-friendly invoicing"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm"><Check className="size-4 text-gold" strokeWidth={1.5} /> {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CITIES WE SERVE */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-6">{region} Corporate Catering Service Area</div>
            <h2 className="heading-lg text-bone">Corporate catering across {region}.</h2>
            <p className="mt-6 text-bone/70 text-lg font-light leading-relaxed">
              From downtown offices to suburban campuses, hospitals to construction sites — Qfire caters business events throughout {region}, including:
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

      <ScatteredReview review={reviews[5]} />

      {/* CHEF BIO */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden max-w-md">
            <img src={chef} alt="Chef Terry Matthews — The BBQ Daddy — Food Network featured chef behind Qfire Catering" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Meet Your Chef</div>
            <h2 className="heading-lg text-bone">Chef Terry Matthews — The BBQ Daddy.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Twenty-five years of professional cooking. Over 2,000 events catered. Featured on Food Network's <em>BBQ Brawl</em> with Bobby Flay, <em>Camp Cutthroat</em>, and <em>Cutthroat Kitchen</em> — where he took home the win.</p>
              <p>Chef Terry — known to fans as <em>The BBQ Daddy</em> — personally designs every corporate menu Qfire serves. When you book Qfire, you book him.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Food Network", "BBQ Brawl with Bobby Flay", "Camp Cutthroat Winner", "Cutthroat Kitchen Champion", "25+ Years", "2,000+ Events", "4.9★ Reputation"].map((b) => (
                <span key={b} className="text-[0.65rem] tracking-[0.28em] uppercase text-gold border border-gold/40 px-4 py-2">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DefinitiveContent
        topic={`${regionShort} Corporate Catering`}
        region={`${regionShort} teams`}
        {...definitiveCopy.corporate}
      />

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">{regionShort} Corporate Catering FAQ</div>
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
        eyebrow={`Before You Book Your ${regionShort} Corporate Event`}
        title="The questions every office manager and EA asks — handled."
        ctaLabel={`Request ${regionShort} Corporate Pricing`}
        items={[
          { q: "Do you invoice companies / accept POs?", a: "Yes. We invoice directly, accept POs, ACH, corporate cards, and provide W-9 + COI on request. Set up once and re-book in minutes." },
          { q: "How fast can you respond to a short-notice corporate event?", a: "Recurring clients regularly book inside 7 days. Even tighter requests get a same-day reply — call us and we'll tell you yes or no on the spot." },
          { q: "Are you licensed, insured, and venue-approved?", a: "Fully licensed and insured in both regions. We provide a Certificate of Insurance (COI) naming your office, building, or off-site venue at no charge." },
          { q: "What if our headcount changes the week of?", a: "Adjust your final guest count up or down right up to a few business days out. We staff and prep to your live number — no fight, no fee for normal changes." },
          { q: "Can you handle dietary restrictions for an entire team?", a: "Gluten-free, vegan, vegetarian, halal-friendly, allergen-aware — built into every proposal. We label every dish on-site." },
          { q: "What's actually included in the price?", a: "Uniformed staff, on-site cooking, full setup, service throughout your event, and complete cleanup. Disposables included; premium dinnerware, linens and bar service available as add-ons." },
        ]}
      />

      <BookingProcess
        eyebrow="Corporate Booking Is Simple"
        title="From request to recurring catering partner."
      />

      {/* FINAL CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <img src={officeAlt} alt={`${regionShort} corporate catering event by Qfire`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        <div className="container-luxe relative z-10 text-center">
          <div className="eyebrow mb-6">Let's Plan Your {regionShort} Corporate Event</div>
          <h2 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
            The corporate caterer <span className="italic text-gold font-light">your team will remember.</span>
          </h2>
          <p className="mt-8 text-xl text-bone/80 max-w-2xl mx-auto font-light">
            Check availability. Request pricing. Schedule your event. We handle the rest.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/quote" className="btn-primary">Request Pricing <ArrowRight className="size-4" /></Link>
            <Link to="/quote" className="btn-ghost">Check Availability</Link>
            <Link to="/quote" className="btn-ghost">Talk With Chef Terry</Link>
            <Link to="/menus" className="btn-ghost">View Menus</Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
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
