import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function StickyMobileCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // Hide on the quote page itself
  if (pathname.startsWith("/quote")) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gold/30 bg-ink/95 backdrop-blur-md px-4 py-3 flex items-center gap-3 shadow-[0_-8px_24px_rgba(0,0,0,0.55)]">
      <a
        href="tel:+18778487211"
        aria-label="Call Qfire Catering"
        className="flex items-center justify-center w-12 h-12 border border-gold/40 text-gold shrink-0"
      >
        <Phone className="size-5" />
      </a>
      <Link
        to="/quote"
        className="btn-primary flex-1 justify-center text-sm py-3"
      >
        Get a Quote <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
