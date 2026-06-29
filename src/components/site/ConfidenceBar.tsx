// Reassurance microcopy — reduces hesitation before requesting a quote.
const points = [
  { t: "Menus are 100% customizable", b: "Every item, every course — built around your taste, dietary needs and venue." },
  { t: "Guest count can change later", b: "Final headcount locks in the week of your event. Add or reduce without penalty." },
  { t: "Every quote is custom-built", b: "No cookie-cutter pricing. We build your proposal one-to-one with Chef Terry." },
  { t: "Fast response, no pressure", b: "Most inquiries hear back within a few business hours. Booking is simple and stress-free." },
];

export function ConfidenceBar({ tone = "ink" }: { tone?: "ink" | "onyx" }) {
  const bg = tone === "ink" ? "bg-ink" : "bg-onyx";
  return (
    <section className={`py-16 lg:py-20 ${bg} border-t border-b border-white/5`}>
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="eyebrow justify-center mb-4">No Pressure. No Surprises.</div>
          <h2 className="heading-md text-bone">What to expect after you request a quote.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((p) => (
            <div key={p.t} className="p-6 border border-white/10 bg-ink/40">
              <div className="text-gold text-xs tracking-[0.25em] uppercase mb-3">✓ Promise</div>
              <h3 className="text-bone font-display text-xl mb-2">{p.t}</h3>
              <p className="text-bone/65 text-sm font-light leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
