import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SERVICES } from "@/lib/orchids";

const TITLE = "Our Services | Orchid Dry Cleaners, Ladbroke Grove";
const DESCRIPTION =
  "Dry cleaning, wash & fold, ironing, curtains, wedding dresses, leather and alterations — collected and delivered across North Kensington.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Care for every fabric in your home."
      intro="A full-service boutique cleaner in W10 — everything below is collected from your door and returned within 24–48 hours."
    >
      <ul className="divide-y divide-border">
        {SERVICES.map((s) => (
          <li key={s.slug} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-6">
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-xl text-primary">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
            <p className="shrink-0 font-display text-lg text-primary">From {s.from}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
