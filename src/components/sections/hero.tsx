import { Droplets, MessageCircle, Shirt, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BubbleField, OrchidMark } from "@/components/brand";
import { IconRow } from "@/components/icon-badge";
import { PostcodeChecker } from "@/components/postcode-checker";
import { useQuote } from "@/components/quote-provider";
import heroDoorstep from "@/assets/hero-doorstep.jpg";

const BIG_THREE = [
  { icon: Droplets, label: "Dry Cleaning" },
  { icon: Shirt, label: "Wash & Fold" },
  { icon: Truck, label: "Pickup & Delivery" },
];

export function Hero() {
  const { open } = useQuote();

  return (
    <>
      <section
        id="top"
        className="relative isolate overflow-hidden pt-[calc(5rem+env(safe-area-inset-top))] pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24"
      >
        <img
          src={heroDoorstep}
          alt="An Orchid driver in a navy polo handing a navy garment bag to a customer at her Notting Hill front door"
          width={1920}
          height={1088}
          className="ken-burns absolute inset-0 -z-20 h-full w-full object-cover object-center sm:object-right"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(100deg, oklch(0.2711 0.0523 237 / 0.97) 0%, oklch(0.3347 0.0657 237 / 0.92) 42%, oklch(0.3347 0.0657 237 / 0.55) 72%, oklch(0.3347 0.0657 237 / 0.2) 100%)",
          }}
        />
        <BubbleField className="-z-10 text-primary-foreground" />
        <OrchidMark
          spin
          className="pointer-events-none absolute -top-16 -left-20 -z-10 hidden h-72 w-72 text-primary-foreground/5 sm:block"
        />

        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">
          <div className="min-w-0">
            <h1 className="animate-in fade-in slide-in-from-left-6 font-display text-[1.85rem] leading-[1.12] text-primary-foreground delay-100 duration-700 sm:text-5xl md:text-6xl">
              Premium Laundry,{" "}
              <span className="text-gradient-sky">Delivered to Your Doorstep.</span>
            </h1>
            <p className="animate-in fade-in slide-in-from-left-6 mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 delay-200 duration-700 sm:mt-6 sm:text-base md:text-lg">
              North Kensington's trusted dry cleaning &amp; laundry pickup service — collected, cared
              for, and back at your door, fast.
            </p>

            <div className="animate-in fade-in slide-in-from-left-6 mt-6 flex w-full flex-col gap-3 delay-300 duration-700 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Button variant="cta" size="lg" className="w-full sm:w-auto" onClick={() => open()}>
                <MessageCircle /> Get an Instant WhatsApp Quote
              </Button>
              <Button variant="outlineLight" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#pricing">See Our Prices</a>
              </Button>
            </div>

            <div className="animate-in fade-in slide-in-from-left-6 mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 delay-500 duration-700 sm:mt-8 sm:gap-x-5">
              <span className="flex items-center gap-1" aria-label="Rated 4.9 out of 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </span>
              <span className="tnum text-xs text-primary-foreground/80 sm:text-sm">
                500+ happy locals in W10 &amp; W11
              </span>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 min-w-0 delay-300 duration-700">
            <PostcodeChecker />
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
          <IconRow items={BIG_THREE} />
        </div>
      </div>
    </>
  );
}
