import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { QuoteDialog } from "./quote-dialog";

type QuoteContextValue = {
  open: (presetService?: string) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<string | undefined>(undefined);

  const open = useCallback((presetService?: string) => {
    setPreset(presetService);
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteDialog open={isOpen} onOpenChange={setIsOpen} presetService={preset} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}
