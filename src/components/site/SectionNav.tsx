import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export interface SectionNavItem {
  id: string;
  label: string;
}

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    };
    const obs = new IntersectionObserver(onIntersect, {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    });
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    smoothScrollTo(top, 2000);
    setActive(id);
    setMobileOpen(false);
  };

  const activeItem = items.find((i) => i.id === active) ?? items[0];

  return (
    <>
      <style>{`
        @keyframes bright-pulse {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 oklch(0.78 0.13 82 / 0.7); }
          50% { transform: scale(1.35); opacity: 1; box-shadow: 0 0 10px 4px oklch(0.78 0.13 82 / 0.35); }
        }
        .bright-pulse-dot {
          animation: bright-pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      {/* DESKTOP — pinned upper-right, collapsible */}
      <nav
        aria-label="Page sections"
        className="hidden lg:flex fixed right-5 top-28 z-30 flex-col items-end max-h-[75vh]"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Collapse section menu" : "Expand section menu"}
          className="mb-2 inline-flex items-center gap-3 px-5 py-3 bg-ink/90 backdrop-blur border-2 border-gold/60 text-[0.72rem] tracking-[0.22em] uppercase text-gold hover:bg-ink hover:border-gold transition-colors shadow-[0_0_30px_-8px_oklch(0.78_0.13_82/0.4)]"
        >
          <span className="size-3 rounded-full bg-gold bright-pulse-dot" />
          {open ? "Hide" : "On this page"}
        </button>
        {open && (
          <div className="bg-ink/90 backdrop-blur border border-white/10 shadow-2xl shadow-black/50 py-4 pl-5 pr-6 max-w-[16rem] overflow-y-auto">
            <ul className="space-y-2.5 border-l border-gold/25 pl-4">
              {items.map((it) => {
                const isActive = active === it.id;
                return (
                  <li key={it.id}>
                    <a
                      href={`#${it.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(it.id);
                      }}
                      className={`block text-[0.65rem] tracking-[0.22em] uppercase transition-colors py-0.5 ${
                        isActive ? "text-gold" : "text-bone/55 hover:text-bone"
                      }`}
                    >
                      <span
                        className={`inline-block h-px mr-2 align-middle transition-all ${
                          isActive ? "bg-gold w-5" : "bg-bone/30 w-2"
                        }`}
                      />
                      {it.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      {/* MOBILE — floating pill in upper-right, opens sheet */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open page sections menu"
        className="lg:hidden fixed top-20 right-3 z-30 inline-flex items-center gap-3 px-5 py-3 bg-ink/95 backdrop-blur border-2 border-gold/60 text-[0.72rem] tracking-[0.22em] uppercase text-gold shadow-[0_0_30px_-8px_oklch(0.78_0.13_82/0.4)]"
      >
        <Menu className="size-5" />
        <span className="max-w-[10rem] truncate font-semibold">{activeItem?.label ?? "Sections"}</span>
      </button>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-ink border-l border-gold/20 p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-gold">On this page</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-bone/60 hover:text-bone"
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="space-y-3 border-l border-gold/25 pl-4">
              {items.map((it) => {
                const isActive = active === it.id;
                return (
                  <li key={it.id}>
                    <a
                      href={`#${it.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(it.id);
                      }}
                      className={`block text-xs tracking-[0.18em] uppercase py-1.5 transition-colors ${
                        isActive ? "text-gold" : "text-bone/65 hover:text-bone"
                      }`}
                    >
                      <span
                        className={`inline-block h-px mr-2 align-middle transition-all ${
                          isActive ? "bg-gold w-5" : "bg-bone/30 w-2"
                        }`}
                      />
                      {it.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
