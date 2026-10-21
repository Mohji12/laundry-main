import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { TESTIMONIALS } from "@/lib/orchids";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="testimonials" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Rated 4.9/5 by over 500 North Kensington locals."
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            className="relative mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
          >
            <div className="relative min-h-[20rem] sm:min-h-[15rem]">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={t.name}
                  aria-hidden={i !== index}
                  className={cn(
                    "rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-700 ease-out sm:absolute sm:inset-0 sm:p-8",
                    i === index
                      ? "relative translate-y-0 opacity-100"
                      : "pointer-events-none absolute inset-0 translate-y-4 opacity-0",
                  )}
                >
                  <span className="flex gap-1" aria-label="Five stars">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </span>
                  <blockquote className="mt-4 font-display text-lg leading-snug text-primary sm:mt-5 sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground sm:mt-5">
                    {t.name} — {t.area}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show review from ${t.name}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-accent" : "w-2 bg-border hover:bg-primary/30",
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
