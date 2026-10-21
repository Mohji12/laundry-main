import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PRICING } from "@/lib/orchids";

const TITLE = "Price List | Orchid Dry Cleaners, North Kensington";
const DESCRIPTION =
  "Transparent prices for dry cleaning, laundry, bedding, curtains, wedding dresses and alterations in Ladbroke Grove, London W10.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Full price list."
      intro="Prices include free collection and delivery across our W10 and W11 round. Anything not listed, just ask on WhatsApp."
    >
      <div className="space-y-12">
        {PRICING.map((column) => (
          <div key={column.title}>
            <h2 className="font-display text-2xl text-primary">{column.title}</h2>
            <ul className="mt-4 divide-y divide-border">
              {column.items.map((item) => (
                <li key={item.name} className="flex items-baseline gap-4 py-3 text-sm">
                  <span className="min-w-0 flex-1 text-muted-foreground">{item.name}</span>
                  <span className="shrink-0 font-medium text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
