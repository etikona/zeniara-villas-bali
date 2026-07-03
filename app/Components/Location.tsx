import Image from "next/image";

export function Location() {
  return (
    <section id="location" className="relative flex min-h-[600px] items-center">
      <Image
        src="/images/pool-loungers-twilight.jpg"
        alt="Zeniara Villas pool deck and loungers at dusk"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-zen-ink/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-zen-clay">
            Location
          </p>
          <h2 className="mt-6 font-display text-3xl font-normal leading-tight text-zen-cream sm:text-4xl">
            Uluwatu, without the noise.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-zen-cream/80 sm:text-lg">
            Set back from the cliff-top rush, close enough to the surf breaks
            and beach clubs to matter, far enough to stay quiet after dark.
            It&apos;s the address driving Bali&apos;s hospitality growth right
            now — Zeniara is built to hold its value as that growth continues.
          </p>
        </div>
      </div>
    </section>
  );
}
