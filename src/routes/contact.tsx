import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { contact } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Qfire Catering — Phoenix Metro & San Diego County" },
      {
        name: "description",
        content:
          "Call (877) 848-7211 or email Eat@QfireCatering.com to design your wedding, corporate event or private party menu. Wood-fired and Steakhouse Experience across Phoenix Metro and San Diego County — every inquiry answered within 4 hours by a real human.",
      },
      { property: "og:title", content: "Contact Qfire Catering" },
      { property: "og:url", content: "https://qfire-flame-craft.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://qfire-flame-craft.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 lg:pt-40 pb-24 bg-ink">
      <div className="container-luxe">
        <div className="max-w-3xl">
          <div className="eyebrow mb-8">Contact</div>
          <h1 className="heading-xl text-bone">
            Talk to us. <span className="italic text-gold font-light">We answer.</span>
          </h1>
          <p className="mt-8 text-xl text-bone/70 font-light leading-relaxed max-w-2xl">
            Every inquiry goes to Chef Terry's team — not a chatbot, not an answering service.
            Phone is fastest. Email is fine. Quote form is best.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          <a href={contact.phoneHref} className="bg-onyx p-10 hover:bg-charcoal/40 transition-colors group">
            <Phone className="size-6 text-gold mb-6" />
            <div className="eyebrow mb-4">Call</div>
            <div className="text-2xl font-display text-bone group-hover:text-gold transition-colors">{contact.phone}</div>
            <div className="mt-3 text-sm text-bone/60">{contact.hours}</div>
          </a>
          <a href={contact.emailHref} className="bg-onyx p-10 hover:bg-charcoal/40 transition-colors group">
            <Mail className="size-6 text-gold mb-6" />
            <div className="eyebrow mb-4">Email</div>
            <div className="text-2xl font-display text-bone group-hover:text-gold transition-colors break-all">{contact.email}</div>
            <div className="mt-3 text-sm text-bone/60">Response within 4 hours.</div>
          </a>
          <div className="bg-onyx p-10">
            <MapPin className="size-6 text-gold mb-6" />
            <div className="eyebrow mb-4">Service Areas</div>
            <div className="space-y-2 text-bone/85">
              {contact.areas.map((a) => <div key={a}>{a}</div>)}
            </div>
            <Link to="/service-areas" className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:underline underline-offset-4">
              See all cities <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-20 max-w-2xl">
          <div className="flex items-center gap-3 text-bone/70 mb-6">
            <Clock className="size-4 text-gold" /> Average response: under 4 hours during business hours.
          </div>
          <Link to="/quote" className="btn-primary">
            Send Detailed Inquiry <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
