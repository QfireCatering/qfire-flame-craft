import heroFire from "@/assets/hero-fire.jpg";
import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";
const weddingTable = weddingCoupleAsset.url;
import steakAsset from "@/assets/steakhouse-backyard.png.asset.json";
const steak = steakAsset.url;
import brisket from "@/assets/brisket.jpg";
import buffet from "@/assets/buffet.jpg";
import bartenderAsset from "@/assets/bartender.png.asset.json";
const bartender = bartenderAsset.url;
import corporateAsset from "@/assets/corporate-catering.png.asset.json";
const corporate = corporateAsset.url;
import privateParty from "@/assets/private-party.jpg";
import privatePartyHeroAsset from "@/assets/private-parties-hero.png.asset.json";
const privatePartyHero = privatePartyHeroAsset.url;
import weddingRealAsset from "@/assets/wedding-real.jpg.asset.json";
const weddingReal = weddingRealAsset.url;
import corporateRealAsset from "@/assets/corporate-real.jpg.asset.json";
const corporateReal = corporateRealAsset.url;
import privateRealAsset from "@/assets/private-real.jpg.asset.json";
const privateReal = privateRealAsset.url;
import type { ServicePageConfig } from "@/components/site/ServicePage";

import pxwBg from "@/assets/gallery/phoenix-weddings/set_up_background.png.asset.json";
import pxwCouple from "@/assets/gallery/phoenix-weddings/couple_eating-2.avif.asset.json";
import pxwBride from "@/assets/gallery/phoenix-weddings/smoked_brisket_station.avif.asset.json";
import pxwGrill from "@/assets/gallery/phoenix-weddings/onsite_grill2-2.avif.asset.json";
import pxwFruit from "@/assets/gallery/phoenix-weddings/fruit_veggie_platter.avif.asset.json";
import pxwSetup6 from "@/assets/gallery/phoenix-weddings/set_up6.avif.asset.json";
import pxwBuffet from "@/assets/gallery/phoenix-weddings/buffet_set_4.avif.asset.json";
import pxwSetup4 from "@/assets/gallery/phoenix-weddings/set_up_4.avif.asset.json";

import pxc1 from "@/assets/gallery/phoenix-corporate/pxc-1.jpg.asset.json";
import pxc2 from "@/assets/gallery/phoenix-corporate/pxc-2.png.asset.json";
import pxc3 from "@/assets/gallery/phoenix-corporate/pxc-3.jpg.asset.json";
import pxc4 from "@/assets/gallery/phoenix-corporate/pxc-4.jpg.asset.json";
import pxc5 from "@/assets/gallery/phoenix-corporate/pxc-5.jpg.asset.json";
import pxc6 from "@/assets/gallery/phoenix-corporate/pxc-6.jpg.asset.json";
import pxc7 from "@/assets/gallery/phoenix-corporate/pxc-7.jpg.asset.json";
import pxc8 from "@/assets/gallery/phoenix-corporate/pxc-8.png.asset.json";

const galleryAll = [weddingReal, brisket, steak, buffet, heroFire, corporateReal, privateReal, weddingTable];
const phoenixWeddingGallery = [pxwBg.url, pxwCouple.url, pxwBride.url, pxwGrill.url, pxwFruit.url, pxwSetup6.url, pxwBuffet.url, pxwSetup4.url];
const phoenixCorporateGallery = [pxc1.url, pxc2.url, pxc3.url, pxc4.url, pxc5.url, pxc6.url, pxc7.url, pxc8.url];

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
      : "Full-service wedding catering with the warmth of a backyard and the polish of a Steakhouse Experience. Plated dinners, live-fire stations, buffets and family-style — built around your day.",
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
        { title: "Choose Your Meats", items: ["Hickory Smoked Pulled Pork", "Smoked Pulled Chicken", "Grilled Chicken Breast", "BBQ Chicken (Leg & Thigh)", "Premium 1/3 lb All-Beef Burgers", "Premium All-Beef Hot Dogs", "Premium: Smoked Sliced Beef Brisket (+$3)", "Premium: Beef Tri-Tip (+$4)", "Premium: BBQ Beef Ribs (+$5)", "Premium: Pork Spare Ribs (+$2)", "Premium: Grilled Pork Tenderloin (+$2)", "Premium: Hot Links (+$2)"] },
        { title: "Sides & Bread", items: ["Gourmet Mac & Cheese", "Signature Smokehouse Beans", "Potato Salad, herb-infused dressing", "Gourmet Macaroni Pasta Salad", "Elotes (Mexican Street Corn Salad)", "Southern Smothered Cabbage", "Collard Greens", "Garden Salad / Caesar Salad", "Mashed Potatoes", "Spanish Rice & Frijoles Negros", "Loaded Red Mashed Potatoes (+$2)", "Grilled Asparagus (+$2)", "Buttered Bread Rolls (+$1.99)"] },
        { title: "Appetizers & Desserts", items: ["Fruit Platter", "Veggie Platter", "Assorted Cheese & Crackers", "BBQ Daddy Meatballs", "Bacon-Wrapped Italian Meatballs (+$3)", "Chips, Salsa, Guac & Pico (+$2)", "Peach Cobbler", "German Chocolate Cake", "Chocolate Cake / Vanilla Cake", "Double Fudge Brownies", "Assorted Fresh-Baked Cookies", "Sweet Tea, Lemonade, Arnold Palmer"] },
      ],
      ctaLabel: "Click Here to View Menu and Pricing",
      ctaUrl: o.regionShort === "San Diego"
        ? "https://fs17.formsite.com/matthews3404/SanDiego/index"
        : "https://fs17.formsite.com/matthews3404/BBQDADDYLLC/index",
    },
    galleryImages: o.regionShort === "Phoenix" ? phoenixWeddingGallery : galleryAll.slice(0, 8),
    reviews: [
      { q: "Chef Terry and his team made our wedding night unforgettable. The brisket and steaks were perfect, and the service was flawless from start to finish.", a: "Lauren & Mark", e: r ? `${r} · 220 guests` : "Scottsdale · 220 guests" },
      { q: "We did a plated dinner for 180 and not a single thing went wrong. Worth every dollar and then some.", a: "Megan & Ryan", e: r ? `${r} Wedding` : "Carlsbad Wedding" },
    ],
    faqs: [
      { q: "How far in advance should we book our wedding caterer?", a: "Most couples book Qfire 6 to 12 months in advance for peak Saturdays in Phoenix Metro and San Diego County. We accept a limited number of weddings each weekend so service never feels rushed. Off-peak dates and intimate weddings can often be accommodated inside 90 days." },
      { q: "Do you handle setup, service staff, and breakdown?", a: "Yes — every wedding includes uniformed servers, captains, chefs, and a lead coordinator. We arrive hours before guest count, dress every table, execute service to the minute, and break the room down so cleanly your venue manager will ask for our card." },
      { q: "Can we host a private tasting before we book?", a: "Absolutely. After your initial proposal we invite the couple to a private chef's-table tasting with Chef Terry. You'll sample your proposed entrees, sides, and a signature cocktail, and refine the menu in real time before contracts are finalized." },
      { q: "Do you cater both indoor venues and outdoor live-fire weddings?", a: "Both. We routinely plate inside hotel ballrooms, vineyards, and private estates, and we also roll in our wood-fired grill for outdoor receptions where guests gather around the live-fire station. Permits, fire safety, and venue approval are all coordinated by our team." },
      { q: "Is bar service included or separate?", a: "Bar service is offered as an add-on package with licensed, insured bartenders, signature cocktails, beer and wine programs, mixers, glassware, and ice. We can run the bar entirely or partner with your venue's beverage program." },
      { q: "What is the average price per guest for a Qfire wedding?", a: "Most full-service Qfire weddings land between $95 and $185 per guest depending on protein selection, service style, bar package, and rentals coordination. Every proposal is custom — there are no hidden fees, no per-server gratuity surprises, and every line item is itemized." },
    ],
    ctaTitle: "Let's design your wedding menu.",
    definitiveKey: "wedding",
    definitiveTopic: "Wedding Catering",
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
      { title: "On-Site Chefs", body: "Live-fire stations and chef-driven action stations." },
      { title: "Holiday Parties", body: "End-of-year galas with full beverage service." },
      { title: "Box Lunches & Drop-Off", body: "Premium daytime catering for board meetings and retreats." },
    ],
    galleryImages: o.regionShort === "Phoenix" || o.regionShort === "San Diego" ? phoenixCorporateGallery : [corporateReal, corporate, steak, buffet, brisket, weddingReal, heroFire, weddingTable],
    showGalleryLink: false,
    reviews: [
      { q: "Our annual partner dinner — 140 plated steaks, served hot, served right. Qfire raised the bar permanently.", a: "David K.", e: r ? `${r} Investment Firm` : "La Jolla Investment Firm" },
    ],
    faqs: [
      { q: "Do you offer corporate accounts and invoicing?", a: "Yes. Qualified corporate clients are set up with a dedicated account manager, master service agreements, COIs on request, and detailed invoicing on all events. Repeat clients also receive tiered volume pricing across the calendar year." },
      { q: "Can you handle a full-day company offsite or multi-day event?", a: "Routinely. We've executed multi-day partner retreats, sales kickoffs, and board offsites with breakfast, lunch, breaks, and plated dinners across multiple venues — all coordinated by a single point of contact." },
      { q: "What is your minimum guest count for corporate catering?", a: "Drop-off catering starts at 15 guests. Staffed buffets and plated dinners typically start at 25 guests. There is no functional ceiling — we have plated and served events of 600+ with the same standard as a chef's-table dinner for 12." },
      { q: "Do you accommodate dietary restrictions and allergies?", a: "Always. Every proposal includes vegetarian, vegan, gluten-free, and dairy-free options. For peanut, tree-nut, and shellfish allergies we run a dedicated prep line and label every plate at the pass." },
      { q: "Can you cater on-site at our corporate office or co-working space?", a: "Yes — we cater regularly inside corporate HQs, downtown high-rises, industrial flex spaces, and remote project sites across Phoenix Metro and San Diego County. We bring everything required, including power management for hot-hold equipment." },
      { q: "How do you handle holiday party season bookings?", a: "Holiday party season (Nov 15 – Dec 23) books out by late September. Reserve your date early — a non-refundable date hold secures your slot, and the menu can be finalized up to 30 days before the event." },
    ],
    ctaTitle: "Plan your corporate event.",
    definitiveKey: "corporate",
    definitiveTopic: "Corporate Catering",
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
    heroImage: privatePartyHero,
    intro: {
      heading: "Your home. Our kitchen.",
      body: [
        "We bring the wood-fired grill to your backyard, the Steakhouse Experience to your dining room, and a full team to keep everything running.",
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
    galleryImages: [privateReal, privateParty, brisket, steak, buffet, heroFire, weddingReal, corporateReal],
    faqs: [
      { q: "What is the minimum guest count for a private party?", a: "Our intimate chef's dinners start at 8 guests for fully plated, multi-course service. Staffed buffets and family-style parties typically start at 20, and there's no upper limit — we've cooked for backyard parties of 250+ across Phoenix and San Diego." },
      { q: "Will Chef Terry actually be at our event?", a: "For private chef dinners, intimate plated experiences, and signature events, yes — Chef Terry leads the kitchen personally. For larger backyard parties he is supported by a tenured team of trained chefs who cook to the same standard he set." },
      { q: "Can you bring the wood-fired grill to a residential property?", a: "Yes. Our mobile wood-fired grill is engineered for residential driveways, backyards, pool decks, and gated estates. We confirm clearance, ventilation, and HOA requirements during the planning call so there are no surprises the day of." },
      { q: "Do you handle bar service, glassware, and rentals for private parties?", a: "All of it. Bartenders, glassware, linens, chinaware, gold flatware, votives, and lounge furniture can be sourced, set, and struck by our team — one vendor, one invoice, zero coordination on your part." },
      { q: "How clean is the kitchen when you leave?", a: "Cleaner than when we arrived. Counters wiped, sinks empty, floors swept, trash bagged and removed. The standing rule for our team: the host should be able to pour a nightcap in their own kitchen ten minutes after the last guest leaves." },
      { q: "How early should I book a private party?", a: "30 to 90 days is comfortable for most weekends. Major holidays (NYE, July 4th, Thanksgiving weekend) and graduation season fill 4 to 6 months out. Short-notice parties are accepted when our calendar allows — call directly for last-minute dates." },
    ],
    ctaTitle: "Let's plan your party.",
    definitiveKey: "private",
    definitiveTopic: "Private Party Catering",
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
    heroObjectPosition: "center 35%",
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
      heading: "The full wood-fired menu.",
      columns: [
        { title: "Choose Your Meats (GF)", items: ["Premium 1/3 lb All-Beef Hamburgers", "Premium All-Beef Hot Dogs", "Hickory Smoked Pulled Pork", "Smoked Pulled Chicken", "Grilled Chicken Breast", "BBQ Chicken (Leg & Thigh)"] },
        { title: "Premium Meat Options (Upcharge)", items: ["Smoked Sliced Beef Brisket (+$3)", "Smoked Pulled Beef (+$2)", "Smoked Beef Ribs (+$5)", "Beef Tri-Tip (+$4)", "Wood-Fired Pork Spare Ribs (+$2)", "Grilled Pork Tenderloin (+$2)", "Grilled Chicken Leg Quarters (+$2)", "Hot Links (+$2)", "Grilled Pork Chops (+$2)"] },
        { title: "Vegetarian & Vegan ($4.99/selection · 10 min)", items: ["Veggie Burgers", "Grilled Portabella Mushroom", "Grilled Cauliflower Steaks", "BBQ Jackfruit"] },
        { title: "Sides", items: ["Potato Salad w/ Herb-Infused Dressing (V, GF)", "Gourmet Macaroni Pasta Salad Delight (V)", "Signature Smokehouse Beans (GF)", "Green Beans (V, GF, VG)", "Sweet Potatoes / Yams (V, GF, VG)", "Gourmet Macaroni & Cheese (V)", "Garden Salad (V, GF, VG)", "Caesar Salad (GF)", "Authentic Refried Beans (V, GF, VG)", "Elotes — Mexican Street Corn Salad (Warm, GF, V)", "Spanish Rice (V, GF, VG)", "Frejoles / Black Beans (V, GF, VG)", "Collard Greens (V, GF, VG)", "Southern-Style Smothered Cabbage", "Coleslaw (V, GF)", "Corn on the Cob (V, GF, VG)", "Mashed Potatoes (V, GF)", "Alfredo Penne Pasta (V)", "Baked Potatoes (V, GF, VG)", "Corn Bread (V)"] },
        { title: "Premium Sides (Upcharge)", items: ["Loaded Red Mashed Potatoes (+$2)", "Grilled Asparagus (+$2, V, GF, VG)", "Pasta Salad (+$1, V)", "Fresh Whole Green Beans (+$2, V, GF, VG)", "Roasted Broccoli (+$2, V, GF, VG)", "Southern-Style Green Beans w/ Onions & Bell Peppers (+$2, V, GF, VG)"] },
        { title: "Bread", items: ["Butter Bread Rolls (+$1.99)"] },
        { title: "Appetizers ($3.49/selection)", items: ["Fruit Platter", "Veggie Platter", "Assorted Spiced Cheese & Crackers", "BBQ Daddy Meatballs", "Caesar Salad (GF, VG)", "Glazed Cocktail Sausages", "BBQ'd Italian Meatballs Wrapped in Bacon (+$3, GF)", "Chips, Red/Green Salsa, Guac & Pico (+$2)"] },
        { title: "Desserts ($2.99/selection)", items: ["Peach Cobbler", "German Chocolate Cake", "Assorted Fresh-Baked Cookies", "Chocolate Cake", "Vanilla Cake", "Double Fudge Brownies"] },
        { title: "Drinks ($0.99/selection)", items: ["Sweet Tea", "Unsweet Tea", "Lemon Tea", "Arnold Palmer", "Lemonade", "Strawberry Lemonade", "Blueberry Lemonade", "Raspberry Lemonade", "Fruit Punch", "Water"] },
        { title: "Dinnerware", items: ["Picnic Style — Disposable Dinnerware, heavyweight white cutlery (+$0.75/person)", "Formal Plasticware — disposable plate, heavyweight plastic cutlery, dinner napkin (+$3.25)", "Glass Dinnerware — glass plate, water goblet, silverware, cloth napkin (+$6.25/person)", "Providing my own dinnerware"] },
        { title: "Add-Ons", items: ["Onsite Grilling (+$225)", "Meat Carving Station (+$150)", "Bar Service — Bartender Only, Mixer Package, Beer & Wine, or Full-Service Liquor"] },
      ],
    },
    galleryImages: [brisket, heroFire, buffet, privateParty, weddingTable, steak],
    ctaTitle: "Let's design your wood-fired menu.",
    definitiveKey: "woodFired",
    definitiveTopic: "Wood-Fired Catering",
  };
}

export function steakhouseConfig(o: ServiceTemplateOptions = {}): ServicePageConfig {
  const r = o.region;
  return {
    eyebrow: r ? `${r} Steakhouse Experience` : "Steakhouse Experience",
    title: r ? <>{o.regionShort} <span className="italic text-gold font-light">Luxury Steakhouse Dining</span> catering.</> : <>The chef-attended steakhouse buffet Experience... <span className="italic text-gold font-light">Brought To You.</span></>,
    subtitle: r
      ? `Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf & turf served under candlelight with polished service and unforgettable presentation across ${r}. Perfect for luxury weddings, corporate dinners, and private events.`
      : "Charcoal-grilled ribeye, New York strip, filet mignon, picanha, prime rib, salmon, and surf & turf served under candlelight with polished service and unforgettable presentation. Perfect for luxury weddings, corporate dinners, and private events.",
    heroImage: steak,
    intro: {
      heading: "A separate identity. A separate standard.",
      body: [
        "When the night calls for a true upscale steakhouse catering experience, our charcoal-grilled steakhouse experience menu is a different brand of catering altogether. Dark room. Candlelight. Hand-cut steaks, finished over live fire, plated and served with white-glove discipline.",
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
      heading: "Sample premium live-fire dining menu.",
      columns: [
        { title: "The Steaks", items: ["Center-cut ribeye", "New York strip", "Filet mignon", "Picanha, carved tableside", "Slow-roasted prime rib", "Surf & turf upgrade"] },
        { title: "From The Sea", items: ["Cedar-plank salmon", "Butter-poached lobster", "Jumbo shrimp cocktail", "Seared scallops"] },
        { title: "The Sides", items: ["Truffle mashed potatoes", "Creamed spinach", "Charred asparagus", "Roasted heirloom carrots", "Lobster mac and cheese"] },
      ],
    },
    galleryImages: [steak, weddingTable, corporate, buffet, heroFire, brisket],
    ctaTitle: "Plan a wood-fired steakhouse experience evening.",
    definitiveKey: "steakhouse",
    definitiveTopic: "Steakhouse Experience",
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
    heroImage: bartender,
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
    galleryImages: [bartender, weddingTable, corporate, privateParty],
    ctaTitle: "Design your bar program.",
    definitiveKey: "bartending",
    definitiveTopic: "Bartending & Bar Programs",
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
    definitiveKey: "rentals",
    definitiveTopic: "Event Rentals",
  };
}
