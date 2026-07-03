"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bedroomPendant from "../images/bedroom-headboard-detail.jpg";
import dining from "../images/dining-room-staircase.jpg";
import courtyard from "../images/courtyard-facade-entry.jpg";
import kitchen from "../images/kitchen-pendant-trio.jpg";
import bathroom from "../images/bathroom-freestanding-tub.jpg";
import suite from "../images/primary-suite-ensuite.jpg";
import poolLounger from "../images/pool-loungers-sunset.jpg";
import bedroom1 from "../images/bedroom-lounge-nook.jpg";
import bedroom2 from "../images/pool-courtyard-dusk.jpg";

gsap.registerPlugin(ScrollTrigger);

const shots = [
  { src: bedroomPendant, caption: "Suite 01 — rattan pendants" },
  { src: dining, caption: "Dining hall — under the stair" },
  { src: courtyard, caption: "Courtyard — evening light" },
  { src: kitchen, caption: "Kitchen — teak & rattan" },
  { src: bathroom, caption: "Bath — stone tub" },
  { src: suite, caption: "Suite 02 — palm view" },
  { src: poolLounger, caption: "Pool deck — dusk" },
  { src: bedroom1, caption: "Suite 03 — reading corner" },
  { src: bedroom2, caption: "Suite 01 — headboard detail" },
];

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cleanupFns: (() => void)[] = [];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

      gsap.fromTo(
        items,
        { y: 60, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.08, grid: "auto", from: "start" },
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        },
      );

      items.forEach((el) => {
        const img = el.querySelector("img");
        if (!img) return;

        const quickX = gsap.quickTo(img, "rotateY", {
          duration: 0.6,
          ease: "power3.out",
        });
        const quickY = gsap.quickTo(img, "rotateX", {
          duration: 0.6,
          ease: "power3.out",
        });

        const handleMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          quickX(px * 10);
          quickY(-py * 10);
        };
        const handleLeave = () => {
          quickX(0);
          quickY(0);
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
        cleanupFns.push(() => {
          el.removeEventListener("mousemove", handleMove);
          el.removeEventListener("mouseleave", handleLeave);
        });
      });
    }, sectionRef);

    return () => {
      cleanupFns.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="bg-zen-sand py-28 lg:py-36"
      style={{ perspective: 1200 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={headingRef}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-zen-terracotta">
              @zeniaravillas
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal text-zen-ink sm:text-4xl">
              Every angle, considered.
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm text-zen-ink/60">
            Built for the feed as much as the floor plan — each villa is framed
            to work as well in a square crop as it does in person.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid grid-cols-2 gap-1 sm:grid-cols-3"
        >
          {shots.map((shot, i) => (
            <div
              key={`${shot.src}-${i}`}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="group relative aspect-square overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zen-ink/0 transition-colors duration-500 group-hover:bg-zen-ink/40" />
              <p className="absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-wide text-zen-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {shot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
