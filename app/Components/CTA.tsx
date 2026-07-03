"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your form endpoint / email service
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-zen-charcoal py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div id="whitepaper">
          <p className="font-mono text-xs uppercase tracking-widest text-zen-terracotta">
            Get the Details
          </p>
          <h2 className="mt-6 font-display text-3xl font-normal leading-tight text-zen-cream sm:text-4xl">
            Read the whitepaper, or just ask us directly.
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-zen-cream/70">
            The whitepaper covers layouts, pricing, projected returns, and the
            development timeline in full. Prefer to talk first? Send a message
            and the team at Nura Development will get back to you.
          </p>

          <Button
            asChild
            className="mt-8 rounded-none bg-zen-terracotta px-8 py-6 text-[13px] uppercase tracking-widest text-zen-cream hover:bg-zen-terracotta/90"
          >
            {/* Point this at your hosted PDF */}
            <a href="/whitepaper.pdf" download>
              Download the Whitepaper
            </a>
          </Button>

          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-zen-cream/40">
            Nura Development — Bali
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center border border-zen-cream/15 px-8 text-center">
              <p className="font-display text-2xl text-zen-cream">
                Message sent.
              </p>
              <p className="mt-3 font-body text-sm text-zen-cream/60">
                Someone from the team will reply within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest text-zen-cream/60"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    className="mt-2 rounded-none border-zen-cream/20 bg-transparent text-zen-cream placeholder:text-zen-cream/30"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-zen-cream/60"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 rounded-none border-zen-cream/20 bg-transparent text-zen-cream placeholder:text-zen-cream/30"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-zen-cream/60"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-2 rounded-none border-zen-cream/20 bg-transparent text-zen-cream placeholder:text-zen-cream/30"
                  placeholder="Tell us what you're looking for — a stay, an investment, or both."
                />
              </div>

              <Button
                type="submit"
                className="w-fit rounded-none bg-zen-terracotta px-8 py-6 text-[13px] uppercase tracking-widest text-zen-cream hover:bg-zen-terracotta/90"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
