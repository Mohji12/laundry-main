import { useCountUp, useReveal } from "@/hooks/use-reveal";

const STATS = [
  { value: 12000, suffix: "+", label: "Garments Cleaned" },
  { value: 4.9, suffix: "★", label: "Rated Locally", decimals: 1 },
  { value: 24, suffix: "hr", label: "Turnaround Available" },
  { value: 100, suffix: "%", label: "Satisfaction Guarantee" },
];

function Stat({
  value,
  suffix,
  label,
  decimals = 0,
  visible,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  visible: boolean;
  index?: number;
}) {
  const current = useCountUp(value, visible);
  return (
    <div className="flex flex-col items-center text-center">
      <p className="tnum font-display text-2xl leading-none text-primary-foreground sm:text-4xl">
        {decimals ? current.toFixed(decimals) : Math.round(current).toLocaleString("en-GB")}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-3 max-w-[14ch] text-xs leading-snug font-medium tracking-wide text-primary-foreground/70 sm:text-sm">
        {label}
      </p>
    </div>
  );
}


export function TrustBar() {
  const { ref, visible } = useReveal<HTMLElement>(0.3);
  return (
    <section ref={ref} className="surface-navy border-y border-primary-foreground/10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-start justify-items-center gap-6 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <Stat key={s.label} {...s} visible={visible} index={i} />
        ))}
      </div>
    </section>
  );
}
