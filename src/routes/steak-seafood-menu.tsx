import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import steakhouseBackyard from "@/assets/steakhouse-backyard.png.asset.json";
import { PageHero, CTASection, SectionShell } from "@/components/site/Sections";

import antipastoKabob from "@/assets/dishes/antipasto-kabob.jpg";
import antipastoPlatter from "@/assets/dishes/antipasto-platter.jpg";
import caesarSalad from "@/assets/dishes/caesar-salad.jpg";
import houseSalad from "@/assets/dishes/house-salad.jpg";
import fruitVeggie from "@/assets/dishes/fruit-veggie-platter.jpg";
import bruschetta from "@/assets/dishes/bruschetta.jpg";
import teriyakiSkewer from "@/assets/dishes/teriyaki-chicken-skewer.jpg";
import shrimpSkewers from "@/assets/dishes/grilled-shrimp-skewers.jpg";
import sausageMushroom from "@/assets/dishes/sausage-mushroom-caps.jpg";
import baconScallops from "@/assets/dishes/bacon-wrapped-scallops.jpg";
import tenderloinCrostini from "@/assets/dishes/tenderloin-crostini.jpg";
import asparagusFeta from "@/assets/dishes/asparagus-feta.jpg";
import ribeyeImg from "@/assets/dishes/ribeye.jpg";
import nyStripImg from "@/assets/dishes/ny-strip.jpg";
import beefTenderloinImg from "@/assets/dishes/beef-tenderloin.jpg";
import filetMignonImg from "@/assets/dishes/filet-mignon.jpg";
import topSirloinImg from "@/assets/dishes/top-sirloin.jpg";
import primeRibImg from "@/assets/dishes/prime-rib.jpg";
import triTipImg from "@/assets/dishes/tri-tip.jpg";
import mahiMahiImg from "@/assets/dishes/mahi-mahi.jpg";
import snapperImg from "@/assets/dishes/snapper.jpg";
import lobsterImg from "@/assets/dishes/lobster-tails.jpg";
import salmonImg from "@/assets/dishes/salmon.jpg";
import grilledChickenImg from "@/assets/dishes/grilled-chicken.jpg";
import loadedMashedImg from "@/assets/dishes/loaded-mashed.jpg";
import garlicMashedImg from "@/assets/dishes/garlic-mashed.jpg";
import rosemaryRedsImg from "@/assets/dishes/rosemary-reds.jpg";
import bakedPotatoImg from "@/assets/dishes/baked-potato.jpg";
import greenBeansImg from "@/assets/dishes/green-beans.jpg";
import grilledAsparagusImg from "@/assets/dishes/grilled-asparagus.jpg";
import squashZucchiniImg from "@/assets/dishes/squash-zucchini.jpg";
import grilledCornImg from "@/assets/dishes/grilled-corn.jpg";
import roastedBroccoliImg from "@/assets/dishes/roasted-broccoli.jpg";
import macCheeseImg from "@/assets/dishes/mac-cheese.jpg";
import alfredoPenneImg from "@/assets/dishes/alfredo-penne.jpg";
import mushroomsOnionsImg from "@/assets/dishes/mushrooms-onions.jpg";
import cheesecakeBitesImg from "@/assets/dishes/cheesecake-bites.jpg";
import macaronsImg from "@/assets/dishes/macarons.jpg";
import chocolateCakeImg from "@/assets/dishes/chocolate-cake.jpg";
import cheesecakeImg from "@/assets/dishes/cheesecake.jpg";
import cakePopsImg from "@/assets/dishes/cake-pops.jpg";
import creamPuffsImg from "@/assets/dishes/cream-puffs.jpg";
import whitePetitFoursImg from "@/assets/dishes/white-petit-fours.jpg";
import tuxedoPetitFoursImg from "@/assets/dishes/tuxedo-petit-fours.jpg";
import coffeeStationImg from "@/assets/dishes/coffee-station.jpg";

type Dish = { name: string; body?: string; note?: string; img: string };

const cold: Dish[] = [
  { name: "Antipasto Kabob", body: "100% fresh, top quality. Black olives, mozzarella balls, marinated artichoke.", img: antipastoKabob },
  { name: "Meat & Cheese Antipasto Platter", body: "A curated assortment of spiced cheese and cured meats.", img: antipastoPlatter },
  { name: "Caesar Salad", body: "Freshly cut romaine, parmesan, caesar croutons. Creamy or vinaigrette caesar dressing.", img: caesarSalad },
  { name: "House Salad", body: "Green leaf lettuce, grape tomatoes, onions, cucumbers, shredded carrots. Choice of dressings.", img: houseSalad },
  { name: "Fresh Fruit & Veggie Platter", body: "An assortment of seasonal fruit and vegetables with ranch dip.", img: fruitVeggie },
  { name: "Bruschetta with Garlic Crostini", body: "Vine-ripe tomato, basil and garlic over toasted crostini.", img: bruschetta },
];

const warm: Dish[] = [
  { name: "Teriyaki Chicken & Pineapple Skewer", body: "Teriyaki-marinated chicken thigh with grilled pineapple chunks.", img: teriyakiSkewer },
  { name: "Grilled Shrimp Skewers", body: "Perfectly seasoned shrimp grilled on-site.", img: shrimpSkewers },
  { name: "Sausage-Filled Mushroom Caps", body: "Italian mushroom caps filled with pork sausage.", img: sausageMushroom },
  { name: "Bacon-Wrapped Scallops", body: "Apple-wood smoked bacon wrapped around a lightly grilled scallop.", img: baconScallops },
  { name: "Smoked Beef Tenderloin Crostini", body: "With goat cheese and house pesto.", img: tenderloinCrostini },
  { name: "Roasted Asparagus & Feta Salad", body: "Roasted asparagus, feta and grape tomatoes finished with lemon.", img: asparagusFeta },
];

const meats: Dish[] = [
  { name: "Ribeye Steak", body: "Rich marbling, juicy, tender, buttery — melt-in-your-mouth flavor.", img: ribeyeImg },
  { name: "New York Strip", body: "Cut from the short loin. Bold, beefy taste with the perfect balance of fat and lean.", img: nyStripImg },
  { name: "Beef Tenderloin", body: "The most tender cut of beef. Buttery texture, mild flavor, luxurious.", img: beefTenderloinImg },
  { name: "Filet Mignon", body: "Premium tenderloin cut, buttery and delicate.", note: "+ $10/steak", img: filetMignonImg },
  { name: "Top Sirloin (10 oz)", body: "Lean, flavorful, tender, with a rich beefy taste.", img: topSirloinImg },
  { name: "Smoked Prime Rib Roast", body: "Slow-smoked to perfection. Smoky crust, perfectly pink center, deep savory flavor.", img: primeRibImg },
  { name: "Beef Tri-Tip", body: "Triangular cut from the bottom sirloin. Savory crust, juicy interior, robust beefy flavor.", img: triTipImg },
  { name: "Grilled Mahi Mahi (8 oz)", body: "Firm, mild-flavored fish with a slightly sweet taste and flaky texture.", img: mahiMahiImg },
  { name: "Grilled Snapper (8 oz)", body: "Mild, slightly sweet, firm flaky white flesh.", img: snapperImg },
  { name: "Lobster Tails", body: "8 oz of rich, slightly sweet, succulent and buttery lobster.", note: "+ $20/serving", img: lobsterImg },
  { name: "Grilled Salmon (8 oz)", body: "Rich, buttery, slightly sweet. Smooth flaky texture.", img: salmonImg },
  { name: "Grilled Chicken Breast", body: "Juicy and tender. House marinade with herbs, spice and a subtle char.", img: grilledChickenImg },
];

const sides: Dish[] = [
  { name: "Loaded Red Mashed Potatoes", body: "Mashed reds with bacon, chives and cheddar.", img: loadedMashedImg },
  { name: "Garlic Mashed Potatoes", body: "Mashed Idaho potatoes with garlic and parsley.", img: garlicMashedImg },
  { name: "Rosemary Roasted Reds", body: "Pan-seared, roasted reds with fresh rosemary.", img: rosemaryRedsImg },
  { name: "Baked Potato", body: "Bacon, cheddar, sour cream, chives.", img: bakedPotatoImg },
  { name: "Fresh Whole Green Beans", body: "No can here.", img: greenBeansImg },
  { name: "Grilled Asparagus", body: "Lightly seasoned, brushed with natural butter, grilled to perfection.", img: grilledAsparagusImg },
  { name: "Grilled Squash & Zucchini", body: "Vegetable crunch with char from the grill.", img: squashZucchiniImg },
  { name: "Grilled Sweet Corn", body: "Steamed, then grilled on-site.", img: grilledCornImg },
  { name: "Roasted Broccoli", body: "A steakhouse staple.", img: roastedBroccoliImg },
  { name: "Macaroni & Cheese", body: "A meal within itself.", img: macCheeseImg },
  { name: "Alfredo Penne Pasta", body: "Our signature alfredo sauce will have you licking the plate.", img: alfredoPenneImg },
  { name: "Sautéed Mushrooms & Onions", body: "A great addition to any steak.", img: mushroomsOnionsImg },
];

const desserts: Dish[] = [
  { name: "Assorted Cheesecake Bites", body: "Fluffy bites — natural, raspberry, chocolate chip.", img: cheesecakeBitesImg },
  { name: "French Macaron Assortment", body: "Raspberry, chocolate, vanilla, pistachio, coffee, lemon.", img: macaronsImg },
  { name: "Chocolate Cake", body: "Layered, moist chocolate cake.", img: chocolateCakeImg },
  { name: "Cheesecake", body: "Classic, rich and creamy.", img: cheesecakeImg },
  { name: "Assorted Cake Pops", body: "Strawberry & pistachio · mocha coffee with cookie crumble · milk chocolate with coconut.", img: cakePopsImg },
  { name: "Cream Puffs", body: "French choux pastry balls filled with vanilla cream.", img: creamPuffsImg },
  { name: "White Petit Fours", body: "Vanilla cake, vanilla butter crème, apricot jam, Swiss crème exterior.", img: whitePetitFoursImg },
  { name: "Tuxedo Petit Fours", body: "Royal chocolate and vanilla butter crème, chocolate or Swiss crème coating.", img: tuxedoPetitFoursImg },
  { name: "Coffee Station", body: "Creamer, sugar, Splenda, cups, stirs and straws included.", img: coffeeStationImg },
];

const drinks = [
  "Sweet Tea", "Peach Tea", "Unsweet Tea", "Lemon Tea",
  "Lemonade", "Strawberry-Mint Lemonade", "Blueberry Lemonade", "Water",
];

const upcharges = [
  { t: "Additional Protein Selection", b: "Add a fourth meat option for the table.", price: "+ $32 / serving" },
  { t: "Filet Mignon Upgrade", b: "Swap any steak selection for filet mignon.", price: "+ $10 / steak" },
  { t: "Lobster Tails", b: "Add 8 oz cold-water lobster tail to any plate.", price: "+ $20 / serving" },
];

export const Route = createFileRoute("/steak-seafood-menu")({
  head: () => ({
    meta: [
      { title: "Steak & Seafood Catering Menu — Phoenix & San Diego | Qfire" },
      { name: "description", content: "A five-course steakhouse catering menu — ribeye, filet, prime rib, lobster, salmon and more — grilled live at your event. Premium plated steak dinner catering in Phoenix Metro and San Diego County." },
      { property: "og:title", content: "Steak & Seafood Menu — Qfire Catering" },
      { property: "og:description", content: "Five-course steakhouse catering: cold starter, warm hors d'oeuvre, choose-3 steaks/seafood, choose-3 sides, dessert and drinks. Live on-site grilling." },
      { property: "og:url", content: "/steak-seafood-menu" },
      { property: "og:image", content: steakhouseBackyard.url },
    ],
    links: [{ rel: "canonical", href: "/steak-seafood-menu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Qfire Steak & Seafood Catering Menu",
          inLanguage: "en-US",
          hasMenuSection: [
            { "@type": "MenuSection", name: "First Course — Cold Starters", hasMenuItem: cold.map((d) => ({ "@type": "MenuItem", name: d.name, description: d.body })) },
            { "@type": "MenuSection", name: "Second Course — Warm Hors d'oeuvres", hasMenuItem: warm.map((d) => ({ "@type": "MenuItem", name: d.name, description: d.body })) },
            { "@type": "MenuSection", name: "Third Course — Dinner / Meats & Seafood", hasMenuItem: meats.map((d) => ({ "@type": "MenuItem", name: d.name, description: d.body })) },
            { "@type": "MenuSection", name: "Sides", hasMenuItem: sides.map((d) => ({ "@type": "MenuItem", name: d.name, description: d.body })) },
            { "@type": "MenuSection", name: "Dessert", hasMenuItem: desserts.map((d) => ({ "@type": "MenuItem", name: d.name, description: d.body })) },
            { "@type": "MenuSection", name: "Drinks", hasMenuItem: drinks.map((d) => ({ "@type": "MenuItem", name: d })) },
          ],
        }),
      },
    ],
  }),
  component: SteakSeafoodMenuPage,
});

function DishCard({ d }: { d: Dish }) {
  return (
    <article className="group bg-ink/60 border border-white/5 hover:border-gold/30 transition-colors duration-500 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={d.img}
          alt={d.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent pointer-events-none" />
      </div>
      <div className="p-6 lg:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-bone text-xl lg:text-2xl leading-tight">{d.name}</h3>
          {d.note && <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold whitespace-nowrap">{d.note}</span>}
        </div>
        {d.body && <p className="mt-3 text-sm text-bone/65 leading-relaxed">{d.body}</p>}
      </div>
    </article>
  );
}

function Course({
  number, eyebrow, title, sub, items,
}: { number: string; eyebrow: string; title: string; sub?: string; items: Dish[] }) {
  return (
    <section className="py-20 lg:py-28 border-t border-white/5">
      <div className="container-luxe">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-gold/60 text-[0.7rem] tracking-[0.4em]">{number}</span>
            <span className="h-px flex-1 bg-gold/20" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="heading-lg text-bone">{title}</h2>
          {sub && <p className="mt-5 text-bone/65 text-base lg:text-lg leading-relaxed">{sub}</p>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {items.map((d) => <DishCard key={d.name} d={d} />)}
        </div>
      </div>
    </section>
  );
}

function SteakSeafoodMenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Steakhouse Catering"
        title="The Steak & Seafood Menu"
        subtitle="A five-course steakhouse experience — cold starter, warm hors d'oeuvre, your choice of premium steaks and seafood, sides, dessert and drinks. Grilled live at your event."
        image={steakhouseBackyard.url}
      >
        <Link to="/quote" className="btn-primary">Request Your Quote <ArrowRight className="size-4" /></Link>
        <a href="#menu" className="btn-ghost">View the Menu</a>
      </PageHero>

      <SectionShell
        eyebrow="How It Works"
        title="Per-guest, all-inclusive, brought to you."
        intro="Every Qfire steak & seafood event is priced per guest and includes the full five-course menu, live on-site grilling by Chef Terry's team, and white-glove service from setup to breakdown. China, glassware and bar service available as add-ons."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {upcharges.map((u) => (
            <div key={u.t} className="bg-ink/60 border border-white/5 p-8">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4">{u.price}</div>
              <h3 className="font-display text-bone text-xl mb-3">{u.t}</h3>
              <p className="text-sm text-bone/65 leading-relaxed">{u.b}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-bone/55 italic">
          Per-person pricing is built around your guest count, venue and menu selections. Request a quote for current rates — we respond within 24 hours.
        </p>
      </SectionShell>

      <div id="menu" />

      <Course
        number="01"
        eyebrow="Choose 1"
        title="First Course — Cold Starters"
        sub="A bright, elegant opening before the grill fires up."
        items={cold}
      />
      <Course
        number="02"
        eyebrow="Choose 1"
        title="Second Course — Warm Hors d'oeuvres"
        sub="Tray-passed or stationed, finished hot off the fire."
        items={warm}
      />
      <Course
        number="03"
        eyebrow="Choose 3"
        title="Third Course — Dinner: Steaks & Seafood"
        sub="One selection per guest. Minimum 3 servings per selection. Additional protein selections + $32/serving."
        items={meats}
      />
      <Course
        number="04"
        eyebrow="Choose 3"
        title="Sides"
        sub="Classic steakhouse accompaniments, scratch-made for your event."
        items={sides}
      />
      <Course
        number="05"
        eyebrow="Choose 2"
        title="Final Course — Dessert"
        sub="One serving per guest. Coffee station available."
        items={desserts}
      />

      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="container-luxe">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-gold/60 text-[0.7rem] tracking-[0.4em]">06</span>
              <span className="h-px flex-1 bg-gold/20" />
              <span className="eyebrow">Choose 2</span>
            </div>
            <h2 className="heading-lg text-bone">Drinks</h2>
            <p className="mt-5 text-bone/65 leading-relaxed">Refreshing non-alcoholic options served from elegant dispensers. Full bar and bartending service available as an add-on.</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {drinks.map((name) => (
              <li key={name} className="bg-ink p-6 lg:p-7 text-center">
                <span className="font-display text-bone text-lg lg:text-xl">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Bring the steakhouse to your event."
        subtitle="Tell us your date, guest count and venue. We'll send a custom proposal within 24 hours."
      />
    </>
  );
}
