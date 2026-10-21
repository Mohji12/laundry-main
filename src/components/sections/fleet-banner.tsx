import { Reveal, SectionHeading } from "@/components/reveal";
import { PostcodeChecker } from "@/components/postcode-checker";
import { OrchidMark } from "@/components/brand";
import { SERVICE_AREAS } from "@/lib/orchids";
import van from "@/assets/van.jpg";

/** Full-width fleet/logistics trust banner + service area and postcode checker. */
export function FleetBanner() {
  return (
    <section id="areas" className="bg-background">
      <div className="relative isolate overflow-hidden">
        <img
          src={van}
          alt="The navy Orchid Dry Cleaners van parked on a colourful Ladbroke Grove street"
          width={1920}
          height={912}
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(80deg, oklch(0.2711 0.0523 237 / 0.96) 0%, oklch(0.3347 0.0657 237 / 0.88) 45%, oklch(0.3347 0.0657 237 / 0.25) 100%)",
          }}
        />
        <OrchidMark
          spin
          className="pointer-events-none absolute -right-14 -bottom-20 -z-10 h-72 w-72 text-primary-foreground/5"
        />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal className="max-w-xl">
            <SectionHeading
              tone="dark"
              eyebrow="Areas we cover"
              title="Collected Daily Across W10, W11 and Beyond."
              subtitle="Our round starts on Ladbroke Grove every weekday morning. Pickup and delivery are always free — and if you're just outside, message us and we'll usually still reach you."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="ripple-hover cursor-default rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:border-accent"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <PostcodeChecker variant="plain" />
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <iframe
              title="Map of the Orchid Dry Cleaners service area around Ladbroke Grove, London W10 5NE"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2385%2C51.5135%2C-0.1855%2C51.5395&layer=mapnik&marker=51.5265%2C-0.2120"
              className="h-[240px] w-full saturate-[0.65] sm:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
