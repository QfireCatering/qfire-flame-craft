import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import steakhouseBackyard from "@/assets/steakhouse-backyard.png.asset.json";
import phoenixHeroBg from "@/assets/phoenix-hero-bg.png.asset.json";
import bourbonSteakTips from "@/assets/dishes/bourbon-glazed-steak-tips.png.asset.json";
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
import drinkChoiceImg from "@/assets/dishes/drink-choice.avif";

type Dish = { name: string; body?: string; note?: string; img: string };

const cold: Dish[] = [
  { name: "Antipasto Kabob", body: "100% fresh, top quality. Black olives, mozzarella balls, marinated artichoke.", img: antipastoKabob },
  { name: "Antipasto Charcuterie Platter", body: "A curated assortment of spiced cheese and cured meats.", img: antipastoPlatter },
  { name: "Caesar Salad", body: "Freshly cut romaine, parmesan, caesar croutons. Creamy or vinaigrette caesar dressing.", img: caesarSalad },
  { name: "House Salad", body: "Green leaf lettuce, grape tomatoes, onions, cucumbers, shredded carrots. Choice of dressings.", img: houseSalad },
  { name: "Fresh Fruit & Veggie Platter", body: "An assortment of seasonal fruit and vegetables with ranch dip.", img: fruitVeggie },
  { name: "Bruschetta with Garlic Crostini", body: "Vine-ripe tomato, basil and garlic over toasted crostini.", img: bruschetta },
  { name: "Roasted Asparagus & Feta Salad", body: "Roasted asparagus, feta and grape tomatoes finished with lemon.", img: asparagusFeta },
];

const warm: Dish[] = [
  { name: "Teriyaki Chicken & Pineapple Skewer", body: "Teriyaki-marinated chicken thigh with grilled pineapple chunks.", img: teriyakiSkewer },
  { name: "Grilled Shrimp Skewers", body: "Perfectly seasoned shrimp grilled on-site.", img: shrimpSkewers },
  { name: "Sausage-Filled Mushroom Caps", body: "Italian mushroom caps filled with pork sausage.", img: sausageMushroom },
  { name: "Bacon-Wrapped Scallops", body: "Apple-wood smoked bacon wrapped around a lightly grilled scallop.", img: baconScallops },
  { name: "Smoked Beef Tenderloin Crostini", body: "With goat cheese and house pesto.", img: tenderloinCrostini },
  { name: "Bourbon Glazed Steak Tips", body: "Char-grilled sirloin or tri-tip. Bourbon glaze. Garlic butter finish.", img: bourbonSteakTips.url },
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
      { title: "Phoenix Metro Steak & Seafood Catering Menu | Qfire Catering" },
      { name: "description", content: "Phoenix Metro's premier five-course steakhouse catering menu — ribeye, filet mignon, prime rib, lobster, salmon and more — grilled live at your Phoenix, Scottsdale, Gilbert, Mesa, Tempe, Chandler, Glendale, Peoria, Paradise Valley, Cave Creek, Fountain Hills or Ahwatukee event. Premium plated steak dinner catering throughout the Phoenix Metro area." },
      { property: "og:title", content: "Phoenix Metro Steak & Seafood Catering Menu | Qfire Catering" },
      { property: "og:description", content: "Five-course steakhouse catering in Phoenix Metro: cold starter, warm hors d'oeuvre, choose-3 steaks/seafood, choose-3 sides, dessert and drinks. Live on-site grilling for weddings, corporate events and private parties across Phoenix, Scottsdale, Gilbert, Mesa and Tempe." },
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
          name: "Qfire Steak & Seafood Catering Menu — Phoenix Metro",
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
        eyebrow="Phoenix Metro Steakhouse Catering"
        title={<>The Phoenix Metro<br />Steak & Seafood Menu</>}
        subtitle="A five-course steakhouse experience — cold starter, warm hors d'oeuvre, your choice of premium steaks and seafood, sides, dessert and drinks. Grilled live at your Phoenix Metro event."
        image={steakhouseBackyard.url}
      >
        <div className="w-full flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border-2 border-gold/60 bg-gold/5">
            <span className="w-2.5 h-2.5 bg-gold rotate-45" />
            <span className="font-sans text-[0.7rem] font-semibold tracking-[0.35em] uppercase text-gold">Phoenix Metro Exclusive</span>
            <span className="w-2.5 h-2.5 bg-gold rotate-45" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/quote" className="btn-primary">Request Your Phoenix Quote <ArrowRight className="size-4" /></Link>
            <a href="#menu" className="btn-ghost">View the Phoenix Menu</a>
          </div>
        </div>
      </PageHero>

      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="container-luxe max-w-4xl">
          <p className="eyebrow mb-5">The Experience</p>
          <h2 className="heading-lg text-bone mb-6">The Surf & Turf Steakhouse Experience</h2>
          <p className="text-xl lg:text-2xl text-bone/80 font-display leading-relaxed mb-8">
            More Than Catering. A Private Steakhouse Experience Created Exclusively for Your Guests.
          </p>
          <div className="space-y-6 text-bone/70 text-base lg:text-lg leading-relaxed">
            <p>If you're looking for something beyond the traditional buffet in the Phoenix Metro area — from downtown Phoenix to Scottsdale, Gilbert, Mesa, Tempe, Chandler, Glendale, Peoria, Paradise Valley, Cave Creek and beyond — this is where our most discerning clients naturally gravitate.</p>
            <p>Our Phoenix Metro Surf & Turf Steakhouse Experience combines the energy of live-fire cooking with the elegance of fine dining — bringing the atmosphere of an upscale steakhouse directly to your Phoenix, Scottsdale, Gilbert, Mesa or Tempe wedding, corporate event, or private celebration.</p>
            <p>From Ahwatukee to Anthem, Carefree to Queen Creek, we bring restaurant-quality steakhouse catering to every corner of the Phoenix Metro. This isn't just dinner. It's the experience your guests will remember long after the last bite.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="container-luxe">
          <h3 className="heading-md text-bone mb-16 text-center">Included With Every Steakhouse Experience</h3>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="text-3xl mb-5">🔥</div>
              <h4 className="font-display text-bone text-xl lg:text-2xl mb-4">Live Charcoal Grill Master</h4>
              <p className="text-bone/65 leading-relaxed">Your own professional Grill Master prepares each premium selection over a live charcoal fire in front of your guests.</p>
              <p className="text-bone/65 leading-relaxed mt-3">The aroma, the sound of the sizzling steaks, and the visual presentation become part of the entertainment—creating an interactive dining experience that simply can't be duplicated in a traditional kitchen.</p>
            </div>
            <div>
              <div className="text-3xl mb-5">🍽</div>
              <h4 className="font-display text-bone text-xl lg:text-2xl mb-4">Luxury Tableware & Elegant Presentation</h4>
              <p className="text-bone/65 leading-relaxed mb-3">Every detail has been thoughtfully selected to create a refined dining atmosphere.</p>
              <p className="text-bone/65 leading-relaxed mb-3">Included:</p>
              <ul className="space-y-2 text-bone/65">
                <li>• Premium four-piece dinnerware</li>
                <li>• Polished silver flatware</li>
                <li>• Cloth napkins</li>
                <li>• Elegant glassware</li>
                <li>• Professional buffet décor and presentation</li>
              </ul>
              <p className="text-bone/65 leading-relaxed mt-3">Everything arrives beautifully coordinated so your event feels polished, sophisticated, and effortlessly upscale.</p>
            </div>
            <div>
              <div className="text-3xl mb-5">🥩</div>
              <h4 className="font-display text-bone text-xl lg:text-2xl mb-4">Your Guests Will Enjoy</h4>
              <div className="space-y-5 text-bone/65 leading-relaxed">
                <div>
                  <p className="font-display text-bone text-lg mb-1">Chilled Starter</p>
                  <p>Begin the evening with a refreshing gourmet appetizer designed to welcome guests as they mingle and settle into the celebration.</p>
                </div>
                <div>
                  <p className="font-display text-bone text-lg mb-1">Chef-Crafted Hot Appetizer</p>
                  <p>A warm, handcrafted appetizer served fresh to build anticipation and set the tone for an unforgettable dining experience.</p>
                </div>
                <div>
                  <p className="font-display text-bone text-lg mb-1">Signature Surf & Turf Entrée</p>
                  <p>Indulge in three premium proteins expertly prepared over live charcoal alongside three carefully selected gourmet sides designed to complement every bite.</p>
                  <p className="mt-2">Every plate is crafted to deliver the flavor, presentation, and quality you'd expect from a high-end steakhouse.</p>
                </div>
                <div>
                  <p className="font-display text-bone text-lg mb-1">Gourmet Desserts</p>
                  <p>Choose two handcrafted desserts from our premium collection—the perfect ending to an unforgettable meal and the course guests almost always come back for.</p>
                </div>
                <div>
                  <p className="font-display text-bone text-lg mb-1">Premium Beverage Service</p>
                  <p>Two refreshing non-alcoholic beverage selections are professionally presented, continuously stocked, and refreshed throughout dinner so your guests never have to wait.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="container-luxe">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-3xl mb-5">✨</div>
            <p className="eyebrow justify-center mb-6">Phoenix Metro Pricing</p>
            <h3 className="heading-md text-bone mb-4">Choose the Dining Experience That Fits Your Phoenix Metro Event</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-ink/60 border border-white/5 p-8 lg:p-10 flex flex-col">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-6">Buffet Style</div>
              <div className="font-display text-bone text-4xl lg:text-5xl mb-2">$74</div>
              <div className="text-bone/50 text-sm mb-8">per guest</div>
              <h4 className="font-display text-bone text-xl mb-3">Full-Service Buffet Experience</h4>
              <p className="text-bone/65 leading-relaxed mb-6 flex-1">Elegant. Efficient. Crowd favorite. Guests enjoy the freedom to choose exactly what they want while our professional team manages every detail—from setup and presentation to replenishment and cleanup.</p>
              <p className="text-sm text-bone/50">Perfect for couples and hosts who want an upscale experience with excellent guest flow.</p>
            </div>
            <div className="bg-ink/60 border border-white/5 p-8 lg:p-10 flex flex-col">
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-6">Family Style</div>
              <div className="font-display text-bone text-4xl lg:text-5xl mb-2">$89</div>
              <div className="text-bone/50 text-sm mb-8">per guest</div>
              <h4 className="font-display text-bone text-xl mb-3">Family-Style Experience</h4>
              <p className="text-bone/65 leading-relaxed mb-6 flex-1">Warm. Interactive. Memorable. Beautiful serving platters are placed directly on each table, encouraging conversation, connection, and a shared dining experience reminiscent of an upscale family-owned steakhouse.</p>
              <p className="text-sm text-bone/50">Ideal for guests who enjoy lingering around the table together.</p>
            </div>
            <div className="bg-ink/60 border border-gold/30 p-8 lg:p-10 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gold text-ink text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 font-semibold">Most Premium</div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-6">Plated Service</div>
              <div className="font-display text-bone text-4xl lg:text-5xl mb-2">$128</div>
              <div className="text-bone/50 text-sm mb-8">per guest</div>
              <h4 className="font-display text-bone text-xl mb-3">Plated Steakhouse Service</h4>
              <p className="text-bone/65 leading-relaxed mb-6 flex-1">Our most luxurious dining experience. Each course is individually plated and professionally served to every guest with restaurant-style precision.</p>
              <p className="text-sm text-bone/50">Designed for black-tie weddings, luxury receptions, executive dinners, and events where every detail matters.</p>
              <p className="text-sm text-bone/50 mt-3">For hosts who want their guests to feel like they've just dined at one of the finest steakhouses in the country—without ever leaving the venue.</p>
            </div>
          </div>
          <p className="mt-10 text-sm text-bone/55 italic text-center">
            Per-person Phoenix Metro pricing is built around your guest count, venue and menu selections. Request a quote for current rates — we respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="container-luxe max-w-4xl">
          <p className="eyebrow justify-center mb-6">Phoenix Metro's #1 Choice</p>
          <h3 className="heading-md text-bone mb-10 text-center">Why Phoenix Metro Clients Choose This Experience</h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 text-bone/70">
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">✔</span>
              <span>Live charcoal grilling performed in front of your guests</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">✔</span>
              <span>Premium steakhouse-quality ingredients</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">✔</span>
              <span>Restaurant-level presentation and service</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">✔</span>
              <span>Luxury dinnerware, linens, and glassware included</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">✔</span>
              <span>Experienced culinary and service professionals</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">✔</span>
              <span>An unforgettable dining experience that becomes part of the celebration—not just the meal</span>
            </div>
          </div>
        </div>
      </section>

      <div id="menu" />

      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="container-luxe text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 border-2 border-gold/40 bg-gold/5 mb-6">
            <span className="w-3 h-3 bg-gold rotate-45" />
            <span className="font-sans text-[0.75rem] font-semibold tracking-[0.4em] uppercase text-gold">Phoenix Metro Steakhouse Menu</span>
            <span className="w-3 h-3 bg-gold rotate-45" />
          </div>
          <h2 className="heading-lg text-bone mb-4">Your Phoenix Metro Menu Selections</h2>
          <p className="text-bone/65 text-lg max-w-2xl mx-auto">Every dish below is prepared fresh at your Phoenix, Scottsdale, Gilbert, Mesa, Tempe, Chandler, Glendale or Peoria venue by our live-fire grill team.</p>
        </div>
      </section>

      <Course
        number="01"
        eyebrow="Choose 1"
        title="First Course — Cold Starters"
        sub="A bright, elegant opening before the Phoenix Metro grill fires up."
        items={cold}
      />
      <Course
        number="02"
        eyebrow="Choose 1"
        title="Second Course — Warm Hors d'oeuvres"
        sub="Tray-passed or stationed at your Phoenix Metro event, finished hot off the fire."
        items={warm}
      />
      <Course
        number="03"
        eyebrow="Choose 3"
        title="Third Course — Dinner: Steaks & Seafood"
        sub="One selection per guest at your Phoenix Metro event. Minimum 3 servings per selection. Additional protein selections + $32/serving."
        items={meats}
      />
      <Course
        number="04"
        eyebrow="Choose 3"
        title="Sides"
        sub="Classic steakhouse accompaniments, scratch-made for your Phoenix Metro event."
        items={sides}
      />
      <Course
        number="05"
        eyebrow="Choose 2"
        title="Final Course — Dessert"
        sub="One serving per guest at your Phoenix Metro celebration. Coffee station available."
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
            <p className="mt-5 text-bone/65 leading-relaxed">Refreshing non-alcoholic options served from elegant dispensers at your Phoenix Metro event. Full bar and bartending service available as an add-on.</p>
          </div>
          <div className="mb-10 overflow-hidden border border-white/5">
            <img src={drinkChoiceImg} alt="Refreshing non-alcoholic beverage selections" loading="lazy" className="w-full h-64 lg:h-96 object-cover" />
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {drinks.map((name) => (
              <li
                key={name}
                className="bg-ink p-6 lg:p-7 text-center transition-all duration-300 ease-out hover:scale-105 hover:border-gold/40 hover:bg-gold/5 border border-transparent cursor-default"
              >
                <span className="font-display text-bone text-lg lg:text-xl">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Bring the steakhouse to your Phoenix Metro event."
        subtitle="Serving Phoenix, Scottsdale, Gilbert, Mesa, Tempe and surrounding areas. Tell us your date, guest count and venue — we'll send a custom proposal within 24 hours."
      />
    </>
  );
}
