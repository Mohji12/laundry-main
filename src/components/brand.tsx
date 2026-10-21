import logoSrc from "@/assets/orchid-logo.png";
import { cn } from "@/lib/utils";

/**
 * The Orchid mark: a stylized three-petal orchid on a circular badge.
 * Used as a decorative motif (watermarks / accents), not the primary logo.
 */
export function OrchidMark({
  className,
  animate = false,
  spin = false,
  tone = "mono",
}: {
  className?: string;
  animate?: boolean;
  spin?: boolean;
  /** "brand" paints petals sky-blue (logo use); "mono" inherits the current color (watermarks). */
  tone?: "brand" | "mono";
}) {
  const petalColor = tone === "brand" ? "text-accent" : undefined;
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={cn("h-full w-full", className)}>
      <circle cx="50" cy="50" r="48" className="fill-current" />
      <g
        className={cn("fill-current", petalColor, spin && "spin-slow", animate && "ring-spin-in")}
        style={{ transformOrigin: "50px 50px" }}
        data-visible={animate ? true : undefined}
      >
        <path d="M50 28c6 8 8 16 8 22 0 6-3.5 11-8 14-4.5-3-8-8-8-14 0-6 2-14 8-22z" />
        <path
          opacity="0.92"
          d="M32 48c10-2 18 0 24 4 5 3.5 8 9 8 14-7-1-14-1-20-5-6-4-10-9-12-13z"
        />
        <path
          opacity="0.92"
          d="M68 48c-10-2-18 0-24 4-5 3.5-8 9-8 14 7-1 14-1 20-5 6-4 10-9 12-13z"
        />
        <circle cx="50" cy="54" r="5.5" fill="white" opacity="0.92" />
        <circle cx="50" cy="54" r="2.5" opacity="0.95" />
      </g>
    </svg>
  );
}

/** Full brand lockup from the official Orchid logo artwork. */
export function OrchidLogo({
  className,
  compact = false,
  fit,
}: {
  className?: string;
  /** Kept for call-site compatibility; logo artwork is fixed. */
  tone?: "navy" | "light";
  compact?: boolean;
  /** Fill a fixed-height bar; scale the padded artwork without growing the bar. */
  fit?: "navbar";
}) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full min-w-0 items-center",
        fit === "navbar" && "h-full",
        className,
      )}
    >
      <img
        src={logoSrc}
        alt="Orchid Dry Cleaners & Launderette"
        className={cn(
          "w-auto max-w-full object-contain object-left transition-all duration-200",
          fit === "navbar"
            ? "h-[200%] max-h-none w-auto max-w-[12.5rem] sm:max-w-[14rem] md:max-w-[15.5rem]"
            : cn(
                "h-auto",
                compact
                  ? "max-h-12 max-w-[9.5rem] sm:max-h-14 sm:max-w-[12rem] md:max-h-16 md:max-w-[15rem]"
                  : "max-h-14 max-w-[11rem] sm:max-h-16 sm:max-w-[14rem] md:max-h-20 md:max-w-[18rem] lg:max-h-24 lg:max-w-[22rem]",
              ),
        )}
      />
    </span>
  );
}

const BUBBLES = [
  { left: "8%", size: 56, delay: 0, duration: 26, opacity: 0.05 },
  { left: "22%", size: 26, delay: 5, duration: 20, opacity: 0.07 },
  { left: "38%", size: 74, delay: 9, duration: 32, opacity: 0.035 },
  { left: "54%", size: 38, delay: 2, duration: 23, opacity: 0.06 },
  { left: "68%", size: 20, delay: 13, duration: 18, opacity: 0.08 },
  { left: "82%", size: 64, delay: 7, duration: 30, opacity: 0.04 },
  { left: "92%", size: 32, delay: 16, duration: 22, opacity: 0.06 },
];

/** Ambient soap-bubble particles drifting upward. Purely decorative. */
export function BubbleField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {BUBBLES.map((b) => (
        <span
          key={b.left}
          className="bubble absolute bottom-[-20%] bg-current blur-[1px]"
          style={{
            left: b.left,
            height: b.size,
            width: b.size,
            opacity: b.opacity,
            animationDelay: `-${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
