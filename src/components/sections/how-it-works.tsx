import { Reveal, SectionHeading } from "@/components/reveal";
import { useReveal } from "@/hooks/use-reveal";

const STEPS = [
  {
    title: "Message Us",
    copy: "Send your quote via WhatsApp in under a minute — no accounts, no app downloads.",
  },
  {
    title: "We Confirm & Collect",
    copy: "A driver collects from your door at your chosen time, in a garment bag we provide.",
  },
  {
    title: "Expert Care",
    copy: "Cleaned, pressed and quality-checked by hand at our Ladbroke Grove workshop.",
  },
  {
    title: "Delivered Fresh",
    copy: "Back at your door within 24–48hrs, wrapped and ready to wear.",
  },
];

function StepGlyph({ index }: { index: number }) {
  const glyphs = [
    "M18 22h28a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H32l-10 8v-8h-4a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6Z",
    "M8 44h10m0 0a6 6 0 0 0 12 0h14a6 6 0 0 0 12 0h2V30l-8-10H36V44H30M8 20h28v24",
    "M32 12c8 8 12 14 12 22a12 12 0 0 1-24 0c0-8 4-14 12-22Zm0 44v8",
    "M14 26h36l-4 28H18L14 26Zm8 0v-6a10 10 0 0 1 20 0v6M26 38h12",
  ];
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
      <path
        d={glyphs[index]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HowItWorks() {
  const { ref, visible } = useReveal(0.25);

  return (
    <section id="how" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Four unhurried steps, and laundry day is gone."
          />
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <svg
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute top-7 right-0 left-0 hidden h-0.5 w-full lg:block"
          >
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="currentColor"
              className="text-accent/50"
              strokeWidth="2"
              strokeDasharray="1000"
              style={{
                strokeDashoffset: visible ? 0 : 1000,
                transition: "stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          </svg>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <li className="relative list-none">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-accent/40 bg-background text-primary">
                    <StepGlyph index={i} />
                  </span>
                  <p className="mt-5 text-xs tracking-[0.2em] text-accent uppercase">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
