## Goal
Build a dedicated **Steak & Seafood Menu** page at `/steak-seafood-menu` that mirrors the structure of thebbqdaddy.com/steak-seafood-menu, then wire every "Steakhouse" image/card on the site to link to it.

## New route
`src/routes/steak-seafood-menu.tsx`

Full SEO `head()` (title, description, og tags, canonical, Restaurant/Menu JSON-LD), uses existing `PageHero`, dark-maroon theme, gold accents, Cormorant headings.

### Page sections (mirroring source exactly)

1. **Hero** — eyebrow "Steakhouse Catering", title "Steak & Seafood Menu", subtitle "A five-course steakhouse experience, grilled live at your event." Background: existing `steakhouse-backyard.png` asset.

2. **How pricing works** (card row)
   - Per-guest, all-inclusive five-course experience
   - 25-guest minimum (matches site convention)
   - Includes: live on-site grilling, chef + service staff, china/glassware available as add-on
   - Upcharges from source:
     - Additional protein selection: **+$32/serving**
     - Filet Mignon upgrade: **+$10/steak**
     - Lobster Tails: **+$20/serving**
   - CTA "Request Your Quote" → `/quote`
   - Note: per-person base price is not listed on the source page; we'll mirror that and direct guests to the quote form for current pricing (avoids fabricating numbers).

3. **First Course — Cold Starters (Choose 1)**
   Antipasto Kabob · Meat & Cheese Antipasto Platter · Caesar Salad · House Salad · Fresh Fruit & Veggie Platter · Bruschetta with Garlic Crostini

4. **Second Course — Warm Hors d'oeuvres (Choose 1)**
   Teriyaki Chicken & Pineapple Skewer · Grilled Shrimp Skewers · Sausage-Filled Mushroom Caps · Bacon-Wrapped Scallops · Smoked Beef Tenderloin Crostini Bites · Roasted Asparagus & Feta Salad

5. **Third Course — Dinner / Meats (Choose 3)**
   Ribeye · New York Strip · Beef Tenderloin · Filet Mignon (+$10) · Top Sirloin 10oz · Smoked Prime Rib Roast · Beef Tri-Tip · Grilled Mahi Mahi 8oz · Grilled Snapper 8oz · Lobster Tails (+$20) · Grilled Salmon 8oz · Grilled Chicken Breast
   Sub-note: "1 selection per guest · minimum 3 servings per selection · additional protein +$32"

6. **Sides (Choose 3)**
   Loaded Red Mashed · Garlic Mashed · Rosemary Roasted Reds · Baked Potato · Fresh Green Beans · Grilled Asparagus · Grilled Squash & Zucchini · Grilled Sweet Corn · Roasted Broccoli · Mac & Cheese · Alfredo Penne · Sautéed Mushrooms & Onions

7. **Final Course — Dessert (Choose 2)**
   Cheesecake Bites · French Macarons · Chocolate Cake · Cheesecake · Cake Pops · Cream Puffs · White Petit Fours · Tuxedo Petit Fours · Coffee Station

8. **Drinks (Choose 2)**
   Sweet Tea · Peach Tea · Unsweet Tea · Lemon Tea · Lemonade · Strawberry-Mint Lemonade · Blueberry Lemonade · Water

9. **CTA section** → `/quote` (reuses existing `CTASection`).

### Layout
Each course is a section with a section heading + descriptive line, then a responsive 3-column card grid (image placeholder slot + dish name + description). Per project constraint **do not change existing images** — every dish card uses a neutral placeholder (gradient charcoal tile with dish name) until the user uploads steakhouse dish photos. We'll add a clear `{/* TODO: image */}` comment per card so future uploads drop in cleanly.

## Linking the page
Wire "View Menu" / steakhouse imagery to the new route:
- `src/routes/menus.tsx` — the **Steakhouse** card's `Link` → `/steak-seafood-menu` (currently points to `/steakhouse`).
- `src/routes/steakhouse.tsx` — add prominent "View the Full Steak & Seafood Menu" button in the hero / intro and again before the CTA.
- `src/components/site/RegionPages.tsx` — the Steakhouse service card image/CTA → `/steak-seafood-menu` (alongside existing `/phoenix/steakhouse` and `/san-diego/steakhouse` region pages).
- `src/routes/index.tsx` — the homepage Steakhouse service section "View Menu" link → `/steak-seafood-menu`.

## SEO
- Add `/steak-seafood-menu` to `src/routes/sitemap[.]xml.ts`.
- JSON-LD: `Menu` schema with `hasMenuSection` for each course and `hasMenuItem` entries; include `Restaurant` parent referencing Qfire.
- Meta description targets "steakhouse catering menu Phoenix / San Diego, plated steak dinner catering, live on-site grilling".

## Open question
Do you want me to **invent base per-person pricing** (e.g. starting at $X/guest) for this page, or **leave it quote-only** like the source does? Default plan = quote-only with the three published upcharges. Reply in the plan-approval message if you want a base price shown.
