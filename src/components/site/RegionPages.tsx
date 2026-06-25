import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import { PageHero, CTASection } from "@/components/site/Sections";
import { PhoenixPricingBanner } from "./PhoenixPricingBanner";
import {
  weddingConfig, corporateConfig, privatePartyConfig,
  woodFiredConfig, steakhouseConfig, bartendingConfig,
} from "@/lib/service-configs";
import { regions, services, extraPages, type RegionKey } from "@/lib/site";
import phoenixAsset from "@/assets/phoenix-metro.png.asset.json";
const phoenixImg = phoenixAsset.url;
import sanDiegoImg from "@/assets/san-diego.jpg";
import weddingCoupleAsset from "@/assets/wedding-couple.png.asset.json";
const weddingTable = weddingCoupleAsset.url;
import bbqPlatterAsset from "@/assets/bbq-platter.png.asset.json";
const bbqPlatter = bbqPlatterAsset.url;
import brisket from "@/assets/brisket.jpg";
import steakhousePlatterAsset from "@/assets/steakhouse-platter.png.asset.json";
const steak = steakhousePlatterAsset.url;
import corporateAsset from "@/assets/corporate-catering.png.asset.json";
const corporate = corporateAsset.url;
import privatePartySettingAsset from "@/assets/private-party-setting.png.asset.json";
const privateParty = privatePartySettingAsset.url;
import buffet from "@/assets/buffet.jpg";
import bartenderAsset from "@/assets/bartender.png.asset.json";
const bartender = bartenderAsset.url;
import heroFire from "@/assets/hero-fire.jpg";

const regionHero: Record<RegionKey, string> = {
  phoenix: phoenixImg,
  "san-diego": sanDiegoImg,
};

export function RegionLanding({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  return (
    <>
      <section className="relative min-h-[85vh] flex items-end overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img src={regionHero[regionKey]} alt={r.name} className="absolute inset-0 w-full h-full object-cover slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        </div>
        <div className="container-luxe relative z-10 pt-40 pb-20">
          <div className="eyebrow mb-8">{r.state}</div>
          <h1 className="heading-xl text-bone max-w-4xl">
            {r.shortName} <span className="text-gold italic font-light">catering.</span>
            <br />
            <span className="text-bone/70">Wood-fired. Full-service.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-bone/75 leading-relaxed font-light">{r.tagline}</p>
          <p className="mt-4 max-w-2xl text-base text-bone/55">{r.description}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/quote" className="btn-primary">Request a Quote <ArrowRight className="size-4" /></Link>
            <Link to={`/${regionKey}/gallery`} className="btn-ghost">View Gallery</Link>
          </div>
        </div>
      </section>
      {regionKey === "phoenix" && <PhoenixPricingBanner />}

      {/* Services grid */}
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-6">What We Cater in {r.shortName}</div>
            <h2 className="heading-lg text-bone">Every event, the same standard.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {services.map((s, i) => {
              const img = [weddingTable, corporate, privateParty, bbqPlatter, steak, bartender][i % 6];
              return (
                <Link
                  key={s.slug}
                  to={regionKey === "phoenix" ? "/phoenix/$slug" : "/san-diego/$slug"}
                  params={{ slug: s.slug }}
                  className="group relative block aspect-[4/5] overflow-hidden bg-ink"
                >
                  <img src={img} alt={s.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold/80 mb-3">{r.shortName}</div>
                    <h3 className="text-2xl font-display text-bone group-hover:text-gold transition-colors">{s.short}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-24">
        <div className="container-luxe">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <div className="eyebrow mb-6">Service Area</div>
              <h2 className="heading-md text-bone">All across {r.metro}.</h2>
              <p className="mt-6 text-bone/70 leading-relaxed">We cater throughout {r.metro} and surrounding communities. If your venue is near, we're there.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {r.cities.map(c => (
                <div key={c} className="bg-ink p-5 text-bone/85 text-sm tracking-wide">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-20 bg-onyx">
        <div className="container-luxe">
          <div className="eyebrow mb-8">More From {r.shortName}</div>
          <div className="flex flex-wrap gap-3">
            {extraPages.map(p => (
              <Link
                key={p.slug}
                to={regionKey === "phoenix" ? "/phoenix/$slug" : "/san-diego/$slug"}
                params={{ slug: p.slug }}
                className="text-[0.7rem] tracking-[0.25em] uppercase px-6 py-3.5 border border-white/15 text-bone/80 hover:border-gold hover:text-gold transition-colors"
              >
                {r.shortName} {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Let's plan your ${r.shortName} event.`} />
    </>
  );
}

export function RegionSlugPage({ regionKey, slug }: { regionKey: RegionKey; slug: string }) {
  const r = regions[regionKey];
  const opts = { region: r.name, regionShort: r.shortName };

  switch (slug) {
    case "weddings": return <ServicePage config={weddingConfig(opts)} regionKey={regionKey} />;
    case "corporate": return <ServicePage config={corporateConfig(opts)} regionKey={regionKey} />;
    case "private-parties": return <ServicePage config={privatePartyConfig(opts)} regionKey={regionKey} />;
    case "wood-fired": return <ServicePage config={woodFiredConfig(opts)} regionKey={regionKey} />;
    case "steakhouse": return <ServicePage config={steakhouseConfig(opts)} regionKey={regionKey} />;
    case "bartending": return <ServicePage config={bartendingConfig(opts)} regionKey={regionKey} />;
    case "gallery": return <RegionGallery regionKey={regionKey} />;
    case "reviews": return <RegionReviews regionKey={regionKey} />;
    case "faq": return <RegionFAQ regionKey={regionKey} />;
    case "blog": return <RegionBlog regionKey={regionKey} />;
    case "venues": return <RegionVenues regionKey={regionKey} />;
    case "holiday": return <RegionHoliday regionKey={regionKey} />;
    case "backyard": return <RegionBackyard regionKey={regionKey} />;
    default: return <RegionNotFound regionKey={regionKey} />;
  }
}

function RegionHoliday({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  const menu = [
    { title: "The Centerpieces", items: ["Slow-roasted prime rib, au jus", "Smoked whole turkey, brined 24 hours", "Wood-fired brisket, sliced to order", "Cedar-plank salmon", "Honey-glazed ham"] },
    { title: "The Sides", items: ["Truffle mashed potatoes", "Cornbread stuffing", "Maple roasted root vegetables", "Creamed spinach", "Smoked mac and cheese", "Cranberry-orange relish"] },
    { title: "Desserts & Bar", items: ["Pecan pie, bourbon caramel", "Apple crumble, vanilla bean cream", "Hot toddy bar", "Spiced cider, mulled wine", "Signature winter cocktail"] },
  ];
  const faqs = [
    { q: `When should we book our ${r.shortName} holiday party?`, a: `November and December weekends fill 90+ days out. Lock your date as soon as the budget is approved — menu and staffing finalize 30 days before.` },
    { q: `Do you cater Thanksgiving and Christmas Day?`, a: `Yes. We offer drop-off feasts, family-style delivery, and full-service in-home Thanksgiving and Christmas dinners across ${r.metro}.` },
    { q: `Can you handle a 300-person company party?`, a: `Yes. Buffet, stations, and seated formats up to 500 guests, with full bar, rentals, and uniformed staff.` },
    { q: `What does a typical holiday party cost?`, a: `Most ${r.shortName} holiday parties run $55–$135 per guest depending on format, menu tier, bar, and staffing. See the pricing page for tiers.` },
  ];
  return (
    <>
      <PageHero regionKey={regionKey}
        eyebrow={`${r.shortName} · Holiday`}
        title={<>Holiday catering, <span className="italic text-gold font-light">done right.</span></>}
        subtitle={`Office holiday parties, family Thanksgivings, Christmas dinners, and end-of-year client events across ${r.name}. Carved prime rib, smoked turkey, plated tasting menus — pick the night, we handle the rest.`}
        image={buffet}
      >
        <Link to="/quote" className="btn-primary">Book Your Date <ArrowRight className="size-4" /></Link>
      </PageHero>
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe max-w-5xl">
          <div className="eyebrow mb-6">Most-booked holiday formats</div>
          <h2 className="heading-md text-bone mb-10">Three ways we run a holiday.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { t: "Office Holiday Party", b: "Buffet or stations. 30–500 guests. Wood-fired BBQ or steakhouse menu. Bar and rentals available." },
              { t: "Family Holiday Dinner", b: "Smoked turkey, prime rib, classic sides. Drop-off or full service in your home. 10–60 guests." },
              { t: "Client Appreciation", b: "Plated steakhouse dinner with tableside carving. White-glove staff. 20–150 guests." },
            ].map((c) => (
              <div key={c.t} className="bg-ink p-10">
                <div className="text-2xl font-display text-bone mb-3">{c.t}</div>
                <p className="text-bone/70 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe max-w-5xl">
          <div className="eyebrow mb-6">A taste of the holiday menu</div>
          <h2 className="heading-md text-bone mb-10">Sample {r.shortName} holiday menu.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {menu.map((col) => (
              <div key={col.title} className="bg-ink p-10">
                <div className="text-gold text-xs tracking-[0.25em] uppercase mb-5">{col.title}</div>
                <ul className="space-y-3 text-bone/85">
                  {col.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-onyx">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow mb-6">Holiday FAQ</div>
          <h2 className="heading-md text-bone mb-10">{r.shortName} holiday questions.</h2>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {faqs.map((f) => (
              <details key={f.q} className="group py-7">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                  <span className="text-lg lg:text-xl font-display text-bone group-hover:text-gold transition-colors">{f.q}</span>
                  <span className="text-gold text-3xl font-light transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="mt-4 text-bone/70 leading-relaxed font-light">{f.a}</p>
              </details>
            ))}
          </div>
          <Link to="/quote" className="btn-primary mt-12">Request Holiday Quote <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <CTASection title="Make this holiday the one they remember." />
    </>
  );
}

function RegionBackyard({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  const occasions = [
    { t: "Graduation Parties", b: "Brisket, pulled pork, sliders, all the sides. Casual menu, polished service, 40–200 guests." },
    { t: "Milestone Birthdays", b: "Plated steakhouse dinners or wood-fired stations. We make the night feel like the restaurant came to you." },
    { t: "Anniversary & Retirement", b: "Intimate seated dinners for 12–60. Multi-course, wine pairings, full staff." },
    { t: "Engagement & Rehearsal", b: "The night before the big night. Family-style on long tables under string lights." },
    { t: "Reunions & Welcome BBQs", b: "Out-of-town family, full smoker setup, kids run the yard, you don't lift a finger." },
    { t: "Pool Parties & Summer Cookouts", b: "Tri-tip, hot links, charred corn, cold sides, frozen cocktails. We bring the grill." },
  ];
  return (
    <>
      <PageHero regionKey={regionKey}
        eyebrow={`${r.shortName} · Backyard`}
        title={<>Your backyard. <span className="italic text-gold font-light">Our fire.</span></>}
        subtitle={`Graduations, birthdays, anniversaries, retirement parties — backyard catering across ${r.name}. We bring the smoker, the staff, and the menu. You bring your guests.`}
        image={heroFire}
      >
        <Link to="/quote" className="btn-primary">Quote My Backyard <ArrowRight className="size-4" /></Link>
      </PageHero>
      <section className="py-24 lg:py-32 bg-onyx">
        <div className="container-luxe max-w-4xl">
          <div className="eyebrow mb-6">What we bring</div>
          <h2 className="heading-md text-bone mb-10">A full catering operation. In your driveway.</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 text-bone/85">
            {[
              "Live-fire smokers and grills",
              "Full prep + cooking team",
              "Buffet line setup",
              "Disposable or upgraded serviceware",
              "Cleanup — kitchen left spotless",
              "Bartending + bar setup (optional)",
              "Tables, linens, chairs (optional)",
              `Travel within ${r.metro} included`,
            ].map((b) => (
              <div key={b} className="flex items-center gap-3"><Check className="size-4 text-gold" /> {b}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe max-w-5xl">
          <div className="eyebrow mb-6">Common occasions</div>
          <h2 className="heading-md text-bone mb-10">If it's worth gathering for, it's worth catering.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {occasions.map((o) => (
              <div key={o.t} className="bg-ink p-8">
                <div className="text-xl font-display text-bone mb-3">{o.t}</div>
                <p className="text-bone/70 leading-relaxed text-sm">{o.b}</p>
              </div>
            ))}
          </div>
          <Link to="/quote" className="btn-primary mt-12">Request Backyard Quote <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <CTASection title="The neighbors will be jealous." />
    </>
  );
}

function RegionGallery({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  const imgs = [weddingTable, brisket, steak, corporate, buffet, privateParty, heroFire, weddingTable, brisket, buffet, steak, corporate];
  return (
    <>
      <PageHero regionKey={regionKey}
        eyebrow={`${r.shortName} Gallery`}
        title={<>{r.shortName} <span className="text-gold italic font-light">events.</span></>}
        subtitle={`Recent weddings, corporate events and private parties across ${r.metro}.`}
        image={regionHero[regionKey]}
      />
      <section className="py-16">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {imgs.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function RegionReviews({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  const reviews = [
    { q: `Chef Terry — 'The BBQ Daddy' — and his Qfire team made our ${r.shortName} wedding unforgettable. Flawless.`, a: "Lauren & Mark", e: `${r.shortName} Wedding · 220 guests` },
    { q: `We hired Qfire for our annual partner dinner in ${r.shortName}. Plated steaks for 140, served perfectly.`, a: "David K.", e: `${r.shortName} Corporate` },
    { q: `Backyard 50th in ${r.shortName}. Wood-fired everything. Premium top to bottom.`, a: "Sandra T.", e: `${r.shortName} Private Party` },
    { q: `The kind of caterer you only have to hire once. Booked them again before the night was over.`, a: "Megan & Ryan", e: `${r.shortName} Wedding` },
  ];
  return (
    <>
      <PageHero regionKey={regionKey}
        eyebrow={`${r.shortName} Reviews`}
        title={<>What {r.shortName} <span className="text-gold italic font-light">is saying.</span></>}
        subtitle={`Five-star reviews from ${r.metro} clients.`}
        image={regionHero[regionKey]}
      />
      <section className="py-24">
        <div className="container-luxe grid md:grid-cols-2 gap-6">
          {reviews.map((rv, i) => (
            <figure key={i} className="bg-onyx border border-white/5 p-8 lg:p-10">
              <div className="text-gold text-5xl font-display leading-none mb-4">"</div>
              <blockquote className="text-bone/85 text-lg leading-relaxed font-light">{rv.q}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/5">
                <div className="text-bone font-medium">{rv.a}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{rv.e}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function RegionFAQ({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  const faqs = [
    { q: `Do you cater throughout ${r.metro}?`, a: `Yes — ${r.cities.join(", ")} and the surrounding communities.` },
    { q: `How far in advance should we book in ${r.shortName}?`, a: `Weddings: 6–12 months. Corporate and private events: 4–8 weeks.` },
    { q: `Do you work with ${r.shortName} venues?`, a: `Yes — we've catered at nearly every major venue in the region.` },
    { q: `Can you cook on-site at our ${r.shortName} venue?`, a: `Yes. We bring our own live-fire grills and stations to your venue.` },
    { q: `What's your minimum guest count?`, a: `Private chef from 8 guests. Full-service catering typically begins around 40.` },
    { q: `Are you licensed and insured in ${r.state}?`, a: `Fully licensed and insured, including liquor liability for our bartending services.` },
  ];
  return (
    <>
      <PageHero regionKey={regionKey}
        eyebrow={`${r.shortName} FAQ`}
        title={<>{r.shortName} catering <span className="text-gold italic font-light">questions.</span></>}
        subtitle={`Common questions from ${r.metro} clients.`}
        image={regionHero[regionKey]}
      />
      <section className="py-24">
        <div className="container-luxe max-w-4xl">
          <div className="divide-y divide-white/5 border-y border-white/5">
            {faqs.map((f) => (
              <details key={f.q} className="group py-8">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                  <span className="text-xl lg:text-2xl font-display text-bone group-hover:text-gold transition-colors">{f.q}</span>
                  <span className="text-gold text-3xl font-light transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="mt-5 text-bone/70 leading-relaxed text-lg font-light">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function RegionBlog({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  const posts = [
    { img: weddingTable, cat: "Wedding Tips", title: `Choosing your ${r.shortName} wedding service style.` },
    { img: brisket, cat: "Food Inspiration", title: `Why brisket belongs at your ${r.shortName} wedding.` },
    { img: corporate, cat: "Corporate", title: `The ${r.shortName} investor-dinner playbook.` },
    { img: privateParty, cat: "Private Parties", title: `Backyard luxury in ${r.shortName}.` },
    { img: buffet, cat: "Venue Spotlights", title: `Favorite outdoor venues across ${r.metro}.` },
    { img: steak, cat: "Planning Guides", title: `Steakhouse at home — a ${r.shortName} guide.` },
  ];
  return (
    <>
      <PageHero regionKey={regionKey}
        eyebrow={`${r.shortName} Journal`}
        title={<>Field notes from <span className="text-gold italic font-light">{r.shortName}.</span></>}
        subtitle="Tips, guides and venue spotlights for couples and event planners."
        image={regionHero[regionKey]}
      />
      <section className="py-20">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <img src={p.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-3">{p.cat}</div>
              <h3 className="text-2xl font-display text-bone group-hover:text-gold transition-colors">{p.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function RegionVenues({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  return (
    <>
      <PageHero regionKey={regionKey}
        eyebrow={`${r.shortName} Venues`}
        title={<>{r.shortName} <span className="text-gold italic font-light">venues</span> we love.</>}
        subtitle={`Some of the most beautiful event venues across ${r.metro} where we cater regularly.`}
        image={regionHero[regionKey]}
      />
      <section className="py-24">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {r.venues.map((v) => (
              <div key={v.name} className="bg-ink p-8 lg:p-10">
                <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-4">{v.city}</div>
                <h3 className="text-2xl font-display text-bone mb-4">{v.name}</h3>
                <p className="text-bone/70 leading-relaxed text-sm">{v.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function RegionNotFound({ regionKey }: { regionKey: RegionKey }) {
  const r = regions[regionKey];
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-32 pb-20">
      <div className="text-center">
        <div className="eyebrow justify-center mb-4">404</div>
        <h1 className="heading-lg text-bone">Page not found</h1>
        <Link to={regionKey === "phoenix" ? "/phoenix" : "/san-diego"} className="btn-primary mt-10">
          Back to {r.shortName}
        </Link>
      </div>
    </div>
  );
}
