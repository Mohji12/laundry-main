import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

/** Circular sky-blue icon badge — the reference banner's signature icon style. */
export function IconBadge({
  icon: Icon,
  size = "md",
  tone = "sky",
  className,
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  tone?: "sky" | "light" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-full transition-transform duration-500",
        size === "sm" && "h-11 w-11",
        size === "md" && "h-12 w-12 sm:h-14 sm:w-14",
        size === "lg" && "h-14 w-14 sm:h-20 sm:w-20",
        tone === "sky" && "surface-sky text-primary-foreground shadow-soft",
        tone === "light" && "bg-secondary text-accent",
        tone === "outline" && "border border-primary-foreground/25 text-primary-foreground",
        className,
      )}
    >
      <Icon className={cn(size === "lg" ? "h-6 w-6 sm:h-8 sm:w-8" : size === "md" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-5 w-5")} />
    </span>
  );
}

export type IconItem = { icon: LucideIcon; label: string; description?: string };

/**
 * Icon row: circular blue badges with a bold label underneath, popping in
 * one after another. Matches the reference banner's icon strip.
 */
export function IconRow({
  items,
  size = "md",
  tone = "sky",
  className,
}: {
  items: IconItem[];
  size?: "sm" | "md" | "lg";
  tone?: "sky" | "light" | "outline";
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLUListElement>(0.25);
  return (
    <ul ref={ref} className={cn("grid grid-cols-3 gap-3 text-center sm:gap-8 md:gap-10", className)}>
      {items.map((item, i) => (
        <li
          key={item.label}
          data-visible={visible}
          className="pop-in group flex min-w-0 flex-col items-center gap-2 sm:gap-3"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <IconBadge
            icon={item.icon}
            size={size}
            tone={tone}
            className="group-hover:-translate-y-1 group-hover:scale-105"
          />
          <span
            className={cn(
              "font-display text-[0.7rem] leading-snug font-bold hyphens-auto sm:text-sm md:text-base",
              tone === "outline" ? "text-primary-foreground" : "text-primary",
            )}
          >
            {item.label}
          </span>
          {item.description && (
            <span
              className={cn(
                "hidden text-xs leading-snug sm:block sm:text-sm",
                tone === "outline" ? "text-primary-foreground/70" : "text-muted-foreground",
              )}
            >
              {item.description}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
