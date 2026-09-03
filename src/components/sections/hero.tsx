import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";

import { hero, siteConfig } from "@/lib/site";
import { asset } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      {/* Full-bleed photo of Leon delivering training. He stands in the left
          third of the frame, so the copy sits on the right and the overlay
          darkens from right to left to keep the text readable. */}
      <Image
        src={asset("/images/leon-presentation.jpg")}
        alt="Leon delivering climate training to a room of participants"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[22%_35%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/75 via-navy/75 to-navy-deep/95 lg:from-navy-deep/40 lg:via-navy/65 lg:via-45% lg:to-navy-deep/95"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-deep to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-deep/60 to-transparent"
      />

      <div className="container-x relative flex min-h-[600px] items-center py-24 sm:min-h-[680px] lg:min-h-[740px] lg:justify-end lg:py-32">
        <div className="max-w-xl lg:max-w-[560px]">
          <p className="mb-5 flex items-start gap-3 text-sm font-medium tracking-wide text-amber">
            <span aria-hidden className="mt-2.5 h-px w-8 shrink-0 bg-amber" />
            {siteConfig.strapline}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-balance drop-shadow-sm sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl">
            {hero.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <a href={hero.primaryCta.href} target="_blank" rel="noreferrer">
                <CalendarIcon />
                {hero.primaryCta.label}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
