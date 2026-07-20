import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { contact } from "@/lib/contact";

// Bottom action bar for mobile. Three equal 44px+ tap targets in the
// natural thumb arc: Call · Text · Quote. Replaces the old inline date
// input which forced typing and competed with the primary CTA.
export function StickyMobileCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.startsWith("/quote")) return null;

  const smsHref = `sms:${contact.phoneHref.replace("tel:", "")}`;

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gold/25 bg-ink/95 backdrop-blur-md shadow-[0_-8px_24px_rgba(0,0,0,0.55)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="navigation"
      aria-label="Primary actions"
    >
      <div className="grid grid-cols-3 gap-1 p-1.5">
        <a
          href={contact.phoneHref}
          aria-label="Call Qfire Catering now"
          className="relative flex flex-col items-center justify-center gap-1 min-h-12 py-2 text-gold rounded-md active:bg-gold/10"
        >
          <span className="absolute inset-0 rounded-md border border-gold/40 animate-pulse" aria-hidden />
          <Phone className="size-5 relative" />
          <span className="relative text-[0.65rem] tracking-[0.18em] uppercase font-semibold">Call</span>
        </a>
        <a
          href={smsHref}
          aria-label="Text Qfire Catering"
          className="flex flex-col items-center justify-center gap-1 min-h-12 py-2 text-bone rounded-md active:bg-white/5"
        >
          <MessageSquare className="size-5" />
          <span className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold">Text</span>
        </a>
        <Link
          to="/quote"
          aria-label="Request a catering quote"
          className="flex flex-col items-center justify-center gap-1 min-h-12 py-2 rounded-md bg-gold text-ink font-semibold active:bg-gold/90"
        >
          <CalendarCheck className="size-5" />
          <span className="text-[0.65rem] tracking-[0.18em] uppercase">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
