import heroFire from "@/assets/hero-fire.jpg";
import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";
const weddingTable = weddingCoupleAsset.url;
import steakAsset from "@/assets/steakhouse-backyard.png.asset.json";
const steak = steakAsset.url;
import brisket from "@/assets/brisket.jpg";
import buffet from "@/assets/buffet.jpg";
import corporate from "@/assets/corporate.jpg";
import privateParty from "@/assets/private-party.jpg";
import type { ServicePageConfig } from "@/components/site/ServicePage";

const galleryAll = [weddingTable, brisket, steak, buffet, heroFire, corporate, privateParty, weddingTable];

export interface ServiceTemplateOptions {
  region?: string;       // e.g. "Phoenix Metro" or undefined
  regionShort?: string;  // e.g. "Phoenix"
}

export function weddingConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Weddings` : "Wedding Catering",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">wedding</span> catering.</> : <>A wedding meal <span className="italic text-gold font-light">they'll remember.</span></>,
    subtitle: r
      ? `Full-service wedding catering across ${r}. Wood-fired flavors, refined presentation, stress-free execution — from rehearsal to last dance.`
      : "Full-service wedding catering with the warmth of a backyard and the polish of a steakhouse. Plated dinners, live-fire stations, buffets and family-style — built around your day.",
    heroImage: weddingTable,
    intro: {
      heading: "Your day, plated.",
      body: [
        "We start with your vision and your venue, then build a menu that tastes the way the night should feel. Wood-fired, beautifully presented, and timed to the minute.",
        "Chef Terry and a full hospitality team handle staffing, service, setup and breakdown — so you spend the evening with your guests, not your caterer.",
        r ? `We cater weddings throughout ${r}, from intimate ceremonies to 300-guest receptions.` : "We cater weddings across Phoenix Metro and San Diego County, from intimate ceremonies to 300-guest receptions.",
      ],
    },
    highlights: [
      { title: "Custom Menu Design", body: "Plated, buffet, family-style or live-fire stations. We build the menu around your vision." },
      { title: "Professional Staff", body: "Uniformed servers, captains, chefs and bartenders. Every event is fully staffed by our team." },
      { title: "Setup & Breakdown", body: "We arrive early, set every table, and leave the venue spotless. You don't lift a thing." },
      { title: "Tastings", body: "Private tastings for the couple, hosted at our chef's table." },
      { title: "Bar Service", body: "Licensed and insured bartenders, signature cocktails, full beverage packages." },
      { title: "Rentals Coordination", body: "Linens, chinaware, glassware, chafers — handled and coordinated." },
    ],
    menu: {
      heading: "Sample wedding menu.",
      columns: [
        { title: "Cocktail Hour", items: ["Brisket sliders with house pickles", "Wood-fired flatbreads", "Charcuterie board, local & imported", "Bacon-wrapped jalapeños", "Smoked deviled eggs"] },
        { title: "Plated or Stations", items: ["Center-cut ribeye, herb butter", "Smoked beef tri-tip", "Cedar-plank salmon", "Brick chicken with chimichurri", "Picanha carved tableside", "Surf & turf upgrade"] },
        { title: "Sides & Bread", items: ["Truffle mac and cheese", "Smoked baked beans", "Southern green beans", "Charred street corn", "Roasted heirloom carrots", "Fresh-baked rolls"] },
      ],
    },
    galleryImages: galleryAll.slice(0, 8),
    reviews: [
      { q: "Chef Terry and his team made our wedding night unforgettable. The brisket and steaks were perfect, and the service was flawless from start to finish.", a: "Lauren & Mark", e: r ? `${r} · 220 guests` : "Scottsdale · 220 guests" },
      { q: "We did a plated dinner for 180 and not a single thing went wrong. Worth every dollar and then some.", a: "Megan & Ryan", e: r ? `${r} Wedding` : "Carlsbad Wedding" },
    ],
    ctaTitle: "Let's design your wedding menu.",
  };
}

export function corporateConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Corporate Catering` : "Corporate Catering",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">corporate</span> catering.</> : <>Corporate catering, <span className="italic text-gold font-light">handled.</span></>,
    subtitle: r
      ? `Executive dinners, holiday parties, investor events and board retreats across ${r}. Refined hospitality at scale.`
      : "Executive dinners, holiday parties, investor events, partner offsites and board retreats. Refined hospitality that scales with your guest count.",
    heroImage: corporate,
    intro: {
      heading: "Hospitality that reflects on your brand.",
      body: [
        "We've catered partner dinners, product launches, holiday parties and full-day company offsites. Every plate is treated as a touchpoint with your team and your clients.",
        "Single point of contact, custom proposals, and on-time execution — every time.",
      ],
    },
    highlights: [
      { title: "Single Account Manager", body: "One contact from quote to final wrap-up." },
      { title: "Volume Pricing", body: "Tiered pricing for repeat corporate clients." },
      { title: "Net-30 Billing", body: "Established billing for qualified corporate accounts." },
      { title: "On-Site Chefs", body: "Live-fire stations and chef-driven action stations." },
      { title: "Holiday Parties", body: "End-of-year galas with full beverage service." },
      { title: "Box Lunches & Drop-Off", body: "Premium daytime catering for board meetings and retreats." },
    ],
    galleryImages: [corporate, steak, buffet, brisket, weddingTable, heroFire],
    reviews: [
      { q: "Our annual partner dinner — 140 plated steaks, served hot, served right. Qfire raised the bar permanently.", a: "David K.", e: r ? `${r} Investment Firm` : "La Jolla Investment Firm" },
    ],
    ctaTitle: "Plan your corporate event.",
  };
}

export function privatePartyConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Private Parties` : "Private Party Catering",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">private</span> party catering.</> : <>Backyard luxury, <span className="italic text-gold font-light">at home.</span></>,
    subtitle: r
      ? `Milestone birthdays, anniversaries, graduations and intimate gatherings across ${r}.`
      : "Milestone birthdays, anniversaries, graduations, holiday gatherings — catering for the moments that matter most.",
    heroImage: privateParty,
    intro: {
      heading: "Your home. Our kitchen.",
      body: [
        "We bring the wood-fired grill to your backyard, the steakhouse to your dining room, and a full team to keep everything running.",
        "Small enough to feel personal. Polished enough to feel professional.",
      ],
    },
    highlights: [
      { title: "On-Site Live-Fire Grill", body: "We roll in the grill and cook to order in your backyard." },
      { title: "Intimate Chef's Dinners", body: "Plated, multi-course dinners for 8–40 guests." },
      { title: "Full Bar Service", body: "Bartenders, glassware, mixers and signature cocktails." },
      { title: "Custom Cakes & Desserts", body: "Partnered with the region's best pastry chefs." },
      { title: "Setup & Cleanup", body: "Your home looks better when we leave than when we arrived." },
      { title: "Late-Night Bites", body: "Sliders, late-night snacks and pass-arounds for long evenings." },
    ],
    galleryImages: [privateParty, brisket, steak, buffet, heroFire, weddingTable],
    ctaTitle: "Let's plan your party.",
  };
}

export function woodFiredConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Wood-Fired Catering` : "Wood-Fired Catering",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">wood-fired</span> catering.</> : <>Live fire. <span className="italic text-gold font-light">Hardwood smoke.</span></>,
    subtitle: r
      ? `Slow-smoked brisket, tri-tip and live-fire stations across ${r}.`
      : "Slow-smoked brisket and tri-tip. Pulled pork. Pulled chicken. Hot links. Comfort sides built around the fire.",
    heroImage: brisket,
    intro: {
      heading: "Cooked over hardwood. Served at its peak.",
      body: [
        "Everything starts with the fire. Oak, mesquite and pecan. Slow temperatures, long cooks, and the kind of bark that tells you it was done right.",
        "This is backyard cooking with a wedding-night standard of presentation.",
      ],
    },
    highlights: [
      { title: "Slow-Smoked Brisket", body: "12-hour brisket with a deep bark and ribbon-thin pink smoke ring." },
      { title: "Tri-Tip Carving Station", body: "Wood-fired tri-tip, sliced to order tableside." },
      { title: "Pulled Pork & Chicken", body: "Hand-pulled, served with house sauces on the side." },
      { title: "Hot Links & Chicken Quarters", body: "Snap-casing sausage and wood-fired chicken quarters." },
      { title: "Live-Fire Stations", body: "We bring the grill. Guests gather. Food comes off the fire all night." },
      { title: "Comfort Sides", body: "Mac and cheese, baked beans, southern green beans, street corn." },
    ],
    menu: {
      heading: "Sample wood-fired menu.",
      columns: [
        { title: "From The Smoker", items: ["Slow-smoked brisket", "Wood-fired tri-tip", "Pulled pork", "Pulled chicken", "Smoked hot links", "Wood-fired chicken quarters"] },
        { title: "The Sides", items: ["Truffle mac and cheese", "Smoked baked beans", "Southern green beans", "Charred street corn", "Coleslaw, our recipe", "Cornbread with honey butter"] },
        { title: "Sauces & Extras", items: ["House sweet & tangy", "Carolina mustard", "Smoky chipotle", "Pickled red onions", "House dill pickles", "Fresh-baked rolls"] },
      ],
    },
    galleryImages: [brisket, heroFire, buffet, privateParty, weddingTable, steak],
    ctaTitle: "Let's design your wood-fired menu.",
  };
}

export function steakhouseConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Steakhouse Catering` : "Steakhouse Catering",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">steakhouse</span> catering.</> : <>The Steakhouse Experience... <span className="italic text-gold font-light">Brought To You.</span></>,
    subtitle: r
      ? `Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf & turf served under candlelight with polished service and unforgettable presentation across ${r}. Perfect for luxury weddings, corporate dinners, and private events.`
      : "Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf & turf served under candlelight with polished service and unforgettable presentation. Perfect for luxury weddings, corporate dinners, and private events.",
    heroImage: steak,
    intro: {
      heading: "A separate identity. A separate standard.",
      body: [
        "When the night calls for a true steakhouse experience, our Steakhouse menu is a different brand of catering altogether. Dark room. Candlelight. Hand-cut steaks, finished over live fire, plated and served with white-glove discipline.",
        "Built for the moments where every plate has to land like the best meal of someone's year.",
      ],
    },
    highlights: [
      { title: "Hand-Cut Steaks", body: "Ribeye, New York strip, filet mignon — sourced and cut in-house." },
      { title: "Picanha Carving", body: "Whole picanha, finished over live fire, carved tableside." },
      { title: "Prime Rib", body: "Slow-roasted prime rib with au jus and horseradish cream." },
      { title: "Surf & Turf", body: "Pair any steak with butter-poached lobster tail or jumbo shrimp." },
      { title: "Plated or Family Style", body: "White-glove plated service or shared family-style platters." },
      { title: "Wine Pairings", body: "Sommelier-built pairings available through our beverage program." },
    ],
    menu: {
      heading: "Sample steakhouse menu.",
      columns: [
        { title: "The Steaks", items: ["Center-cut ribeye", "New York strip", "Filet mignon", "Picanha, carved tableside", "Slow-roasted prime rib", "Surf & turf upgrade"] },
        { title: "From The Sea", items: ["Cedar-plank salmon", "Butter-poached lobster", "Jumbo shrimp cocktail", "Seared scallops"] },
        { title: "The Sides", items: ["Truffle mashed potatoes", "Creamed spinach", "Charred asparagus", "Roasted heirloom carrots", "Lobster mac and cheese"] },
      ],
    },
    galleryImages: [steak, weddingTable, corporate, buffet, heroFire, brisket],
    ctaTitle: "Plan a steakhouse evening.",
  };
}

export function bartendingConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Bartending` : "Bartending Services",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">bartending</span> services.</> : <>The bar, <span className="italic text-gold font-light">done right.</span></>,
    subtitle: r
      ? `Licensed and insured bartending across ${r}. Signature cocktails, full bar packages, beverage management.`
      : "Licensed and insured bartenders. Signature cocktails, full bar packages, beverage management for weddings and events.",
    heroImage: buffet,
    intro: {
      heading: "A bar program that matches the menu.",
      body: [
        "We build beverage programs the same way we build menus — around your event, your guests, and the room. Signature cocktails. Curated wine. A bar that runs without you ever noticing the line.",
      ],
    },
    highlights: [
      { title: "Licensed & Insured", body: "Fully licensed bartenders and certified beverage staff." },
      { title: "Signature Cocktails", body: "Two to four custom cocktails designed around your event." },
      { title: "Full Bar Packages", body: "Beer, wine, spirits, mixers and glassware — everything included." },
      { title: "Mobile Bars", body: "Branded portable bars for outdoor and venue installations." },
      { title: "Wine Service", body: "Sommelier-led wine programs and pairings." },
      { title: "Non-Alcoholic Programs", body: "Mocktail menus and elevated non-alc options." },
    ],
    galleryImages: [buffet, weddingTable, corporate, privateParty],
    ctaTitle: "Design your bar program.",
  };
}

export function rentalsConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Event Rentals` : "Event Rentals",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">event</span> rentals.</> : <>Everything the <span className="italic text-gold font-light">table</span> needs.</>,
    subtitle: r
      ? `Linens, chinaware, glassware, chafers, lounge furniture — sourced and coordinated across ${r}.`
      : "Linens, chinaware, glassware, chafers, lounge furniture. Sourced, delivered, set and struck.",
    heroImage: weddingTable,
    intro: {
      heading: "One vendor. One invoice. Zero coordination.",
      body: [
        "Rentals are the part of an event that most caterers leave to you. We don't. We coordinate every linen, plate and fork — and we set the table ourselves.",
      ],
    },
    highlights: [
      { title: "Linens", body: "Premium napery, runners, overlays in any color." },
      { title: "Chinaware", body: "Classic white, charger plates, gold-rim and matte black." },
      { title: "Glassware", body: "Stemmed wine, coupe, rocks, tumbler, beer." },
      { title: "Chafers & Buffet Equipment", body: "Gold and stainless chafers, carving stations, beverage urns." },
      { title: "Lounge Furniture", body: "Sofas, ottomans and accent pieces for cocktail hour." },
      { title: "Bar & Tabletop", body: "Mobile bars, back bars, bistro tables." },
    ],
    galleryImages: [weddingTable, buffet, corporate, privateParty],
    ctaTitle: "Request a rentals quote.",
  };
}
