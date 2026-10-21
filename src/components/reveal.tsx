import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  pop = false,
  from,
}: {
  children: ReactNode;
  delay?: number;
  className?: string | undefined;
  pop?: boolean;
  from?: "left" | "right" | undefined;
}) {
  const { ref, visible } = useReveal();
  const variant = from ? `slide-side-${from}` : pop ? "pop-in" : "reveal";
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
      className={cn(variant, className)}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-2xl leading-tight sm:text-3xl md:text-4xl",
          tone === "dark" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
