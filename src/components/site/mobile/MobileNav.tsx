import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageSquare, ArrowRight } from "lucide-react";
import qfireLogo from "@/assets/qfire-logo.png.asset.json";
import { contact } from "@/lib/contact";

// Simplified mobile nav — 8 items, thumb-friendly, no clutter.
const items = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/menus", label: "Menus" },
  { to: "/weddings", label: "Weddings" },
  { to: "/corporate", label: "Corporate" },
  { to: "/private-parties", label: "Private Events" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "Meet the Chef" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <>
      {/* Top bar — compact, always visible on mobile */}
      <header className="md:hidden fixed inset-x-0 top-0 z-50 h-14 bg-ink/95 backdrop-blur-md border-b border-gold/15">
        <div className="h-full px-4 flex items-center justify-between">
          <Link to="/" aria-label="Qfire Catering — Home" className="flex items-center gap-2">
            <img src={qfireLogo.url} alt="Qfire Catering" className="h-9 w-auto" width={120} height={36} />
          </Link>
          <div className="flex items-center gap-1">
            <a
              href={contact.phoneHref}
              aria-label="Call Qfire Catering"
              className="inline-flex items-center justify-center w-11 h-11 text-gold rounded-full active:bg-gold/10"
            >
              <Phone className="size-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center w-11 h-11 text-bone rounded-full active:bg-white/5"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[70] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-y-0 right-0 w-[86%] max-w-sm bg-ink border-l border-gold/20 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-14 px-4 flex items-center justify-between border-b border-white/5 shrink-0">
            <img src={qfireLogo.url} alt="Qfire Catering" className="h-9 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-11 h-11 text-bone rounded-full active:bg-white/5"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-3">
            <ul>
              {items.map((it) => {
                const active = pathname === it.to || (it.to !== "/" && pathname.startsWith(it.to));
                return (
                  <li key={it.to}>
                    <Link
                      to={it.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between px-4 py-4 rounded-lg text-lg font-display transition-colors ${
                        active ? "text-gold bg-gold/5" : "text-bone active:bg-white/5"
                      }`}
                    >
                      {it.label}
                      <ArrowRight className={`size-4 ${active ? "text-gold" : "text-bone/30"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 px-4 py-4 border-t border-white/5 space-y-2 text-sm text-bone/70">
              <a href={contact.phoneHref} className="flex items-center gap-2 py-2 text-gold">
                <Phone className="size-4" /> {contact.phone}
              </a>
              <a href={contact.emailHref} className="flex items-center gap-2 py-2 text-gold break-all">
                <MessageSquare className="size-4 shrink-0" /> {contact.email}
              </a>
              <p className="pt-2 text-[0.7rem] tracking-[0.2em] uppercase text-bone/40">{contact.hours}</p>
            </div>
          </nav>
          <div className="p-4 border-t border-white/5 shrink-0 bg-ink">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-sm py-3.5"
            >
              See If My Date Is Available <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
