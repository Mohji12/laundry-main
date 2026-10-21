import { Clock, Leaf, MapPin, Truck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const FEATURES = [
  { icon: Clock, label: "Same-Day Pickup" },
  { icon: Truck, label: "Next-Day Delivery" },
  { icon: MapPin, label: "Real-Time Tracking" },
  { icon: Leaf, label: "Eco-Friendly Cleaning" },
];

/**
 * Reusable four-up feature strip with thin vertical dividers.
 * Icons draw in, staggered, as the strip scrolls into view.
 */
export function FeatureStrip({
  tone = "navy",
  className,
}: {
  tone?: "navy" | "light";
  className?: string;
}) {
  const { ref, visible } = useReveal(0.3);
  return (
    <section
      ref={ref}
      aria-label="Service highlights"
      className={cn(
        tone === "navy" ? "surface-navy" : "border-y border-border bg-background",
        className,
      )}
    >
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-9 sm:px-6 lg:grid-cols-4 lg:px-8">
        {FEATURES.map((f, i) => (
          <li
            key={f.label}
            className={cn(
              "flex items-center justify-center gap-3 px-2 text-center lg:border-l lg:first:border-l-0",
              tone === "navy" ? "lg:border-primary-foreground/15" : "lg:border-border",
              i === 2 && "border-l-0 lg:border-l",
            )}
          >
            <f.icon
              data-visible={visible}
              className={cn(
                "draw-stroke h-6 w-6 shrink-0",
                tone === "navy" ? "text-accent" : "text-accent",
              )}
              style={{ animationDelay: `${i * 80}ms` }}
              strokeWidth={1.75}
            />
            <span
              className={cn(
                "font-display text-sm font-bold sm:text-base",
                tone === "navy" ? "text-primary-foreground" : "text-primary",
              )}
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
