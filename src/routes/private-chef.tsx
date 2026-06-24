import { createFileRoute } from "@tanstack/react-router";
import type { ServicePageConfig } from "@/components/site/ServicePage";
import { ServicePage } from "@/components/site/ServicePage";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";
import steak from "@/assets/steak.jpg";
import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";
const weddingTable = weddingCoupleAsset.url;
import brisket from "@/assets/brisket.jpg";

export const Route = createFileRoute("/private-chef")({
  head: () => ({
    meta: [
      { title: "Private Chef Experience — Qfire Catering" },
      { name: "description", content: "Intimate multi-course chef's dinners in your home or private venue." },
      { property: "og:title", content: "Private Chef — Qfire" },
      { property: "og:url", content: "/private-chef" },
    ],
    links: [{ rel: "canonical", href: "/private-chef" }],
  }),
  component: () => <ServicePage config={config} />,
});

const config: ServicePageConfig = {
  eyebrow: "Private Chef",
  title: <>A chef's table, <span className="italic text-gold font-light">in your dining room.</span></>,
  subtitle: "Intimate multi-course dinners for 8 to 40 guests. Chef Terry and a small team, plated for you.",
  heroImage: chefTerry.url,
  intro: {
    heading: "Personal, plated, unforgettable.",
    body: [
      "An evening curated by Chef Terry himself. Custom menu. Pacing built around the conversation. Service that disappears between courses.",
      "Birthdays, anniversaries, executive dinners and quiet celebrations — built for the table that matters most.",
    ],
  },
  highlights: [
    { title: "Custom Multi-Course Menu", body: "5–9 course tasting menus, designed for your guests." },
    { title: "Chef Terry On-Site", body: "Available for select dates as the chef in residence." },
    { title: "Wine Pairings", body: "Sommelier-curated pairings, optional." },
    { title: "Full Service Team", body: "Captain, server, and kitchen — discreet, polished, attentive." },
    { title: "Your Home, Our Kitchen", body: "We bring everything. You bring the guests." },
    { title: "Dietary Tailoring", body: "Every guest, every preference, every allergy — accommodated." },
  ],
  galleryImages: [chefTerry.url, steak, weddingTable, brisket],
};
