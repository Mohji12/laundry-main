import { useState } from "react";
import { Check, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isServedPostcode } from "@/components/quote-dialog";
import { useQuote } from "@/components/quote-provider";
import { cn } from "@/lib/utils";

export function PostcodeChecker({ variant = "glass" }: { variant?: "glass" | "plain" }) {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<"served" | "outside" | null>(null);
  const { open } = useQuote();

  const check = () => {
    if (!postcode.trim()) return;
    setResult(isServedPostcode(postcode) ? "served" : "outside");
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-4 sm:rounded-3xl sm:p-6",
        variant === "glass" ? "glass-panel" : "border border-border bg-card shadow-soft",
      )}
    >
      <p className="flex items-start gap-2 font-display text-base text-primary sm:items-center sm:text-lg">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:mt-0" />
        <span>Check if we collect from your address</span>
      </p>
      <form
        className="mt-4 flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          check();
        }}
      >
        <label className="sr-only" htmlFor={`pc-${variant}`}>
          Your postcode
        </label>
        <Input
          id={`pc-${variant}`}
          value={postcode}
          onChange={(e) => {
            setPostcode(e.target.value);
            setResult(null);
          }}
          placeholder="e.g. W10 5NE"
          className="h-12 w-full rounded-full bg-card px-5"
        />
        <Button type="submit" variant="navy" size="lg" className="w-full shrink-0 sm:w-auto">
          Check Availability
        </Button>
      </form>

      {result === "served" && (
        <p className="animate-in fade-in slide-in-from-bottom-2 mt-4 flex items-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground duration-300">
          <span className="surface-sky grid h-6 w-6 shrink-0 place-items-center rounded-full text-primary-foreground">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          Yes — we collect from {postcode.toUpperCase()} daily, free of charge.
        </p>
      )}
      {result === "outside" && (
        <div className="animate-in fade-in slide-in-from-bottom-2 mt-4 rounded-2xl bg-secondary px-4 py-3 text-sm text-secondary-foreground duration-300">
          <p>We may still reach you — message us and we'll confirm your round.</p>
          <Button variant="cta" size="sm" className="mt-3" onClick={() => open()}>
            <MessageCircle /> Ask on WhatsApp
          </Button>
        </div>
      )}
    </div>
  );
}
