export type RegionKey = "phoenix" | "san-diego";

export interface RegionData {
  key: RegionKey;
  name: string;
  shortName: string;
  metro: string;
  state: string;
  tagline: string;
  cities: string[];
  description: string;
  heroImage: string;
  venues: { name: string; city: string; blurb: string }[];
}

export const regions: Record<RegionKey, RegionData> = {
  phoenix: {
    key: "phoenix",
    name: "Phoenix Metro",
    shortName: "Phoenix",
    metro: "Phoenix Metro",
    state: "Arizona",
    tagline: "Wood-fired catering across the Valley of the Sun.",
    cities: [
      "Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert",
      "Glendale", "Surprise", "Avondale", "Goodyear", "Peoria",
    ],
    description:
      "Serving Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Glendale, Surprise, Avondale, Goodyear, Peoria and surrounding communities.",
    heroImage: "phoenix",
    venues: [
      { name: "The Wright House", city: "Mesa", blurb: "Garden weddings with covered courtyard." },
      { name: "El Chorro", city: "Paradise Valley", blurb: "Historic desert estate at Camelback Mountain." },
      { name: "Sassi", city: "Scottsdale", blurb: "Tuscan-inspired venue with sweeping desert views." },
      { name: "Desert Foothills", city: "Cave Creek", blurb: "Open-air ceremonies under the Sonoran sky." },
      { name: "The Paseo", city: "Apache Junction", blurb: "Superstition Mountain backdrop." },
      { name: "Venue at the Grove", city: "Phoenix", blurb: "Historic citrus grove estate." },
    ],
  },
  "san-diego": {
    key: "san-diego",
    name: "San Diego County",
    shortName: "San Diego",
    metro: "San Diego County",
    state: "California",
    tagline: "Coastal wood-fired catering across San Diego County.",
    cities: [
      "San Diego", "Carlsbad", "Encinitas", "Del Mar", "Rancho Santa Fe",
      "Poway", "La Jolla", "Escondido", "Vista", "Oceanside",
    ],
    description:
      "Serving San Diego, Carlsbad, Encinitas, Del Mar, Rancho Santa Fe, Poway, La Jolla, Escondido, Vista, Oceanside and surrounding communities.",
    heroImage: "san-diego",
    venues: [
      { name: "Lot 8", city: "Escondido", blurb: "Industrial-luxe winery weddings." },
      { name: "The Crossings", city: "Carlsbad", blurb: "Clifftop ocean views." },
      { name: "Estancia La Jolla", city: "La Jolla", blurb: "Hacienda-style coastal resort." },
      { name: "Cape Rey", city: "Carlsbad", blurb: "Beachfront receptions." },
      { name: "Rancho Bernardo Inn", city: "San Diego", blurb: "Classic California estate." },
      { name: "The Inn at Rancho Santa Fe", city: "Rancho Santa Fe", blurb: "Hidden-garden ceremonies." },
    ],
  },
};

export const services = [
  { slug: "weddings", label: "Wedding Catering", short: "Weddings" },
  { slug: "corporate", label: "Corporate Catering", short: "Corporate" },
  { slug: "private-parties", label: "Private Party Catering", short: "Private Parties" },
  { slug: "wood-fired", label: "Wood-Fired Catering", short: "Wood-Fired" },
  { slug: "steakhouse", label: "Signature Live Fire Steakhouse Catering", short: "Steakhouse" },
  { slug: "bartending", label: "Bartending Services", short: "Bartending" },
] as const;

export const extraPages = [
  { slug: "faq", label: "FAQ" },
  { slug: "gallery", label: "Gallery" },
  { slug: "reviews", label: "Reviews" },
  { slug: "blog", label: "Blog" },
  { slug: "venues", label: "Venue Pages" },
] as const;

export const allRegionSlugs = [
  ...services.map(s => s.slug),
  ...extraPages.map(p => p.slug),
] as string[];
