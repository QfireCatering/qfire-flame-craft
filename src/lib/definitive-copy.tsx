import type { DefinitiveContentProps } from "@/components/site/DefinitiveContent";

type Preset = Omit<DefinitiveContentProps, "topic" | "region">;

const baseConfidence: Preset["confidence"] = [
  { title: "Itemized, all-in pricing", body: "Every proposal lists food, service, rentals, travel, and gratuity separately. No surprise fees. No day-of upsells. The number you sign is the number you pay." },
  { title: "Licensed, insured, food-safe", body: "Fully licensed and insured with ServSafe-certified leadership. Most premium venues already have us on their approved-vendor list." },
  { title: "Date held with a fair deposit", body: "Your date is reserved with a transparent date-charge applied directly to your final invoice — not a sunk fee." },
  { title: "Menu stays flexible until 30 days out", body: "Refine your menu, swap proteins, and adjust guest count as your plans evolve. The contract holds the date, not the menu." },
  { title: "Chef Terry personally designs every menu", body: "You aren't handed off to a junior coordinator. The chef who appears on Food Network reads your inquiry and builds your proposal." },
  { title: "On-time setup, every event", body: "We arrive early, set with calm precision, and finish service on schedule. Our reviews on Google and The Knot reflect it." },
];

const weddingExtraFaqs = [
  { q: "How far in advance should we book?", a: "Most couples book 8–14 months out. Peak Saturdays (March–May, October–November) often fill 12+ months ahead. If your date is sooner, ask anyway — we frequently accommodate shorter timelines when our calendar allows." },
  { q: "What's the minimum guest count?", a: "Our wedding minimum is typically 50 guests for full-service plated or chef-attended live-fire service. Smaller intimate weddings are quoted case-by-case." },
  { q: "Do you handle dietary restrictions?", a: "Yes. Gluten-free, vegetarian, vegan, dairy-free, halal, kosher-style, and allergy-specific meals are built directly into the menu — not handled as awkward last-minute substitutions." },
  { q: "Will Chef Terry be at our wedding?", a: "On most weddings, yes. When Chef Terry can't be on-site, his senior sous chef — trained personally by Terry — leads the kitchen. The food and standards stay identical." },
  { q: "Can you coordinate with our planner?", a: "Absolutely. We work with most major planners in the region and slot directly into their run-of-show. We'll send a kitchen timeline two weeks before your date." },
  { q: "What does setup and breakdown include?", a: "Full setup of buffet stations, live-fire grills, chafing equipment, and service tables — plus complete breakdown, trash removal, and venue walk-through at the end of the night." },
  { q: "Do you provide rentals?", a: "Yes. China, glassware, flatware, linens, lounge furniture, dance floors, and bar setups can all be added to your proposal at honest pass-through pricing." },
  { q: "What happens if it rains?", a: "We bring weather contingencies for every outdoor wedding — covered grilling setups, tent-friendly equipment, and backup plans coordinated with your venue manager." },
  { q: "Can you handle a multi-day wedding weekend?", a: "Yes — welcome dinners, rehearsal events, day-after brunches, and farewell celebrations are common requests. Multi-event packages are usually discounted." },
  { q: "How do tastings work?", a: "Once your inquiry is qualified, you'll come to a private chef's-table tasting with Chef Terry. You'll sample your proposed menu, then refine in real time before contracts are finalized." },
];

const corporateExtraFaqs = [
  { q: "Do you provide invoicing for accounting?", a: "Yes. We provide clean PDF invoices with line-item detail, EIN, and W-9 on request — formatted for AP teams and procurement departments." },
  { q: "Can you handle recurring corporate catering?", a: "Yes. Weekly lunch programs, quarterly executive dinners, and ongoing event series are managed by a dedicated account lead with a standing menu rotation." },
  { q: "Do you sign vendor agreements and W-9s?", a: "Yes, routinely. We carry general liability and workers' compensation insurance and can provide a COI listing your company as additional insured." },
  { q: "What's the lead time for corporate events?", a: "Two weeks is ideal. For smaller drop-offs and meeting catering we frequently turn quotes around in 24–48 hours when our calendar allows." },
  { q: "Can you scale a single menu across multiple offices?", a: "Yes. We've run simultaneous service across multiple campuses with consistent menus, plating standards, and timing — coordinated by a single point of contact." },
  { q: "Do you accommodate dietary restrictions for the whole team?", a: "Every corporate menu includes gluten-free, vegetarian, and vegan options by default. Allergy-specific meals can be plated and labeled individually on request." },
  { q: "Will service staff wear branded uniforms?", a: "Our staff wear sharp black chef coats and aprons by default. Co-branded uniforms for activations and conferences can be coordinated in advance." },
  { q: "Can you set up at non-traditional venues?", a: "Yes — warehouses, parking lots, rooftops, showrooms, jobsites, hangars. If it has a safe perimeter, we can grill, plate, and serve there." },
  { q: "How is gratuity handled on corporate events?", a: "Service charge and gratuity are listed transparently on the proposal. No tip jars, no awkward end-of-event asks." },
];

const privateExtraFaqs = [
  { q: "What's the smallest private party you'll cater?", a: "Intimate dinners start at 10 guests for chef-attended in-home service. Live-fire grilling experiences and full buffets typically start at 25 guests." },
  { q: "Can you cook inside my home?", a: "Yes. We use your kitchen for finishing and plating, and bring our own equipment for live-fire stations outdoors. Counter space and a clean cooktop are all we typically need." },
  { q: "Do you handle the full party — food, bar, rentals, staff?", a: "Yes. One contact, one proposal, one team for food, bartending, rentals, plating, service, and cleanup." },
  { q: "Will you clean up before you leave?", a: "Completely. Kitchen counters wiped, dishes packed out, trash bagged and removed, and a final walk-through with you before we go." },
  { q: "Can you do themed menus?", a: "Yes — backyard luxury cookouts, supper-club tasting menus, holiday feasts, birthday tasting flights, and surprise chef's-table experiences are common requests." },
  { q: "Are kids' menus available?", a: "Yes. Kid-friendly plates with the same ingredient quality are quoted at a reduced per-person rate." },
  { q: "How discreet is your team?", a: "Highly. For celebrity and high-privacy clients we sign NDAs, arrive in unmarked vehicles, and operate without social posting before, during, or after the event." },
  { q: "Can guests interact with the chef?", a: "If you'd like — chef-attended stations and tableside interactions are part of what makes the experience memorable. We follow your lead." },
];

const steakhouseExtraFaqs = [
  { q: "What cuts are featured in the steakhouse experience?", a: "Center-cut filet mignon, prime ribeye, New York strip, T-bone, picanha, prime rib, surf & turf with cold-water lobster tail or jumbo shrimp, and Atlantic salmon. All charcoal-grilled over real hardwood." },
  { q: "How is this different from a regular catering buffet?", a: "Steaks are grilled to order, sliced in front of guests, and plated with restaurant-style presentation. Service staff wear chef coats. The room feels like a true steakhouse, in your venue." },
  { q: "Can you do steaks cooked to temperature for each guest?", a: "Yes — chef-attended carving stations let guests request their preferred doneness in real time. For plated service we coordinate doneness counts during your final menu meeting." },
  { q: "What's included with the steakhouse package?", a: "Premium proteins, three signature sides, fresh-baked breads, butter board, salad course, sauces, fully attended grilling, plating staff, and full breakdown. Add bar, rentals, and dessert as needed." },
  { q: "How many guests can you scale this for?", a: "From 30-guest intimate dinners to 1,000+ guest galas. Phoenix can scale to 2,000 guests. San Diego scales to 2,500. Larger events are quoted with additional grill stations and staff." },
  { q: "Can the steakhouse experience travel to my venue?", a: "Yes — we bring portable charcoal grills, plating stations, and service equipment. We've executed full steakhouse service at private estates, vineyards, museums, hangars, and resort lawns." },
];

const woodFiredExtraFaqs = [
  { q: "What's the difference between wood-fired and standard BBQ?", a: "Wood-fired uses real hardwood (oak, hickory, mesquite, pecan) with live fire and slow smoke — no gas shortcuts, no electric smokers. The flavor is deeper, the bark is darker, and the meat is more tender." },
  { q: "Can you do wood-fired catering indoors?", a: "Cooking happens outside with proper ventilation and venue approval. Plating and service can happen indoors — we coordinate the layout with your venue manager." },
  { q: "What proteins are available wood-fired?", a: "Brisket, pulled pork, pork ribs, beef ribs, smoked chicken, turkey, sausage, salmon, picanha, tri-tip, and tomahawks. Custom proteins (lamb, whole hog, prime rib) on request." },
  { q: "How early do you start cooking for a wood-fired event?", a: "Brisket and pork start 12–18 hours before service. We manage the smoker overnight if needed — you'll wake up to perfect food on event day." },
  { q: "What sides come with wood-fired catering?", a: "Signature Smokehouse Beans, smoked mac & cheese, southern coleslaw, cornbread, potato salad, collard greens, charred corn, and more. Full side list on the wood-fired menu." },
];

const aboutExtraFaqs = [
  { q: "What is Chef Terry's training and background?", a: "Twenty-five years of professional kitchen experience across catering, restaurants, and live-fire competition. ServSafe-certified, classically trained in technique, self-taught in barbecue craft, and refined under tournament pressure." },
  { q: "What Food Network shows has Chef Terry appeared on?", a: "BBQ Brawl with Bobby Flay, Camp Cutthroat, and Cutthroat Kitchen — multiple appearances spanning competition cooking and high-pressure live service." },
  { q: "How involved is Chef Terry in each event?", a: "Personally. Every menu is built by Chef Terry. He's on-site for most weddings and signature events. When he can't be, his senior sous chef — trained personally by Terry — leads service." },
  { q: "How did The BBQ Daddy brand begin?", a: "From a backyard smoker, a tight-knit family, and a refusal to serve mediocre food. The brand grew through word-of-mouth and television exposure into a full-service luxury catering company across two states." },
];

export const definitiveCopy: Record<string, Preset> = {
  wedding: {
    explainer:
      "Luxury wedding catering, done well, is more than great food. It's a stage-managed, multi-hour service operation that has to deliver restaurant-quality plates to dozens or hundreds of guests, on a precise timeline, in a venue that wasn't built to be a restaurant. Qfire was designed from the ground up to do exactly that — premium proteins, fresh-built menus, chef-attended live-fire stations, polished service, and a calm, on-time kitchen.",
    explainerLong:
      "Most caterers default to standard buffet thinking. Qfire treats your wedding the way a steakhouse treats a private room — with a head chef on the line, a clear timeline, and a refusal to cut quality corners to hit a number. The result is food guests still talk about months later, and a planning experience that feels handled, not hectic.",
    included: [
      "Custom multi-course menu designed by Chef Terry",
      "Premium proteins (Wood-Fire, Live-Fire Steakhouse, or surf & turf)",
      "Passed hors d'oeuvres + cocktail-hour stations (optional)",
      "Chef-attended live-fire grilling on-site",
      "Buffet, family-style, plated, or stationed service",
      "Salads, fresh-baked breads, sauces, and signature sides",
      "Linen-draped buffet, chafing dishes, and serving equipment",
      "Professional uniformed service staff",
      "Full setup, refresh, and breakdown",
      "Trash removal and venue walk-through at end of night",
      "Optional bar program with bartenders and glassware",
      "Optional rentals: china, flatware, linens, lounge, dance floor",
    ],
    planningTips: [
      { title: "Lock the date before the menu", body: "Premium Saturdays book 8–14 months out. Reserve your date with a small date-charge first, then refine the menu over the next few months as your vision sharpens." },
      { title: "Build for the timeline, not the Pinterest board", body: "Beautiful menus fall apart when they don't match the timeline. Tell us your ceremony, cocktail, and reception times first — we'll design a menu that lands hot and on cue." },
      { title: "Plan one signature moment", body: "One unforgettable food moment beats six average ones. A live-fire carving station, a chef-attended raw bar, a late-night smoked-brisket slider drop — pick one and commit." },
      { title: "Feed the vendors", body: "Photographers, DJs, planners, and videographers work 8–12 hours straight. A simple vendor meal keeps them sharp through your reception." },
      { title: "Confirm the kitchen, not just the venue", body: "Some beautiful venues have no real kitchen. Tell us your venue early so we can scope generator power, prep space, and water access in your proposal." },
      { title: "Decide on bar early", body: "Beverage program drives more of your final budget than people expect. Decide between beer-and-wine, full bar, or signature cocktails before you finalize headcount math." },
      { title: "Don't over-order", body: "We portion for the actual guest count, not a fluffed-up safety number. You shouldn't pay for food that goes home in your planner's car." },
      { title: "Plan a late-night bite", body: "After dancing, a slider station or a smoked-brisket grilled cheese drop hits differently. It's the most-photographed moment of the night." },
    ],
    bookingSteps: [
      { title: "Submit your inquiry", body: "Share your date, venue, estimated guest count, and the vibe you're going for. Takes about three minutes." },
      { title: "Quick discovery call", body: "A 15–20 minute call with Chef Terry or your dedicated coordinator to align on menu direction, service style, and budget reality." },
      { title: "Receive your custom proposal", body: "Within 3–5 business days you'll get a fully itemized proposal — food, service, rentals, travel, gratuity — all transparent." },
      { title: "Hold your date", body: "Reserve your date with a 35% date-charge applied directly to your final invoice. Your date is now locked; the menu stays flexible." },
      { title: "Private tasting", body: "Come to a private chef's-table tasting with Chef Terry. Refine entrees, sides, and signature drinks in real time." },
      { title: "Final details (30 days out)", body: "Lock the menu, finalize rentals, confirm the timeline, and review the layout with your planner or venue." },
      { title: "Guest count + balance (14 days out)", body: "Final guest count locks. Balance is due. We send the kitchen timeline to your planner." },
      { title: "Event day", body: "We arrive early, set with calm precision, run service on schedule, and leave the venue cleaner than we found it." },
    ],
    expectations: {
      before: [
        "Discovery call within 24 hours of inquiry",
        "Itemized proposal within 3–5 business days",
        "Tasting scheduled at our prep kitchen",
        "Floor-plan and timeline coordination with your planner",
        "Final menu locked 30 days before the wedding",
      ],
      during: [
        "On-site arrival 2–4 hours before service",
        "Calm, uniformed staff visible to guests",
        "Hot food served on cue, plated to standard",
        "Chef-attended grilling and carving stations",
        "Quiet kitchen even at full guest count",
      ],
      after: [
        "Buffet broken down without disrupting dancing",
        "All Qfire equipment packed and removed",
        "Trash bagged and hauled per venue policy",
        "Final walk-through with you or your planner",
        "Follow-up email within 48 hours for feedback",
      ],
    },
    differentiators: [
      { title: "Chef Terry actually designs your menu", body: "You aren't handed to a junior sales rep. The Food Network chef whose name is on the door reads your inquiry, builds your proposal, and is at most weddings personally." },
      { title: "Real wood, real fire", body: "We don't fake it with gas. Oak, hickory, mesquite, and pecan over live coals — the depth of flavor restaurants try and fail to copy." },
      { title: "Steakhouse-quality plating, anywhere", body: "Polished service, chef coats, real presentation. We bring true steakhouse energy to lawns, vineyards, and venues that weren't built to feel that way." },
      { title: "No hidden fees", body: "Your proposal lists every line. No day-of upsells, no surprise gratuity, no pricing games when you're three weeks out and stressed." },
    ],
    confidence: baseConfidence,
    extraFaqs: weddingExtraFaqs,
    ctaLabel: "Request Wedding Quote",
  },
  corporate: {
    explainer:
      "Corporate catering shouldn't feel like ordering lunch. Whether it's an executive board dinner, a quarterly all-hands, a product launch, or a multi-day conference, the food sets the tone for everything that happens around it. Qfire delivers chef-level food and service with the operational precision that procurement teams, planners, and CEOs actually need.",
    explainerLong:
      "We've executed everything from intimate C-suite dinners to 1,500-person activations across multiple cities. The common thread: a single point of contact, transparent invoicing, on-time setup, and food that makes the room go quiet on the first bite. No spreadsheet drama, no day-of surprises.",
    included: [
      "Custom menu built around your event type and audience",
      "Premium proteins and chef-driven plating",
      "Buffet, plated, stationed, or boxed service",
      "Fully attended service with uniformed staff",
      "Live-fire grilling for marquee events",
      "Standing dietary coverage (GF / V / Vegan / allergy)",
      "Disposable Dinnerware or full china/glassware rentals",
      "Setup, refresh, and complete breakdown",
      "Single account lead for the full event lifecycle",
      "Itemized invoicing, W-9, COI on request",
      "Optional bar package with licensed bartenders",
      "Multi-day and multi-city coordination",
    ],
    planningTips: [
      { title: "Brief us on the room, not just the menu", body: "Are people networking, presenting, or being honored? The right service style depends on what the food is supposed to support." },
      { title: "Default to live stations for energy", body: "Chef-attended stations keep the room moving and create photo moments for activations and launches." },
      { title: "Plan for the dietary minority", body: "There will always be vegetarian, gluten-free, and allergy-specific guests. Build for them up front — it costs nothing extra and avoids awkward day-of asks." },
      { title: "Lock the timeline two weeks out", body: "We need final headcount and run-of-show 10–14 days before the event for smooth execution." },
      { title: "Use one menu across multiple offices", body: "If your company has multiple campuses, one rotating menu builds team identity and simplifies vendor management." },
      { title: "Build the bar around the audience", body: "Executive dinners deserve a real wine program. Team celebrations want signature cocktails. Vendor lunches don't need a bar at all." },
    ],
    bookingSteps: [
      { title: "Inquiry or quick call", body: "Share event type, date, headcount, location, and the goal of the event." },
      { title: "Proposal in 24–48 hours", body: "Itemized PDF proposal sent to you and your finance team — food, service, rentals, gratuity all listed separately." },
      { title: "Vendor onboarding (if needed)", body: "W-9, COI naming your company as additional insured, and any procurement documents handled fast." },
      { title: "Confirm and pay Date Retainer", body: "A 35% non-refundable Date Retainer secures your event date and is applied directly to your final invoice. Final balance invoiced post-event for many corporate clients." },
      { title: "Final headcount (10–14 days out)", body: "Lock guest count, dietary count, and layout. We confirm the run-of-show with your planner." },
      { title: "Event day execution", body: "Early arrival, clean setup, on-time service, full breakdown, no fingerprints left behind." },
      { title: "Post-event invoice + recap", body: "Clean invoice for AP, plus a short recap email noting what worked and what we'd refine next time." },
    ],
    expectations: {
      before: [
        "Quote turnaround in 24–48 hours",
        "Single account lead from first email",
        "W-9, COI, and vendor docs handled in days, not weeks",
        "Menu tasting available on request",
        "Run-of-show aligned with your planner 10–14 days out",
      ],
      during: [
        "Uniformed, on-brand service staff",
        "Calm, restaurant-paced execution",
        "Chef-attended stations for marquee moments",
        "Dietary plates labeled and identifiable",
        "Real-time flexibility for run-of-show changes",
      ],
      after: [
        "Complete breakdown and trash removal",
        "Clean invoice formatted for AP",
        "Post-event recap email within 48 hours",
        "Standing program clients onto a recurring cadence",
        "Photo assets shared on request for internal recap decks",
      ],
    },
    differentiators: [
      { title: "Procurement-friendly", body: "W-9, COI, additional-insured listings, recurring invoicing — handled fast and cleanly." },
      { title: "Chef-driven, not catering-tray-driven", body: "Real chef-built menus, not warmed-up steam-table food. The difference is obvious from the first bite." },
      { title: "Scales without quality drop", body: "From 20-person board dinners to 1,500-person activations. The standards don't change as the headcount goes up." },
      { title: "One point of contact", body: "You email one person. That person owns the entire event. No game of telephone with sales, ops, and culinary." },
    ],
    confidence: baseConfidence,
    extraFaqs: corporateExtraFaqs,
    ctaLabel: "Request Corporate Pricing",
  },
  private: {
    explainer:
      "Private party catering is the most intimate work we do. It's your home, your guests, your milestone moment — and the margin for error is thin. Qfire brings restaurant-grade food, calm professional service, and a team that treats your home like the venue it is for the night.",
    explainerLong:
      "Whether it's a backyard birthday with 30 friends, a 100-guest anniversary, a holiday dinner for the extended family, or a discreet celebrity gathering — we plan, prep, cook, serve, and clean up so you can actually be a guest at your own party.",
    included: [
      "Custom menu tailored to the occasion",
      "Premium proteins, fresh sides, and signature breads",
      "Chef-attended live-fire grilling on-site",
      "Buffet, family-style, plated, or stationed service",
      "Uniformed service staff and bartenders (optional)",
      "Setup of stations, chafers, and serving equipment",
      "Disposable Dinnerware or upgraded rental packages",
      "Discreet, low-footprint kitchen operation",
      "Full breakdown and cleanup before we leave",
      "Trash bagged and removed per your direction",
      "Optional bar package with licensed bartenders",
      "Optional rentals: china, glassware, linens, lounge",
    ],
    planningTips: [
      { title: "Map the flow of the night", body: "Where do guests arrive, where do they eat, where do they linger? We'll design service to match — not fight against it." },
      { title: "One showstopper per party", body: "A live-fire carving station, a tableside chef course, a custom dessert moment. One memorable beat is better than three forgettable ones." },
      { title: "Plan for kids", body: "If kids are coming, plan for them on purpose. A simple kids' plate keeps parents relaxed and the party calm." },
      { title: "Use your outdoor space", body: "Live-fire setups outside, plating and dessert inside. It separates noise and smoke from the conversation." },
      { title: "Think about parking and access", body: "Tell us where our team can park, where the grill goes, and where trash leaves from. It saves an hour of fumbling on the day." },
      { title: "Decide on bar early", body: "Beer and wine, full bar, or signature cocktails only? The decision affects glassware, ice, and staffing in your proposal." },
    ],
    bookingSteps: [
      { title: "Inquiry", body: "Date, guest count, location, and the type of moment you're planning." },
      { title: "Discovery call", body: "Quick call to align on menu, service style, and your home's layout." },
      { title: "Custom proposal", body: "Itemized proposal within a few business days." },
      { title: "Date Retainer holds the date", body: "A 35% non-refundable Date Retainer secures your event date and is applied directly to your final invoice." },
      { title: "Menu refinement", body: "Refine your menu over the next few weeks. We'll finalize 14 days before the event." },
      { title: "Final headcount", body: "Lock guest count, dietary needs, and layout details one to two weeks out." },
      { title: "Event night", body: "We arrive, set quietly, cook brilliantly, serve calmly, and leave your home spotless." },
    ],
    expectations: {
      before: [
        "Discovery call within 24 hours",
        "Itemized proposal within a few business days",
        "Menu and service plan refined over multiple touches",
        "Walkthrough of your home or venue if needed",
        "Clear arrival, parking, and setup plan",
      ],
      during: [
        "Low-footprint, professional kitchen presence",
        "Chef-attended grilling and plating",
        "Uniformed, discreet service staff",
        "Bar and beverage service managed end-to-end",
        "Real-time flexibility as the night evolves",
      ],
      after: [
        "Complete kitchen and station cleanup",
        "Counters wiped, dishes packed out, trash removed",
        "Final walkthrough with you before we leave",
        "Follow-up note within 48 hours",
        "NDA-discreet — no social posting from our team",
      ],
    },
    differentiators: [
      { title: "Home-friendly footprint", body: "We work clean, work quiet, and treat your home like a venue. Most clients are surprised how little disruption there is." },
      { title: "Chef-led, not template-led", body: "Every private party menu is built fresh. No recycled standard menus, no compromise plates." },
      { title: "Discretion by default", body: "NDA-friendly, unmarked vehicles available, zero social posting unless you ask for it." },
      { title: "You get to be a guest", body: "We handle setup, cooking, service, and cleanup so you spend the night with your guests, not in the kitchen." },
    ],
    confidence: baseConfidence,
    extraFaqs: privateExtraFaqs,
    ctaLabel: "Request Private Party Quote",
  },
  steakhouse: {
    explainer:
      "The Steakhouse Experience is what happens when a Food Network chef builds a premium steakhouse dinner service around your venue. Center-cut filet, prime ribeye, New York strip, T-bone, picanha, prime rib, and surf & turf — all charcoal-grilled over real hardwood, sliced in front of your guests, and plated with restaurant-grade presentation.",
    explainerLong:
      "This isn't a fancier buffet. It's a portable steakhouse: chef-attended grilling stations, polished service staff in chef coats, three signature sides, fresh-baked breads, butter board, salad course, and sauces. The room feels different the moment the first plate goes down.",
    included: [
      "Premium proteins (filet, ribeye, NY strip, T-bone, picanha, prime rib, salmon)",
      "Optional surf & turf upgrades (lobster tail, jumbo shrimp, scallops)",
      "Three signature steakhouse sides",
      "Fresh-baked breads and house butter board",
      "Chef-built salad course",
      "Signature sauces (peppercorn, chimichurri, garlic-herb butter, horseradish cream)",
      "Live charcoal grilling on-site",
      "Chef-attended carving and plating stations",
      "Uniformed service staff in chef coats",
      "Full setup, plating, service, and breakdown",
      "Linen-draped buffet and station setup",
      "Optional bar program with bartenders",
    ],
    planningTips: [
      { title: "Pick your protein mix early", body: "A two-protein steakhouse menu is the sweet spot for most events — usually filet + ribeye or ribeye + surf & turf. Three proteins reads as a tasting experience." },
      { title: "Build the room for the moment", body: "Steakhouse dinners benefit from intimate lighting, lower music, and a clear sightline to the carving station. Tell your planner." },
      { title: "Doneness counts matter at scale", body: "For plated service, we'll collect doneness counts in your final meeting and stagger the grill to land plates hot, on cue." },
      { title: "Pair the wine to the menu", body: "If you're running a wine program, plan it around the dominant protein — ribeye reads bigger than filet, surf & turf wants brighter whites alongside reds." },
      { title: "Use the carving station as theater", body: "A live carving station is the most-photographed part of the night. Position it where guests can see it." },
      { title: "Reserve enough timeline", body: "A full steakhouse dinner service usually wants 75–90 minutes of guest seating to land properly. Tell your planner — it shapes everything." },
    ],
    bookingSteps: [
      { title: "Inquiry", body: "Share date, venue, guest count, and protein direction." },
      { title: "Discovery call", body: "15–20 minute call with Chef Terry to align on menu and service style." },
      { title: "Itemized proposal", body: "Sent within a few business days — food, service, rentals, travel, gratuity all transparent." },
      { title: "Reserve the date", body: "35% Date Retainer secures your event date and credits to your final invoice." },
      { title: "Final menu lock (2 weeks out)", body: "Final guest count, protein mix, sides, sauces, and doneness counts locked in 2 weeks prior to your event." },
      { title: "Event night", body: "On-time arrival, calm grill line, restaurant-grade plating, full breakdown." },
    ],
    expectations: {
      before: [
        "Quote within 3–5 business days",
        "Menu refined across multiple touches",
        "Site visit for unfamiliar venues",
        "Final doneness counts confirmed 2 weeks out",
      ],
      during: [
        "Live charcoal grills running on-site",
        "Chef coats, polished plating, real presentation",
        "Steaks sliced and plated in front of guests",
        "Sauces, breads, and sides on cue",
        "Calm kitchen energy even at full headcount",
      ],
      after: [
        "Grills, stations, and equipment fully removed",
        "Venue left cleaner than we found it",
        "Final walk-through with you or your planner",
        "Follow-up email within 48 hours",
        "Optional photo handoff to your photographer",
      ],
    },
    differentiators: [
      { title: "True steakhouse energy, your venue", body: "Real chef-coat service, real wood-fire grilling, real steakhouse presentation. Restaurants try to copy this." },
      { title: "Center-cut, hand-selected", body: "Premium cuts hand-selected for each event. We don't trim our standards for catering — the steak you eat is the steak you'd order in a restaurant." },
      { title: "Chef-attended, not buffet-attended", body: "Real cooking happens on-site. Not warmed up, not held in chafers, not pre-sliced hours earlier." },
      { title: "Scales from 30 to 2,500", body: "Intimate private dinners through luxury weddings, galas, and large-format events — same standards, more stations." },
    ],
    confidence: baseConfidence,
    extraFaqs: steakhouseExtraFaqs,
    ctaLabel: "Request Steakhouse Quote",
  },
  woodFired: {
    explainer:
      "Wood-fired catering, done right, takes 12–18 hours of slow, careful cooking over real hardwood. That's why most caterers don't actually do it — they say they do, then fire up gas smokers or shortcut it with liquid smoke. Qfire doesn't. Every brisket, pork shoulder, and rack of ribs we serve is cooked over oak, hickory, mesquite, or pecan, the way it's supposed to be.",
    explainerLong:
      "The difference is in the bark, the smoke ring, the tenderness, and the depth of flavor. Real wood fire is unforgiving — and that's exactly why guests can taste it instantly.",
    included: [
      "Choice of premium smoked proteins (brisket, pulled pork, ribs, chicken, sausage)",
      "Signature Smokehouse Beans and southern sides",
      "Fresh cornbread and house sauces",
      "Wood-fire cooking on-site or pre-smoked and reheated to standard",
      "Buffet, family-style, plated, or boxed service",
      "Uniformed service staff",
      "Setup of chafers, serving equipment, and stations",
      "Disposable Dinnerware or upgraded rental packages",
      "Complete breakdown and trash removal",
      "Optional bar program",
      "Custom protein add-ons (lamb, tri-tip, whole hog)",
      "Dietary-friendly sides built into every menu",
    ],
    planningTips: [
      { title: "Two proteins is the sweet spot", body: "Brisket + pulled pork covers 90% of crowds beautifully. Add a third (ribs, chicken, or sausage) for variety on larger events." },
      { title: "Plan for the bark, not the photo", body: "Real wood-fired bark looks darker than catering pictures online. That's a feature — that's where the flavor lives." },
      { title: "Sides do heavy lifting", body: "Smokehouse beans, smoked mac, southern slaw, and cornbread carry the meal as much as the protein. Don't shortcut the side list." },
      { title: "Pick a sauce strategy", body: "House sauces on the side let guests dress to taste. Pre-sauced is faster but flatter. We'll recommend based on your service style." },
      { title: "Build for second plates", body: "Wood-fired food invites seconds. We portion accordingly so the buffet stays full from first plate to last." },
      { title: "Consider chef-attended grilling", body: "For showcase events, add a live grilling station — picanha, ribeye, or salmon cooked in front of guests alongside the smoked proteins." },
    ],
    bookingSteps: [
      { title: "Inquiry", body: "Date, guest count, location, and a sense of what proteins you want." },
      { title: "Custom proposal", body: "Itemized proposal within a few business days." },
      { title: "Reserve the date", body: "Deposit applied to your final invoice." },
      { title: "Menu refinement", body: "Refine the protein mix, sides, and service style over the next few weeks." },
      { title: "Final headcount", body: "Lock guest count and dietary needs 7–14 days out." },
      { title: "We start cooking the day before", body: "Brisket and pork shoulder go on the smoker the night before. Real wood fire takes time — and we plan for it." },
      { title: "Event day", body: "On-time arrival, clean setup, hot food on the buffet, complete breakdown." },
    ],
    expectations: {
      before: [
        "Quote within a few business days",
        "Menu refined across multiple touches",
        "Final headcount locked 7–14 days out",
        "Smoker fired up the night before the event",
        "Clear arrival, setup, and service plan",
      ],
      during: [
        "Hot food held to standard, not over-held",
        "Uniformed service staff",
        "Buffet refilled proactively",
        "Sides plated bright and fresh",
        "Calm, professional kitchen presence",
      ],
      after: [
        "Buffet broken down without disruption",
        "Trash bagged and hauled per venue",
        "All Qfire equipment removed",
        "Final walk-through with you or your planner",
        "Follow-up note within 48 hours",
      ],
    },
    differentiators: [
      { title: "Real wood, real fire — not gas", body: "Oak, hickory, mesquite, pecan. Live coals. No shortcuts. The flavor tells the story." },
      { title: "12–18 hour cook times", body: "We start the smoker the night before so your food is right at service. Most caterers can't or won't." },
      { title: "Chef-driven sides", body: "Sides matter as much as protein. Smokehouse beans, smoked mac, southern slaw, cornbread — all built from scratch." },
      { title: "Backyard luxury, scaled", body: "From 25-guest backyards to 1,500-guest activations. Same wood, same fire, same standards." },
    ],
    confidence: baseConfidence,
    extraFaqs: woodFiredExtraFaqs,
    ctaLabel: "Request Wood-Fired Quote",
  },
  about: {
    explainer:
      "Qfire Catering is led by Chef Terry Matthews — known to fans as The BBQ Daddy — a Food Network chef with 25+ years of professional kitchen experience and over 2,000 catered events. Every Qfire menu is personally designed by Chef Terry, and he's on-site for most signature events across Phoenix Metro and San Diego County.",
    explainerLong:
      "The brand was built around a simple refusal: never serve mediocre food, never treat a wedding like an assembly line, never let a private event feel transactional. That standard is what got us on television, what got us into premium venues' approved-vendor lists, and what keeps couples and corporate clients coming back.",
    included: [
      "Food Network appearances on BBQ Brawl, Camp Cutthroat, Cutthroat Kitchen",
      "25+ years of professional kitchen experience",
      "2,000+ catered events executed",
      "ServSafe-certified leadership",
      "Two-region operation: Phoenix Metro + San Diego County",
      "Full-service wedding, corporate, and private party catering",
      "Live-fire wood-fired and steakhouse-grade menus",
      "Personally chef-designed menus on every event",
      "Licensed, insured, approved at most premium venues",
      "Five-star reviews across Google, The Knot, and Yelp",
    ],
    planningTips: [
      { title: "Talk to the chef early", body: "On a Qfire event, the menu conversation starts with Chef Terry — not a sales rep. The earlier you talk, the better the menu lands." },
      { title: "Lean into our specialties", body: "Live-fire steakhouse, wood-fired BBQ, and chef-attended luxury private dinners are what we're built for. Lean in." },
      { title: "Use our two-region reach", body: "If you have events in both Phoenix and San Diego, one vendor relationship covers both calendars." },
    ],
    bookingSteps: [
      { title: "Inquiry", body: "Tell us about your event — type, date, venue, headcount." },
      { title: "Discovery call with Chef Terry", body: "A real conversation about what you want and how we'd build it." },
      { title: "Custom proposal", body: "Itemized, transparent, and tailored to your event — not a template." },
      { title: "Reserve, refine, execute", body: "Hold the date, refine the menu over the following weeks, and let us run the night." },
    ],
    expectations: {
      before: [
        "Direct access to Chef Terry on most inquiries",
        "Tasting available for qualified events",
        "Itemized proposal with no hidden fees",
        "Clear timeline and onboarding process",
      ],
      during: [
        "Chef-led kitchen on-site",
        "Polished, uniformed service",
        "Restaurant-grade plating",
        "Calm execution at any scale",
      ],
      after: [
        "Full cleanup and breakdown",
        "Follow-up email for feedback",
        "Standing relationships with returning clients",
        "Repeat-event discounts for recurring corporate work",
      ],
    },
    differentiators: [
      { title: "Television-tested standards", body: "BBQ Brawl, Camp Cutthroat, Cutthroat Kitchen. The pressure of competition cooking trained the standards we run every event by." },
      { title: "Two-region operation, one team", body: "Phoenix Metro and San Diego County both fully staffed — same chef, same menus, same standards." },
      { title: "Personally chef-designed menus", body: "Every menu is built by Chef Terry personally. No template menus, no junior coordinators designing your wedding food." },
      { title: "Backyard luxury, executed", body: "The energy of a backyard cookout with the polish of a five-star restaurant. That balance is hard to find anywhere else." },
    ],
    confidence: baseConfidence,
    extraFaqs: aboutExtraFaqs,
    ctaLabel: "Talk With Chef Terry",
  },
};

// Generic regional preset — covers all services for region root pages.
definitiveCopy.region = {
  explainer:
    "Qfire is a chef-led, Food-Network-pedigreed catering company built around real fire, real proteins, and real service. We cater weddings, corporate events, private parties, and large-format galas with the same standards top steakhouses run their dining rooms by — and we do it in your venue, your home, or your office.",
  explainerLong:
    "Every event is personally menu-designed by Chef Terry Matthews. Every kitchen line is led by a senior chef. Every proposal is itemized. Every event ends with a clean venue and a follow-up note. That consistency is the whole product.",
  included: [
    "Custom menu personally designed by Chef Terry",
    "Premium proteins (Wood-Fire BBQ, Live-Fire Steakhouse, surf & turf)",
    "Buffet, family-style, plated, or stationed service",
    "Chef-attended live-fire grilling on-site",
    "Uniformed, polished service staff",
    "Full setup, refresh, and breakdown",
    "Disposable Dinnerware or upgraded china/glassware rentals",
    "Linen-draped buffet and chafing equipment",
    "Optional bar program with licensed bartenders",
    "Travel and on-site logistics handled end-to-end",
    "Dietary coverage built into every menu",
    "Single point of contact through event day",
  ],
  planningTips: [
    { title: "Tell us the goal of the event", body: "An anniversary feels different from a launch party. The right menu and service style start from what the night is supposed to feel like." },
    { title: "Match service style to the room", body: "Buffet for energy, plated for elegance, family-style for intimacy, stations for movement. Tell us the room — we'll match it." },
    { title: "Pick one signature moment", body: "A live carving station, a chef-attended raw bar, a late-night brisket slider drop. One memorable beat beats six average ones." },
    { title: "Plan the dietary minority up front", body: "GF, vegetarian, vegan, allergy-specific — built in from day one, not patched on at the end." },
    { title: "Reserve early", body: "Premium dates fill 6–14 months out. Lock the date with a 35% non-refundable Date Retainer (applied to your final invoice) and refine the menu over time." },
    { title: "Use one vendor for food, bar, rentals", body: "One contract, one team, one timeline. Easier to coordinate, cleaner to budget, calmer on event day." },
  ],
  bookingSteps: [
    { title: "Inquiry", body: "Share date, venue, headcount, and the vibe you want." },
    { title: "Discovery call", body: "Quick call with our team — and often Chef Terry directly — to align on menu and service style." },
    { title: "Custom proposal", body: "Itemized PDF proposal in a few business days." },
    { title: "Reserve the date", body: "Deposit applied directly to your final invoice." },
    { title: "Refine the menu", body: "Refine over the next weeks or months as planning evolves." },
    { title: "Lock final details", body: "Final headcount, dietary counts, and timeline 7–14 days out." },
    { title: "Event day", body: "On-time arrival, calm execution, restaurant-grade plating, full breakdown." },
  ],
  expectations: {
    before: [
      "Inquiry response within 24 hours",
      "Itemized proposal within a few business days",
      "Menu refinement across multiple touches",
      "Site visit available for unfamiliar venues",
      "Final lock 14 days before the event",
    ],
    during: [
      "On-time arrival and clean setup",
      "Chef-attended grilling and plating",
      "Polished, uniformed service staff",
      "Hot food on cue and on standard",
      "Calm kitchen energy at any scale",
    ],
    after: [
      "Buffet broken down without disruption",
      "All Qfire equipment removed",
      "Trash bagged and hauled per venue policy",
      "Final walkthrough with you or your planner",
      "Follow-up email within 48 hours",
    ],
  },
  differentiators: [
    { title: "Chef Terry designs every menu", body: "Television-tested standards. Personally built proposals. Not handed off to a junior coordinator." },
    { title: "Real wood, real fire", body: "Oak, hickory, mesquite, pecan over live coals. No gas shortcuts, no liquid smoke." },
    { title: "Restaurant-grade plating, any venue", body: "Polished service staff in chef coats. True steakhouse presentation in your venue." },
    { title: "Two-region operation", body: "Phoenix Metro and San Diego County fully staffed — one chef, one team, one set of standards." },
  ],
  confidence: baseConfidence,
  extraFaqs: [
    { q: "Which areas do you cater in this region?", a: "We cover the full metro area and most reasonable drive-time destinations from our home base. Travel is quoted transparently inside your proposal." },
    { q: "Do you handle weddings, corporate, and private parties?", a: "Yes — all three are core service lines, with dedicated regional pages for each. One vendor, one team, all event types." },
    { q: "Can you scale a large event in this region?", a: "Phoenix scales to 2,000 guests. San Diego scales to 2,500. Larger events are quoted with additional grill stations and staff." },
    { q: "Do you have an approved-vendor list with local venues?", a: "Yes — we're on the approved-vendor list at many premium venues in both regions. Tell us your venue and we'll likely already know the kitchen." },
    { q: "What's the fastest you can turn a quote?", a: "For smaller drop-offs and meeting catering, often 24–48 hours. For weddings and large events, 3–5 business days for a fully itemized proposal." },
  ],
  ctaLabel: "Request a Quote",
};



// Menus preset
definitiveCopy.menus = {
  explainer:
    "Our menus are not templates. Every Qfire menu is custom-built by Chef Terry around your guests, your venue, and the feeling you want the night to have. What's published here is a starting point — the real menu is the one we design together.",
  explainerLong:
    "We run two distinct culinary programs: Wood-Fired (slow-smoked brisket, tri-tip, pulled meats, comfort sides) and Steakhouse Experience (charcoal-grilled ribeye, filet, picanha, surf & turf). Either can be served buffet, family-style, plated, or stationed — and either can scale from a 25-guest backyard dinner to a 2,500-guest gala.",
  included: [
    "Personally designed menu PDF",
    "Itemized pricing on every line",
    "Service-style recommendation per menu",
    "GF, vegetarian, vegan, allergen coverage",
    "Sample tasting once contracted (weddings & large events)",
    "Menu refinement up to 30 days out",
    "Pairing suggestions for bar program",
    "Plating and presentation notes",
  ],
  planningTips: [
    { title: "Start with one signature moment", body: "Anchor the menu around a chef-attended carving station, a live-fire ribeye line, or a raw-bar opener. Everything else supports that." },
    { title: "Match service style to the room", body: "Buffet = energy. Plated = elegance. Family-style = intimacy. Stations = movement. The room tells us which to recommend." },
    { title: "Don't over-order proteins", body: "Two proteins covers 90% of events. Three is a stretch. Four is wasted food and budget." },
    { title: "Plan the side balance", body: "One starch, one vegetable, one slaw or salad. Variety beats volume." },
    { title: "Book the tasting after the proposal", body: "Tastings happen once your date is held — that's when the menu deserves the time investment." },
    { title: "Ask about regional pricing", body: "Phoenix and San Diego have different pricing tiers. We'll quote the correct region from your inquiry." },
  ],
  bookingSteps: [
    { title: "Pick a starting menu", body: "Wood-Fired or Steakhouse — or a blend of both." },
    { title: "Submit the inquiry form", body: "Date, region, headcount, style." },
    { title: "Review the custom proposal", body: "Fully itemized PDF within a few business days." },
    { title: "Refine with Chef Terry", body: "Swap proteins, add a station, adjust sides." },
    { title: "Lock the menu", body: "Final menu confirmed 14–30 days before event." },
  ],
  expectations: {
    before: ["Menu PDF delivered with proposal", "Two rounds of refinement included", "Tasting offered for qualified weddings"],
    during: ["Menu executed exactly as plated in proposal", "Hot food on cue, cold food properly chilled", "Allergen meals plated and labeled"],
    after: ["Leftover policy reviewed in advance", "Menu archived for future event reference"],
  },
  differentiators: [
    { title: "Custom over template", body: "No two Qfire menus are identical. Yours is built from scratch." },
    { title: "Two full programs, one team", body: "Wood-Fired and Steakhouse run by the same chef, same standard." },
    { title: "Honest portioning", body: "We portion for full plates, not skinny servings — but not for waste either." },
  ],
  confidence: baseConfidence,
  extraFaqs: [
    { q: "Can I combine Wood-Fired and Steakhouse on one menu?", a: "Yes — many weddings and corporate events feature a wood-fired buffet with a chef-attended steak carving station as the signature moment." },
    { q: "Do you publish a full menu with prices online?", a: "Pricing is regional and quoted per inquiry to stay accurate. The wood-fired menu form and steakhouse menu pages cover the most common items." },
    { q: "Will the published menu items change?", a: "Seasonally, yes. Sides rotate. Proteins stay consistent. Your contracted menu is locked once signed." },
  ],
  ctaLabel: "Request a Custom Menu",
};

// Pricing preset
definitiveCopy.pricing = {
  explainer:
    "Qfire pricing is itemized and transparent. You see exactly what the food costs, what the service costs, what the rentals cost, and what travel costs — before you sign. The number on your proposal is the number on your final invoice.",
  explainerLong:
    "Pricing varies by region, service style, guest count, and menu. Wood-Fired starts at $12.99/guest in Phoenix and $15.99/guest in San Diego. Steakhouse Experience starts at $74/guest buffet and $128/guest plated. Most full-service weddings and corporate events land between $65 and $145 per guest, all-in.",
  included: [
    "Food and beverage line items",
    "Service staff hours by role",
    "Live-fire grilling equipment fee (when applicable)",
    "Rentals (china, glassware, linens) if added",
    "Travel and on-site logistics",
    "Service charge and gratuity (shown separately)",
    "Sales tax (when applicable)",
    "Optional bar program",
  ],
  planningTips: [
    { title: "Set a per-guest budget, not a total", body: "Per-guest pricing scales with your headcount. Tell us your target — we'll build to it." },
    { title: "Service style drives 30% of cost", body: "Plated is more labor than buffet. Stations are more equipment than family-style. Choose intentionally." },
    { title: "Rentals can double your budget", body: "China-and-glass weddings cost meaningfully more than disposable-dinnerware ones. Both are beautiful — pick on purpose." },
    { title: "Don't forget gratuity", body: "Service charge and gratuity together typically run 20–22% on top of food and labor. Always budget for them." },
    { title: "Lock final count 14 days out", body: "Pricing is per the final guaranteed count. Drops below contract minimums are billed at the minimum." },
    { title: "Ask about off-peak dates", body: "Fridays, Sundays, and off-season dates often unlock pricing flexibility." },
  ],
  bookingSteps: [
    { title: "Share scope", body: "Date, region, headcount, menu interest, service style." },
    { title: "Receive itemized proposal", body: "Every line broken out, in plain language." },
    { title: "Negotiate transparently", body: "Trim where you want, upgrade where it matters." },
    { title: "Reserve with date charge", body: "35% applied directly to your final invoice." },
    { title: "Final invoice 14 days out", body: "Adjusted for final guest count and any add-ons." },
  ],
  expectations: {
    before: ["Itemized proposal within a few business days", "No surprise fees added later", "Free revisions during the proposal stage"],
    during: ["Service delivered exactly as priced", "Add-ons logged and quoted before execution"],
    after: ["Final invoice matches signed proposal", "Receipts and W-9 provided on request"],
  },
  differentiators: [
    { title: "All-in, line-itemed", body: "Everything broken out. Nothing buried." },
    { title: "Honest minimums", body: "Stated up front — not discovered at signature." },
    { title: "Two regions, two real price books", body: "Phoenix and San Diego are quoted on their actual local cost basis." },
  ],
  confidence: baseConfidence,
  extraFaqs: [
    { q: "Is there a deposit?", a: "Yes — a 35% Date Retainer holds your date and is applied directly to your final invoice. It is not a separate fee." },
    { q: "What payment methods do you accept?", a: "ACH, wire, all major credit cards, and corporate check. Card processing fees are passed through transparently." },
    { q: "Are gratuity and service charge the same?", a: "No. Service charge covers staff and operational overhead. Gratuity goes directly to the team. Both are shown separately on your proposal." },
  ],
  ctaLabel: "Get a Custom Quote",
};

// Bartending preset
definitiveCopy.bartending = {
  explainer:
    "Qfire's bar program is licensed, insured, and fully managed. We build the cocktail list around your menu and your guests, stock to the right par, staff to the right ratios, and run the bar like a hospitality room — not a beverage table.",
  explainerLong:
    "We offer beer-and-wine bars, full open bars, premium and luxury tiers, signature cocktail programs, and zero-proof menus. Bartenders arrive uniformed, friendly, and disciplined. Glassware, mixers, garnishes, and ice are coordinated as part of the package.",
  included: [
    "Licensed, insured bartenders",
    "Mobile bar setup (or your existing bar)",
    "Custom cocktail menu",
    "Mixers, juices, syrups, garnishes",
    "Ice, glassware (or eco disposable)",
    "Bar tools, shakers, jiggers",
    "Pre-event consultation and pour plan",
    "Full setup and breakdown",
  ],
  planningTips: [
    { title: "Pick one signature cocktail", body: "Two max. More than that slows the bar and confuses the guest experience." },
    { title: "Plan ratios honestly", body: "One bartender per 75 guests for beer/wine, one per 50 for full bar, one per 35 for premium cocktails." },
    { title: "Stock for the front half", body: "Most consumption happens in the first 90 minutes. We stock the bar accordingly." },
    { title: "Always offer zero-proof", body: "A real mocktail program — not just soda water — has become a true luxury standard." },
    { title: "Decide BYO vs full service", body: "We can pour your alcohol or supply everything. The math usually favors letting us handle it end-to-end." },
  ],
  bookingSteps: [
    { title: "Share guest count and bar style", body: "Beer/wine, full bar, premium, luxury, or signature." },
    { title: "Custom bar proposal", body: "Itemized with staffing, supplies, and cocktail list." },
    { title: "Refine the cocktail menu", body: "Two rounds of refinement included." },
    { title: "Lock final headcount", body: "14 days out, with adjustments allowed for late RSVPs." },
    { title: "Event day", body: "Bar set 90 minutes before service. Polished, calm, and on time." },
  ],
  expectations: {
    before: ["Custom cocktail menu PDF", "Licensed bartender confirmation", "Insurance certificate for venue"],
    during: ["Sharp uniforms, warm hospitality", "Consistent pours, no over-service", "Bar restocked silently throughout the night"],
    after: ["Full breakdown and trash removal", "Glassware returned (if rented)", "Leftover alcohol re-packed and handed off"],
  },
  differentiators: [
    { title: "Licensed and insured", body: "Real liquor liability coverage. COI provided to your venue." },
    { title: "Hospitality, not just pours", body: "Our bartenders are part of the show — friendly, fast, and gracious." },
    { title: "Built into one invoice", body: "Food, service, and bar on a single proposal, single point of contact." },
  ],
  confidence: baseConfidence,
  extraFaqs: [
    { q: "Do you provide the alcohol?", a: "We can supply alcohol or pour what you provide — both are common. We'll recommend the cleaner option based on your venue rules." },
    { q: "Can you do a cash bar?", a: "Yes, where permits allow. Most luxury hosts choose hosted bars or hybrid (hosted beer/wine, cash spirits)." },
    { q: "Do you carry liquor liability insurance?", a: "Yes — full liquor liability coverage with COI delivered to your venue in advance." },
  ],
  ctaLabel: "Plan Your Bar Program",
};

// Rentals preset
definitiveCopy.rentals = {
  explainer:
    "Qfire coordinates every rental that touches your event — china, glassware, flatware, linens, chafing equipment, bars, and lounge furniture — at honest pass-through pricing. One vendor, one timeline, one invoice. You don't manage three different rental companies.",
  explainerLong:
    "We work with the top rental houses in Phoenix and San Diego and select pieces that match your venue and aesthetic. Setup, swap-outs, and pickup are coordinated with your venue manager directly so you never have to broker between vendors.",
  included: [
    "China, glassware, flatware coordination",
    "Linens and napkins in your color palette",
    "Chafing equipment and serving pieces",
    "Bar setups and back-bar coolers",
    "Lounge furniture, high-tops, dance floors",
    "Heaters, fans, and weather contingencies",
    "Setup, swap-out, and pickup logistics",
    "Damage waiver coordination",
  ],
  planningTips: [
    { title: "Decide china vs disposable early", body: "It's the single biggest rental cost lever. Both look great — one costs roughly 3x the other." },
    { title: "Match linen to venue color", body: "Tell us the venue floor and wall colors. We'll suggest linens that read clean on camera." },
    { title: "Order 10% over count", body: "Last-minute RSVPs, breakage, and re-sets always happen. The 10% buffer prevents shortfalls." },
    { title: "Bundle the bar", body: "Bar setup with matching back-bar pieces reads more polished than mismatched rentals." },
  ],
  bookingSteps: [
    { title: "Share venue and aesthetic", body: "Photos help. So do existing planner mood boards." },
    { title: "Rentals proposal", body: "Itemized pass-through pricing with our coordination fee shown separately." },
    { title: "Lock 30 days out", body: "Rental houses confirm pulls 21 days out. Earlier is better for premium pieces." },
    { title: "Setup the day prior or morning of", body: "Coordinated directly with your venue manager." },
  ],
  expectations: {
    before: ["Itemized rentals list with photos when relevant", "Linen samples available on request"],
    during: ["On-time delivery and setup", "Quiet refresh and replacement throughout the night"],
    after: ["Full repack and pickup", "Damage walkthrough handled by us, not you"],
  },
  differentiators: [
    { title: "Pass-through pricing", body: "We don't mark up rentals — we charge a clear coordination fee instead." },
    { title: "One coordinator, all vendors", body: "You don't manage three different rental houses." },
    { title: "Venue-aware selections", body: "We know what works at most premium venues in both regions." },
  ],
  confidence: baseConfidence,
  extraFaqs: [
    { q: "Can I use my own rental company?", a: "Yes. We'll coordinate with them on setup timing and table layouts at no extra cost." },
    { q: "What if something breaks?", a: "Damage waivers are built into every rental order. Normal-use breakage is covered." },
    { q: "Do you handle setup and breakdown?", a: "Yes. Rentals arrive set, are refreshed during service, and broken down at the end of the night." },
  ],
  ctaLabel: "Plan Your Rentals",
};

// Locations preset
definitiveCopy.locations = {
  explainer:
    "Qfire operates two fully staffed regional kitchens: Phoenix Metro (Arizona) and San Diego County (California). Same chef. Same standards. Same level of service. Two separate teams, two separate proposals, two real local price books.",
  explainerLong:
    "Phoenix covers the full Valley — Scottsdale, Mesa, Chandler, Gilbert, Glendale, and outlying venues. San Diego covers the coast and inland — La Jolla, Del Mar, Carlsbad, Rancho Santa Fe, Encinitas, and the surrounding wine country. Travel beyond core metro is quoted transparently inside your proposal.",
  included: [
    "Local team based in your region",
    "Region-specific pricing",
    "Approved-vendor relationships with premium venues",
    "Local rental and bar coordination",
    "Permit and insurance handling per municipality",
    "Travel logistics for outlying venues",
  ],
  planningTips: [
    { title: "Tell us the venue early", body: "We likely already know the kitchen, the load-in, and the timing rules." },
    { title: "Ask about outlying venues", body: "Sedona, Prescott, Temecula, Julian — we cater there often. Travel is quoted clearly." },
    { title: "Cross-region events are possible", body: "We've coordinated multi-city activations and roadshow tours across both regions." },
  ],
  bookingSteps: [
    { title: "Pick a region", body: "Phoenix or San Diego — your inquiry routes to that team." },
    { title: "Region-specific proposal", body: "Local pricing, local logistics, local team." },
    { title: "Region-specific service", body: "Executed by the team that lives and works there." },
  ],
  expectations: {
    before: ["Quote from your regional team", "Local venue knowledge applied to logistics"],
    during: ["Local team on-site, not flown in"],
    after: ["Local pickup, local cleanup, local follow-up"],
  },
  differentiators: [
    { title: "Two real operations", body: "Not one team driving 6 hours. Two separate full kitchens." },
    { title: "One chef, both regions", body: "Chef Terry sets the standard across both. Same plates in both states." },
    { title: "Region-true pricing", body: "Phoenix and San Diego have different cost bases. We quote each region honestly." },
  ],
  confidence: baseConfidence,
  extraFaqs: [
    { q: "Do you cater outside core metro?", a: "Yes — Sedona, Prescott, Temecula, Palm Springs, and other outlying venues are common. Travel is quoted in the proposal." },
    { q: "Can you handle a destination wedding across regions?", a: "Yes. Pick the closer region for primary logistics; we'll handle travel for the other." },
    { q: "Do you have approved-vendor status at my venue?", a: "Often yes. Share the venue name in your inquiry — we'll confirm immediately." },
  ],
  ctaLabel: "Choose Your Region",
};

// Why Qfire preset
definitiveCopy.whyQfire = {
  explainer:
    "Most catering companies are operations companies that happen to cook. Qfire is a chef-led hospitality company that happens to scale. The difference shows up in three places: who designs your menu, who runs your kitchen line, and how your venue looks when we leave.",
  explainerLong:
    "Chef Terry Matthews — Food Network competitor on Cutthroat Kitchen, BBQ Brawl, and Camp Cutthroat — personally designs every menu. Senior chefs trained by Terry run every kitchen line. Uniformed captains run every service. Two thousand events later, that hasn't changed.",
  included: [
    "Chef-designed custom menu",
    "Senior chef on every kitchen line",
    "Uniformed captains and service staff",
    "Live-fire grilling on-site",
    "Restaurant-grade plating standards",
    "Full setup, refresh, and breakdown",
    "Licensed bar program option",
    "Rentals coordination option",
    "Single point of contact, end to end",
    "Two-region operation (Phoenix + San Diego)",
  ],
  planningTips: [
    { title: "Vet your caterer's kitchen leadership", body: "Ask who is on the line. If the answer is vague, the food usually is too." },
    { title: "Ask about staff ratios", body: "We run 1 server per 25 guests for plated and 1 per 35 for buffet. Most competitors run leaner — and you can taste it." },
    { title: "Ask for the breakdown plan", body: "How your venue looks at midnight matters. A good caterer leaves it cleaner than they found it." },
    { title: "Read the post-event reviews", body: "Pre-event sales is one thing. Post-event reviews tell the truth." },
  ],
  bookingSteps: [
    { title: "Inquiry", body: "Share date, venue, headcount, and goal." },
    { title: "Discovery", body: "Real conversation — often with Chef Terry himself." },
    { title: "Proposal", body: "Itemized, custom, transparent." },
    { title: "Tasting", body: "For weddings and large events." },
    { title: "Execution", body: "On time, on standard, every event." },
  ],
  expectations: {
    before: ["Direct chef involvement during design", "Itemized proposal, no surprises"],
    during: ["Calm, disciplined kitchen energy", "Polished service throughout"],
    after: ["Clean venue, real follow-up, repeat-client relationship"],
  },
  differentiators: [
    { title: "Food Network pedigree", body: "Television-tested standards on every plate." },
    { title: "Real wood, real fire", body: "Oak, hickory, mesquite, pecan over live coals." },
    { title: "Hospitality discipline", body: "Restaurant standards executed in event venues." },
    { title: "Two-region operation", body: "Phoenix and San Diego fully staffed with local teams." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Talk With Chef Terry",
};

// FAQ preset
definitiveCopy.faq = {
  explainer:
    "Most of what couples, planners, and corporate buyers need to know about Qfire is on this page. If something isn't covered, the fastest path is to call or text our team directly — most questions get answered in a single conversation.",
  included: [
    "Pricing & investment FAQ",
    "Service style & menu FAQ",
    "Booking & scheduling FAQ",
    "Staffing & service FAQ",
    "Rentals & logistics FAQ",
    "Bar program FAQ",
    "Dietary & allergen FAQ",
    "Travel & venue FAQ",
  ],
  planningTips: [
    { title: "Start with the inquiry form", body: "Even partial details produce a useful proposal. Refinement happens after." },
    { title: "Send venue and date first", body: "Those two data points unlock 80% of the planning conversation." },
    { title: "Bring your planner into the first call", body: "If you have a planner, looping them in early saves three rounds of back-and-forth." },
    { title: "Ask the hard questions early", body: "Pricing, ratios, insurance, breakdown — get answers in writing before you sign." },
  ],
  bookingSteps: [
    { title: "Read the FAQ", body: "Most pre-sale questions are answered here." },
    { title: "Submit the inquiry form", body: "Date, region, headcount, style." },
    { title: "Get on a quick call", body: "Discovery call with our team — often Chef Terry directly." },
    { title: "Receive your proposal", body: "Itemized, custom, transparent." },
  ],
  expectations: {
    before: ["Answers in plain language", "Itemized pricing on request"],
    during: ["Calm, disciplined service"],
    after: ["Post-event follow-up email"],
  },
  differentiators: [
    { title: "Real chef, real answers", body: "Chef Terry personally reads inquiries and weighs in on menu questions." },
    { title: "No hidden fees", body: "What's quoted is what's invoiced." },
    { title: "Transparent process", body: "Pricing, ratios, insurance, breakdown — all in writing." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Ask Chef Terry",
};

// Holiday preset (regional sub-route)
definitiveCopy.holiday = {
  explainer:
    "Holiday catering is its own discipline. The calendar is short, the kitchen is busy, and the night needs to feel warm without feeling rushed. Qfire builds office holiday parties, family Thanksgivings, Christmas dinners, and end-of-year client events around carved centerpieces, comforting sides, and disciplined service that lands on time.",
  explainerLong:
    "We run holidays as full-service productions: prime rib carved tableside, whole brined turkeys, wood-fired brisket, classic sides, hot drinks, and a bar program tuned to the season. Whether it's a 30-person family Thanksgiving in your home or a 500-person company gala at a hotel ballroom, the standard is the same.",
  included: [
    "Carved centerpiece (prime rib, turkey, brisket, or ham)",
    "Three to five seasonal sides",
    "Fresh-baked breads and butter board",
    "Pies and seasonal desserts",
    "Hot toddy, mulled wine, or cider station (optional)",
    "Uniformed service staff and captain",
    "Buffet, family-style, stationed, or plated formats",
    "Full setup, refresh, breakdown, and trash haul",
  ],
  planningTips: [
    { title: "Lock the date early", body: "November and December weekends fill 90+ days out. Friday and Saturday nights go first." },
    { title: "Decide the format up front", body: "Buffet feels casual and abundant. Plated feels formal and slow. Stations feel like a party. Pick the vibe first, the menu second." },
    { title: "Account for short daylight", body: "Outdoor setups need lighting earlier than you'd think. We factor heaters and lighting into winter proposals." },
    { title: "Add a hot drink station", body: "Spiced cider, hot toddies, and mulled wine cost very little and change the whole feel of the room." },
    { title: "Mind the dietary mix", body: "Holiday tables almost always include guests with gluten-free, vegetarian, or allergy needs. Build those in from day one." },
  ],
  bookingSteps: [
    { title: "Inquire by early October", body: "Peak holiday dates are typically gone by Halloween." },
    { title: "Confirm format and headcount", body: "Buffet vs plated, indoor vs outdoor, seated vs flowing." },
    { title: "Lock the menu 30 days out", body: "Final menu, dietary counts, and bar tier confirmed." },
    { title: "Final headcount + timeline 14 days out", body: "Run-of-show shared with you and your venue." },
    { title: "Enjoy the night", body: "We arrive early, set quietly, serve on time, and break down cleanly." },
  ],
  expectations: {
    before: ["Menu and bar confirmed 30 days out", "Dietary needs gathered", "Venue and timeline coordinated"],
    during: ["On-time arrival and setup", "Hot food on time", "Uniformed, attentive service", "Bar paced for the crowd"],
    after: ["Full breakdown and trash haul", "Kitchen left spotless", "Follow-up thank-you"],
  },
  differentiators: [
    { title: "Holiday-trained kitchen", body: "Carving stations, brined birds, and seasonal sides are core to our menu — not a once-a-year experiment." },
    { title: "Decor-aware service", body: "We work around your florals, candles, and tablescape — never on top of them." },
    { title: "Family-feel hospitality", body: "Our staff greet guests, refill drinks, and read the room like restaurant captains." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Book Your Holiday Date",
};

// Backyard preset (regional sub-route)
definitiveCopy.backyard = {
  explainer:
    "Backyard catering is where Qfire shines hardest. We bring the smokers, the live-fire grills, the staff, the bar, and the cleanup crew — and we run your driveway like it's our restaurant. You hand us a guest count and a vibe. We hand you back the easiest party you've ever hosted.",
  explainerLong:
    "From graduations and milestone birthdays to anniversaries, engagements, and reunions, our backyard package scales from 25 guests to several hundred. Wood-fired brisket and tri-tip, charcoal-grilled steaks, fresh sides, dessert stations, and a full bar — all served with restaurant-quality presentation in the comfort of your home.",
  included: [
    "Live-fire smokers and charcoal grills",
    "Full kitchen and service team",
    "Buffet, stationed, or family-style setup",
    "Disposable or upgraded serviceware",
    "Optional bar program with licensed bartenders",
    "Optional rentals (tables, linens, lounge, dance floor)",
    "Full setup and complete breakdown",
    "Kitchen and yard left cleaner than we found it",
  ],
  planningTips: [
    { title: "Walk us through the yard first", body: "We need to see grill placement, prep space, and guest flow before we quote." },
    { title: "Plan for shade and seating", body: "Even 50 guests need somewhere to land. Rentals make a bigger difference than people expect." },
    { title: "Pick one statement protein", body: "Brisket, prime rib, picanha, or surf & turf — anchor the menu around one wow item." },
    { title: "Add a kids' setup", body: "A separate kid-friendly plate and a quiet corner make a long event much easier on families." },
    { title: "Don't forget the neighbors", body: "A heads-up note (and sometimes a plate) makes the night smoother for everyone." },
  ],
  bookingSteps: [
    { title: "Send date, headcount, and address", body: "We confirm reach and grill access." },
    { title: "Discovery call", body: "Menu, format, bar, rentals — we build the proposal together." },
    { title: "Lock the proposal and date", body: "Itemized, transparent, no surprise fees." },
    { title: "Final headcount 14 days out", body: "Menu and timeline confirmed." },
    { title: "Event day", body: "We show up early, run the night, and pack out clean." },
  ],
  expectations: {
    before: ["Site walk-through or detailed photos", "Final menu and timeline 14 days out", "Bar and rental list confirmed"],
    during: ["Live-fire cooking visible to guests", "Hot food, paced service", "Friendly captain managing the floor"],
    after: ["Yard reset and bagged trash", "Kitchen wiped down", "Leftover food packaged for you"],
  },
  differentiators: [
    { title: "Real fire in your driveway", body: "We bring competition-grade smokers and charcoal grills — not propane warmers." },
    { title: "Restaurant-grade plating", body: "Stations look like a chef's table, not a backyard cookout." },
    { title: "You don't lift a finger", body: "From setup through cleanup, the night is fully run." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Quote My Backyard",
};

// Gallery preset
definitiveCopy.gallery = {
  explainer:
    "Every photo in this gallery is a real Qfire event — real fire, real plating, real guests. Use it to picture how a wedding, corporate dinner, or backyard party with us actually looks and feels before you book.",
  explainerLong:
    "We update the gallery regularly with weddings, executive dinners, private parties, and large-format galas across Phoenix Metro and San Diego County. If you want to see something specific (a venue, a service style, a guest count), ask — we likely have more photos than we've published.",
  included: [
    "Wedding receptions and welcome dinners",
    "Corporate galas and executive dinners",
    "Backyard luxury private parties",
    "Live-fire grilling stations and chef-attended carving",
    "Plated steakhouse dining",
    "Wood-fired buffets and family-style spreads",
    "Bar setups and signature cocktail programs",
    "Setup, service, and breakdown moments",
  ],
  planningTips: [
    { title: "Look for the format you want", body: "Buffet, plated, stations, family-style — each has a different feel. Pick the vibe, then the menu." },
    { title: "Notice the staff", body: "Uniformed, calm, attentive. That's the standard on every event." },
    { title: "Watch the fire", body: "We cook over real hardwood and charcoal. The smoke is part of the show." },
  ],
  bookingSteps: [
    { title: "Browse the gallery", body: "Identify the format and feel you want." },
    { title: "Submit an inquiry", body: "Date, region, headcount, style." },
    { title: "Request more photos", body: "Ask for venue-specific or style-specific shots." },
    { title: "Book the date", body: "Lock your date before someone else does." },
  ],
  expectations: {
    before: ["Photo walk-through if requested", "Style reference shared with your captain"],
    during: ["Photo-worthy plating and stations", "Discreet photographer coordination"],
    after: ["High-resolution event photos shared (when our photographer is on-site)"],
  },
  differentiators: [
    { title: "Every photo is ours", body: "No stock imagery. No staged shoots. Real events, real clients, real food." },
    { title: "Consistency across years", body: "Look at any event from any year — the standard is the same." },
    { title: "Plating is the proof", body: "Anyone can post one good plate. We can show 200." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Request a Quote",
};

// Reviews preset
definitiveCopy.reviews = {
  explainer:
    "Qfire is built on repeat clients and word-of-mouth. Our reviews come from real weddings, corporate dinners, and private parties — and they're consistent for a reason. We do the work the same way every time, and our clients notice.",
  explainerLong:
    "We collect feedback after every event. The reviews here are representative — not cherry-picked. If you want to talk to a past client directly, ask. We'll connect you with someone who hosted an event close in size and style to yours.",
  included: [
    "Five-star Google and The Knot reviews",
    "Referral relationships with top planners",
    "Approved-vendor status at premium venues",
    "Repeat clients across multiple events",
    "Direct introductions to past clients on request",
  ],
  planningTips: [
    { title: "Read for consistency, not just stars", body: "Anyone can have a great night. Look for the same words showing up over and over." },
    { title: "Check service style match", body: "A great buffet caterer isn't always a great plated one. Look for reviews in your format." },
    { title: "Ask for a reference call", body: "We're happy to connect you with a past client similar to your event." },
  ],
  bookingSteps: [
    { title: "Read the reviews", body: "Top to bottom, recent first." },
    { title: "Ask for references", body: "We'll connect you with a past client." },
    { title: "Inquire", body: "Submit the form with date and headcount." },
    { title: "Book", body: "Lock the date with a 35% non-refundable Date Retainer — applied directly to your final invoice." },
  ],
  expectations: {
    before: ["Honest reference calls if requested", "Full proposal in writing"],
    during: ["The same service the reviews describe"],
    after: ["A follow-up note and an invitation to leave honest feedback"],
  },
  differentiators: [
    { title: "Real reviews, real names", body: "No fake names, no purchased reviews. Verify on Google and The Knot." },
    { title: "Repeat business", body: "Most of our calendar is repeat clients and referrals." },
    { title: "Reference-ready", body: "We'll put you on the phone with someone who hosted a similar event." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Request a Quote",
};

// Blog / journal preset
definitiveCopy.blog = {
  explainer:
    "The Qfire journal is where Chef Terry and our team share planning guides, venue spotlights, menu ideas, and field notes from real events. If you're researching a wedding, corporate dinner, or private party, start here — most of the questions you have, we've already answered in writing.",
  explainerLong:
    "Posts are organized by region and by topic. Phoenix and San Diego each have their own venue spotlights and local guides. Cross-regional posts cover menu design, service style, pricing strategy, and the why behind how we cook.",
  included: [
    "Wedding planning guides",
    "Venue spotlights by region",
    "Corporate event playbooks",
    "Backyard luxury inspiration",
    "Menu and pairing ideas",
    "Pricing and budgeting guides",
    "Behind-the-scenes from Chef Terry",
  ],
  planningTips: [
    { title: "Start with your format", body: "Buffet, plated, stations — read the post that matches the night you want." },
    { title: "Read the venue spotlight", body: "If you've picked a venue, there's a good chance we've worked there." },
    { title: "Save the pricing guide", body: "It will save you three calls with three other caterers." },
  ],
  bookingSteps: [
    { title: "Read the relevant guide", body: "Pick the topic closest to your event." },
    { title: "Note your questions", body: "Bring them to the discovery call." },
    { title: "Inquire", body: "Submit the form with date, region, headcount." },
    { title: "Book", body: "Lock the date with confidence." },
  ],
  expectations: {
    before: ["Educational content that helps you plan smarter"],
    during: ["The execution matches the standards described in the posts"],
    after: ["More posts as we run more events"],
  },
  differentiators: [
    { title: "Written by the chef", body: "Most posts are dictated by Chef Terry, not outsourced." },
    { title: "Region-specific", body: "Phoenix advice and San Diego advice are not the same advice." },
    { title: "Updated regularly", body: "New posts after meaningful events and seasons." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Request a Quote",
};

// Venues preset
definitiveCopy.venues = {
  explainer:
    "Qfire is on the approved-vendor list at most premium venues across Phoenix Metro and San Diego County. We've cooked at resorts, vineyards, museums, hangars, ballrooms, estates, and outdoor ranches — and we know how each one runs.",
  explainerLong:
    "Working with a caterer who already knows your venue saves hours of coordination. We know the kitchen access, the load-in rules, the grill placement, the noise ordinances, and the timeline preferences of every venue manager we've worked with. If you've picked a venue, ask — we likely have a checklist for it.",
  included: [
    "Approved-vendor relationships with premium venues",
    "Venue-specific load-in and setup checklists",
    "Direct coordination with venue managers",
    "On-site cooking permits and insurance handled",
    "Equipment sized to each venue's footprint",
    "Timeline tuned to venue rules (noise, end-time, clean-out)",
  ],
  planningTips: [
    { title: "Confirm caterer approval first", body: "Before booking a venue, confirm we're approved (or that outside catering is allowed)." },
    { title: "Ask about kitchen access", body: "Hot prep, water, electricity — each venue is different." },
    { title: "Walk the load-in path", body: "Long carries, stairs, and elevator timing change setup logistics." },
    { title: "Mind the noise ordinance", body: "Outdoor venues often have hard end-times. We plan service around them." },
  ],
  bookingSteps: [
    { title: "Tell us your venue", body: "We'll confirm familiarity and approval status." },
    { title: "Get the venue-specific proposal", body: "Pricing reflects the actual logistics of your space." },
    { title: "We coordinate with the venue", body: "Load-in, timeline, breakdown — handled directly." },
    { title: "Lock the date", body: "And the venue manager hears from us, not you." },
  ],
  expectations: {
    before: ["Venue walk-through if needed", "Direct communication with venue manager"],
    during: ["On-time load-in", "Respect for venue rules and floors", "Clean, quiet breakdown"],
    after: ["Venue left in original condition or better", "Final walk-through with venue manager"],
  },
  differentiators: [
    { title: "Already approved", body: "We're on the preferred list at most premium venues — no friction." },
    { title: "Venue-specific playbooks", body: "We don't show up to learn your venue. We already know it." },
    { title: "Manager-friendly", body: "Venue managers ask for us by name." },
  ],
  confidence: baseConfidence,
  ctaLabel: "Request a Quote",
};
