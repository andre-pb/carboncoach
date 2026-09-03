import Image from "next/image";
import { CheckIcon } from "lucide-react";

import { about } from "@/lib/site";
import { asset } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
        {/* On phones/tablets the heading sits above the photo; on large
            screens it moves into the text column (see below). */}
        <SectionHeading title={about.heading} className="-mb-2 lg:hidden" />

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden
            className="absolute -top-4 -left-4 h-full w-full rounded-2xl bg-green-light/40"
          />
          <div
            aria-hidden
            className="absolute -right-4 -bottom-4 h-full w-full rounded-2xl bg-amber/30"
          />
          <Image
            src={asset("/images/leon-headshot.jpg")}
            alt="Leon, The Carbon Coach"
            width={425}
            height={567}
            className="relative aspect-[3/4] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div>
          <SectionHeading title={about.heading} className="hidden lg:flex" />
          <p className="mt-0 text-2xl lg:mt-8 font-medium leading-snug text-teal sm:text-3xl">
            {about.lead}
          </p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {about.credentials.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-lg border bg-background px-4 py-3 text-sm font-medium"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <CheckIcon className="size-3" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
