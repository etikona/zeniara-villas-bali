import Image from "next/image";
import bedroomSuit from "../images/primary-suite-ensuite.jpg";
import kitchenPendants from "../images/kitchen-pendant-trio.jpg";
import bathroom from "../images/bathroom-freestanding-tub.jpg";
const rows = [
  {
    src: bedroomSuit,
    tag: "The Suite",
    title: "A floating oak platform, and nothing else fighting for attention.",
    copy: "Beds are set low on solid oak, headboards doubling as stone-topped consoles. Floor-to-ceiling glass folds back completely, so the palm canopy outside becomes part of the room.",
  },
  {
    src: kitchenPendants,
    tag: "The Kitchen",
    title: "Three hand-woven pendants over a single stone island.",
    copy: "Full-height teak cabinetry runs floor to ceiling on either side, leaving the island as the only working surface — built for a couple cooking together, not a catering crew.",
    reverse: true,
  },
  {
    src: bathroom,
    tag: "The Bath",
    title: "A hand-carved stone tub, lit like a gallery piece.",
    copy: "Rain shower, open stone basin, and a round mirror deep enough to reflect the room behind you. Nothing in the bath competes with the materials themselves.",
  },
];

export function Showcase() {
  return (
    <section className="bg-zen-cream py-28 lg:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:gap-32 lg:px-10">
        {rows.map((row) => (
          <div
            key={row.tag}
            className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              row.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={row.src}
                alt={row.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zen-terracotta">
                {row.tag}
              </p>
              <h3 className="mt-4 font-display text-2xl font-normal leading-tight text-zen-ink sm:text-3xl">
                {row.title}
              </h3>
              <p className="mt-5 font-body text-base leading-relaxed text-zen-ink/70">
                {row.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
