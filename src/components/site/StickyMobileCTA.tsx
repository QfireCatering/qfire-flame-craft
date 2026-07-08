import { useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

export function StickyMobileCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [date, setDate] = useState("");

  // Hide on the quote page itself
  if (pathname.startsWith("/quote")) return null;

  const go = () => {
    navigate({ to: "/quote", search: date ? { date } : undefined });
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gold/30 bg-ink/95 backdrop-blur-md px-3 py-2.5 flex items-center gap-2 shadow-[0_-8px_24px_rgba(0,0,0,0.55)]">
      <a
        href="tel:+18778487211"
        aria-label="Call Qfire Catering"
        className="flex items-center justify-center w-11 h-11 border border-gold/40 text-gold shrink-0"
      >
        <Phone className="size-5" />
      </a>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        aria-label="Wedding date"
        className="flex-1 min-w-0 bg-charcoal/60 border border-gold/30 text-bone text-sm px-2 py-2.5 focus:border-gold focus:outline-none"
      />
      <button
        type="button"
        onClick={go}
        className="btn-primary shrink-0 text-xs py-2.5 px-3"
      >
        Check Date <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
