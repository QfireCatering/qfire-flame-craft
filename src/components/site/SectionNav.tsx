import { useEffect, useState } from "react";

export interface SectionNavItem {
  id: string;
  label: string;
}

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    };
    const obs = new IntersectionObserver(onIntersect, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    });
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    observers.push(obs);
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav
      aria-label="Page sections"
      className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-30 max-h-[70vh] overflow-y-auto"
    >
      <ul className="space-y-2 border-l border-gold/20 pl-4">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => onClick(e, it.id)}
                className={`block text-[0.65rem] tracking-[0.22em] uppercase transition-colors py-1 ${
                  isActive ? "text-gold" : "text-bone/55 hover:text-bone"
                }`}
              >
                <span className={`inline-block w-2 h-px mr-2 align-middle transition-all ${isActive ? "bg-gold w-4" : "bg-bone/30"}`} />
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
