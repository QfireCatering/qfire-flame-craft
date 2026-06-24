import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-onyx mt-32">
      <div className="container-luxe py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <div className="text-gold text-3xl font-display">
              Q<span className="text-bone">fire</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Full-service wood-fired catering for weddings, corporate events
              and private parties across Phoenix Metro and San Diego County.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">
              <span>Food Network</span>
              <span className="text-gold/60">•</span>
              <span>BBQ Brawl</span>
              <span className="text-gold/60">•</span>
              <span>Cutthroat Kitchen</span>
            </div>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-5">Services</div>
            <ul className="space-y-2.5 text-sm text-bone/75">
              <li><Link to="/weddings" className="hover:text-gold transition-colors">Weddings</Link></li>
              <li><Link to="/corporate" className="hover:text-gold transition-colors">Corporate</Link></li>
              <li><Link to="/private-parties" className="hover:text-gold transition-colors">Private Parties</Link></li>
              <li><Link to="/wood-fired" className="hover:text-gold transition-colors">Wood-Fired</Link></li>
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
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-5">Get In Touch</div>
            <Link to="/quote" className="btn-primary w-full text-[0.65rem]">Request a Quote</Link>
            <div className="mt-8 space-y-1.5 text-sm text-bone/75">
              <div>Phoenix Metro · Arizona</div>
              <div>San Diego County · California</div>
            </div>
            <div className="mt-8 text-xs text-muted-foreground">
              By appointment for private tastings.
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Qfire Catering. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Owned & operated by Chef Terry Matthews</div>
        </div>
      </div>
    </footer>
  );
}
