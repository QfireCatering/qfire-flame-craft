import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { initSmoothScrollLinks } from "../lib/smooth-scroll";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { MobileNav } from "../components/site/mobile/MobileNav";
import { Footer } from "../components/site/Footer";
import { StickyMobileCTA } from "../components/site/StickyMobileCTA";
import { FloatingQuoteCTA } from "../components/site/FloatingQuoteCTA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow justify-center mb-6">404</div>
        <h1 className="heading-lg text-bone">Page not found</h1>
        <p className="mt-4 text-bone/65">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow justify-center mb-6">Something went wrong</div>
        <h1 className="heading-md text-bone">This page didn't load</h1>
        <p className="mt-4 text-bone/65">Try again, or head back home.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Qfire Catering — Arizona & San Diego's Premium Live-Fire BBQ & Steakhouse Caterer" },
      { name: "description", content: "Premium live-fire catering by Food Network veteran Chef Terry Matthews — featured on BBQ Brawl, Cutthroat Kitchen and Camp Cutthroat. 15+ years, 2,000+ events. Luxury wood-fired, charcoal-grilled and steakhouse catering for weddings, corporate events and private parties across Phoenix Metro & San Diego County." },
      { name: "author", content: "Chef Terry Matthews — Qfire Catering" },
      { name: "theme-color", content: "#0a0907" },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "Qfire Catering" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Qfire Catering — Arizona & San Diego's Premium Live-Fire BBQ & Steakhouse Caterer" },
      { property: "og:description", content: "Food Network veteran Chef Terry Matthews. 15+ years, 2,000+ events, 4.9★. Premium wood-fired, charcoal-grilled and steakhouse catering for luxury weddings, corporate events and private parties — Phoenix Metro & San Diego County." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Qfire Catering — Premium Live-Fire BBQ & Steakhouse Caterer | Phoenix & San Diego" },
      { name: "twitter:description", content: "Food Network veteran Chef Terry Matthews. Premium live-fire, wood-fired and steakhouse catering for luxury weddings, corporate events & private parties." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/dab37163-8763-48fb-b5df-669f70f27e6f" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/dab37163-8763-48fb-b5df-669f70f27e6f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter+Tight:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://qfire-flame-craft.lovable.app/#website",
              name: "Qfire Catering",
              alternateName: "The BBQ Daddy",
              url: "https://qfire-flame-craft.lovable.app/",
              inLanguage: "en-US",
              publisher: { "@id": "https://qfire-flame-craft.lovable.app/#business" },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://qfire-flame-craft.lovable.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": ["LocalBusiness", "FoodEstablishment", "CateringService"],
              "@id": "https://qfire-flame-craft.lovable.app/#business",
              name: "Qfire Catering",
              alternateName: ["The BBQ Daddy", "Qfire Catering LLC"],
              description:
                "Qfire Catering is a 100% dedicated full-service catering company — not a restaurant. Chef-led by Food Network veteran Terry Matthews, we specialize in live-fire, wood-fired BBQ and Steakhouse Experience catering for weddings, corporate events and private parties across Phoenix Metro, Arizona and San Diego County, California.",
              url: "https://qfire-flame-craft.lovable.app/",
              telephone: "+1-877-848-7211",
              email: "Eat@QfireCatering.com",
              priceRange: "$$$",
              foundingDate: "2012",
              servesCuisine: ["Wood-Fired BBQ", "Steakhouse", "American", "Barbecue"],
              areaServed: [
                { "@type": "AdministrativeArea", name: "Phoenix Metro, Arizona" },
                { "@type": "AdministrativeArea", name: "San Diego County, California" },
                { "@type": "City", name: "Phoenix" },
                { "@type": "City", name: "Scottsdale" },
                { "@type": "City", name: "Mesa" },
                { "@type": "City", name: "Chandler" },
                { "@type": "City", name: "Gilbert" },
                { "@type": "City", name: "Tempe" },
                { "@type": "City", name: "San Diego" },
                { "@type": "City", name: "La Jolla" },
                { "@type": "City", name: "Del Mar" },
                { "@type": "City", name: "Carlsbad" },
                { "@type": "City", name: "Encinitas" },
                { "@type": "City", name: "Rancho Santa Fe" },
              ],
              founder: { "@id": "https://qfire-flame-craft.lovable.app/about#chef-terry" },
              sameAs: [
                "https://www.instagram.com/thebbqdaddy/",
                "https://www.facebook.com/BBQDaddyCatering/",
                "https://www.tiktok.com/@theonlybbqdaddy",
                "https://www.theknot.com/marketplace/qfire-catering-san-diego-ca-531715",
                "https://www.weddingwire.com/biz/qfire-catering/4c33661ea8bcf7a8.html",
                "https://www.yelp.com/biz/qfire-catering-avondale-2",
                "https://share.google/0O81BJXLT3meqsHyv",
              ],
              slogan: "Arizona & San Diego's Premium Live-Fire BBQ & Steakhouse Caterer",
              knowsAbout: [
                "Live-Fire Catering",
                "Wood-Fired BBQ Catering",
                "Charcoal Grilling Catering",
                "Outdoor Wedding Grilling",
                "Premium Steakhouse Catering",
                "Live Steak Grilling",
                "Luxury Wedding Catering",
                "Premium Corporate Catering",
                "Backyard Private Party Catering",
                "Smoked Brisket",
                "Tri-Tip",
                "Ribeye",
                "Filet Mignon",
              ],
              award: [
                "Food Network — BBQ Brawl featured chef",
                "Food Network — Cutthroat Kitchen champion",
                "Food Network — Camp Cutthroat winner",
                "13+ years catering luxury weddings and corporate events",
                "2,500+ catered events across Arizona and Southern California",
              ],
              department: [
                {
                  "@type": ["LocalBusiness", "CateringService"],
                  "@id": "https://qfire-flame-craft.lovable.app/phoenix#business",
                  name: "Qfire Catering — Phoenix Metro",
                  url: "https://qfire-flame-craft.lovable.app/phoenix",
                  telephone: "+1-877-848-7211",
                  email: "Eat@QfireCatering.com",
                  priceRange: "$$$",
                  servesCuisine: ["Wood-Fired BBQ", "Steakhouse", "American", "Barbecue"],
                  areaServed: [
                    { "@type": "AdministrativeArea", name: "Phoenix Metro, Arizona" },
                    { "@type": "City", name: "Phoenix" },
                    { "@type": "City", name: "Scottsdale" },
                    { "@type": "City", name: "Mesa" },
                    { "@type": "City", name: "Chandler" },
                    { "@type": "City", name: "Gilbert" },
                    { "@type": "City", name: "Tempe" },
                    { "@type": "City", name: "Glendale" },
                    { "@type": "City", name: "Peoria" },
                    { "@type": "City", name: "Goodyear" },
                  ],
                  sameAs: ["https://share.google/0O81BJXLT3meqsHyv"],
                  parentOrganization: { "@id": "https://qfire-flame-craft.lovable.app/#business" },
                },
                {
                  "@type": ["LocalBusiness", "CateringService"],
                  "@id": "https://qfire-flame-craft.lovable.app/san-diego#business",
                  name: "Qfire Catering — San Diego County",
                  url: "https://qfire-flame-craft.lovable.app/san-diego",
                  telephone: "+1-877-848-7211",
                  email: "Eat@QfireCatering.com",
                  priceRange: "$$$",
                  servesCuisine: ["Wood-Fired BBQ", "Steakhouse", "American", "Barbecue"],
                  areaServed: [
                    { "@type": "AdministrativeArea", name: "San Diego County, California" },
                    { "@type": "City", name: "San Diego" },
                    { "@type": "City", name: "La Jolla" },
                    { "@type": "City", name: "Del Mar" },
                    { "@type": "City", name: "Carlsbad" },
                    { "@type": "City", name: "Encinitas" },
                    { "@type": "City", name: "Rancho Santa Fe" },
                    { "@type": "City", name: "Poway" },
                    { "@type": "City", name: "Oceanside" },
                    { "@type": "City", name: "Coronado" },
                  ],
                  parentOrganization: { "@id": "https://qfire-flame-craft.lovable.app/#business" },
                },
              ],
            },
            {
              "@type": "Person",
              "@id": "https://qfire-flame-craft.lovable.app/about#chef-terry",
              name: "Terry Matthews",
              alternateName: "The BBQ Daddy",
              jobTitle: "Executive Chef & Founder",
              worksFor: { "@id": "https://qfire-flame-craft.lovable.app/#business" },
              sameAs: [
                "https://www.instagram.com/thebbqdaddy/",
                "https://www.facebook.com/BBQDaddyCatering/",
                "https://www.tiktok.com/@theonlybbqdaddy",
              ],
              description:
                "Executive chef and founder of Qfire Catering. 13+ years catering luxury weddings, corporate events and private dinners across Arizona and Southern California. Featured on Food Network's BBQ Brawl with Bobby Flay, Cutthroat Kitchen champion, and Camp Cutthroat winner.",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    return initSmoothScrollLinks();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <MobileNav />
      <main className="min-h-screen pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
      <FloatingQuoteCTA />
    </QueryClientProvider>
  );
}
