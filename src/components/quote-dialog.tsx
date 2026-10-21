import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QUOTE_SERVICE_OPTIONS, SERVED_POSTCODES } from "@/lib/orchids";
import { openWhatsApp, quoteMessage, type QuoteDraft } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const LOAD_OPTIONS = ["Small bag", "Medium bag", "Large bag", "Not sure"];
const TIME_OPTIONS = ["Morning", "Afternoon", "Evening"];

const emptyDraft: QuoteDraft = {
  services: [],
  load: "",
  name: "",
  postcode: "",
  day: "",
  time: "",
};

export function isServedPostcode(value: string) {
  const cleaned = value.replace(/\s+/g, "").toUpperCase();
  return SERVED_POSTCODES.some((p) => cleaned.startsWith(p));
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200",
        selected
          ? "surface-sky border-transparent text-primary-foreground shadow-soft"
          : "border-border bg-card text-foreground hover:border-accent/50 hover:bg-secondary",
      )}
    >
      {label}
    </button>
  );
}

/** Live WhatsApp-style preview of the message being built. */
function ChatPreview({ draft, complete }: { draft: QuoteDraft; complete: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/60 p-4">
      <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        Message preview
      </p>
      <div className="mt-3 space-y-2.5">
        <div className="ml-auto max-w-[92%] rounded-2xl rounded-br-sm bg-card px-4 py-3 text-xs leading-relaxed shadow-soft transition-all duration-300">
          Hi Orchid Dry Cleaners! I'd like a quote.
          <br />
          <br />
          Services: {draft.services.join(", ") || "…"}
          <br />
          Estimated load: {draft.load || "…"}
          <br />
          Name: {draft.name || "…"}
          <br />
          Postcode: {draft.postcode.toUpperCase() || "…"}
          <br />
          Preferred pickup: {[draft.day, draft.time].filter(Boolean).join(", ") || "…"}
        </div>
        {complete && (
          <div className="animate-in fade-in slide-in-from-bottom-2 max-w-[92%] rounded-2xl rounded-bl-sm bg-primary px-4 py-3 text-xs leading-relaxed text-primary-foreground duration-300">
            Thanks! We'll confirm your price and collection slot in a few minutes. 🫧
          </div>
        )}
      </div>
    </div>
  );
}

export function QuoteDialog({
  open,
  onOpenChange,
  presetService,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  presetService?: string | undefined;
}) {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<QuoteDraft>(emptyDraft);

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setDraft({
      ...emptyDraft,
      services: presetService ? [presetService] : [],
    });
  }, [open, presetService]);

  const canContinue = useMemo(() => {
    if (step === 0) return draft.services.length > 0;
    if (step === 1) return draft.load !== "";
    if (step === 2) return draft.name.trim() !== "" && draft.postcode.trim() !== "";
    return true;
  }, [step, draft]);

  const toggleService = (name: string) =>
    setDraft((d) => ({
      ...d,
      services: d.services.includes(name)
        ? d.services.filter((s) => s !== name)
        : [...d.services, name],
    }));

  const postcodeWarning = draft.postcode.trim().length >= 2 && !isServedPostcode(draft.postcode);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(92dvh,100%)] w-[calc(100%-1.25rem)] gap-0 overflow-y-auto rounded-2xl border-border bg-card p-0 sm:max-w-lg sm:rounded-3xl">
        <div className="surface-navy relative isolate overflow-hidden px-4 pt-5 pb-4 pr-14 sm:px-6 sm:pt-6 sm:pb-5 sm:pr-16">
          <DialogHeader className="relative space-y-1 text-left">
            <DialogTitle className="font-display text-xl text-primary-foreground">
              {step === 3 ? "Here's your quote request" : "Get an instant WhatsApp quote"}
            </DialogTitle>
            <p className="text-sm text-primary-foreground/70">
              {step === 3
                ? "Check it over, then send it straight to our Ladbroke Grove shop."
                : `Step ${step + 1} of 3 — takes under a minute.`}
            </p>
          </DialogHeader>
          <div className="relative mt-4 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors duration-300",
                  step > i || step === 3
                    ? "bg-accent"
                    : step === i
                      ? "bg-primary-foreground/70"
                      : "bg-primary-foreground/20",
                )}
              />
            ))}
          </div>
        </div>

        <div className="px-4 py-5 sm:px-6 sm:py-6">
          <div key={step} className="animate-in fade-in slide-in-from-right-4 duration-300">
            {step === 0 && (
              <div>
                <p className="mb-4 font-display text-lg">What do you need cleaned?</p>
                <div className="flex flex-wrap gap-2">
                  {QUOTE_SERVICE_OPTIONS.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      selected={draft.services.includes(s)}
                      onClick={() => toggleService(s)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="mb-4 font-display text-lg">Roughly how much is there?</p>
                <div className="flex flex-wrap gap-2">
                  {LOAD_OPTIONS.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      selected={draft.load === s}
                      onClick={() => setDraft((d) => ({ ...d, load: s }))}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Not sure? Pick “Not sure” — we'll weigh and confirm before cleaning.
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="font-display text-lg">Your pickup details</p>
                <div className="space-y-2">
                  <Label htmlFor="quote-name">Name</Label>
                  <Input
                    id="quote-name"
                    value={draft.name}
                    onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                    placeholder="Amelia Roberts"
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-postcode">Postcode</Label>
                  <Input
                    id="quote-postcode"
                    value={draft.postcode}
                    onChange={(e) => setDraft((d) => ({ ...d, postcode: e.target.value }))}
                    placeholder="W10 5NE"
                    className="h-11 rounded-xl"
                  />
                  {postcodeWarning && (
                    <p className="text-xs text-muted-foreground">
                      That looks outside our usual round — send the quote anyway and we'll confirm if
                      we can collect.
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-day">Preferred pickup day</Label>
                  <Input
                    id="quote-day"
                    type="date"
                    value={draft.day}
                    onChange={(e) => setDraft((d) => ({ ...d, day: e.target.value }))}
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Preferred time window</Label>
                  <div className="flex flex-wrap gap-2">
                    {TIME_OPTIONS.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        selected={draft.time === t}
                        onClick={() => setDraft((d) => ({ ...d, time: t }))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mb-5 flex justify-center">
                <span className="surface-sky pulse-sky grid h-16 w-16 place-items-center rounded-full text-primary-foreground">
                  <Check className="h-7 w-7" strokeWidth={2.5} />
                </span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <ChatPreview draft={draft} complete={step === 3} />
          </div>

          <div className="mt-6 flex items-center gap-3">
            {step > 0 && (
              <Button
                variant="ghost"
                onClick={() => setStep((s) => s - 1)}
                aria-label="Previous step"
              >
                <ArrowLeft /> Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                variant="navy"
                className="flex-1"
                disabled={!canContinue}
                onClick={() => setStep((s) => s + 1)}
              >
                Continue <ArrowRight />
              </Button>
            ) : (
              <Button
                variant="cta"
                className="flex-1"
                onClick={() => {
                  openWhatsApp(quoteMessage(draft));
                  onOpenChange(false);
                }}
              >
                <MessageCircle /> Send via WhatsApp
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
