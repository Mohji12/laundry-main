import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BubbleField, OrchidMark } from "@/components/brand";
import { Reveal } from "@/components/reveal";
import { useQuote } from "@/components/quote-provider";

export function FinalCta() {
  const { open } = useQuote();
  return (
    <section className="surface-navy relative isolate overflow-hidden py-24 sm:py-32">
      <BubbleField className="text-primary-foreground" />
      <OrchidMark
        spin
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 text-primary-foreground/5"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-primary-foreground sm:text-5xl">
            Ready for Laundry Day to Disappear?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/75">
            Send us a message and we'll be at your door — Ladbroke Grove, Notting Hill and
            everywhere in between.
          </p>
          <Button variant="cta" size="lg" className="pulse-sky mt-9 w-full sm:w-auto" onClick={() => open()}>
            <MessageCircle /> Get an Instant WhatsApp Quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
