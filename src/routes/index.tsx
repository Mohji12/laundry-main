import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { FeatureStrip } from "@/components/feature-strip";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyOrchid } from "@/components/sections/why-orchid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { QuoteSection } from "@/components/sections/quote-section";
import { PricingSnapshot } from "@/components/sections/pricing-snapshot";
import { FleetBanner } from "@/components/sections/fleet-banner";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

const TITLE = "Orchid Dry Cleaners | Laundry Pickup & Delivery, Ladbroke Grove W10";
const DESCRIPTION =
  "Premium dry cleaning, wash & fold and alterations collected from your door across Ladbroke Grove, North Kensington and Notting Hill. Instant quotes on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <TrustBar />
      <ServicesGrid />
      <WhyOrchid />
      <HowItWorks />
      <QuoteSection />
      <PricingSnapshot />
      <FleetBanner />
      <Testimonials />
      <Gallery />
      <Faq />
      <FinalCta />
    </>
  );
}
