import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

const TITLE = "About Orchid | Neighbourhood Dry Cleaners in W10";
const DESCRIPTION =
  "Orchid is a family-run dry cleaner and launderette on Ladbroke Grove, caring for North Kensington wardrobes with hand-finished craft.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="A neighbourhood shop with an atelier's standards."
      intro="We're a small team on Ladbroke Grove who believe garment care is a craft, not a conveyor belt."
    >
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Orchid began with a simple frustration: laundry services in London either treat clothes
          like cargo, or make you download an app to speak to nobody at all. We wanted the opposite —
          the pressing standards of a Savile Row tailor, with the warmth of a shop that knows your
          name.
        </p>
        <p>
          Every item is inspected by hand before it's cleaned, treated according to its fabric, and
          finished by a presser rather than a machine. Delicates, silks, tailoring and keepsake gowns
          are handled by the specialists on our bench, never outsourced blind.
        </p>
        <p>
          We collect and deliver ourselves across North Kensington, Notting Hill, Kensal Rise, Holland
          Park, Westbourne Park and Queen's Park — so if something isn't right, there's a real person
          on the other end of the message to put it right.
        </p>
      </div>
    </PageShell>
  );
}
