import { Reveal, SectionHeading } from "@/components/reveal";
import { useReveal } from "@/hooks/use-reveal";
import pressing from "@/assets/pressing.jpg";
import garmentBag from "@/assets/garment-bag.jpg";
import shirts from "@/assets/shirts.jpg";

function MaskedImage({
  src,
  alt,
  delay = 0,
  className,
}: {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal(0.2);
  return (
    <div ref={ref} className={`overflow-hidden rounded-3xl shadow-lift ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        width={1200}
        height={912}
        loading="lazy"
        className="h-full w-full object-cover transition-all duration-1000 ease-out"
        style={{
          clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transform: visible ? "scale(1)" : "scale(1.06)",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="surface-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our process"
            title="Craftsmanship you can see in the collar."
            subtitle="Hand-finished pressing, garment-by-garment inspection, and our reusable navy garment bag that keeps everything crisp on the walk from van to wardrobe."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <MaskedImage src={pressing} alt="Hand-pressing a white shirt collar with a steam iron" />
          <MaskedImage
            src={shirts}
            alt="Freshly pressed white shirts hanging in a row"
            delay={120}
          />
          <MaskedImage
            src={garmentBag}
            alt="The reusable navy Orchid garment bag with bow-tie handles"
            delay={240}
          />
        </div>
      </div>
    </section>
  );
}
