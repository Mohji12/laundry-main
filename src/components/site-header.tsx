import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrchidLogo, OrchidMark } from "@/components/brand";
import { useQuote } from "@/components/quote-provider";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/orchids";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#why" },
  { label: "Areas We Cover", href: "/#areas" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out",
        "pt-[env(safe-area-inset-top)]",
        scrolled
          ? "surface-navy border-b border-primary-foreground/10 shadow-lift backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center overflow-hidden gap-2 px-3 transition-all duration-200 ease-out sm:gap-4 sm:px-6 lg:px-8",
          scrolled ? "h-14 sm:h-16 md:h-20" : "h-16 sm:h-20 md:h-24",
        )}
      >
        <Link
          to="/"
          aria-label="Orchid Dry Cleaners & Launderette home"
          className="flex h-full min-w-0 flex-1 items-center lg:flex-none"
        >
          <OrchidLogo tone="light" compact={scrolled} fit="navbar" />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 xl:gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="link-underline shrink-0 text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="tnum hidden items-center gap-2 text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground md:flex"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>
          <Button variant="cta" className="hidden lg:inline-flex" onClick={() => open()}>
            <MessageCircle className="pulse-sky rounded-full" /> Get a WhatsApp Quote
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="surface-navy animate-in fade-in fixed inset-0 z-50 flex flex-col overflow-y-auto px-5 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))] duration-200 sm:px-6 lg:hidden"
        >
          <div className="flex items-center justify-between gap-3">
            <OrchidLogo tone="light" compact className="min-w-0" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6">
            {NAV.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="animate-in fade-in slide-in-from-bottom-4 font-display text-2xl text-primary-foreground duration-500 sm:text-3xl"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Button
              variant="cta"
              size="lg"
              className="w-full"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
            >
              <MessageCircle /> Get a WhatsApp Quote
            </Button>
            <Button variant="outlineLight" size="lg" asChild className="w-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Phone /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <OrchidMark
            spin
            className="pointer-events-none absolute -right-12 bottom-28 h-56 w-56 text-primary-foreground/5"
          />
        </div>
      )}
    </header>
  );
}
