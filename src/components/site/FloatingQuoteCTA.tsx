import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Phone, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingQuoteCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset visibility when navigating to a new page
  useEffect(() => {
    setVisible(window.scrollY > 480);
  }, [pathname]);

  if (pathname.startsWith("/quote")) return null;

  return (
    <div
      className={`hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="tel:+18778487211"
        aria-label="Call Qfire Catering"
        className="flex items-center justify-center w-12 h-12 rounded-full border border-gold/50 bg-ink/90 text-gold backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.55)] hover:bg-gold hover:text-ink transition-colors"
      >
        <Phone className="size-5" />
      </a>
      <Link
        to="/quote"
        className="btn-primary text-sm py-3 px-5 shadow-[0_8px_28px_rgba(201,162,86,0.35)]"
      >
        <CalendarCheck className="size-4" />
        Request a Quote
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
