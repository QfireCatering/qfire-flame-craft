import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Award, Users, Star, Clock, Sparkles, Heart, Home, PartyPopper, Music } from "lucide-react";
import { PhoenixPricingBanner } from "./PhoenixPricingBanner";
import privatePartyHero from "@/assets/private-parties-hero.png.asset.json";
import privatePartyAsset from "@/assets/private-party-setting.png.asset.json";
import privateRealAsset from "@/assets/private-real.jpg.asset.json";
import steakAsset from "@/assets/steakhouse-backyard.png.asset.json";
import steakMenuAsset from "@/assets/steakhouse-menu.png.asset.json";
import bbqPlatterAsset from "@/assets/bbq-platter.png.asset.json";
import bbqPlatter1Asset from "@/assets/bbq-platter1.png.asset.json";
import bartenderAsset from "@/assets/bartender.png.asset.json";
import weddingAsset from "@/assets/wedding-couple.png.asset.json";
import chefAsset from "@/assets/chef-terry.jpg.asset.json";
import heroFire from "@/assets/hero-fire.jpg";
import buffet from "@/assets/buffet.jpg";

const hero = privatePartyHero.url;
const setting = privatePartyAsset.url;
const lifestyle = privateRealAsset.url;
const steak = steakAsset.url;
const steakMenu = steakMenuAsset.url;
const platter = bbqPlatterAsset.url;
const platter1 = bbqPlatter1Asset.url;
const bartender = bartenderAsset.url;
const wedding = weddingAsset.url;
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
  { q: "How much does private party catering cost?", a: "Most Qfire private parties land between $48 and $165 per guest depending on menu (BBQ buffet vs. plated steakhouse vs. surf & turf), staffing, live-fire grilling, bar service, and rentals. Every proposal is fully itemized — no hidden fees, no surprise gratuity tricks." },
  { q: "Can I customize my menu?", a: "Yes — completely. Chef Terry designs every menu around your guests, your dietary needs, your budget, and the vibe you want. BBQ, steakhouse, surf & turf, taco bar, brunch, late-night bites — you choose, we build." },
  { q: "Do you grill onsite?", a: "Yes. Live charcoal grilling is our signature. We bring the wood-fired grill to your backyard, pool deck, estate, park, rooftop, or rental venue and cook fresh steaks, brisket, chicken, salmon, and burgers right in front of your guests." },
  { q: "Do you travel?", a: "Yes. We cater private parties across the entire region — backyards, private homes, estates, rented venues, parks, and vacation rentals. Travel fees only apply for events well outside our standard service area." },
  { q: "Can you accommodate dietary restrictions?", a: "Always. Vegetarian, vegan, gluten-free, dairy-free, kosher-style, and halal-friendly options are standard. For nut and shellfish allergies we run a dedicated prep line and clearly label every dish." },
  { q: "Do you provide bartenders?", a: "Yes. Licensed and insured bartenders, signature cocktails, beer-and-wine packages, mocktail service, and full bar setup — perfect for birthdays, anniversaries, and bachelor / bachelorette parties." },
  { q: "Do you provide rentals?", a: "Yes. Linens, chinaware, glassware, flatware, chafers, bistro tables, lounge furniture, tents, dance floors, and lighting through trusted partners — billed at cost and coordinated by our team." },
  { q: "Do you provide setup?", a: "Yes. Our team arrives early, stages the buffet, builds beautiful displays, sets the bar, and gets everything photo-ready before your first guest walks in." },
  { q: "Do you handle cleanup?", a: "Yes. Full breakdown, trash bagged, surfaces wiped, equipment removed. Your kitchen will be cleaner than when we arrived." },
  { q: "Can we change our menu later?", a: "Yes. The 35% Date Charge holds your date — menus stay flexible until roughly 14 days before the party and guest counts until about 7 days out." },
  { q: "Can we update guest counts later?", a: "Yes. Guest counts can move up or down right up until your final headcount lock about 7 days before the event." },
  { q: "Do you provide vegetarian options?", a: "Absolutely — wood-fired vegetables, grain bowls, stuffed portobellos, composed salads, and chef-driven plant-forward entrees." },
  { q: "Do you provide vegan options?", a: "Yes — fully plant-based menus including grilled vegetable platters, plant-protein entrees, vegan sides, and dairy-free desserts." },
  { q: "How far in advance should we reserve?", a: "Most private parties book 30–90 days out. Holidays (Nov/Dec), graduation season (May), and prime backyard weekends fill 60–180 days in advance. Call us — we'll tell you what's still open." },
  { q: "Can you cater backyard parties?", a: "Yes — backyards are our home court. We bring the live-fire grill, the buffet, the bar, the staff, and the polish. You just enjoy the party." },
  { q: "Can you cater parks?", a: "Yes. We regularly cater park gatherings, family reunions, and outdoor celebrations with permits, generators, and self-contained setups." },
  { q: "Can you cater private homes?", a: "Yes — private estates, vacation rentals, condos, and luxury homes. We work cleanly, professionally, and discreetly in any home environment." },
  { q: "Can you handle large guest counts?", a: "Yes. We routinely execute private parties from 20 intimate guests to 500+ family reunions and milestone celebrations." },
  { q: "What service style is best?", a: "It depends on the vibe. Casual backyards love buffet or family style. Milestone birthdays and anniversaries love plated steakhouse. Pool parties love drop-off + bartender. We'll help you choose." },
];

const whyChoose = [
  { icon: Flame, title: "Live Charcoal Grilling", body: "The grill becomes the centerpiece. Guests gather, the aroma drifts, and the party levels up before dinner is even served." },
  { icon: Sparkles, title: "Restaurant-Quality Food", body: "Fresh off the grill, plated like a steakhouse — not steam-pan party food. The kind of food guests text you about the next day." },
  { icon: Users, title: "Professional Staff", body: "Uniformed, friendly, polished. Servers, bartenders, and chefs who know how to read a room and elevate the energy." },
  { icon: Heart, title: "Stress-Free Hosting", body: "You won't touch a chafer, a trash bag, or a cocktail shaker. Show up, hug your guests, and actually enjoy your own party." },
  { icon: Star, title: "Beautiful Presentation", body: "Buffets, carving stations, and plated courses built to be photographed — the party looks as good as it tastes." },
  { icon: PartyPopper, title: "Unforgettable Atmosphere", body: "Guests gather around the grill, share platters, and stay later than they planned. The kind of party people talk about for years." },
  { icon: Home, title: "Backyard or Estate", body: "Backyards, pool decks, private estates, rentals, parks — we bring the full experience anywhere you host." },
  { icon: Music, title: "Fun, Welcoming Vibe", body: "Premium without being stuffy. Polished without being uptight. The energy your celebration deserves." },
  { icon: Check, title: "Completely Customizable", body: "Your menu, your style, your timeline. Built around your party — never copy-and-paste catering." },
  { icon: Clock, title: "On-Time, Every Time", body: "Setup is done before guests arrive. The food comes out exactly when it's supposed to. Twenty-five years without a late event." },
  { icon: Award, title: "Food Network Pedigree", body: "Chef Terry — featured on BBQ Brawl with Bobby Flay, Camp Cutthroat, and Cutthroat Kitchen — personally designs your menu." },
  { icon: Sparkles, title: "Memorable, Not Forgettable", body: "Be the host everyone remembers. Be the party guests measure all future parties against." },
];

const partyTypes = [
  { title: "Birthday Parties", img: lifestyle },
  { title: "Milestone Birthdays", img: setting },
  { title: "Anniversary Parties", img: wedding },
  { title: "Graduation Parties", img: buffet },
  { title: "Holiday Parties", img: platter },
  { title: "Backyard BBQs", img: heroFire },
  { title: "Bachelor Parties", img: steak },
  { title: "Bachelorette Parties", img: bartender },
  { title: "Family Reunions", img: platter1 },
  { title: "Baby Showers", img: setting },
  { title: "Bridal Showers", img: wedding },
  { title: "Retirement Parties", img: lifestyle },
  { title: "Housewarming Parties", img: platter },
  { title: "Celebration of Life", img: setting },
  { title: "Pool Parties", img: bartender },
  { title: "Neighborhood Gatherings", img: buffet },
  { title: "Luxury Private Dinners", img: steakMenu },
  { title: "Large Family Celebrations", img: platter1 },
];

const serviceStyles = [
  { name: "Delivery / Drop-Off", tag: "Most Casual", bullets: ["Perfect for casual gatherings & birthdays", "Professional, restaurant-quality drop-off", "Hot and ready when we arrive", "Beautiful, photo-worthy presentation", "Minimal setup, maximum flavor", "Great for office and pool parties"] },
  { name: "Full-Service Buffet", tag: "Most Popular", bullets: ["Perfect for birthdays, holidays & reunions", "Professional uniformed attendants", "Beautiful, abundant buffet displays", "Continuous buffet maintenance", "Carving and grilling stations available", "Ideal for 30–300+ guests"] },
  { name: "Family Style", tag: "Most Connected", bullets: ["Perfect for anniversaries & family dinners", "Shared platters at every table", "Warm, communal atmosphere", "Elegant table presentation", "Encourages conversation", "Great for 16–80 intimate guests"] },
  { name: "Plated Dinner Service", tag: "Most Elegant", bullets: ["Perfect for luxury birthdays & estate parties", "Restaurant-style synchronized service", "Highest level of formality", "Coursed dining with captains", "White-glove guest experience", "The steakhouse — at your home"] },
];

const timelineSteps = [
  { n: "01", title: "Request Your Quote", body: "Send your date, headcount, and party vibe — takes about 90 seconds." },
  { n: "02", title: "We'll Contact You Personally", body: "A real person — not a chatbot — calls or emails within 24 hours." },
  { n: "03", title: "Customize Your Menu", body: "BBQ, steakhouse, surf & turf, bar program — designed around your party." },
  { n: "04", title: "Reserve Your Date", body: "35% Date Charge holds the date and the team — applied to your final invoice." },
  { n: "05", title: "Finalize Guest Count Later", body: "Headcount and menu adjustments lock 7–14 days before your party." },
  { n: "06", title: "Enjoy Your Party", body: "Setup, service, live-fire grilling, bar, breakdown — handled. You just host." },
];

const menuOptions = [
  "BBQ Catering", "Steakhouse Catering", "Surf & Turf", "Live Charcoal Grilling", "Carving Stations",
  "Taco & Street-Food Bars", "Brunch Catering", "Dinner Catering", "Passed Hors d'oeuvres",
  "Dessert & Coffee Service", "Vegetarian Menus", "Vegan Menus", "Gluten-Free & Allergy Menus",
  "Premium Steaks & Prime Rib", "Smoked Brisket & Ribs", "Grazing & Charcuterie Displays",
];

export function PrivatePartyPage({ config }: { config: PrivatePartyRegionConfig }) {
  const { region, regionShort, cities, reviewCities, path } = config;

  const reviews = [
    { q: `Qfire turned my 50th birthday into the party of the year. The live grilling out back, the steakhouse plates, the bartender — every guest is still talking about it.`, a: "Lauren P.", e: `${reviewCities[0]} · 50th Birthday` },
    { q: `We hosted a 140-person family reunion in ${regionShort}. The buffet was beautiful, the food was incredible, and not one of us lifted a finger. Worth every penny.`, a: "The Alvarez Family", e: `${reviewCities[1] ?? reviewCities[0]} · Family Reunion` },
    { q: "The live charcoal grilling at our backyard anniversary party was magical. Guests gathered around the grill all night. Chef Terry is the real deal.", a: "Michael & Diana K.", e: `${reviewCities[2] ?? reviewCities[0]} · 25th Anniversary` },
    { q: "Plated dinner for my husband's surprise 60th. Twenty-six guests, full steakhouse service in our home. It felt like Mastro's came to us.", a: "Jennifer S.", e: `${reviewCities[3] ?? reviewCities[0]} · Milestone Birthday` },
    { q: "From quote to cleanup, the entire team was unbelievably professional. My graduation party for our daughter was flawless.", a: "Robert M.", e: `${reviewCities[0]} · Graduation Party` },
    { q: "We've used Qfire three times now — pool party, holiday party, and our anniversary. They never miss. Easiest hosting we've ever done.", a: "The Whitfield Family", e: `${region} · Repeat Client` },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Qfire Catering — ${region} Private Party Catering`,
    image: hero,
    url: path,
    telephone: "+1-602-555-0123",
    priceRange: "$$$",
    servesCuisine: ["BBQ", "Steakhouse", "American", "Private Party Catering", "Backyard Catering"],
    areaServed: cities.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "247" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Private Party Catering", item: "/private-parties" },
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
    description: `Premium private party catering across ${region} — birthdays, anniversaries, graduations, holidays, family reunions, bachelor/bachelorette parties, pool parties, and luxury private dinners with live charcoal grilling, steakhouse plates, and full bar service.`,
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "LocalBusiness", name: `Qfire Catering — ${region} Private Party Catering` },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: reviews[0].a },
    reviewBody: reviews[0].q,
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img src={hero} alt={`Luxury private party catering in ${regionShort} backyard by Qfire Catering`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="container-luxe relative z-10 pb-20 lg:pb-28 pt-32">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-[0.2em] uppercase text-bone/60">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2 text-gold">/</span>
            <Link to="/private-parties" className="hover:text-gold">Private Parties</Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-gold">{region}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 text-gold">{region} Private Party Catering</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tight">
              Private party catering <span className="italic text-gold font-light">guests talk about for years.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-bone/85 font-light leading-relaxed max-w-2xl">
              Restaurant-quality catering for birthdays, backyard parties, anniversaries, graduations, and private celebrations across {region} — with live charcoal grilling, premium steaks, authentic BBQ, and professional service.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/quote" className="btn-primary">Get My Quote <ArrowRight className="size-4" /></Link>
              <Link to="/quote" className="btn-ghost">Check My Date</Link>
              <Link to="/menus" className="btn-ghost">View Menus</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-bone/70">
              <div><span className="text-gold font-display text-2xl">25+</span> Years Experience</div>
              <div><span className="text-gold font-display text-2xl">2,000+</span> Parties Catered</div>
              <div><span className="text-gold font-display text-2xl">4.9★</span> Guest-Rated</div>
              <div><span className="text-gold font-display text-2xl">Food Network</span> Featured Chef</div>
            </div>
          </div>
        </div>
      </section>
      {config.regionSlug === "phoenix" && <PhoenixPricingBanner />}

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-onyx py-10">
        <div className="container-luxe">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">As Seen On</div>
              <div className="text-bone font-display text-lg">Food Network</div>
              <div className="text-xs text-bone/60 mt-1">BBQ Brawl with Bobby Flay</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Credentials</div>
              <div className="text-bone font-display text-lg">Licensed & Insured</div>
              <div className="text-xs text-bone/60 mt-1">Backyards · Estates · Venues</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Reputation</div>
              <div className="text-bone font-display text-lg">4.9★ Average</div>
              <div className="text-xs text-bone/60 mt-1">Hundreds of 5-star reviews</div>
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-2">Experience</div>
              <div className="text-bone font-display text-lg">2,000+ Parties</div>
              <div className="text-xs text-bone/60 mt-1">25+ years professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE CHOOSE QFIRE */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Why People Choose Qfire</div>
            <h2 className="heading-lg text-bone">Be the host everyone remembers.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              The best parties aren't about food — they're about the feeling. Guests gathered around the grill. The smell of charcoal in the air. Fresh steaks coming off the fire. You, relaxed, with a drink in hand, actually enjoying your own party.
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
            <Link to="/quote" className="btn-primary">Plan My {regionShort} Party <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[0]} />

      {/* EVENTS WE CATER */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">Events We Cater</div>
            <h2 className="heading-lg text-bone">Every kind of private celebration in {regionShort}.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              From an intimate backyard birthday to a 300-guest family reunion — we've catered it across {region}.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            {partyTypes.map((e) => (
              <div key={e.title} className="relative aspect-square overflow-hidden bg-ink group">
                <img src={e.img} alt={`${e.title} catering in ${regionShort} by Qfire`} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
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
            <h2 className="heading-lg text-bone">Four ways to serve your {regionShort} private party.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              From a relaxed backyard drop-off to a black-tie plated dinner — we'll match the level of service to the vibe of your celebration.
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
            <p className="text-lg font-light">Not sure which style fits your party? We'll help you choose.</p>
            <Link to="/quote" className="inline-block mt-4 text-[0.7rem] tracking-[0.28em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold">Talk With Chef Terry</Link>
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[2]} />

      {/* LIVE CHARCOAL GRILLING */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={heroFire} alt={`Live charcoal grilling at a ${regionShort} backyard private party by Qfire`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Live Charcoal Grilling</div>
            <h2 className="heading-lg text-bone">The grill becomes part of the party.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Guests don't gather around the buffet. They gather around the fire. Live charcoal grilling transforms the energy of any private party — backyard, pool deck, estate, or private venue.</p>
              <p>The aroma drifts across the yard. Conversations start. Phones come out. Steaks, salmon, chicken, and burgers come off the grill hot, charred, and incredible — and the party levels up before dinner is even served.</p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Freshly grilled steaks", "Wood-fired chicken & salmon", "Live-action carving stations", "Fresh burgers & sausage", "Visual party centerpiece", "Built-in conversation starter"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-bone/85 text-sm"><Flame className="size-4 text-gold" strokeWidth={1.5} /> {x}</li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Bring the Fire to My Party <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* BBQ + STEAKHOUSE EXPERIENCE */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="eyebrow mb-6">BBQ + Steakhouse Experience</div>
            <h2 className="heading-lg text-bone">Most caterers offer one style. We bring both.</h2>
            <div className="mt-8 space-y-5 text-bone/80 text-lg font-light leading-relaxed">
              <p>Qfire is the rare caterer that fluently speaks both languages — authentic, slow-smoked BBQ and a true steakhouse experience. Charcoal-grilled ribeye, NY strip, filet mignon, picanha, prime rib, salmon, surf & turf alongside brisket, ribs, pulled pork, and smoked chicken.</p>
              <p>That gives you more flexibility, more creativity in your menu, and the ability to design a party that doesn't feel like every other catered event in {region}.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/menus" className="btn-ghost">View BBQ Menu</Link>
              <Link to="/steak-seafood-menu" className="btn-ghost">View Steakhouse Menu</Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <img src={steak} alt={`Premium steakhouse plates served at a ${regionShort} private party`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <ScatteredReview review={reviews[3]} />

      {/* WHAT HAPPENS NEXT */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-6">What Happens Next</div>
            <h2 className="heading-lg text-bone">From "request a quote" to "best party ever" — handled.</h2>
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
              Your private party date is secured with a <strong className="text-gold">35% Date Charge</strong> — applied directly to your final invoice. It reserves our team and equipment for your date and nothing more.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Menus stay flexible until ~14 days out",
                "Guest counts stay flexible until ~7 days out",
                "Service style can evolve",
                "Bar package can evolve",
                "Most planning happens after booking",
                "No pressure to lock everything on day one",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-bone/85 text-base">
                  <Check className="size-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} /> {x}
                </li>
              ))}
            </ul>
            <Link to="/quote" className="btn-primary mt-10">Reserve My Date <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* MENU OPTIONS */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">Private Party Menu Options</div>
            <h2 className="heading-lg text-bone">Wood-fired BBQ. Premium steakhouse. Built around your party.</h2>
            <p className="mt-6 text-bone/70 text-lg leading-relaxed font-light">
              Whatever your {regionShort} guests love — it comes off our live-fire grill or our scratch kitchen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { img: platter, title: "BBQ Catering", body: "Brisket, ribs, pulled pork, smoked chicken, sausage, all the sides.", to: "/menus" },
              { img: steakMenu, title: "Steakhouse", body: "Ribeye, NY strip, filet, picanha, prime rib, salmon, surf & turf.", to: "/steak-seafood-menu" },
              { img: platter1, title: "Carving Stations", body: "Chef-attended live carving — picanha, brisket, prime rib, lamb.", to: "/menus" },
            ].map((m) => (
              <Link key={m.title} to={m.to} className="group relative aspect-[4/5] overflow-hidden block">
                <img src={m.img} alt={`${m.title} for ${regionShort} private parties`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

      {/* PROFESSIONAL EXECUTION */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={setting} alt={`Beautiful private party buffet setup by Qfire Catering staff in ${regionShort}`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-6">Professional Execution</div>
            <h2 className="heading-lg text-bone">Why hosting is easy with Qfire.</h2>
            <p className="mt-6 text-bone/80 text-lg font-light leading-relaxed">
              Hosting a great party is hard. Hosting a great party while actually enjoying it is nearly impossible — unless someone else handles every detail. That's the whole job.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Professional uniformed staff", "Beautiful buffet setup", "Venue & home coordination", "On-time arrival, every time", "Clean, polished setup", "Thorough cleanup & breakdown", "Stress-free hosting experience", "Clear, friendly communication", "Dependable execution", "Restaurant-quality food", "Bartenders on request", "Rentals & linens coordinated"].map((x) => (
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
            <div className="eyebrow mb-6">{region} Private Party Service Area</div>
            <h2 className="heading-lg text-bone">Private party catering across {region}.</h2>
            <p className="mt-6 text-bone/70 text-lg font-light leading-relaxed">
              From luxury estates to backyard pools, private homes to rented venues — Qfire caters celebrations throughout {region}, including:
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
              <p>Chef Terry — known to fans as <em>The BBQ Daddy</em> — personally designs every private party menu Qfire serves. When you book Qfire, you book him.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Food Network", "BBQ Brawl with Bobby Flay", "Camp Cutthroat Winner", "Cutthroat Kitchen Champion", "25+ Years", "2,000+ Events", "4.9★ Reputation"].map((b) => (
                <span key={b} className="text-[0.65rem] tracking-[0.28em] uppercase text-gold border border-gold/40 px-4 py-2">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">{regionShort} Private Party Catering FAQ</div>
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

      {/* FINAL CTA */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <img src={lifestyle} alt={`${regionShort} private party catering by Qfire`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        <div className="container-luxe relative z-10 text-center">
          <div className="eyebrow mb-6">Let's Plan Your {regionShort} Private Party</div>
          <h2 className="font-display text-5xl md:text-7xl text-bone leading-[0.95]">
            The party caterer <span className="italic text-gold font-light">your guests will remember.</span>
          </h2>
          <p className="mt-8 text-xl text-bone/80 max-w-2xl mx-auto font-light">
            Get my quote. Check my date. Schedule a tasting. We handle the rest.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/quote" className="btn-primary">Get My Quote <ArrowRight className="size-4" /></Link>
            <Link to="/quote" className="btn-ghost">Check My Date</Link>
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
