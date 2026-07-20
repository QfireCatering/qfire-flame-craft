import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { woodFiredConfig } from "@/lib/service-configs";

export const Route = createFileRoute("/wood-fired")({
  head: () => ({
    meta: [
      { title: "Premium Wood-Fired & Live-Fire BBQ Catering | Brisket, Tri-Tip, Charcoal Grilling — Phoenix & San Diego | Qfire" },
      { name: "description", content: "Premium wood-fired and live-fire BBQ catering by Food Network veteran Chef Terry Matthews — The BBQ Daddy (BBQ Brawl, Cutthroat Kitchen, Camp Cutthroat). 13+ years, 2,500+ events. Oak, mesquite and pecan-smoked brisket, tri-tip, pulled pork, ribs, hot links and live-fire carving and charcoal grilling stations for luxury weddings, corporate events, private parties, backyard BBQs, holiday parties and graduations across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, San Diego, La Jolla, Carlsbad, Del Mar and Encinitas." },
      { property: "og:title", content: "Premium Wood-Fired & Live-Fire BBQ Catering — Qfire | Arizona & San Diego's Premium BBQ Caterer" },
      { property: "og:description", content: "Food Network veteran Chef Terry Matthews. Oak, mesquite, pecan. Slow-smoked brisket, tri-tip, live-fire charcoal grilling and carving stations. Luxury BBQ catering across Phoenix Metro and San Diego County." },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/wood-fired" },
      { name: "keywords", content: "premium BBQ catering, luxury BBQ catering, live fire catering, outdoor grilling catering, charcoal grilling catering, wood fired catering, BBQ catering near me, wood-fire catering, BBQ catering Phoenix, BBQ catering Scottsdale, BBQ catering San Diego, wedding BBQ catering, corporate BBQ catering, backyard BBQ catering, brisket catering, tri-tip catering, pulled pork catering, live-fire catering, on-site BBQ catering, smoked meat catering, BBQ caterer Phoenix, BBQ caterer San Diego, holiday BBQ catering, graduation BBQ catering, birthday BBQ catering, outdoor wedding grilling" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/wood-fired" }],
  }),
  component: () => <ServicePage config={woodFiredConfig()} />,
});
