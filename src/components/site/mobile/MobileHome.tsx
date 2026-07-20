import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Star, Flame, Award, Users, Sparkles, Check } from "lucide-react";
import heroImage from "@/assets/updated-background.png.asset.json";
import asSeenOnBadge from "@/assets/as-seen-on-food-network.png.asset.json";
import weddingImg from "@/assets/wedding-couple.png.asset.json";
import corporateImg from "@/assets/corporate-catering.png.asset.json";
import privateImg from "@/assets/private-party.png.asset.json";
import brisketVideo from "@/assets/brisket-slice.mp4.asset.json";
import steakImg from "@/assets/steakhouse-backyard.png.asset.json";
import chefTerry from "@/assets/chef-terry.jpg.asset.json";
import phoenixImg from "@/assets/phoenix-metro.png.asset.json";
import sanDiegoImg from "@/assets/san-diego.png.asset.json";
import { contact } from "@/lib/contact";

// Full mobile-only homepage. One-finger scroll. Confident copy.
// Desktop is rendered separately by index.tsx and is never touched.
export function MobileHome() {
  return (
    <div className="md:hidden bg-ink text-bone">
      {/* ============ 1. HERO — who we are + what we do + quote + call ============ */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        <img
          src={heroImage.url}
          alt="Chef Terry Matthews live-fire grilling at a luxury outdoor wedding — Qfire Catering, Phoenix & San Diego"
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={1600}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />

        <div className="relative z-10 flex flex-col flex-1 px-5 pt-20 pb-6">
          {/* Authority chip */}
          <div className="flex items-center gap-2.5 mb-6">
            <img src={asSeenOnBadge.url} alt="" className="w-11 h-11 rounded-full shrink-0" />
            <div>
              <div className="text-[0.6rem] tracking-[0.25em] uppercase text-gold font-semibold">
                Featured on Food Network
              </div>
              <div className="flex items-center gap-1 text-bone/90 text-xs mt-0.5">
                <Star className="size-3 fill-gold text-gold" />
                <span className="font-semibold">4.9</span>
                <span className="text-bone/60">· 400+ reviews</span>
              </div>
            </div>
          </div>

          {/* WHAT WE DO — bold */}
          <h1 className="font-display text-[2.7rem] leading-[1.02] text-bone">
            <span className="text-gold italic font-light">BBQ</span> & Wood-Fire
            <br />Catering with
            <br /><span className="text-bone/70">steakhouse polish.</span>
          </h1>

          {/* WHO WE ARE */}
          <p className="mt-4 text-bone/90 text-base leading-relaxed">
            Arizona &amp; San Diego's premier live-fire caterer. Chef Terry
            Matthews and his team run the whole show — menu, staff, setup, service,
            breakdown. Weddings, corporate, private parties. Pick Up &amp; Delivery Available.
          </p>

          {/* PRIMARY ACTIONS — View Menus + Leave a Message + Call */}
          <div className="mt-6 space-y-2.5">
            <Link
              to="/menus"
              className="flex items-center justify-center gap-2 w-full min-h-14 rounded-md bg-gold text-ink font-bold text-base tracking-wide shadow-[0_10px_30px_-8px_rgba(201,162,86,0.55)] active:scale-[0.99] transition-transform"
            >
              View Menus <ArrowRight className="size-5" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full min-h-14 rounded-md border-2 border-gold/60 text-gold font-bold text-base active:bg-gold/10"
            >
              Leave a Message
            </Link>
            <a
              href={contact.phoneHref}
              className="flex items-center justify-center gap-2 w-full min-h-14 rounded-md border border-bone/20 text-bone/90 font-semibold text-base active:bg-bone/5"
            >
              <Phone className="size-5" /> Call {contact.phone}

            </a>
          </div>

          {/* Bottom proof strip */}
          <div className="mt-auto pt-8">
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { icon: Award, top: "15+", bot: "Years" },
                { icon: Flame, top: "2,000+", bot: "Events" },
                { icon: Star, top: "4.9★", bot: "Rated" },
              ].map((s) => (
                <div key={s.bot} className="rounded-md border border-gold/25 bg-ink/60 backdrop-blur-sm px-2 py-3">
                  <s.icon className="size-4 text-gold mx-auto mb-1" />
                  <div className="text-bone font-display text-lg leading-none">{s.top}</div>
                  <div className="text-[0.58rem] tracking-[0.2em] uppercase text-bone/60 mt-1">{s.bot}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-[0.62rem] tracking-[0.28em] uppercase text-bone/55">
              BBQ Brawl · Cutthroat Kitchen · Camp Cutthroat
            </p>
          </div>
        </div>
      </section>

      {/* ============ 2. SERVICES — Weddings / Corporate / Private ============ */}
      <section className="px-5 py-14 border-t border-gold/15">
        <div className="text-center mb-8">
          <div className="text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">What We Cater</div>
          <h2 className="font-display text-3xl leading-tight text-bone">
            Three events. <span className="text-bone/60 italic font-light">One unbeatable team.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              img: weddingImg.url,
              label: "Weddings",
              body: "The chef-driven wedding caterer couples ask for by name. Live-fire grilling at your venue, plated steakhouse service, buffets people photograph.",
              href: "/weddings" as const,
            },
            {
              img: corporateImg.url,
              label: "Corporate Events",
              body: "Executive dinners, holiday parties, board retreats, jobsite feeds. Restaurant-quality food, uniformed service, invoiced clean.",
              href: "/corporate" as const,
            },
            {
              img: privateImg.url,
              label: "Private Parties",
              body: "Backyard birthdays, anniversaries, milestone dinners. Wood-fired luxury without leaving your patio.",
              href: "/private-parties" as const,
            },
          ].map((s) => (
            <Link
              key={s.label}
              to={s.href}
              className="group relative block rounded-lg overflow-hidden border border-gold/20 active:border-gold min-h-[15rem]"
            >
              <img
                src={s.img}
                alt={s.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
              <div className="relative p-5 pt-32 flex flex-col justify-end min-h-[15rem]">
                <div className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-1.5">Explore</div>
                <div className="font-display text-2xl text-bone">{s.label}</div>
                <p className="mt-2 text-sm text-bone/80 leading-relaxed">{s.body}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                  See More <ArrowRight className="size-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ 3. TWO MENUS — Wood-Fire vs Steakhouse ============ */}
      <section className="px-5 py-14 border-t border-gold/15 bg-onyx/40">
        <div className="text-center mb-8">
          <div className="text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">Two Menus</div>
          <h2 className="font-display text-3xl leading-tight text-bone">
            Wood-Fire BBQ <span className="text-bone/50">or</span> Steakhouse. <span className="italic font-light text-bone/60">You pick.</span>
          </h2>
        </div>

        <div className="space-y-4">
          <Link to="/wood-fired" className="group block rounded-lg overflow-hidden border border-gold/20 active:border-gold">
            <div className="relative aspect-[16/9] overflow-hidden">
              <video src={brisketVideo.url} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>
            <div className="p-4">
              <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold mb-1">Wood-Fire / BBQ</div>
              <div className="font-display text-xl text-bone">Smoke. Hardwood. Live fire.</div>
              <p className="mt-2 text-sm text-bone/70">Brisket, tri-tip, pulled pork, chicken. From <span className="text-gold font-semibold">$13.99/guest</span>.</p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                View Menu <ArrowRight className="size-3.5" />
              </div>
            </div>
          </Link>

          <Link to="/steakhouse" className="group block rounded-lg overflow-hidden border border-gold/20 active:border-gold">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={steakImg.url} alt="Charcoal-grilled ribeye — Qfire Catering steakhouse experience" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>
            <div className="p-4">
              <div className="text-[0.58rem] tracking-[0.3em] uppercase text-gold mb-1">Steakhouse Experience</div>
              <div className="font-display text-xl text-bone">Ribeye, filet, surf &amp; turf.</div>
              <p className="mt-2 text-sm text-bone/70">Charcoal-grilled steakhouse service at your venue. From <span className="text-gold font-semibold">$74/guest</span>.</p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                View Menu <ArrowRight className="size-3.5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ 4. CHEF TERRY — snapshot ============ */}
      <section className="px-5 py-14 border-t border-gold/15">
        <div className="grid grid-cols-[7rem_1fr] gap-4 items-center mb-6">
          <div className="aspect-[4/5] overflow-hidden rounded-lg border border-gold/25">
            <img src={chefTerry.url} alt="Chef Terry Matthews — The BBQ Daddy" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <div className="text-[0.58rem] tracking-[0.28em] uppercase text-gold mb-2">Meet The Chef</div>
            <h2 className="font-display text-2xl leading-tight text-bone">Chef Terry Matthews</h2>
            <div className="text-bone/55 italic text-sm mt-1">"The BBQ Daddy"</div>
          </div>
        </div>
        <p className="text-bone/85 text-base leading-relaxed">
          Fifteen years behind the fire. Two thousand events. Food Network's{" "}
          <span className="text-gold">Cutthroat Kitchen champion</span>,{" "}
          <span className="text-gold">BBQ Brawl with Bobby Flay</span>, and{" "}
          <span className="text-gold">Camp Cutthroat</span>. He personally designs
          every menu we cook — and he'll be at your event.
        </p>
        <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-[0.15em] uppercase border-b border-gold/40 pb-1">
          Chef Terry's Story <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* ============ 5. WHAT'S INCLUDED — one confident checklist ============ */}
      <section className="px-5 py-14 border-t border-gold/15 bg-onyx/40">
        <div className="text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">What You Get</div>
        <h2 className="font-display text-3xl leading-tight text-bone">
          One team. <span className="italic font-light text-bone/60">Everything handled.</span>
        </h2>
        <ul className="mt-6 space-y-3">
          {[
            "Custom menu built for your guest count and vibe",
            "Uniformed, restaurant-trained service staff",
            "Full setup, live-fire cooking, and complete breakdown",
            "Beautifully styled buffets, stations, and plated service",
            "Fully licensed, insured, and Health Dept. compliant",
            "24-hour response on every quote",
          ].map((line) => (
            <li key={line} className="flex items-start gap-3 text-bone/90 text-base leading-snug">
              <Check className="size-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ 6. REVIEWS — 3 short quotes ============ */}
      <section className="px-5 py-14 border-t border-gold/15">
        <div className="text-center mb-8">
          <div className="text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">Reviews</div>
          <h2 className="font-display text-3xl leading-tight text-bone">
            Five-star, <span className="italic font-light text-bone/60">top to bottom.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Flawless. Brisket, ribeye, the whole spread. Our wedding is still the meal everyone talks about.", a: "Lauren & Mark", e: "Scottsdale Wedding · 220 guests" },
            { q: "Plated steaks for 140. Served hot, served perfectly. Worth every penny.", a: "David K.", e: "Corporate · La Jolla" },
            { q: "Guests thought we flew in a luxury steakhouse. Backyard 50th, wood-fired everything.", a: "Sandra T.", e: "Private Party · Gilbert" },
          ].map((r, i) => (
            <figure key={i} className="border border-gold/15 rounded-lg p-5 bg-ink/60">
              <div className="flex text-gold gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-3.5 fill-gold" />)}
              </div>
              <blockquote className="text-bone/90 leading-relaxed text-[0.95rem]">"{r.q}"</blockquote>
              <figcaption className="mt-3 pt-3 border-t border-white/5">
                <div className="text-bone text-sm font-semibold">{r.a}</div>
                <div className="text-[0.65rem] text-bone/50 tracking-[0.2em] uppercase mt-0.5">{r.e}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/reviews" className="mt-6 flex items-center justify-center gap-2 text-gold text-sm font-semibold tracking-[0.15em] uppercase">
          Read All Reviews <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* ============ 7. REGIONS ============ */}
      <section className="px-5 py-14 border-t border-gold/15 bg-onyx/40">
        <div className="text-center mb-6">
          <div className="text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">Two Regions</div>
          <h2 className="font-display text-3xl leading-tight text-bone">Where's your event?</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { img: phoenixImg.url, name: "Phoenix Metro", href: "/phoenix" as const },
            { img: sanDiegoImg.url, name: "San Diego County", href: "/san-diego" as const },
          ].map((r) => (
            <Link key={r.name} to={r.href} className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-gold/20 active:border-gold block">
              <img src={r.img} alt={r.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-display text-lg text-bone leading-tight">{r.name}</div>
                <div className="mt-1 inline-flex items-center gap-1 text-[0.6rem] tracking-[0.24em] uppercase text-gold">
                  Enter <ArrowRight className="size-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ 8. FAQ — short ============ */}
      <section className="px-5 py-14 border-t border-gold/15">
        <div className="text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">FAQ</div>
        <h2 className="font-display text-3xl leading-tight text-bone mb-6">Straight answers.</h2>
        <div className="divide-y divide-white/8 border-y border-white/8">
          {[
            { q: "How far out should I book?", a: "Peak Saturdays go 6–12 months out. Corporate and private events, 4–8 weeks. Short-notice? Call — we move quickly." },
            { q: "What does it cost?", a: "Wood-fire BBQ from $13.99/guest (Phoenix), $16.99/guest (San Diego). Steakhouse Experience from $74/guest. Every quote is itemized." },
            { q: "Do you handle everything?", a: "Yes. Menu, staff, setup, live-fire cooking, service, breakdown. You enjoy your event." },
            { q: "Allergies and dietary needs?", a: "Vegetarian, vegan, GF, DF, kosher-style, Halal-friendly, and dedicated allergy prep — all standard." },
          ].map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <span className="text-base font-display text-bone pr-2">{f.q}</span>
                <span className="text-gold text-xl leading-none transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="mt-3 text-bone/75 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <Link to="/faq" className="mt-6 flex items-center justify-center gap-2 text-gold text-sm font-semibold tracking-[0.15em] uppercase">
          All Questions <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* ============ 9. FINAL CTA ============ */}
      <section className="px-5 py-16 border-t border-gold/30 bg-gradient-to-b from-ink via-onyx/60 to-ink">
        <div className="text-center">
          <Sparkles className="size-6 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl leading-tight text-bone">
            Let's cook <span className="italic font-light text-bone/60">your event.</span>
          </h2>
          <p className="mt-3 text-bone/75 text-base">
            One quote request. One real reply within 24 hours. From Chef Terry himself.
          </p>
          <div className="mt-6 space-y-2.5">
            <Link
              to="/quote"
              className="flex items-center justify-center gap-2 w-full min-h-14 rounded-md bg-gold text-ink font-bold text-base tracking-wide active:scale-[0.99] transition-transform"
            >
              Request A Quote <ArrowRight className="size-5" />
            </Link>
            <a
              href={contact.phoneHref}
              className="flex items-center justify-center gap-2 w-full min-h-14 rounded-md border-2 border-gold/60 text-gold font-bold text-base active:bg-gold/10"
            >
              <Phone className="size-5" /> Call {contact.phone}
            </a>
          </div>
          <p className="mt-5 text-[0.62rem] tracking-[0.25em] uppercase text-bone/50">
            {contact.hours}
          </p>
        </div>
      </section>
    </div>
  );
}
