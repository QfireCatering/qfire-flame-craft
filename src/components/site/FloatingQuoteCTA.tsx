import { useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Phone, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingQuoteCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setVisible(window.scrollY > 480);
  }, [pathname]);

  if (pathname.startsWith("/quote")) return null;

  const go = () => {
    navigate({ to: "/quote", search: date ? { date } : undefined });
  };

  return (
    <div
      className={`hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 transition-all duration-500 ${
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
      <div className="flex items-center gap-2 bg-ink/95 backdrop-blur-md border border-gold/40 pl-4 pr-2 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.55)]">
        <CalendarCheck className="size-4 text-gold shrink-0" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-label="Wedding date"
          className="bg-transparent border-0 text-bone text-sm focus:outline-none w-40"
        />
        <button
          type="button"
          onClick={go}
          className="btn-primary text-xs py-2.5 px-4 shadow-[0_8px_28px_rgba(201,162,86,0.35)]"
        >
          Check My Date <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
