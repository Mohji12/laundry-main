import { MessageCircle, Phone } from "lucide-react";
import { useQuote } from "@/components/quote-provider";
import { WHATSAPP_URL } from "@/lib/orchids";

/** Sticky mobile action bar. */
export function StickyActions() {
  const { open } = useQuote();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 px-3 pt-2.5 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(0.65rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="flex h-11 min-h-11 items-center justify-center gap-1.5 rounded-full border border-primary/25 px-2 text-xs font-semibold text-primary sm:h-12 sm:gap-2 sm:text-sm"
      >
        <Phone className="h-4 w-4 shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={() => open()}
        className="surface-sky flex h-11 min-h-11 items-center justify-center gap-1.5 rounded-full px-2 text-xs font-semibold text-primary-foreground sm:h-12 sm:gap-2 sm:text-sm"
      >
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span className="truncate">Get Quote</span>
      </button>
    </div>
  );
}
