import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const supportingFacts = [
  { value: "01", label: "Development — a limited, single collection" },
  { value: "Nura", label: "Backed by Nura Development, Bali" },
];

export function Invest() {
  return (
    <section
      id="invest"
      className="relative overflow-hidden bg-zen-charcoal py-28 text-zen-cream lg:py-36"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-zen-terracotta/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-zen-terracotta">
            For Investors
          </p>
          <h2 className="mt-6 font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
            Uluwatu&apos;s numbers, before the view.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-zen-cream/70 sm:text-lg">
            Zeniara sits at the intersection of strong brand identity and
            competitive entry pricing, in the fastest-growing region of
            Bali&apos;s hospitality market. Returns depend on villa layout and
            occupancy — the whitepaper breaks both down in full.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-zen-cream/15 pt-12 lg:grid-cols-[1.1fr_1px_1fr] lg:items-start">
          <div>
            <p className="font-mono text-6xl text-zen-terracotta sm:text-7xl">
              9–22%
            </p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-zen-cream/60">
              Projected annual return, by layout &amp; occupancy
            </p>
            <Button
              asChild
              variant="outline"
              className="group mt-8 rounded-none border-zen-cream/30 bg-transparent px-6 py-5 text-[12px] uppercase tracking-widest text-zen-cream hover:bg-zen-cream/10"
            >
              <a href="#whitepaper" className="flex items-center gap-2">
                See the full breakdown
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

          <div className="hidden bg-zen-cream/15 lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1">
            {supportingFacts.map((f) => (
              <div key={f.label}>
                <p className="font-mono text-3xl text-zen-cream sm:text-4xl">
                  {f.value}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-zen-cream/60">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
