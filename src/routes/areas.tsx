import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SERVICE_AREAS, SERVED_POSTCODES } from "@/lib/orchids";
import { PostcodeChecker } from "@/components/postcode-checker";

const TITLE = "Areas We Cover | Orchid Dry Cleaners, W10 & W11";
const DESCRIPTION =
  "Free laundry and dry cleaning collection across Ladbroke Grove, North Kensington, Notting Hill, Kensal Rise, Holland Park, Westbourne Park and Queen's Park.";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <PageShell
      eyebrow="Areas we cover"
      title="Collected daily across W10, W11 and beyond."
      intro="Our van starts on Ladbroke Grove every weekday morning. Pickup and delivery are free — and if you're just outside our round, message us and we'll usually still reach you."
    >
      <ul className="flex flex-wrap gap-2">
        {SERVICE_AREAS.map((area) => (
          <li
            key={area}
            className="ripple-hover rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft"
          >
            {area}
          </li>
        ))}
      </ul>
      <p className="tnum mt-6 text-sm text-muted-foreground">
        Postcodes served: {SERVED_POSTCODES.join(", ")}
      </p>
      <div className="mt-10">
        <PostcodeChecker variant="plain" />
      </div>
    </PageShell>
  );
}
