import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import qfireLogo from "@/assets/qfire-logo.png.asset.json";
import { contact } from "@/lib/contact";

const primaryLeft = [
  { to: "/weddings", label: "Weddings" },
  { to: "/corporate", label: "Corporate" },
  { to: "/private-parties", label: "Private Parties" },
];

const primaryRight = [
  { to: "/menus", label: "Menus" },
  { to: "/about", label: "Meet the Chef" },
];

const secondary = [
  { to: "/wood-fired", label: "Wood-Fired" },
  { to: "/steakhouse", label: "Steakhouse" },
  { to: "/bartending", label: "Bartending" },
  { to: "/rentals", label: "Rentals" },
  { to: "/pictures", label: "Pictures" },
  { to: "/reviews", label: "Reviews" },
  { to: "/media", label: "Press & Media" },
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
      <div className="fixed inset-x-0 top-0 z-[60] bg-ink/95 border-b border-gold/15 backdrop-blur-md hidden md:block">
        <div className="container-luxe flex items-center justify-center gap-6 py-1.5 text-[0.7rem] tracking-[0.15em] uppercase">
          <span className="text-bone/60">Contact us right now:</span>
          <a href={contact.emailHref} className="text-gold hover:text-bone transition-colors">{contact.email}</a>
          <span className="text-bone/30">·</span>
          <a href={contact.phoneHref} className="text-gold hover:text-bone transition-colors">{contact.phone}</a>
        </div>
      </div>
      <header
        className={`fixed inset-x-0 z-50 transition-all duration-500 md:top-7 top-0 ${
          scrolled
            ? "backdrop-blur-xl bg-ink/85 border-b border-white/5"
            : "bg-gradient-to-b from-ink/60 to-transparent"
        }`}
      >
        <div className="container-luxe flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="group flex items-center gap-3 shrink-0" aria-label="Qfire Catering">
            <img src={qfireLogo.url} alt="Qfire Catering" className="h-12 lg:h-14 w-auto transition-transform duration-500 group-hover:scale-105" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {primaryLeft.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-[0.78rem] tracking-[0.18em] uppercase text-bone hover:text-gold transition-colors duration-300 group"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <nav className="hidden lg:flex items-center gap-9 mr-3">
              {primaryRight.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative text-[0.78rem] tracking-[0.18em] uppercase text-bone hover:text-gold transition-colors duration-300 group"
                  activeProps={{ className: "text-gold" }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </nav>
            <a
              href={contact.phoneHref}
              aria-label={`Call ${contact.phone}`}
              className="inline-flex items-center gap-2 text-bone hover:text-gold transition-colors lg:hidden p-2 -mr-1"
            >
              <Phone className="size-5" />
            </a>
            <a href={contact.phoneHref} className="hidden lg:inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-bone font-bold hover:text-gold transition-colors">
              <Phone className="size-3.5" /> {contact.phone}
            </a>
            <Link to="/locations" className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gold/50 text-gold bg-gold/5 text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_24px_rgba(212,175,55,0.2)] hover:-translate-y-0.5">
              Choose Location
            </Link>
            <Link to="/quote" className="hidden md:inline-flex btn-primary text-[0.65rem] px-5 py-3">
              See If My Date Is Open
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
          <img src={qfireLogo.url} alt="Qfire Catering" className="h-12 w-auto" />
          <button onClick={() => setOpen(false)} className="p-2 -mr-2 text-bone" aria-label="Close menu">
            <X className="size-6" />
          </button>
        </div>
        <div className="container-luxe pt-6 pb-20 overflow-y-auto max-h-[calc(100vh-6rem)]">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
            {[...primaryLeft, ...primaryRight, ...secondary].map((item) => (
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
              See If My Date Is Open
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
