import phoenixPricingBanner from "@/assets/phoenix-pricing-banner.png.asset.json";

export function PhoenixPricingBanner() {
  return (
    <section className="w-full relative">
      <img
        src={phoenixPricingBanner.url}
        alt="1 Meat & 2 Meat, Transparent Pricing — Wood-Fired Catering Packages and Steakhouse Experience & Surf + Turf options for Phoenix Metro"
        className="w-full h-auto"
        loading="eager"
        width={1920}
        height={1080}
      />
    </section>
  );
}
