import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import qfireLogo from "@/assets/qfire-logo.png.asset.json";
import { contact } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-onyx mt-32">
      <div className="container-luxe py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <img src={qfireLogo.url} alt="Qfire Catering" className="h-20 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Full-service wood-fired catering and Steakhouse Experience-grade plated dinners for
              weddings, corporate events and private parties across Phoenix Metro and San Diego County.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">
              {contact.press.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  {i > 0 && <span className="text-gold/60">•</span>}
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-5">Services</div>
            <ul className="space-y-2.5 text-sm text-bone/75">
              <li><Link to="/weddings" className="hover:text-gold transition-colors">Weddings</Link></li>
              <li><Link to="/corporate" className="hover:text-gold transition-colors">Corporate</Link></li>
              <li><Link to="/private-parties" className="hover:text-gold transition-colors">Private Parties</Link></li>
              <li><Link to="/wood-fired" className="hover:text-gold transition-colors">Wood-Fired BBQ</Link></li>
              <li><Link to="/steakhouse" className="hover:text-gold transition-colors">Steakhouse</Link></li>
              <li><Link to="/bartending" className="hover:text-gold transition-colors">Bartending</Link></li>
              <li><Link to="/rentals" className="hover:text-gold transition-colors">Rentals</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-5">Regions</div>
            <ul className="space-y-2.5 text-sm text-bone/75">
              <li><Link to="/phoenix" className="hover:text-gold transition-colors">Phoenix Metro</Link></li>
              <li><Link to="/san-diego" className="hover:text-gold transition-colors">San Diego County</Link></li>
              <li><Link to="/locations" className="hover:text-gold transition-colors">Choose Location</Link></li>
            </ul>
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mt-8 mb-5">Company</div>
            <ul className="space-y-2.5 text-sm text-bone/75">
              <li><Link to="/about" className="hover:text-gold transition-colors">Chef Terry</Link></li>
              <li><Link to="/why-qfire" className="hover:text-gold transition-colors">Why Qfire</Link></li>
              <li><Link to="/reviews" className="hover:text-gold transition-colors">Reviews</Link></li>
              <li><Link to="/media" className="hover:text-gold transition-colors">Press & Media</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-5">Get In Touch</div>
            <Link to="/quote" className="btn-primary w-full text-[0.65rem]">See If My Date Is Open</Link>
            <div className="mt-6 space-y-2.5 text-sm text-bone/85">
              <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="size-4 text-gold" /> {contact.phone}
              </a>
              <a href={contact.emailHref} className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="size-4 text-gold" /> {contact.email}
              </a>
            </div>
            <div className="mt-6 space-y-1.5 text-xs text-muted-foreground">
              {contact.areas.map((a) => <div key={a}>{a}</div>)}
              <div className="pt-2">{contact.hours}</div>
              <div className="pt-1 text-gold/80">Usually responds within 4 business hours.</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-[0.65rem] tracking-[0.25em] uppercase">
              <a href="https://www.weddingwire.com/reviews/qfire-catering/4c33661ea8bcf7a8.html" target="_blank" rel="noopener noreferrer" className="text-gold border border-gold/40 px-3 py-1.5 hover:bg-gold/10 transition-colors">WeddingWire ★★★★★</a>
              <a href="https://www.theknot.com/marketplace/qfire-catering-san-diego-ca-531715" target="_blank" rel="noopener noreferrer" className="text-gold border border-gold/40 px-3 py-1.5 hover:bg-gold/10 transition-colors">The Knot ★★★★★</a>
            </div>

          </div>
        </div>

        <div className="hairline mt-16" />

        {/* SEO service-area paragraph */}
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground/80 max-w-5xl">
          Qfire Catering provides full-service catering in Phoenix, Arizona specializing in BBQ catering,
          wood-fired catering, steakhouse catering, and wedding catering across Phoenix, Scottsdale, Mesa,
          Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Avondale, Goodyear, Paradise Valley, Sedona,
          Flagstaff, Tucson and the entire Phoenix Metro — as well as San Diego, La Jolla, Carlsbad,
          Encinitas, Del Mar, Rancho Santa Fe, Poway, Escondido, Vista, Oceanside, Coronado and surrounding
          San Diego County. We offer catering for weddings, corporate events, private parties, business
          events, and social gatherings with options including BBQ buffet catering, steakhouse plated
          dinners, family-style service, live grilling catering, on-site wood-fire stations, and upscale
          event catering services. Whether you are searching for Phoenix wedding catering, San Diego wedding
          catering, BBQ catering near me, corporate catering in Phoenix, BBQ catering San Diego, or private
          party catering near me — Qfire Catering, led by Chef Terry Matthews (The BBQ Daddy), delivers
          restaurant-quality food, professional service, and a seamless catering experience from setup to
          cleanup.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {contact.legalName}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
            <Link to="/accessibility" className="hover:text-gold transition-colors">Accessibility</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
