import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const primary = [
  { to: "/weddings", label: "Weddings" },
  { to: "/corporate", label: "Corporate" },
  { to: "/private-parties", label: "Private Parties" },
  { to: "/menus", label: "Menus" },
  { to: "/about", label: "Chef Terry" },
];

const secondary = [
  { to: "/wood-fired", label: "Wood-Fired" },
  { to: "/steakhouse", label: "Steakhouse" },
  { to: "/private-chef", label: "Private Chef" },
  { to: "/bartending", label: "Bartending" },
  { to: "/rentals", label: "Rentals" },
  { to: "/pictures", label: "Pictures" },
  { to: "/reviews", label: "Reviews" },
  { to: "/why-qfire", label: "Why Qfire" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-ink/85 border-b border-white/5"
            : "bg-gradient-to-b from-ink/60 to-transparent"
        }`}
      >
        <div className="container-luxe flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <span className="text-gold text-2xl font-display tracking-tight">
              Q<span className="text-bone">fire</span>
            </span>
            <span className="hidden sm:inline text-[0.6rem] tracking-[0.35em] uppercase text-muted-foreground border-l border-white/15 pl-3">
              Catering
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {primary.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-[0.72rem] tracking-[0.22em] uppercase text-bone/80 hover:text-gold transition-colors duration-300 group"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/locations" className="hidden md:inline-flex btn-ghost text-[0.65rem] px-5 py-3">
              Choose Location
            </Link>
            <Link to="/quote" className="hidden md:inline-flex btn-primary text-[0.65rem] px-5 py-3">
              Request Quote
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 -mr-2 text-bone"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / full menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/98 backdrop-blur-2xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-luxe flex items-center justify-between h-20 lg:h-24">
          <span className="text-gold text-2xl font-display">
            Q<span className="text-bone">fire</span>
          </span>
          <button onClick={() => setOpen(false)} className="p-2 -mr-2 text-bone" aria-label="Close menu">
            <X className="size-6" />
          </button>
        </div>
        <div className="container-luxe pt-6 pb-20 overflow-y-auto max-h-[calc(100vh-6rem)]">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            {[...primary, ...secondary].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-4 border-b border-white/5 text-2xl md:text-3xl font-display text-bone hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/locations" onClick={() => setOpen(false)} className="btn-ghost flex-1">
              Choose Location
            </Link>
            <Link to="/quote" onClick={() => setOpen(false)} className="btn-primary flex-1">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
