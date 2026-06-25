## Audit Summary

### thebbqdaddy.com (live Wix site)
- 26 indexed pages. Strongest content lives on `/wedding-catering-phoenix-san-diego`, `/company-catering-phoenix-sandiego`, `/private-event-catering`, `/azorcali` (BBQ menu), `/steak-seafood-menu`, `/faq-s`, `/privatechef`.
- Pricing is explicit: BBQ $12.99 / $17.99 / $25.99 pp; Steakhouse Buffet $74, Family $89, Plated $128 pp; full range $13–$125+.
- Voice already direct ("We handle the organization. We handle the execution. We handle the flavor. You get the compliments."). Good raw material — formatting/structure is weak (long unbroken lists, Wix gallery clutter, no schema beyond default).
- Bar service, rentals, all-inclusive-pricing pages are essentially images with no real text — major SEO + conversion gaps.
- Blog exists but is empty ("Check back soon").
- City-level SEO pages missing entirely (only Phoenix + SD pillars).
- Contact form captures: name, phone, email, guest count buckets, location, event type, date. Form posts to Wix backend.

### Current Lovable build
- 23 routes, 44 sitemap URLs (12 service+extra slugs × 2 regions + 20 statics).
- Architecture is sound: shared `ServicePage` + `RegionPages` templates, central `site.ts` + `service-configs.tsx`.
- Quote form **does not submit** — `setSent(true)` with no network call. Top blocker.
- Blog has 6 hardcoded cards, all linking back to `/blog` — no per-post routes, no content.
- SEO gaps: no `LocalBusiness`/`Person`/`Service`/`BreadcrumbList`/`WebSite` schema, no `og:image` on service pages, no `Sitemap:` line in robots.txt, all canonical/og:url are relative strings, `RegionLanding` "View Gallery" button has a broken `params={{}}`.
- No pages for: holiday catering, office catering, graduation, backyard, per-city, pricing, contact, privacy, terms, accessibility, per-post blog.
- Copy is generic in places — needs the Hormozi/Apple/Miller pass with the live pricing + Chef Terry credentials pulled from the Wix site.
- Two orphaned image assets (`food-style.png`, `wedding-grilling-hero.png`) — leave in place per your image rule.

---

## 40-Page Final Architecture

```text
GLOBAL (14)
  /                              Home (region chooser, brand pillars)
  /about                         Chef Terry bio
  /menus                         Menu hub (links to BBQ + Steakhouse + Private Chef)
  /pricing                       NEW – transparent per-person pricing pillar
  /why-qfire                     Why Qfire pillar
  /steakhouse-experience         NEW – authority pillar replacing thin /menus copy
  /reviews                       Reviews wall
  /pictures                      Gallery
  /faq                           FAQ (FAQPage schema)
  /quote                         Quote form (wired)
  /contact                       NEW – phone, email, hours, form
  /service-areas                 NEW – consolidates Locations + city list
  /blog                          Blog index
  /blog/$slug                    NEW – per-post route (counts as 1 dynamic template)

LEGAL (3) – required for trust + ADA + EEAT
  /privacy
  /terms
  /accessibility

PHOENIX SILO (10)
  /phoenix                       Region home
  /phoenix/weddings
  /phoenix/corporate
  /phoenix/private-parties
  /phoenix/wood-fired            (BBQ catering)
  /phoenix/steakhouse
  /phoenix/bartending
  /phoenix/rentals
  /phoenix/holiday               NEW
  /phoenix/backyard              NEW – office + graduation rolled into copy here + corporate page

SAN DIEGO SILO (10)
  /san-diego                     Region home
  /san-diego/weddings
  /san-diego/corporate
  /san-diego/private-parties
  /san-diego/wood-fired
  /san-diego/steakhouse
  /san-diego/bartending
  /san-diego/rentals
  /san-diego/holiday             NEW
  /san-diego/backyard            NEW

BLOG SEED POSTS (3 dedicated routes — rest are dynamic under /blog/$slug)
  Counted as data inside /blog/$slug template, not separate URL slots.

TOTAL: 14 + 3 + 10 + 10 = 37 + /blog/$slug template = 38 indexable routes
Budget: 40. Headroom: 2 (reserved for future per-city pages like /phoenix/scottsdale if you want).
```

Tradeoffs: I rolled Holiday/Office/Graduation/Backyard into two pages per region (Holiday + Backyard) to stay within budget while still owning the keywords; office + graduation get H2s + FAQ schema on those pages. Per-city pages (Scottsdale, La Jolla, etc.) get H2 sections + internal links on the region home and `/service-areas`, not their own URLs. If you'd rather we use the 2-page headroom for `/phoenix/scottsdale` + `/san-diego/la-jolla`, say so before I build.

---

## What I Will Build (in order)

### Phase 1 — Foundation (no visible page changes)
1. Wire **quote form** to a TanStack server function that emails the lead (Lovable Cloud + Resend, or store-only if you want zero setup). I'll ask once when I get there — Resend is the lift-free default.
2. Promote head/meta system: absolute `og:url`/canonical via a `getRequestOrigin` server fn so social previews work; add `twitter:image`; add `og:image` to every service + region page using existing imagery.
3. Add JSON-LD schemas across the site: `LocalBusiness` (with two `areaServed`), `Person` (Chef Terry), `Service` (per service page), `BreadcrumbList` (every deep route), `WebSite` + `SearchAction` (root), `Event` blocks where applicable.
4. `robots.txt` gets `Sitemap:` directive. `sitemap[.]xml.ts` BASE_URL stays empty per current convention — relative loc paths are crawler-valid.
5. Fix `RegionLanding` broken `params={{}}` gallery link.

### Phase 2 — Copy rewrite (the big lift)
Pass through every existing route in the **Apple/Hormozi/Miller voice** with: short headlines that stop scroll, ≤3-sentence paragraphs, bullet-heavy, objection-handling sections, real pricing pulled from the Wix site. Each page gets: hero, problem/promise, 3-pillar grid, social proof, pricing band, FAQ snippet, CTA.

Region-templated copy: every region page interpolates city name + venue list from `site.ts`.

### Phase 3 — New pages
- `/pricing` — transparent BBQ + Steakhouse + Private Chef tiers, what's included, what's not, "what most clients spend" anchors.
- `/contact` — phone (877.848.7211 from Wix), email (`Eat@QfireCatering.com`), response-time promise, secondary quote form, map placeholder.
- `/service-areas` — full Phoenix + SD city grid with internal links to region pages, scannable by AI Overviews.
- `/steakhouse-experience` — long-form authority pillar (Mastro's-tier voice).
- `/privacy`, `/terms`, `/accessibility` — standard but tailored.
- `/phoenix/holiday`, `/san-diego/holiday`, `/phoenix/backyard`, `/san-diego/backyard`.

### Phase 4 — Blog system
- File-based route `src/routes/blog.$slug.tsx` reading MDX from `src/content/blog/*.mdx`.
- Build 6 seed posts (each ~800–1200 words, real internal links, `Article` + `BreadcrumbList` schema):
  1. "How Much Does Wedding Catering Cost in Phoenix in 2026?"
  2. "BBQ vs. Steakhouse Catering: Which Fits Your Wedding?"
  3. "The Real Cost of Corporate Catering in San Diego"
  4. "Live-Fire Grilling at Your Wedding: What to Expect"
  5. "Backyard Catering Checklist (Phoenix Heat Edition)"
  6. "Choosing a Caterer: 9 Questions That Reveal Everything"
- Blog index re-templated, category filter wired to state, dynamic sitemap entries.

### Phase 5 — UX + Performance polish
- Add phone + email to Nav (top bar) and Footer (currently missing — major conversion leak).
- Gallery lightbox.
- LCP image preload on home + region homes.
- `aspect-*` wrappers on all images.
- Skip-to-content link, `<main>` audit, `aria-label` on icon buttons, focus-visible tokens.
- Sticky bottom-bar mobile CTA on every page.

### Phase 6 — Verification
- Build + typecheck.
- Playwright pass: render `/`, `/quote` (submit one), `/phoenix/weddings`, `/blog/<slug>`, take screenshots.
- Trigger SEO scan, then fix surfaced findings.

---

## What I Will NOT Do
- Generate or replace any photo/video (per your standing rule). I'll reuse the existing asset pool — every new page uses imagery already wired in.
- Change the design system (palette, typography, components) — it's already on-brand. Only refinements.
- Add tracking pixels, GA, Meta Pixel, or third-party analytics unless you ask.
- Build per-city pages by default (out of budget; can swap in if you'd rather).
- Stand up authentication, e-commerce, or a CMS UI.

---

## Decisions I Need From You Before Building

1. **Quote form delivery** — Resend email to `Eat@QfireCatering.com` (recommended, ~5 min setup, free tier), or store in Lovable Cloud DB only, or both?
2. **Per-city pages** — keep the 2-page headroom for future, OR use it now for `/phoenix/scottsdale` + `/san-diego/la-jolla` (top intent cities)?
3. **Phone number + email** — confirm I should put `(877) 848-7211` and `Eat@QfireCatering.com` site-wide (pulled from the live Wix site).
4. **Sitemap base URL** — should I bake in `https://www.qfirecatering.com` (or your eventual domain), or leave relative until you point a custom domain?

Answer those four and I'll start Phase 1 in the next turn.
