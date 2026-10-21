import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

const TITLE = "Journal | Garment Care Notes from Orchid, W10";
const DESCRIPTION =
  "Fabric care guides, stain first aid and seasonal wardrobe notes from the Orchid team in Ladbroke Grove.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    title: "How to store a wool coat for summer",
    summary: "Three steps that prevent moths, creasing and that stale wardrobe smell.",
  },
  {
    title: "Red wine on silk: what to do in the first 60 seconds",
    summary: "The rinse that helps, and the household remedy that quietly ruins the fibre.",
  },
  {
    title: "Why hand pressing beats machine finishing",
    summary: "What actually happens to a collar under a press, and why we still do it by hand.",
  },
];

function BlogPage() {
  return (
    <PageShell
      eyebrow="Journal"
      title="Garment care notes."
      intro="Short, useful notes from our bench in Ladbroke Grove. Full articles coming soon."
    >
      <ul className="divide-y divide-border">
        {POSTS.map((p) => (
          <li key={p.title} className="py-6">
            <h2 className="font-display text-xl text-primary">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
