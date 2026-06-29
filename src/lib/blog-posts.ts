import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";
import corporateAsset from "@/assets/corporate-catering.png.asset.json";
import brisket from "@/assets/brisket.jpg";
import steak from "@/assets/steak.jpg";
import privateParty from "@/assets/private-party.jpg";
import buffet from "@/assets/buffet.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  isoDate: string;
  readMinutes: number;
  excerpt: string;
  image: string;
  body: { h2: string; p: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wedding-service-style-plated-buffet-stations",
    title: "Plated, buffet, or stations? Choosing your wedding service style.",
    category: "Wedding Tips",
    date: "March 2026",
    isoDate: "2026-03-04",
    readMinutes: 6,
    excerpt:
      "The format you pick decides the pace of your wedding more than your DJ does. Here is how to choose without overspending or starving your guests.",
    image: weddingCoupleAsset.url,
    body: [
      {
        h2: "Start with the room, not the menu",
        p: [
          "Before you taste a single bite, walk the venue. A plated dinner needs a clear path for every server, a buffet needs a forty-foot line that does not block the dance floor, and stations need power, water, and crowd flow in three directions.",
          "If the venue cannot give you that, the format chooses itself. We have rescued more than one wedding by switching from plated to family-style at the rehearsal because the kitchen was a hundred feet from the seats.",
        ],
      },
      {
        h2: "Plated: the pace setter",
        p: [
          "Plated dinners look the most expensive because they cost the most labor. Expect one server per ten guests, a captain, and a dedicated runner. The upside is rhythm — courses land on time, toasts hit on cue, and dancing starts when you want it to.",
          "Pick plated when the guest count is under 140, when there is a head-table program, or when the parents care more about the photo of the room than the line at the buffet.",
        ],
      },
      {
        h2: "Buffet and family-style: the food-first move",
        p: [
          "A buffet wins on variety and second servings. Family-style — the same food on platters at the table — wins on warmth. Both let our wood-fired brisket, prime rib, and sides hit the table at their peak instead of waiting on a runner.",
          "For 150 to 300 guests this is almost always our recommendation. Cost lands 18 to 25 percent below plated and the room eats more, not less.",
        ],
      },
      {
        h2: "Stations: the experience play",
        p: [
          "Stations turn dinner into a walk-through. A carving station with prime rib, a taco bar with mesquite chicken, a raw bar — each one is its own moment your guests will photograph.",
          "Pick stations for cocktail-style receptions, for venues with multiple rooms, or when you want guests mingling instead of seated. Budget for two stations per 75 guests so no line ever exceeds five minutes.",
        ],
      },
      {
        h2: "The honest cost comparison",
        p: [
          "Plated runs $115 to $185 per guest with our team. Family-style runs $85 to $140. A two-station cocktail reception runs $70 to $110. The food cost is nearly identical — the spread is labor, rentals, and china.",
          "Tell us your guest count, venue, and timeline. We will tell you the format that fits and the one we would actually book if it were our own wedding.",
        ],
      },
    ],
  },
  {
    slug: "brisket-on-your-wedding-menu",
    title: "Why brisket belongs on your wedding menu (and how to serve it right).",
    category: "Food Inspiration",
    date: "February 2026",
    isoDate: "2026-02-18",
    readMinutes: 5,
    excerpt:
      "Done wrong, brisket is the dry sandwich at a backyard cookout. Done right, it is the most photographed plate at your wedding.",
    image: brisket,
    body: [
      {
        h2: "The case for brisket",
        p: [
          "Brisket is the one protein your guests cannot make at home. A 14-hour low-and-slow cook over oak and pecan produces a bark and a smoke ring that nobody forgets — and unlike filet, the second slice is as good as the first.",
          "It also feeds a wedding economically. A whole packer brisket serves 18 to 22 plated portions at a food cost roughly 40 percent below prime ribeye.",
        ],
      },
      {
        h2: "How to plate it like a Signature Live Fire Steakhouse Catering",
        p: [
          "Slice against the grain at pencil thickness. Fan three slices off-center on warm white china. Add a smear of horseradish creme, a pinch of finishing salt, and a microgreen — that is it. No sauce drowning the bark.",
          "For family-style, carve at the table on a maple board. The smell hits the room before the first fork.",
        ],
      },
      {
        h2: "The sides that earn the spot",
        p: [
          "Skip the gas-station mac and cheese. Our wedding brisket service goes with charred-corn elote, smoked-gouda potato puree, and a citrus-fennel slaw that cuts the richness. Three sides, not five.",
        ],
      },
      {
        h2: "What to ask any caterer before you book",
        p: [
          "Ask the wood. Oak and pecan, never mesquite for long cooks. Ask the hold time — brisket pulled at 203F should rest at 150F for at least two hours, never reheated from a fridge. And ask to see a slice photo from the last wedding, not a stock image.",
        ],
      },
    ],
  },
  {
    slug: "investor-dinner-playbook",
    title: "The investor dinner playbook: hospitality that closes the room.",
    category: "Corporate Catering",
    date: "February 2026",
    isoDate: "2026-02-05",
    readMinutes: 6,
    excerpt:
      "When the term sheet is on the table, the food is the second-most-important thing in the room. Here is how we run private dinners for founders and funds.",
    image: corporateAsset.url,
    body: [
      {
        h2: "The room is the deal",
        p: [
          "Investor dinners are not catered events. They are negotiations with wine pairings. Every service decision — seating, pacing, plate clearing — either keeps the conversation alive or breaks it.",
          "We staff one captain and one server per six guests at this tier. The captain reads the room: clear when conversation pauses, hold when it accelerates.",
        ],
      },
      {
        h2: "Menu architecture for serious conversations",
        p: [
          "Three courses, not five. A shared crudo or charcuterie to break the ice, a Signature Live Fire Steakhouse Catering main (filet, ribeye, or surf and turf), and a single dessert with espresso. Nothing that requires a fork-and-knife performance while someone is mid-pitch.",
          "Pre-select the menu. Choice is great for weddings and terrible for term sheets.",
        ],
      },
      {
        h2: "Wine and bar",
        p: [
          "Two reds, two whites, one sparkling, and a small spirits selection. We carry a curated cellar and can pair to the menu, or pour the host's own bottles with no corkage games.",
        ],
      },
      {
        h2: "The discreet things that matter",
        p: [
          "Phones face down by agreement, not enforcement. Servers who do not interrupt. A printed menu at each seat with the host's logo at the top. A car waiting outside at 9:45.",
          "We have run dinners that ended with handshakes worth eight figures. The food was excellent. The room was perfect. That is the job.",
        ],
      },
    ],
  },
  {
    slug: "premium steakhouse catering-at-home-private-dinners",
    title: "live-fire steakhouse experience at home: a guide to upscale catering for private dinners.",
    category: "Planning Guides",
    date: "January 2026",
    isoDate: "2026-01-22",
    readMinutes: 5,
    excerpt:
      "A Mastro's-caliber dinner in your dining room is not a fantasy. It is a logistics exercise — and we have run it a few hundred times.",
    image: steak,
    body: [
      {
        h2: "What a private luxury steakhouse dining dinner actually requires",
        p: [
          "A workable kitchen counter, 220V if you want a flat-top brought in, and a clear path from prep to the dining table. Most Phoenix and San Diego homes already qualify.",
          "For groups of 8 to 24, we bring everything else: china, linens, glassware, the chef, the captain, and the proteins.",
        ],
      },
      {
        h2: "The menu we recommend",
        p: [
          "A passed canape, a chilled first course (oysters or crudo), a chef-attended steakhouse buffet main course (a 16oz bone-in ribeye, a 10oz filet, or a 24oz porterhouse for two), three shared sides, and a single dessert.",
          "Add wine pairings or let us coordinate with your own cellar.",
        ],
      },
      {
        h2: "Pricing reality",
        p: [
          "Plan on $185 to $285 per guest, all in, depending on the protein selection and bar. That includes service, rentals, gratuity guidance, and a kitchen left cleaner than we found it.",
        ],
      },
    ],
  },
  {
    slug: "backyard-luxury-private-parties",
    title: "Backyard luxury: turning your home into the venue of the year.",
    category: "Private Party Ideas",
    date: "January 2026",
    isoDate: "2026-01-09",
    readMinutes: 5,
    excerpt:
      "A backyard with the right lighting, the right food, and the right service beats any ballroom in Phoenix or San Diego. Here is the playbook.",
    image: privateParty,
    body: [
      {
        h2: "The three layers of a luxury backyard",
        p: [
          "Layer one is the food: a live wood-fire grill or a chef's station that smells like the event from the curb. Layer two is the lighting: warm bistro strands at 12 feet, candles on every surface, no overhead floods. Layer three is the service: black-tie staff, polished trays, no red Solo cups.",
        ],
      },
      {
        h2: "Sizing the event to the yard",
        p: [
          "Plan on 12 square feet per standing guest, 18 for seated. A 1,200 sq ft yard comfortably hosts 65 standing or 45 seated with a dance floor.",
        ],
      },
      {
        h2: "What we bring",
        p: [
          "Grills, chafers, china, glassware, bar, ice, lighting partners, rental coordination, and a permitting consult if your city requires one. You buy the wine and pick the playlist.",
        ],
      },
    ],
  },
  {
    slug: "favorite-outdoor-venues-phoenix-san-diego",
    title: "Our favorite outdoor venues across Phoenix Metro and San Diego County.",
    category: "Venue Spotlights",
    date: "December 2025",
    isoDate: "2025-12-12",
    readMinutes: 7,
    excerpt:
      "Six venues we love working at — three in the Valley, three by the coast — and what makes each one a great fit for a wood-fired wedding.",
    image: buffet,
    body: [
      {
        h2: "Phoenix Metro",
        p: [
          "The Paseo in Apache Junction: desert canyon backdrop, generous kitchen, and a ceremony lawn that handles 250 without crowding. Perfect for fall and spring weddings.",
          "The Wright House in Mesa: tented courtyard, mature trees, and the kind of cobblestone paths that photograph at golden hour. Plated dinners shine here.",
          "Private estates in Paradise Valley and North Scottsdale: we cater more of these than any single venue. If you have the property, we have the kit.",
        ],
      },
      {
        h2: "San Diego County",
        p: [
          "Lot 8 in San Diego: industrial-chic with sweeping bay views. Stations and cocktail receptions are the play here.",
          "The Inn at Rancho Santa Fe: classic California elegance, deep lawns, and a kitchen that lets us run hot food fast. Great for 150 to 220 guest weddings.",
          "Private estates in La Jolla, Del Mar, and Rancho Santa Fe: backyard luxury at its highest level. Bring us the property, we will bring everything else.",
        ],
      },
      {
        h2: "How we pick",
        p: [
          "We look at three things: kitchen access, guest flow, and power. A breathtaking view does not matter if the brisket has to walk a quarter mile to the table.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
