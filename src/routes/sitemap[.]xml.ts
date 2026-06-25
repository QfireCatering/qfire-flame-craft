import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, extraPages } from "@/lib/site";
import { blogPosts } from "@/lib/blog-posts";

// Relative <loc> values stay correct under whatever host the project is served from.
// Replace with absolute base when a custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/locations",
          "/service-areas",
          "/weddings",
          "/wedding-catering-phoenix",
          "/wedding-catering-san-diego",
          "/corporate",
          "/private-parties",
          "/menus",
          "/pricing",
          "/wood-fired",
          "/steakhouse",
          "/steak-seafood-menu",
          "/steakhouse-experience",
          "/bartending",
          "/rentals",
          "/pictures",
          "/reviews",
          "/about",
          "/why-qfire",
          "/faq",
          "/blog",
          "/quote",
          "/contact",
          "/privacy",
          "/terms",
          "/accessibility",
          "/phoenix",
          "/san-diego",
        ];
        const regionPaths: string[] = [];
        for (const region of ["phoenix", "san-diego"] as const) {
          for (const s of services) regionPaths.push(`/${region}/${s.slug}`);
          for (const p of extraPages) regionPaths.push(`/${region}/${p.slug}`);
          regionPaths.push(`/${region}/holiday`);
          regionPaths.push(`/${region}/backyard`);
        }
        const blogPaths = blogPosts.map((p) => `/blog/${p.slug}`);
        const all = [...staticPaths, ...regionPaths, ...blogPaths];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...all.map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
