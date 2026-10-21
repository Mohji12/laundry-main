import {
  Armchair,
  Blinds,
  Building2,
  Crown,
  Footprints,
  MessageCircle,
  Scissors,
  Shirt,
  Droplets,
  Truck,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { IconRow } from "@/components/icon-badge";
import { useQuote } from "@/components/quote-provider";
import { SERVICES } from "@/lib/orchids";

const BIG_THREE = [
  { icon: Droplets, label: "Dry Cleaning", description: "Suits, dresses, coats" },
  { icon: Shirt, label: "Wash & Fold", description: "Everyday laundry by the bag" },
  { icon: Truck, label: "Pickup & Delivery", description: "Free across W10 & W11" },
];

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "dry-cleaning": Droplets,
  "wash-dry-fold": Shirt,
  ironing: Wind,
  household: Armchair,
  curtains: Blinds,
  "wedding-dress": Crown,
  "leather-suede": Footprints,
  repairs: Scissors,
  commercial: Building2,
};

export function ServicesGrid() {
  const { open } = useQuote();

  return (
    <section id="services" className="surface-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto text-center">
          <SectionHeading
            className="mx-auto"
            eyebrow="Services"
            title="Everything we care for, under one roof."
            subtitle="From weekly shirts to a wedding gown that needs to last a lifetime — priced clearly, quoted instantly on WhatsApp."
          />
        </Reveal>

        <IconRow items={BIG_THREE} size="lg" className="mx-auto mt-12 max-w-4xl" />

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:[-ms-overflow-style:auto] sm:[scrollbar-width:auto] lg:grid-cols-3 [&::-webkit-scrollbar]:hidden sm:[&::-webkit-scrollbar]:block">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.slug] ?? Droplets;
            return (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 100}
              className="w-[min(82vw,20rem)] shrink-0 snap-center sm:w-auto"
            >
              <article className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="surface-sky grid h-12 w-12 place-items-center rounded-full text-primary-foreground shadow-soft transition-transform duration-500 group-hover:rotate-[360deg]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="tnum mt-5 text-sm font-medium text-muted-foreground">
                  From{" "}
                  <span className="font-display text-lg font-bold text-accent">{service.from}</span>
                </p>
                <button
                  type="button"
                  onClick={() => open(service.title)}
                  className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" /> Quote via WhatsApp
                </button>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
