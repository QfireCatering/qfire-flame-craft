import sanDiegoPricingBanner from "@/assets/san-diego-pricing-banner.png.asset.json";

export function SanDiegoPricingBanner() {
  return (
    <section className="w-full relative">
      <img
        src={sanDiegoPricingBanner.url}
        alt="1 Meat & 2 Meat, Transparent Pricing — Wood-Fired Catering Packages and Steakhouse & Surf + Turf options for San Diego County"
        className="w-full h-auto"
        loading="eager"
        width={1920}
        height={1080}
      />
    </section>
  );
}
