import { Reveal, SectionHeading } from "@/components/reveal";
import heroDoorstep from "@/assets/hero-doorstep.jpg";
import pressing from "@/assets/pressing.jpg";
import tracking from "@/assets/tracking.jpg";

const BLOCKS = [
  {
    image: heroDoorstep,
    alt: "Driver handing a navy Orchid garment bag to a customer on her doorstep",
    eyebrow: "Free collection",
    title: "Collected From Your Doorstep",
    copy: "We collect and deliver free of charge across North Kensington, Notting Hill, Kensal Rise and Holland Park. Choose a morning, afternoon or evening window and leave the rest to us — no waiting in, no carrying bags up the hill.",
    points: ["Free pickup & delivery", "Same-day collection slots", "Contact-free if you prefer"],
  },
  {
    image: pressing,
    alt: "Hands steam-pressing a crisp white shirt collar in the Orchid workshop",
    eyebrow: "Craft",
    title: "Care, Not Just Cleaning",
    copy: "Every garment is inspected, treated and hand-finished by our team on Ladbroke Grove. We use gentle, eco-conscious detergents and garment-specific solvents, then press by hand so collars, cuffs and pleats hold their shape.",
    points: ["Hand-finished pressing", "Eco-conscious detergents", "Free re-clean if it isn't right"],
  },
  {
    image: tracking,
    alt: "Customer checking a navy and blue live delivery tracking screen on a phone",
    eyebrow: "Transparency",
    title: "Real-Time Tracking, Real Peace of Mind",
    copy: "See exactly when your driver is on the way and get instant updates in the same WhatsApp thread you booked in — from collection to quality check to delivery. One conversation, start to finish.",
    points: ["Live driver tracking", "WhatsApp status updates", "Price confirmed before cleaning"],
  },
];

export function WhyOrchid() {
  return (
    <section id="why" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Orchid"
            title="A local launderette that works like a concierge."
            subtitle="Three things our neighbours in W10 tell us make the difference."
          />
        </Reveal>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {BLOCKS.map((block, i) => {
            const flipped = i % 2 === 1;
            return (
              <div
                key={block.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  from={flipped ? "right" : "left"}
                  className={flipped ? "lg:order-2" : undefined}
                >
                  <div className="overflow-hidden rounded-3xl shadow-lift">
                    <img
                      src={block.image}
                      alt={block.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>

                <Reveal delay={150} className={flipped ? "lg:order-1" : undefined}>
                  <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-primary sm:text-3xl">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {block.copy}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {block.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-medium">
                        <span className="surface-sky h-2.5 w-2.5 shrink-0 rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
