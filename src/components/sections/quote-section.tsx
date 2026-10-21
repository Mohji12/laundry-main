import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/reveal";
import { BubbleField, OrchidMark } from "@/components/brand";
import { useQuote } from "@/components/quote-provider";

const POINTS = [
  "Tell us what needs cleaning — tap the chips, no forms.",
  "Add a rough load size and your pickup window.",
  "We build the message; you just press send.",
];

export function QuoteSection() {
  const { open } = useQuote();

  return (
    <section id="quote" className="surface-navy relative isolate overflow-hidden py-20 sm:py-28">
      <BubbleField className="text-primary-foreground" />
      <OrchidMark
        spin
        className="pointer-events-none absolute -right-16 -bottom-16 -z-0 h-80 w-80 text-primary-foreground/5"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Instant quote"
            title="Three questions. One WhatsApp message. Done."
            subtitle="No accounts, no card details up front, no app to download. Just a real conversation with the shop on Ladbroke Grove."
          />
          <ul className="mt-8 space-y-4">
            {POINTS.map((p, i) => (
              <li key={p} className="flex gap-4 text-primary-foreground/85">
                <span className="surface-sky grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <Button variant="cta" size="lg" className="mt-9 w-full sm:w-auto" onClick={() => open()}>
            <MessageCircle /> Start My WhatsApp Quote
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-panel rounded-3xl p-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Message preview
            </p>
            <div className="mt-4 space-y-3">
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                Hi Orchid Dry Cleaners! I'd like a quote.
                <br />
                <br />
                Services: Dry Cleaning, Ironing
                <br />
                Estimated load: Medium bag
                <br />
                Postcode: W10 5NE
                <br />
                Preferred pickup: Thursday, Morning
              </div>
              <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-primary px-4 py-3 text-sm text-primary-foreground">
                Perfect — that's £38 all in. We'll be with you Thursday between 8–11am. 🫧
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
