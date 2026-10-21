import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Music2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrchidLogo } from "@/components/brand";
import { FeatureStrip } from "@/components/feature-strip";
import { useQuote } from "@/components/quote-provider";
import { ADDRESS_LINES, OPENING_HOURS, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/orchids";

export function SiteFooter() {
  const { open } = useQuote();

  return (
    <>
      <FeatureStrip tone="light" />
      <footer id="contact" className="surface-navy pb-4 md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-4 lg:px-8">
          <div>
            <OrchidLogo tone="light" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Premium dry cleaning, laundry and alterations — collected from your door and delivered
              back across North Kensington.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Music2, label: "TikTok", href: "https://tiktok.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-primary-foreground">Visit us</h3>
            <address className="mt-4 space-y-1 text-sm text-primary-foreground/70 not-italic">
              {ADDRESS_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <div className="mt-5 flex flex-col gap-2">
              <Button variant="outlineLight" size="sm" asChild className="self-start">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="tnum">
                  <Phone /> {PHONE_DISPLAY}
                </a>
              </Button>
              <Button variant="cta" size="sm" className="self-start" onClick={() => open()}>
                <MessageCircle /> WhatsApp Quote
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-primary-foreground">Opening hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              {OPENING_HOURS.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span>{h.day}</span>
                  <span className="tnum text-accent">{h.hours}</span>
                </li>
              ))}
            </ul>
            <nav className="mt-6 flex flex-col gap-2 text-sm">
              {[
                { label: "Services", to: "/services" },
                { label: "Pricing", to: "/pricing" },
                { label: "Areas We Cover", to: "/areas" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Journal", to: "/blog" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-soft">
            <iframe
              title="Map showing Orchid Dry Cleaners on Ladbroke Grove, London W10 5NE"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2255%2C51.5185%2C-0.1985%2C51.5335&layer=mapnik&marker=51.5265%2C-0.2120"
              className="h-56 w-full saturate-[0.65]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-primary-foreground/10 px-4 py-6 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Orchid Dry Cleaners &amp; Launderette, Ladbroke Grove, London
          W10 5NE. All rights reserved.
        </div>
      </footer>
    </>
  );
}
