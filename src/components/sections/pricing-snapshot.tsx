import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/reveal";
import { useQuote } from "@/components/quote-provider";
import { PRICING } from "@/lib/orchids";

export function PricingSnapshot() {
  const { open } = useQuote();

  return (
    <section id="pricing" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent prices, no surprises at the door."
            subtitle="A snapshot of our most requested items. Anything unusual, just ask — we'll quote it on WhatsApp before we collect."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRICING.map((column, i) => (
            <Reveal key={column.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg text-primary">{column.title}</h3>
                <ul className="mt-5 flex-1 divide-y divide-border">
                  {column.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3 py-3 text-sm">
                      <span className="min-w-0 flex-1 text-muted-foreground">{item.name}</span>
                      <span className="shrink-0 font-medium text-primary">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => open(column.title)}
                  className="mt-5 inline-flex items-center gap-2 self-start text-sm text-primary transition-colors hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" /> Quote via WhatsApp
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button variant="outlineNavy" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/pricing">View Full Price List</Link>
            </Button>
            <Button variant="cta" size="lg" className="w-full sm:w-auto" onClick={() => open()}>
              <MessageCircle /> Not sure? Get a Custom Quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
