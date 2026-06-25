import sanDiegoPricingBanner from "@/assets/san-diego-pricing-banner.png.asset.json";

export function SanDiegoPricingBanner() {
  return (
    <section className="w-full relative">
      <img
        src={sanDiegoPricingBanner.url}
        alt="Simple, Transparent Pricing — Wood-Fired Catering Packages and Steakhouse & Surf + Turf options for San Diego County"
        className="w-full h-auto"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        loading="eager"
        width={1920}
        height={1080}
      />
    </section>
  );
}
