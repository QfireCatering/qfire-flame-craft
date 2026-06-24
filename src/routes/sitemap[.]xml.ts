import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, extraPages } from "@/lib/site";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/", "/locations", "/weddings", "/corporate", "/private-parties",
          "/menus", "/wood-fired", "/steakhouse", "/private-chef",
          "/bartending", "/rentals", "/pictures", "/reviews",
          "/about", "/why-qfire", "/faq", "/blog", "/quote",
          "/phoenix", "/san-diego",
        ];
        const regionPaths: string[] = [];
        for (const region of ["phoenix", "san-diego"]) {
          for (const s of services) regionPaths.push(`/${region}/${s.slug}`);
          for (const p of extraPages) regionPaths.push(`/${region}/${p.slug}`);
        }
        const all = [...staticPaths, ...regionPaths];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...all.map(p =>
            `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
