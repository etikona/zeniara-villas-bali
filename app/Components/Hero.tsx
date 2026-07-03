"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imgWrapRef.current,
        { scale: 1.18, opacity: 0 },
        { scale: 1.06, opacity: 1, duration: 1.8, ease: "power2.out" },
      )
        .fromTo(
          eyebrowRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=1.1",
        )
        .fromTo(
          [line1Ref.current, line2Ref.current],
          { y: "110%" },
          { y: "0%", duration: 1, stagger: 0.12 },
          "-=0.4",
        )
        .fromTo(
          copyRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3",
        )
        .add(() => {
          // ambient drift once entrance settles
          gsap.to(imgWrapRef.current, { scale: 1, duration: 14, ease: "none" });

          // looping scroll cue
          const cue = scrollRef.current?.querySelector("[data-cue]");
          if (cue) {
            gsap.fromTo(
              cue,
              { y: 0, opacity: 1 },
              {
                y: 16,
                opacity: 0,
                duration: 1.4,
                repeat: -1,
                ease: "power1.in",
              },
            );
          }
        });

      // scroll-driven parallax on the image
      gsap.to(imgWrapRef.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden"
    >
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/pool-twilight-bedroom.jpg"
          alt="Zeniara Villas pool at twilight, opening onto a suite with terracotta artwork"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zen-ink/90 via-zen-ink/30 to-zen-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <p
          ref={eyebrowRef}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zen-clay"
        >
          <span className="h-px w-8 bg-zen-clay/60" />
          Uluwatu, Bali — 8.8290° S, 115.0888° E
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-normal leading-[1.08] text-zen-cream sm:text-5xl lg:text-6xl">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block">
              Designed to be photographed.
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="block italic text-zen-terracotta">
              Built to perform.
            </span>
          </span>
        </h1>

        <p
          ref={copyRef}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-zen-cream/80 sm:text-lg"
        >
          A limited collection of villas pairing Mediterranean warmth with
          Japanese restraint, on Bali&apos;s fastest-growing coastline.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            className="group rounded-none bg-zen-terracotta px-8 py-6 text-[13px] uppercase tracking-widest text-zen-cream hover:bg-zen-terracotta/90"
          >
            <a href="#whitepaper" className="flex items-center gap-2">
              Download the Whitepaper
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-zen-cream/50 bg-transparent px-8 py-6 text-[13px] uppercase tracking-widest text-zen-cream hover:bg-zen-cream/10 hover:text-zen-cream"
          >
            <a href="#contact">Enquire About a Villa</a>
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-10 right-6 z-10 hidden opacity-0 lg:flex lg:items-center lg:gap-3 lg:px-10"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-zen-cream/60">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-zen-cream/20">
          <span
            data-cue
            className="absolute inset-x-0 top-0 h-4 w-px bg-zen-terracotta"
          />
        </span>
      </div>
    </section>
  );
}
