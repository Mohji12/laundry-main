import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ADDRESS_LINES, OPENING_HOURS, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/orchids";

const TITLE = "Contact Orchid Dry Cleaners | Ladbroke Grove W10 5NE";
const DESCRIPTION =
  "Call, WhatsApp or visit Orchid Dry Cleaners & Launderette on Ladbroke Grove, North Kensington, London W10 5NE.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Come in, or just message us."
      intro="The fastest way to book is WhatsApp — a real person at the shop replies, usually within minutes during opening hours."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl text-primary">Where to find us</h2>
          <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
            {ADDRESS_LINES.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <p className="mt-4 text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-primary">Opening hours</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {OPENING_HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-primary">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
        <iframe
          title="Map showing Orchid Dry Cleaners on Ladbroke Grove, London W10 5NE"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2255%2C51.5185%2C-0.1985%2C51.5335&layer=mapnik&marker=51.5265%2C-0.2120"
          className="h-80 w-full grayscale-[0.35] sepia-[0.15]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </PageShell>
  );
}
