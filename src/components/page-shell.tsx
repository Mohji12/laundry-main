import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BubbleField, OrchidMark } from "@/components/brand";
import { useQuote } from "@/components/quote-provider";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  const { open } = useQuote();
  return (
    <>
      <section className="surface-navy relative isolate overflow-hidden pt-[calc(5.5rem+env(safe-area-inset-top))] pb-14 sm:pt-36 sm:pb-20 md:pt-40">
        <BubbleField className="text-primary-foreground" />
        <OrchidMark
          spin
          className="pointer-events-none absolute -top-10 -right-16 -z-0 h-72 w-72 text-primary-foreground/5"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">{eyebrow}</p>
          <h1 className="mt-4 font-display text-3xl leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            {intro}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="lg" className="w-full sm:w-auto" onClick={() => open()}>
              <MessageCircle /> Get a WhatsApp Quote
            </Button>
            <Button variant="outlineLight" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </section>
      {children && (
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
      )}
    </>
  );
}
